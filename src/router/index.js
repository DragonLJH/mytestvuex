import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Home from '@/components/Home';

const routes = [
  {
    path: '/homePage',
    component: Home,
    children: [{
      name: 'HomePage',
      path: '/homePage',
      meta: { title: 'HomePage', icon: 'el-icon-s-home' },
      component: () => import('@/components/HomePage/index.vue'),
    }]
  },
  {
    path: '/about',
    component: Home,
    children: [{
      name: 'About',
      path: '/about',
      meta: { title: 'About', icon: 'el-icon-s-comment' },
      component: () => import('@/components/About/index.vue')
    }]
  },
  {
    path: '/vueDrag',
    component: Home,
    children: [{
      name: 'VueDrag',
      path: '/vueDrag',
      meta: { title: 'VueDrag', icon: 'el-icon-monitor' },
      component: () => import('@/components/VueDrag/index.vue')
    }]
  },
  {
    name: 'Nodes',
    path: '/nodes',
    component: Home,
    children: [{
      name: 'ChildNode1',
      path: '/childNode1',
      meta: { title: 'ChildNode1', icon: 'el-icon-s-comment' },
      component: () => import('@/components/Nodes/ChildNode1/index.vue')
    }, {
      name: 'ChildNode2',
      path: '/childNode2',
      meta: { title: 'ChildNode2', icon: 'el-icon-s-comment' },
      component: () => import('@/components/Nodes/ChildNode2/index.vue')
    }]
  },
  {
    path: '/productPage',
    component: Home,
    children: [{
      name: 'ProductPage',
      path: '/productPage',
      meta: { title: 'ProductPage', icon: 'el-icon-truck' },
      component: () => import('@/components/ProductPage/index.vue'),
    }]
  },
  {
    path: '/shopPage',
    component: Home,
    children: [{
      name: 'ShopPage',
      path: '/shopPage',
      meta: { title: 'ShopPage', icon: 'el-icon-truck' },
      component: () => import('@/components/ShopPage/index.vue'),
    }]
  },
  {
    path: '/', redirect: "/loginRegist",
    hidden: true
  },
  {
    path: '/loginRegist',
    component: () => import('@/components/LoginRegist/index.vue'),
    hidden: true
  },
  {
    path: '*', component: () => import('../views/404.vue'), hidden: true
  }
]

const router = new VueRouter({
  routes
})

// 解决重复点击路由报错的BUG
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch((err) => err)
}

router.beforeEach((to, from, next) => {
  // if (localStorage.getItem("userName") === null) {
  //   next({ name: '/loginRegist' })
  // }
  // console.log("typeof", localStorage.getItem("userName"))
  // console.log("router---to:", to, "router---from:", from)
  next()
})

export default router
