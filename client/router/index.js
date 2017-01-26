import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home'
import Project from '../views/Project'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/project/:name',
      component: Project
    }
  ]
})
