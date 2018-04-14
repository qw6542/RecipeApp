<template>
  <v-app class="cardWrapper">
    <v-carousel>
      <v-carousel-item v-for="(image) in images" :src="image" :key="image"></v-carousel-item>
    </v-carousel>
    <h1> Deep-Frying </h1>
    <p>
      Deep-frying is used to produce crisp-textured food. It is usually used to fry a variety of meats and vegetables in oil heated to a high temperature.

      Cooking Utensils Used
      Deep-frying is done with a deep saucepan or a deep fryer, a Chinese scoop strainer (used to contain foods in a deep fryer and to strain foods when removed from the oil), and long chopsticks.
    </p>
  </v-app>
</template>

<script>
export default {
  name: 'DeepFry',
  data () {
    return {
      images: [
        'http://images4.c-ctrip.com/target/tuangou/085/694/444/41cc3f44353d4693a9abee7ebf4ac321_720_480_s.jpg',
        'http://imgsrc.baidu.com/image/c0%3Dpixel_huitu%2C0%2C0%2C294%2C40/sign=c1fae90a31f33a878a60085aaf247554/00e93901213fb80e6f2f0bed3dd12f2eb9389409.jpg',
        'http://imgsrc.baidu.com/image/c0%3Dshijue1%2C0%2C0%2C294%2C40/sign=76779b1071ec54e755e1125dd151f125/37d12f2eb9389b50188af67c8f35e5dde7116ea2.jpg'
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
