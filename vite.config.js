import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
        },
    },
    build: {
        rollupOptions: {
            input: {
                main: path.resolve(__dirname, 'index.html'),
                about: path.resolve(__dirname, 'about.html'),
                services: path.resolve(__dirname, 'services.html'),
                courses: path.resolve(__dirname, 'courses.html'),
                contact: path.resolve(__dirname, 'contact.html'),
                blogs: path.resolve(__dirname, 'blogs.html'),
            },
            output: {
                entryFileNames: 'js/[name].js',
                chunkFileNames: 'js/[name]-[hash].js',
                assetFileNames: (assetInfo) => {
                    if (assetInfo.name && assetInfo.name.endsWith('.css')) {
                        return 'css/[name][extname]';
                    }
                    if (assetInfo.name && assetInfo.name.match(/\.(png|jpg|jpeg|gif|svg|ico)$/)) {
                        return 'assets/images/[name][extname]';
                    }
                    if (assetInfo.name && assetInfo.name.match(/\.(woff|woff2|eot|ttf|otf)$/)) {
                        return 'assets/fonts/[name][extname]';
                    }
                    return 'assets/[name][extname]';
                }
            }
        }
    }
})
