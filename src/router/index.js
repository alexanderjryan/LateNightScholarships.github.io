import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'
import AlumniNetwork from '@/views/AlumniNetwork.vue'
import About from '@/views/About.vue';
import Contact from '@/views/Contact.vue';
import Donate from '@/views/Donate.vue';
import Apply from '@/views/Apply.vue';
import Vote from '@/views/Vote.vue';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/alumniNetwork',
    name: 'alumni-network',
    component: AlumniNetwork,
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
    path: '/vote',
    name: 'vote',
    component: Vote,
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
