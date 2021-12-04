import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'
import About from '@/views/About.vue';
import Contact from '@/views/Contact.vue';
import Donate from '@/views/Donate.vue';
import Apply from '@/views/Apply.vue';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/about',
    name: 'about',
    component: About,
  },
  {
    path: '/contact',
    name: 'contact',
    component: Contact,
  },
  {
    path: '/donate',
    name: 'donate',
    component: Donate,
  },
  {
    path: '/apply',
    name: 'apply',
    component: Apply,
  },
  {
    path: '*',
    redirect: '/',
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
