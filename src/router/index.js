import Vue from 'vue'
import Router from 'vue-router'
import App from '@/App'
import HelloWorld from '@/components/HelloWorld'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: App,
      children: [{
        path: '',
        component: HelloWorld
      }, {
        path: '/a',
        component: r => require.ensure([], () => r(require('@/page/a')), 'jnA')
      }, {
        path: '/b',
        component: r => require.ensure([], () => r(require('@/page/b')), 'jnb')
      }, {
        path: '/pay',
        component: r => require.ensure([], () => r(require('@/page/pay/index')), 'pay')
      }]
    }
  ]
})
