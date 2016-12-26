import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Home from '../views/Home.vue'
import LogIn from '../views/LogIn.vue'
import SignUp from '../views/SignUp.vue'
import NotFoundComponent from '../views/NotFoundComponent.vue'

export default new Router({
  mode: 'history',
  routes: [
      { path: '/', name: 'home', component: Home },
      { path: '/login/', name: 'login', component: LogIn },
      { path: '/signup/', name: 'signup', component: SignUp },
      { path: '*', component: NotFoundComponent }
  ]
})