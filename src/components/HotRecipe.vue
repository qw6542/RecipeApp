<template>
  <div  class="cardWrapper">
    <p> Sort By:</p>
    <br/>
    <div>
    <button v-on:click="clickHot">Hot</button>
    <button v-on:click="clickNew" >New</button>
    <button>Recent</button> <br/> <br/>
      <div>
      <recipe-card v-for="d in cardData" v-bind:card="d" :key="d.id" > </recipe-card>
      </div>
  </div>
    <!--<v-paginator :options="options" :resource_url="resource_url2" ref="vpaginator" @update="updateResource"></v-paginator>-->
  </div >
</template>

<script>
import RecipeCard from './RecipeCard'
// import VuePaginator from 'vuejs-paginator'
import sa from 'superagent'
import Vue from 'vue'
import VueResource from 'vue-resource'

Vue.use(VueResource)

export default {
  name: 'HotRecipe',

  components: {
    RecipeCard
    //    VPaginator: VuePaginator
  },
  data () {
    return {
      cardData: []
    }
  },
  methods: {
    clickHot () {
      sa.get('http://localhost/api/recipes/collections/hot')
        .set('Accept', 'application/json')
        .end((err, res) => {
          // Calling the end function will send the request
          if (err) {
            alert(err)
          } else {
            this.cardData = JSON.parse(res.text).recipes
          }
        })
    },
    clickNew () {
      //      sa.get('http://www.mocky.io/v2/5a89f1b32f00007900e46ee9')
      sa.get('http://localhost/api/recipes/collections/new')
        .set('Accept', 'application/json')
        .end((err, res) => {
          // Calling the end function will send the request
          if (err) {
            alert(err)
          } else {
            this.cardData = JSON.parse(res.text).recipes
          }
        })
    }
    //    updateResource (data) {
    //      this.cardData = data
    //    }
  },
  mounted: function () {
    this.clickHot()
  }

}
</script>

<style scoped>
  .cardWrapper {
    color: white;
    border-radius: 1.5rem;
    padding: 0;
    margin-top: 1.5rem;
    background-color: rgba(0,0,0,0.5);
    /*overflow:visible;*/
  }
</style>
<!--{-->
<!--"cardData": [-->
<!--{"title" : "233", "user": "balabala","rating":5,"checked":true},-->
<!--{"title" : "t2", "user": "balaba233","rating":4,"checked":false}-->
<!--]-->
<!--}-->
