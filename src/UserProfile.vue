<template>
  <div>
    <v-navigation-drawer width="165" class="profile-bar">
      <v-list>
        <v-list-tile v-for="item in items" :key="item.title" v-on:click="makeActive(item.title); item.click">
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content >
            <v-list-tile-title >{{ item.title }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>

    <user-info v-if="active === 'Dashboard'"></user-info>
    <upload-recipe v-if="active === 'Upload'"></upload-recipe>
    <div class="cardWrapper" v-if="active === 'Kitchen'" >
      <recipe-card v-for="d in display" v-bind:card="d" :key="d.title" > </recipe-card>
    </div>
    <div class="cardWrapper" v-if="active === 'Favorite'" >
      <recipe-card v-for="d in display" v-bind:card="d" :key="d.title"> </recipe-card>
    </div>

  </div>
</template>

<script>
import RecipeCard from './components/RecipeCard'
import UserInfo from './components-user/UserInfo'
import UploadRecipe from './components-user/UploadRecipe'
import sa from 'superagent'

export default {
  name: 'user-profile',
  data () {
    return {
      display: [],
      active: 'Dashboard',
      /* eslint-disable */
      items: [
        { title: 'Dashboard', icon: 'widgets' },
        { title: 'Favorite', icon: 'event', click: this.Favorite()},
        { title: 'Kitchen', icon: 'event', click: this.Kitchen()},
        { title: 'Message', icon: 'info' },
        { title: 'Upload', icon: 'folder_open' },
        { title: 'Draft', icon: 'gavel' }
      ]
    }
  },
  components: {
    RecipeCard,
    UserInfo,
    UploadRecipe
  },
  methods: {
    makeActive: function (item) {
      this.active = item
    },
    Favorite () {
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
    Kitchen () {
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
  },
  mounted () {
    this.$forceUpdate()
  }

}
</script>

<style>
.profile-bar {
  font-size: 1.5em;
  color: white;
  background-color: rgba(0,0,0,0.5);
  float: left;
}
.profile-bar li:hover {
  background-color: #43a047;
}

.cardWrapper {
  color: white;
  border-radius: 1.5rem;
  padding: 0;
  margin-top: 1.5rem;
  background-color: rgba(0,0,0,0.5);
  float: left;
  margin-left: 1rem;
  width: 80%;
}

</style>
