<template>
  <div>
    <p> Sort By:</p>
    <br/>
    <div>
    <button v-on:click="clickHot">Hot</button>
    <button v-on:click="clickNew" >New</button>
    <button>Recent</button> <br/> <br/>
      <recipe-card v-for="d in cardData" v-bind:card="d" :key="d.id" class="card"> </recipe-card>
  </div>
    <v-paginator :options="options" :resource_url="resource_url2" ref="vpaginator" @update="updateResource"></v-paginator>
  </div>
</template>

<script>
import RecipeCard from './RecipeCard2'
import VuePaginator from 'vuejs-paginator'
import sa from 'superagent'
import Vue from 'vue'
import VueResource from 'vue-resource'

Vue.use(VueResource)

export default {
  name: 'HotRecipe',
  components: {
    RecipeCard,
    VPaginator: VuePaginator
  },
  data () {
    return {
      cardData: [],
      resource_url2: 'http://www.mocky.io/v2/5a8b448d3200002b1d1abe5a',
      resource_url: 'http://www.mocky.io/v2/5a8b40d6320000191d1abe4c',
      options: {
        remote_data: 'nested.cardData',
        remote_current_page: 'nested.current_page',
        remote_last_page: 'nested.last_page',
        remote_next_page_url: 'nested.next_page_url',
        remote_prev_page_url: 'nested.prev_page_url',
        next_button_text: 'Go Next',
        previous_button_text: 'Go Back'
      }
    }
  },
  methods: {
    clickHot () {
      sa.get('http://www.mocky.io/v2/5a822db92f00004f00718e62')
        .set('Accept', 'application/json')
        .end((err, res) => {
          // Calling the end function will send the request
          if (err) {
            alert(err)
          } else {
            this.cardData = res.body.cardData
          }
        })
    },
    clickNew () {
      //      sa.get('http://www.mocky.io/v2/5a89f1b32f00007900e46ee9')
      sa.get('http://localhost/api/recipes/new')
        .set('Accept', 'application/json')
        .end((err, res) => {
          // Calling the end function will send the request
          if (err) {
            alert(err)
          } else {
            this.cardData = JSON.parse(res.text).newRecipes
          }
        })
    },
    updateResource (data) {
      this.cardData = data
    }
  }
  // mounted: function () {
  //   // this.clickHot()
  // }
}
</script>

<style scoped>
  .card {
    height: 10rem;
    background-color: white;
    margin-bottom: 3rem;
    padding: 0;
  }
  .card:hover {
    box-shadow: 0 0 10px #000000 ;
  }

</style>
<!--{-->
<!--"cardData": [-->
<!--{"title" : "233", "user": "balabala","rating":5,"checked":true},-->
<!--{"title" : "t2", "user": "balaba233","rating":4,"checked":false}-->
<!--]-->
<!--}-->
