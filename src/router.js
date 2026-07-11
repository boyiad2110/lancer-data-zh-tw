import { createRouter, createWebHashHistory } from 'vue-router'
import HomePage from './pages/HomePage.vue'
import FrameListPage from './pages/FrameListPage.vue'
import FrameDetailPage from './pages/FrameDetailPage.vue'

// 使用 hash 模式（網址會有 #），這樣放在 GitHub Pages 上
// 重新整理或直接貼連結給朋友都不會出現 404
export const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: '/', component: HomePage },
    { path: '/frames', component: FrameListPage },
    { path: '/frames/:id', component: FrameDetailPage },
  ],
  scrollBehavior() {
    return { top: 0 }
  },
})
