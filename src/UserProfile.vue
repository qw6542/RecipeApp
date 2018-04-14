<template>
  <v-flex offset-sm2 class="wrapper">
  <v-app dark class="black " >
    <v-navigation-drawer
      clipped
      v-model="drawer"
      app
      width="165"
      class="black profile"
    >
      <v-list>
        <v-list-tile v-for="item in items" :key="item.title" v-on:click="makeActive(item.title);" >
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content >
            <v-list-tile-title >{{ item.title }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar app  height="40" clipped-left class="black smaller_width">
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
    </v-toolbar>

      <user-info  v-if="active === 'Dashboard'" v-on:child-say="parseUser" ></user-info>
      <upload-recipe v-if="active === 'Upload'"></upload-recipe>
    <div  v-show="active === 'Kitchen'" >
      <recipe-card v-for="d in kitchen_data" v-bind:card="d" :key="d.id" > </recipe-card>
    </div>
    <div  v-show="active === 'Favorite'" >
      <recipe-card v-for="k in favorite_data" v-bind:card="k" :key="k.id"> </recipe-card>
    </div>
  </v-app>
  </v-flex>
</template>

<script>
import RecipeCard from './components/RecipeCard'
import UserInfo from './components-user/UserInfo'
import UploadRecipe from './components-user/UploadRecipe'

export default {
  name: 'user-profile',
  data () {
    return {
      user: '',
      drawer: 'true',
      active: 'Dashboard',
      favorite_data: [],
      kitchen_data: [],
      items: [
        { title: 'Dashboard', icon: 'widgets' }, {
          title: 'Favorite', icon: 'event'},
        {
          title: 'Kitchen', icon: 'event'},
        {
          title: 'Message', icon: 'info' },
        {
          title: 'Upload', icon: 'folder_open' },
        {
          title: 'Draft', icon: 'gavel' }
      ]
    }
  },
  components: {
    RecipeCard,
    UserInfo,
    UploadRecipe
  },
  methods: {
    parseUser (user) {
      this.user = user
    },
    makeActive: function (item) {
      this.active = item
      switch (item) {
        case 'Favorite':
          this.Favorite()
          break
        case 'Kitchen':
          this.Kitchen()
          break
      }
    },
    Favorite () {
      this.$http.get('api/favorite', this.$auth.getHeader())
        .then(response => {
          this.favorite_data = response.body
        })
    },
    Kitchen () {
      this.$http.get('api/kitchen/' + this.user.id)
        .then(response => {
          this.kitchen_data = response.body
          console.log(response.body)
        }
        )
    }
  }
}
</script>

<style>
.profile {
  font-size: 1.5em;
  color: white;
}
.profile li:hover {
  background-color: #43a047;
}

.wrapper {
  opacity: 0.7;
}
.smaller_width{
  max-width: 165px;
}
</style>
