import Vue from 'vue'
import Router from 'vue-router'
import UserProfile from '../UserProfile'
import HomePage from '../HomePage'
import RecipeDisplay from '../RecipeDisplay'
import UploadRecipe from '../components-user/UploadRecipe'
import LoginPage from '../authentication/LoginPage.vue'
import RegisterPage from '../authentication/register.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage,
      props: true
    },
    {
      path: '/profile',
      name: 'profile',
      component: UserProfile,
      meta: {
        forAuth: true
      }
    },
    {
      path: '/display/:id',
      name: 'display',
      component: RecipeDisplay,
      props: true
    },
    {
      path: '/upload',
      component: UploadRecipe
    },
    {
      path: '/login',
      component: LoginPage,
      meta: {
        forVisitors: true
      }
    },
    {
      path: '/register',
      component: RegisterPage,
      meta: {
        forVisitors: true
      }
    }
  ]
})
