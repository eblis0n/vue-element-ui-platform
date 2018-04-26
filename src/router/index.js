import Vue from 'vue'
import Router from 'vue-router'
import NotFound from '@/views/NotFound'
import Layout from '@/views/layout/Layout'
import Layout2 from '@/views/layout/Layout2'
import Login from '@/views/Login'
import Home from '@/views/Home'
import Product from '@/views/export/Product'
import Test from '@/views/Test'

Vue.use(Router)

export default new Router({
  base: '',
  mode: 'history',
  routes: [
    {
      path: '',
      component: Layout,
      redirect: 'home',
      children: [{
        path: 'home',
        name: 'Home',
        component: Home
      },
      {
        path: 'test',
        name: 'Test',
        component: Test
      },
      {
        path: 'product',
        name: 'Product',
        component: Product
      }]
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '*',
      component: NotFound
    }
  ]
})
