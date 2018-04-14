<template>
  <v-card  class="card">
      <v-layout row>
        <v-flex xs12 sm8 md6 lg6 >
          <router-link :to="{ name: 'display', params: {id: card.id } }">
              <h2>{{card.title}} </h2>
          </router-link>
          <p class="grey--text">{{card.clicks}}  Views</p>
          <p>By {{ card.username }} </p>
          <v-flex  offset-xs3 offset-sm4 offset-md4 offset-lg4>
          <star-rating  v-bind:star-size=20 v-model=card.rating> </star-rating>
          </v-flex>
            <v-card-actions>
              <v-flex  offset-sm1 offset-md1 offset-lg1>
              <v-btn
                class="white--text"
                fab
                icon
                small
                v-for="(social, i) in socials"
                :key="i"
                :color="social.color"
                :href= concatenate(social.url,card.id)
              >
                <v-icon>{{social.icon}}</v-icon>
              </v-btn>
              </v-flex>
            </v-card-actions>
          </v-flex>
          <v-flex xs0 sm0>
            <router-link :to="{ name: 'display', params: {id: card.id } }">
            <v-card-media v-bind:src=card.image height="215" ></v-card-media>
            </router-link>
        </v-flex>
      </v-layout>
  </v-card>

</template>

<script>
import StarRating from 'vue-star-rating'
import router from '../router'

export default {
  name: 'RecipeCard',
  props: ['card'],
  components: {
    StarRating,
    router
  },
  data () {
    return {
      socials: [
        {
          icon: 'fab fa-facebook',
          color: 'indigo',
          url: 'https://www.facebook.com/sharer/sharer.php?u=http%3A//www.recipe123.uk/%23/display/'
        },
        {
          icon: 'fab fa-linkedin',
          color: 'cyan darken-1',
          url: 'https://www.linkedin.com/shareArticle?mini=true&url=http%3A//www.recipe123.uk/%23/display/&title=Recipe&summary=&source='
        },
        {
          icon: 'fab fa-twitter',
          color: 'red lighten-3',
          url: 'https://twitter.com/home?status=http%3A//www.recipe123.uk/%23/display/'
        }
      ]
    }
  },
  methods: {
    concatenate (URL, id) {
      return URL + id
    }
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
