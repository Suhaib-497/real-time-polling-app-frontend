import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'
import Components from 'unplugin-vue-components/vite'
import svgLoader from 'vite-svg-loader'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    // svgLoader(),

    vue(),

    tailwindcss(),
   
  ],

  //  server: {
  //   proxy: {
  //     '^/api/.*': {
  //       target: 'http://localhost:8000',
  //       changeOrigin: true,
  //       secure: false
  //     }
  //   }
  
  // }
})
