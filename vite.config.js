import { defineConfig } from "vite";
import autoprefixer from 'autoprefixer';

export default defineConfig({
    css: {
        postcss: {
            plugins: [
                autoprefixer
            ],
        },
    },
    base: '/frontend-mentor-easybank-landing-page/',
    root: 'src',
});
