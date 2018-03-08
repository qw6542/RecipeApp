// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Auth from '../packages/auth/Auth.js'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
/* eslint-disable */
Vue.use(Vuetify)
Vue.use(Auth)
router.beforeEach(
  (to,from,next) => {
       if(to.matched.some(record => record.meta.forVisitors)){
         if(Vue.auth.isAuthenticated()){
           next({
             path:'/profile'
           })
         } else {
           next()
         }} else if(to.matched.some(record => record.meta.forAuth)){
           if(!Vue.auth.isAuthenticated()){
             next({
               path:'/login'
             })
           } else {
             next()
           }
       } else {
         next()
       }
  }
)

Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
