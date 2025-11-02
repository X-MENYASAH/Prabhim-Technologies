# AWS Deployment Script for Next.js App

# Prerequisites:
# 1. Install AWS CLI: https://aws.amazon.com/cli/
# 2. Install Docker: https://www.docker.com/
# 3. Configure AWS credentials: aws configure

# Variables - Update these with your values
AWS_REGION="us-east-1"
ECR_REPOSITORY_NAME="prabhim-technologies-website"
ECS_CLUSTER_NAME="prabhim-cluster"
ECS_SERVICE_NAME="prabhim-service"
ECS_TASK_DEFINITION="prabhim-task"

# Build and push Docker image to ECR
echo "Building Docker image..."
docker build -t $ECR_REPOSITORY_NAME .

echo "Getting AWS account ID..."
AWS_ACCOUNT_ID=$(aws sts get-caller-identity --query Account --output text)

echo "Logging in to ECR..."
aws ecr get-login-password --region $AWS_REGION | docker login --username AWS --password-stdin $AWS_ACCOUNT_ID.dkr.ecr.$AWS_REGION.amazonaws.com

echo "Tagging image..."
docker tag $ECR_REPOSITORY_NAME:latest $AWS_ACCOUNT_ID.dkr.ecr.$AWS_REGION.amazonaws.com/$ECR_REPOSITORY_NAME:latest

echo "Pushing image to ECR..."
docker push $AWS_ACCOUNT_ID.dkr.ecr.$AWS_REGION.amazonaws.com/$ECR_REPOSITORY_NAME:latest

echo "Updating ECS service..."
aws ecs update-service --cluster $ECS_CLUSTER_NAME --service $ECS_SERVICE_NAME --force-new-deployment --region $AWS_REGION

echo "Deployment completed!"
