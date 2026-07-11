import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// base 必須跟 GitHub repo 名稱一致，網站才能在
// https://boyiad2110.github.io/lancer-data-zh-tw/ 正確載入資源
export default defineConfig({
  base: '/lancer-data-zh-tw/',
  plugins: [vue()],
})
