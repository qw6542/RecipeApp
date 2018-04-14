<template>
  <v-app class="cardWrapper">
    <v-expansion-panel >
      <v-expansion-panel-content ripple>
        <div slot="header"  >
          <h2>Cooking Method:</h2>
        </div>
      </v-expansion-panel-content>
      <v-expansion-panel-content v-for="i in CookingMethods"  :key="i"  ripple>
        <div slot="header"  >
          <h3>{{i}}</h3>
        </div>
        <v-btn  block  :to=linkTo(i) >{{i}}</v-btn>
      </v-expansion-panel-content >
      <v-expansion-panel-content ripple>
        <div slot="header">
          <h2>Reginal Style:</h2>
        </div>
      </v-expansion-panel-content>
      <v-expansion-panel-content v-for="i in Style"  :key="i"  ripple>
        <div slot="header"  >
          <h3>{{i}}</h3>
        </div>
        <v-btn  block  :to=linkTo(i) >{{i}}</v-btn>
      </v-expansion-panel-content>
    </v-expansion-panel>
  </v-app>
</template>

<script>

export default {
  name: 'ChineseStyle',
  data () {
    return {
      CookingMethods: ['StirFry', 'DeepFry', 'Steaming', 'RedStewing', 'Boiling', 'Braising'],
      Style: [ 'Cantonese', 'Shandong', 'Jiangsu', 'Sichuan', 'Fujian', 'AnHui', 'Hunan' ]
    }
  },
  methods: {
    linkTo (route) {
      return '/' + route
    }
  },
  mounted () {
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
