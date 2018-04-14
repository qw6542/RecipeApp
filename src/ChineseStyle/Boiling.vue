<template>
  <v-app class="cardWrapper">
    <v-carousel>
      <v-carousel-item v-for="(image) in images" :src="image" :key="image"></v-carousel-item>
    </v-carousel>
    <h1> Boiling </h1>
    <p>The method of Boiling is to put food and other ingredients together in a large amount of soup or clear water. Firstly, boil it over high heat and cook it over slow fire later on. The specific operation method: After the food is processed, place in the pot, add seasonings, pour in proper amount of clear water or soup. Switch to lower heat when the water is boiling. Suitable for small and soft materials. The prepared foods are fresh and delicious, and the cooking time is shorter than that of stewing. Boiled foods avoid the greasy barbecue and long-term carcinogens, it is consodered a healthy way of eating.</p>
  </v-app>
</template>

<script>
export default {
  name: 'Boiling',
  data () {
    return {
      images: [
        'http://img3.redocn.com/tupian/20141023/nongtangluobosizhuhuaxie_3303177.jpg',
        'http://food.yxlady.com/upload/cook_step/131025/5_220918yzPP1gL1.jpg',
        'http://pic.qiantucdn.com/58pic/22/89/51/57e4b2f81a244_1024.jpg'
      ]
    }
  },
  methods: {
  },
  mounted () {
  }
}
</script>
<style scoped>
  p,li{
    text-align: left;
  }
  .cardWrapper {
    color: white;
    border-radius: 1.5rem;
    padding: 0;
    margin-top: 1.5rem;
    background-color: rgba(0,0,0,0.5);
    /*overflow:visible;*/
  }
</style>
