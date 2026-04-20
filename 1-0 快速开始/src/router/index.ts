import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../components/HomePage.vue'
import FigmaStaticPage from '../components/FigmaStaticPage.vue'
import FigmaRatePage from '../components/FigmaRatePage.vue'
import HelloWorld from '../components/HelloWorld.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage,
    },
    {
      path: '/figma-static',
      name: 'figma-static',
      component: FigmaStaticPage,
    },
    {
      path: '/figma-rate',
      name: 'figma-rate',
      component: FigmaRatePage,
    },
    {
      path: '/hello',
      name: 'hello',
      component: HelloWorld,
    },
  ],
})

export default router
