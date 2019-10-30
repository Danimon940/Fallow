import Vue from 'vue'
import VueRouter from 'vue-router'
import Profile from './views/Profile'

Vue.use(VueRouter)

const router = new VueRouter({
    mode: 'history',
    //base: process.env.BASE_URL,
    routes: [
      {
        path: '',
        component: () => import('@@/dashdani/Dashboard'),
        children: [
          {
            path: '/profile',
            name: 'profile',
            component: {
              render (c) { return c('router-view') }
            },
            children: [
                {
                  path: '',
                  component: Profile,
                },
                {
                  path: 'password-change',
                  name: 'password-change',
                  component: () => import('./views/Password')
                }
            ]
          },
          {
            path: '/messages',
            name: 'message',
            component: () => import('./views/Message')
          }
        ]
      }
    ]
})

export default router;