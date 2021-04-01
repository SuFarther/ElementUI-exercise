import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/layout',
    name: 'Layout',
    component: () => import('@/views/Layout.vue')
  },
  {
    path: '/container',
    name: 'Container',
    component: () => import('@/views/Container.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('@/views/About.vue')
  },
  {
    path: '/iconlink',
    name: 'IconLink',
    component: () => import('@/views/IconLink')
  },
  {
    path: '/button',
    name: 'Button',
    component: () => import('@/views/Button')
  },
  {
    path: '/radiocheckbox',
    name: 'RadioCheckbox',
    component: () => import('@/views/RadioCheckbox')
  }

]

const router = new VueRouter({
  routes
})

export default router
