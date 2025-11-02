# AWS Deployment Guide for Prabhim Technologies Website

## Prerequisites

1. **AWS Account**: Sign up at https://aws.amazon.com/
2. **AWS CLI**: Install from https://aws.amazon.com/cli/
3. **Docker**: Install from https://www.docker.com/
4. **Domain Name** (Optional): For custom domain

## Deployment Options

### Option 1: AWS App Runner (Recommended for beginners)

1. **Prepare your code**:
   ```bash
   # Make sure all files are committed
   git add .
   git commit -m "Prepare for AWS deployment"
   ```

2. **Push to GitHub**:
   ```bash
   git remote add origin https://github.com/yourusername/your-repo.git
   git push -u origin main
   ```

3. **Deploy with App Runner**:
   - Go to AWS Console → App Runner
   - Click "Create service"
   - Choose "Source code repository"
   - Connect your GitHub account
   - Select your repository
   - Configure:
     - Build command: `npm run build`
     - Start command: `npm start`
     - Port: `3000`
   - Click "Create & deploy"

### Option 2: AWS ECS with Docker (Advanced)

1. **Create ECR Repository**:
   ```bash
   aws ecr create-repository --repository-name prabhim-technologies-website --region us-east-1
   ```

2. **Build and Push Docker Image**:
   ```bash
   # Make script executable
   chmod +x deploy-aws.sh
   
   # Run deployment script
   ./deploy-aws.sh
   ```

3. **Create ECS Cluster**:
   - Go to AWS Console → ECS
   - Create cluster (Fargate)
   - Create task definition
   - Create service

### Option 3: AWS Amplify (Easiest)

1. **Go to AWS Amplify Console**
2. **Connect GitHub Repository**
3. **Configure Build Settings**:
   ```yaml
   version: 1
   frontend:
     phases:
       preBuild:
         commands:
           - npm install
       build:
         commands:
           - npm run build
     artifacts:
       baseDirectory: .next
       files:
         - '**/*'
   ```

## Environment Variables

1. **Copy environment file**:
   ```bash
   cp .env.example .env.local
   ```

2. **Update values in .env.local**:
   - Set your domain URL
   - Update contact information if needed
   - Add any additional configuration

## Custom Domain Setup

1. **Buy domain** (if you don't have one)
2. **Configure Route 53**:
   - Create hosted zone
   - Update nameservers with domain registrar
3. **Add SSL Certificate**:
   - Use AWS Certificate Manager
   - Request certificate for your domain

## Monitoring and Maintenance

1. **CloudWatch**: Monitor logs and metrics
2. **AWS Cost Explorer**: Track spending
3. **Backup**: Regular database backups (if applicable)

## Estimated Costs

- **App Runner**: ~$25-50/month for small traffic
- **ECS Fargate**: ~$15-30/month
- **Amplify**: ~$1-5/month + build minutes
- **Route 53**: ~$0.50/month per hosted zone
- **Certificate Manager**: Free

## Support

For issues:
1. Check AWS CloudWatch logs
2. Verify environment variables
3. Test locally with `npm run build && npm start`
4. Check AWS documentation

## Quick Commands

```bash
# Test build locally
npm run build
npm start

# Test Docker build
docker build -t prabhim-website .
docker run -p 3000:3000 prabhim-website

# Deploy to AWS
./deploy-aws.sh
```
