<template>
  <div class="profile">
    <div class="logout">
      <a href="#">Log Out</a>
    </div>
    <div class="bg-mask"></div>
    <ul class="profile-bar">
     <li v-bind:class="{ liselected: active === 'about' }" v-on:click="makeActive('about')">About me</li>
     <li v-bind:class="{ liselected: active === 'favorite'}" v-on:click="makeActive('favorite'); clickFavorate() " >Favorite</li>
     <li v-bind:class="{ liselected: active === 'kitchen'}" v-on:click="makeActive('kitchen'); clickKitchen() ">Kitchen</li>
     <li v-bind:class="{ liselected: active === 'message'}" v-on:click="makeActive('message')">Message</li>
     <li v-bind:class="{ liselected: active === 'draft'}" v-on:click="makeActive('draft')">Draft</li>
    </ul>
    <UserInfo v-if="active === 'about'"></UserInfo>
    <div class="recipe-container">
      <recipe-card v-for="d in display" v-bind:card="d" :key="d.title" class="card"> </recipe-card>
    </div>
    <!--<recipe-form></recipe-form>-->
    <!--<footer-bar></footer-bar>-->
  </div>
</template>

<script>
import NavBar from './components/NavBar'
import FooterBar from './components/FooterBar'
import RecipeCard from './components/RecipeCard2'
import RecipeForm from './components-user/RecipeForm'
import UserInfo from './components-user/UserInfo'
import sa from 'superagent'

export default {
  name: 'user-profile',
  data () {
    return {
      display: [],
      active: 'about'
    }
  },
  components: {
    NavBar,
    FooterBar,
    RecipeCard,
    RecipeForm,
    UserInfo
  },
  methods: {
    makeActive: function (item) {
      this.active = item
    },
    clickFavorate () {
      sa.get('http://www.mocky.io/v2/5a81cf782f00005600718db6')
        .set('Accept', 'application/json')
        .end((err, res) => {
          // Calling the end function will send the request
          if (err) {
            alert(err)
          } else {
            this.display = res.body.cardData
          }
        })
    },
    clickKitchen () {
      sa.get('http://www.mocky.io/v2/5a81cf782f00005600718db6')
        .set('Accept', 'application/json')
        .end((err, res) => {
          // Calling the end function will send the request
          if (err) {
            alert(err)
          } else {
            this.display = res.body.cardData
          }
        })
    }
  }

}
</script>

<style>
.profile {
  /*font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;*/
  text-align: center;
}
html, head, body, div, p, h3 {
  padding: 0;
  margin: 0;
  bottom: 0;
}
body {
  background-image: url('./assets/img/fantasy-3000308_1920.jpg');
  background-attachment: fixed;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
}
.bg-mask {
  position: fixed;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.3);
  z-index: -9999;
}
 .logout {
  text-align: right;
}

 .logout a {
  display: inline-block;
  font-size: 1.3em;
  line-height: 3rem;
  color: white;
  padding: 0 1rem;
  text-decoration: none;
}

.profile-bar {
  width: 10%;
  font-size: 1.5em;
  background-color: rgba(255, 255, 255, 0.5);
  border-width: 0;
  outline-color: rgba(255, 255, 255, 0.7);
  border-radius: 1.5rem;
  color: white;
  padding: 1rem;
  margin-top: 1.5rem;
  float:left;
}

h1 {
  color: white;
  font-size: 3em;
  font-weight: normal;
}

.profile-bar li {
  /*background-color: rgba(255, 255, 255, 0);*/
}
.profile-bar li:hover {
  background-color: #43a047;
}

.card {
  height: 10rem;
  background-color: white;
  margin-bottom: 2rem;
  padding: 0;
}
.card:hover {
  box-shadow: 0 0 10px #00b0ff;
}
.liselected {
  background-color: #0d47a1 !important;
}
</style>
