<!--suppress ALL -->
<template>
  <div class="centre container">
    <img v-bind:src="recipe.image" class="image" />

    <div class="recipe-header">
    <form action="">
      <h1>{{recipe.title}}</h1>
      <label for="checkbox" >Favorate</label>
      <input type="checkbox" id="checkbox" v-model=checked>
      <p class="">By {{recipe.name}}</p>
      <star-rating v-bind:star-size=15 v-model=recipe.rating class=""> </star-rating>
    </form>

    </div>
    <ul>
     <h2>Ingredients:</h2>
    <li v-for="i in recipe.ingredients" :key="recipe.id">{{i}}</li>
    </ul>
    <ol>
     <h2>Methods</h2>
      <li v-for="i in recipe.description" :key="recipe.id">{{i}}</li>
    </ol>
  </div>
</template>

<script>
import sa from 'superagent'
import StarRating from 'vue-star-rating'
export default {
  name: 'recipe-display',
  data () {
    return {
      recipe: [],
      checked: false,
    }
  },
  components: {
    StarRating
  },
  methods: {
    loadingRecipe () {
      sa.get('http://www.mocky.io/v2/5a88bad03000006c007f94bd')
        .set('Accept', 'application/json')
        .end((err, res) => {
          // Calling the end function will send the request
          if (err) {
            alert(err)
          } else {
            this.recipe = res.body.Recipe
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
  .centre {
  padding-left: 20%;
  }
  .recipe-header{
    text-align: center;
    width: 60%;
    background-color: #80deea;
    outline-color: rgba(255, 255, 255, 0.7);
    border-radius: 1.5rem;
    color: white;
    margin-top: 1.5rem;
  }
  .image{
    width: 60%;
    border-radius: 1.5rem;
    /*height: auto;*/
  }
  /*.float-right{*/
    /*float: right;*/
  /*}*/

</style>

<!--{-->
<!--"Recipe":{-->
<!--"id": = 1-->
<!--"title": "mytitle",-->
<!--"name": "By alice",-->
<!--"rating": 5,-->
<!--"image": "http://leakestreetarches.london/wp-content/uploads/2018/01/coffee-1024x683.jpg" ,-->
<!--"ingredients": ["apple","banana","carot"] ,-->
<!--"description": [-->
<!--"In a pan, roast together pomegranate and cumin seeds and grind to a powder.",-->
<!--"Put water, chickpeas, 4 tsp salt, cardamoms, cinnamon and cloves in cooker. Stir.",-->
<!--"Close cooker. Bring to full pressure on high heat. Reduce heat and cook for 18 minutes.",-->
<!--"Remove cooker from heat. Allow to cool naturally."-->
<!--]-->
<!--}-->
<!--}-->
