import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// 如果编辑器提示 path 模块找不到，安装 @types/node 即可
// pnpm add @types/node -D
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src') // 设置 `@` 指向 `src` 目录
    }
  },
  base: './', // 打包路径
  server: {
    port: 8088, // 服务启动端口号（Vite 3.x 默认 5173）
    open: true, // 服务启动后自动打开浏览器
    cors: true // 允许跨域
  }
})
