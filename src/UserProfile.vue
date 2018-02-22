<template>
  <div>
    <ul class="profile-bar">
     <li v-bind:class="{ liselected: active === 'about' }" v-on:click="makeActive('about')">About me</li>
     <li v-bind:class="{ liselected: active === 'favorite'}" v-on:click="makeActive('favorite'); clickFavorite() " >Favorite</li>
     <li v-bind:class="{ liselected: active === 'kitchen'}" v-on:click="makeActive('kitchen'); clickKitchen() ">Kitchen</li>
     <li v-bind:class="{ liselected: active === 'message'}" v-on:click="makeActive('message')">Message</li>
     <li v-bind:class="{ liselected: active === 'upload'}" v-on:click="makeActive('upload')">Upload</li>
     <li v-bind:class="{ liselected: active === 'draft'}" v-on:click="makeActive('draft')">Draft</li>
    </ul>
    <user-info v-if="active === 'about'"></user-info>
    <upload-recipe v-if="active === 'upload'"></upload-recipe>
    <div class="recipe-container" v-if="active === 'kitchen'" >
      <recipe-card v-for="d in display" v-bind:card="d" :key="d.title" class="card"> </recipe-card>
    </div>
    <div class="recipe-container" v-if="active === 'favorite'" >
      <recipe-card v-for="d in display" v-bind:card="d" :key="d.title" class="card"> </recipe-card>
    </div>

  </div>
</template>

<script>
import NavBar from './components/NavBar'
import FooterBar from './components/FooterBar'
import RecipeCard from './components/RecipeCard2'
import UserInfo from './components-user/UserInfo'
import UploadRecipe from './components-user/UploadRecipe'
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
    UserInfo,
    UploadRecipe
  },
  methods: {
    makeActive: function (item) {
      this.active = item
    },
    clickFavorite () {
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
.profile-bar {
  width: 10%;
  font-size: 1.5em;
  border-radius: 1.5rem;
  color: white;
  float:left;
  background-color: #ad1457;
  margin-top: 1.5rem;
  padding: 1rem;
}
h1 {
  color: white;
  font-size: 3em;
  font-weight: normal;
}
.profile-bar li:hover {
  background-color: #43a047;
}
.card {
  height: 10rem;
  background-color: white;
  margin-bottom: 3rem;
  padding: 0;
}
.card:hover {
  box-shadow: 0 0 10px #000000 ;
}
.liselected {
  background-color: #0d47a1 !important;
}
ul,ul li {
  list-style-type: none;
}
.recipe-container {
  display: inline-block;
  width: 60%;
  background-color: rgba(255, 255, 255, 0.5);
  border-width: 0;
  outline-color: rgba(255, 255, 255, 0.7);
  border-radius: 1.5rem;
  color: white;
  padding: 1rem;
  margin-top: 1.5rem;
}
</style>
