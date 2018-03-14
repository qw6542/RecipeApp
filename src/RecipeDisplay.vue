<template>
  <v-app class="width">
    <form action="" class="success">
      <h1>{{recipe.title}}</h1>
      <label for="checkbox" >Favorite</label>
      <input type="checkbox" id="checkbox" v-model=checked>
      <p>{{recipe.name}}</p>
      <p>By {{recipe.user_name}}</p>
      <p>At {{recipe.created_at}}</p>
      <star-rating v-bind:star-size=15 v-model=recipe.rating class=""> </star-rating>
      <v-btn icon>
        <v-icon>favorite</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>bookmark</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>share</v-icon>
      </v-btn>
    </form>
    <img v-bind:src="recipe.image" class="image" />
      <div class="wrapper">
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
      </div>

    <hr>
    <div><p> section for comment </p></div>
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
      recipe: [],
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
      sa.get('http://www.recipe123.uk/api/recipes/' + this.$route.params.id)
        .set('Accept', 'application/json')
        .end((err, res) => {
          // Calling the end function will send the request
          if (err) {
            console.log(err)
          } else {
            this.recipe = JSON.parse(res.text).recipe
          }
        })
    }
  },
  mounted () {
    this.loadingRecipe()
  }
}
</script>
<style scoped>
.wrapper {
  /*background-color: black;*/
}
  .width {
    width: 80%;
    margin-left: 10%;
  }

</style>
