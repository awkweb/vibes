import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Home from '../views/Home.vue'
import LogIn from '../views/LogIn.vue'
import NotFoundComponent from '../views/NotFoundComponent.vue'

export default new Router({
  mode: 'history',
  routes: [
      { path: '/', name: 'home', component: Home },
      { path: '/login', name: 'login', component: LogIn },
      { path: '*', component: NotFoundComponent }
  ]
})