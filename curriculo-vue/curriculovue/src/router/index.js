import Vue from 'vue'
import Router from 'vue-router'
import Curriculo from '@/components/curriculo'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Curriculo',
      component: Curriculo
    }
  ]
})
