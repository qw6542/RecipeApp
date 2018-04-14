<template>
  <v-app class="width">
    <v-jumbotron
      :gradient="gradient"
      class="height"
    >
      <h1>{{recipe.title}} </h1>
      <v-chip @click="goToMethodPage">{{recipe.method}}</v-chip>
      <v-chip @click="goToMethodPage">{{recipe.style}}</v-chip>
      <v-btn flat icon color="blue lighten-2" class="front">
        <v-icon>thumb_up</v-icon>
      </v-btn>
      <p>{{recipe.name}}</p>
      <p>By {{recipe.user_name}}</p>
      <p>At {{recipe.created_at}}</p>
      <v-flex offset-xs2 offset-sm4 offset-md4 offset-lg5>
      <star-rating v-bind:star-size=30 v-model=recipe.rating></star-rating>
      </v-flex>
      <v-btn
        class="white--text"
        fab
        icon
        small
        v-for="(social, i) in socials"
        :key="i"
        :color="social.color"
        :href= concatenate(social.url,recipe.id)
      >
        <v-icon>{{social.icon}}</v-icon>
      </v-btn>
    </v-jumbotron>
    <v-carousel>
      <v-carousel-item  :src="recipe.image" ></v-carousel-item>
    </v-carousel>
    <v-data-table
      :headers="headers"
      :items="recipe.ingredients"
      class="elevation-1 ingredient"
    >
      <template slot="items" slot-scope="props">
        <td>{{ props.item.name }}</td>
        <td class="text-xs-left">{{ props.item.quantity }}</td>
        <td class="text-xs-left">{{ props.item.measurement }}</td>
        <td class="text-xs-left">{{ props.item.preparation }}</td>
        <td class="text-xs-left">{{ props.item.get_from }}</td>
      </template>
    </v-data-table>

    <v-data-table
      :headers="headers2"
      :items="recipe.descriptions"
      class="elevation-1 ingredient"
    >
      <template slot="items" slot-scope="props">
        <td class="text-xs-left">{{ props.item.step }}</td>
        <td>{{ props.item.detail }}</td>
      </template>
    </v-data-table>
  </v-app>
</template>

<script>
import sa from 'superagent'
import StarRating from 'vue-star-rating'
import router from './router'
export default {
  name: 'recipe-display',
  data () {
    return {
      gradient: 'to top right, black, grey',
      recipe: [],
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
      ],
      headers: [{text: 'Ingredient', sortable: false},
        {text: 'Quantity', value: 'Quantity'},
        {text: 'Measurement', value: 'Measurement'},
        {text: 'Prepare', value: 'Prepare'},
        {text: 'Get From', value: 'Get_From'}],
      headers2: [
        {text: 'Step', value: 'Step'},
        {text: 'Detail', sortable: false}
      ],
      checked: false
    }
  },
  components: {
    StarRating,
    router
  },
  methods: {
    loadingRecipe () {
      sa.get('http//localhost/api/recipes/' + this.$route.params.id)
        .set('Accept', 'application/json')
        .end((err, res) => {
          // Calling the end function will send the request
          if (err) {
            console.log(err)
          } else {
            this.recipe = JSON.parse(res.text).recipe
          }
        })
    },
    goToMethodPage () {
      if (this.recipe.method !== ' ') {
        this.$router.push('/' + this.recipe.method)
      }
    },
    concatenate (URL, id) {
      return URL + id
    }
  },
  mounted () {
    this.loadingRecipe()
  }
}
</script>
<style scoped>
.wrapper {
  background-repeat: no-repeat;
  background-size: cover;
}
  .width {
    width: 80%;
    margin-left: 10%;
  }
  .height{
    max-height: 18rem;
  }
</style>
