<template>
<div>
<search-box v-on:child-say="parse_search" ></search-box>
<div>
  <v-layout row wrap>
    <v-flex  xs2  sm2 md2 lg2)></v-flex>
    <v-flex xs8  sm8 md8 lg8>
      <div  class="cardWrapper">
        <p> Sort By:</p>
        <div>
          <v-btn v-on:click="clickHot" round class="red">Hot
           <v-icon>fab fa-hotjar</v-icon>
          </v-btn>
          <v-btn v-on:click="clickNew" round class="green">New
            <v-icon>autorenew</v-icon>
          </v-btn>
          <br/> <br/>
          <div>
            <recipe-card v-for="d in cardData" v-bind:card="d" :key="d.id" > </recipe-card>
          </div>
        </div>
        <v-pagination :length=pagination.last_page v-model=pagination.current_page @input="clickPage"
        ></v-pagination>
      </div>
    </v-flex>
  </v-layout>
</div>
</div>
</template>

<script>
import RecipeCard from './components/RecipeCard.vue'
import Vue from 'vue'
import VueResource from 'vue-resource'
import SearchBox from './components/SearchBox.vue'

Vue.use(VueResource)

export default {
  name: 'HomePage',
  components: {
    SearchBox,
    RecipeCard
  },
  data () {
    return {
      Api: '/api/recipes/collections/hot',
      cardData: {},
      pagination: {}
    }
  },
  methods: {
    parse_search (search) {
      this.cardData = search.body.data
      this.makePagination(search.body)
    },
    makePagination (res) {
      let pagination = {
        current_page: res.current_page,
        last_page: res.last_page,
        next_page_url: res.next_page_url,
        path: res.path,
        prev_page_url: res.prev_page_url
      }
      this.pagination = pagination
    },
    fetchData (Api) {
      this.$http.get(Api)
        .then(res => {
          this.$set(this, 'cardData', res.body.data)
          this.makePagination(res.body)
          console.log(this.cardData)
        }
        ).catch(err => console.log(err))
    },
    clickHot () {
      this.Api = 'http://localhost/api/recipes/collections/hot'
      this.fetchData(this.Api)
    },
    clickNew () {
      this.Api = '/api/recipes/collections/new'
      this.fetchData(this.Api)
    },
    clickPage (page) {
      this.fetchData(this.Api + '?page=' + page)
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
