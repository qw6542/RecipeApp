<template>
  <v-card  class="card">
      <v-layout row>
        <v-flex xs12 sm8 md6 lg6 >
          <router-link :to="{ name: 'display', params: {id: card.id } }">
            <div class="headline">{{card.title}}
            </div>
          </router-link>
            <span class="grey--text">{{card.clicks}}  Views</span>
            <star-rating v-bind:star-size=20 v-model=card.rating> </star-rating>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn icon>
                <v-icon>favorite</v-icon>
              </v-btn>
              <v-btn icon>
                <v-icon>bookmark</v-icon>
              </v-btn>
              <v-btn icon>
                <v-icon>share</v-icon>
              </v-btn>
            </v-card-actions>
            <div>By {{ card.username }} </div>
          </v-flex>
          <v-flex xs0 sm0>
            <router-link :to="{ name: 'display', params: {id: card.id } }">
            <v-card-media v-bind:src=card.image height="215" contain=""></v-card-media>
            </router-link>
        </v-flex>
      </v-layout>
  </v-card>

</template>

<script>
// import SocialSharing from './SocialSharing'
import StarRating from 'vue-star-rating'
import router from '../router'

export default {
  name: 'RecipeCard',
  props: ['card'],
  components: {
    //    SocialSharing,
    StarRating,
    router
  }
}
</script>
<style scoped>
  .card{
    margin: 0 2rem 2rem 2rem;
    padding:0;
    border-radius:0.5rem;
    background-image: url('../assets/img/wood_light.png');
    background-repeat: no-repeat;
    background-size: cover;
  }
  .card:hover {
    box-shadow: 0 0 10px white ;
  }
</style>
