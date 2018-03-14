<template>
<div>
<search-box v-on:child-say="parse_search" ></search-box>

<div>
  <v-layout row wrap>
    <v-flex  xs2  sm2 md2 lg2)></v-flex>
    <v-flex xs8  sm8 md8 lg8>
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
      </div>
    </v-flex>
  </v-layout>
</div>
</div>
</template>

<script>
import RecipeCard from './components/RecipeCard.vue'
// import VuePaginator from 'vuejs-paginator'
import sa from 'superagent'
import Vue from 'vue'
import VueResource from 'vue-resource'
import SearchBox from './components/SearchBox.vue'

Vue.use(VueResource)

export default {
  name: 'HomePage',
  components: {
    SearchBox,
    RecipeCard
  //    VPaginator: VuePaginator
  },
  data () {
    return {
      cardData: []
    }
  },
  methods: {
    parse_search (search) {
      this.cardData = search.body
      console.log('here')
      console.log(search.body)
    },
    clickHot () {
      sa.get('http://www.recipe123.uk/api/recipes/collections/hot')
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
      sa.get('http://www.recipe123.uk/api/recipes/collections/new')
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
