import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About.vue'
import Nice from './views/Nice.vue'
import Erji from './views/Erji.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path:'/Nice',
      name:'Nice',
      component:Nice,
        children:[{
          path:'/Erji',
          name:'Erji',
          component:Erji
        }]
    }
  ]
})
