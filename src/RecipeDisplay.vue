<!--suppress ALL -->
<template>
  <div>
    <div>
    <!--<img v-bind:src="recipe.image" class="image" />-->

    <form action="" class="info">
      <h1>{{recipe.title}}</h1>
      <label for="checkbox" >Favorate</label>
      <input type="checkbox" id="checkbox" v-model=checked>
      <p class="">{{recipe.name}}</p>
      <star-rating v-bind:star-size=15 v-model=recipe.rating class=""> </star-rating>
    </form>
    </div>

    <table class="ingredient">
      <tr>
        <th>Quantity</th>
        <th>Measurement</th>
        <th>Ingredient</th>
      </tr>
      <tr  v-for="i in recipe.ingredients" :key="i.id">
        <td>{{i.quantity}}</td>
        <td>{{i.measurement}}</td>
        <td>{{i}}</td>
      </tr>
    </table>
    <ol class="method">
     <h2>Methods</h2>
      <li v-for="i in recipe.descriptions" :key="i.id">{{i}}</li>
    </ol>
    <hr>
    <div><p> section fo comment </p></div>
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
      checked: false
    }
  },
  components: {
    StarRating
  },
  methods: {
    loadingRecipe () {
      // sa.get('http://www.mocky.io/v2/5a88bad03000006c007f94bd')
      sa.get('http://localhost/api/recipes/get')
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
  .image{
    width: 60%;
    border-radius: 1.5rem;
    height: 30rem;
  }
  .info{
    background-color: #76ff03;
    width: 60%;
    margin-left:20%;
    border-radius: 1.5rem;

  }
  .ingredient{
    width: 60%;
    margin-left:20%;
    margin-top: 1rem;
    background-color: #00b0ff;
    border-radius: 1.5rem;

  }
  .method{
    width:  57%;
    margin-top: 1rem;
    background-color: #00b0ff;
    border-radius: 1.5rem;
    margin-left:20%;

  }

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
