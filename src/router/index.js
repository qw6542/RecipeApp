import Vue from 'vue'
import Router from 'vue-router'
import UserProfile from '../UserProfile'
import HomePage from '../HomePage'
import RecipeDisplay from '../RecipeDisplay'
import UploadRecipe from '../components-user/UploadRecipe'
import LoginPage from '../authentication/LoginPage.vue'
import RegisterPage from '../authentication/register.vue'
import StirFry from '../ChineseStyle/StirFry.vue'
import DeepFry from '../ChineseStyle/DeepFry.vue'
import Steaming from '../ChineseStyle/Steaming.vue'
import RedStewing from '../ChineseStyle/RedStewing.vue'
import Boiling from '../ChineseStyle/Boiling.vue'
import Roasting from '../ChineseStyle/Roasting.vue'
import Braising from '../ChineseStyle/Braising.vue'
import ChineseStyle from '../ChineseStyle/ChineseStyle.vue'
import AnHui from '../ChineseStyle/AnHui.vue'
import Cantonese from '../ChineseStyle/Cantonese.vue'
import FuJian from '../ChineseStyle/FuJian.vue'
import HuNan from '../ChineseStyle/HuNan.vue'
import JiangSu from '../ChineseStyle/JiangSu.vue'
import ShanDong from '../ChineseStyle/Shandong.vue'
import SiChuan from '../ChineseStyle/Sichuan.vue'
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
      }},
    {
      path: '/stirfry',
      component: StirFry
    },
    {
      path: '/deepfry',
      component: DeepFry
    },
    {
      path: '/steaming',
      component: Steaming
    },
    {
      path: '/redstewing',
      component: RedStewing
    },
    {
      path: '/deepfry',
      component: DeepFry
    },
    {
      path: '/boiling',
      component: Boiling
    },
    {
      path: '/roasting',
      component: Roasting
    },
    {
      path: '/braising',
      component: Braising
    },
    {
      path: '/chinese',
      component: ChineseStyle
    },
    {
      path: '/anhui',
      component: AnHui
    },
    {
      path: '/cantonese',
      component: Cantonese
    },
    {
      path: '/FuJian',
      component: FuJian
    },
    {
      path: '/hunan',
      component: HuNan
    },
    {
      path: '/jiangsu',
      component: JiangSu
    },
    {
      path: '/shandong',
      component: ShanDong
    },
    {
      path: '/sichuan',
      component: SiChuan
    }
  ]
})
