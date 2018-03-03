import Vue from 'vue'
import Router from 'vue-router'
import UserProfile from '../UserProfile'
import HomePage from '../HomePage'
import RecipeDisplay from '../RecipeDisplay'
import UploadRecipe from '../components-user/UploadRecipe'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: HomePage
    },
    {
      path: '/profile',
      component: UserProfile
    },
    {
      path: '/display',
      component: RecipeDisplay
    },
    {
      path: '/upload',
      component: UploadRecipe
    }
  ]
})
