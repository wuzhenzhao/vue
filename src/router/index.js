import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/Home'
import Index from '@/components/Index'
import Login from '@/components/Login'
import MyElement from '@/components/MyElement'
import ElementIndex from '@/components/ElementIndex'
import WebSocketIndex from '@/components/WebSocketIndex'
Vue.use(Router)

export default new Router({
  mode: 'history', // 消除路由上面的# 号
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
      meta: {
        title: '测试Hello World'
      }
    },
    {
      path: '/home',
      name: 'Home',
      component: Home,
      meta: {
        title: '首页'
      }
    },
    {
      path: '/index',
      name: 'Index',
      component: Index,
      meta: {
        title: '后台首页'
      }
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
      meta: {
        title: '登录页'
      }
    },
    {
      path: '/myElement',
      name: 'MyElement',
      component: MyElement,
      meta: {
        title: 'element测试'
      }
    },
    {
      path: '/elementIndex',
      name: 'ElementIndex',
      component: ElementIndex,
      meta: {
        title: 'elementIndex测试'
      }
    },
    {
      path: '/webSocketIndex',
      name: 'WebSocketIndex',
      component: WebSocketIndex,
      meta: {
        title: 'webSocketIndex测试'
      }
    }
  ]
})
