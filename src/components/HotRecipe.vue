<template>
  <div>
    <p> Sort By:</p>
    <br/>
    <div>
    <button v-on:click="clickHot">Hot</button>
    <button v-on:click="clickNew" >New</button>
    <button>Recent</button> <br/> <br/>
      <recipe-card v-for="d in cardData" v-bind:card="d" :key="d.title" class="card"> </recipe-card>
  </div>
  </div>
</template>

<script>
import RecipeCard from './RecipeCard2'
import sa from 'superagent'

export default {
  name: 'HotRecipe',
  components: {
    RecipeCard
  },
  data () {
    return {
      cardData: []
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

      // sa.get('https://fc8e2db2-301a-4a7b-8d6b-32cd9288667d.mock.pstmn.io/auth/status')
      //   .set('x-api-key', '0a332273c19440eaa8022891e69dc18c')
      //   .set('Accept', 'application/json')
      //   .end((err, res) => {
      //     // Calling the end function will send the request
      //     if (err) {
      //       alert(err)
      //     } else {
      //       let data = JSON.parse(res.text)
      //     }
      //   })
    },
    clickNew () {
      sa.get('http://www.mocky.io/v2/5a822cf52f00007100718e61')
        .set('Accept', 'application/json')
        .end((err, res) => {
          // Calling the end function will send the request
          if (err) {
            alert(err)
          } else {
            this.cardData = res.body.cardData
          }
        })
    }
  },
  mounted () {
    this.clickHot()
  }
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
    box-shadow: 0px 0px 10px #80deea ;
  }

</style>
<!--{-->
<!--"cardData": [-->
<!--{"title" : "233", "user": "balabala","rating":5,"checked":true},-->
<!--{"title" : "t2", "user": "balabala233","rating":4,"checked":false}-->
<!--]-->
<!--}-->
