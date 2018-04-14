<template>
  <v-app class="cardWrapper">
    <v-carousel>
      <v-carousel-item v-for="(image) in images" :src="image" :key="image"></v-carousel-item>
    </v-carousel>
    <h1> Braising </h1>
    <p>
      braised chickenBraised chicken
      Braising involves adding ingredients, spices, seasonings, and a small amount of water or broth to a wok or a saucepan, boiling everything together initially at a high temperature, and then simmering it at a lower temperature for a long time (usually one hour or more).

      The ingredients are usually cut into large-sized cubes or diamonds. Using this technique, all of the food is cooked thoroughly.

      Famous Braised Dishes
      The most famous braised dishes in China include braised chicken with mushrooms and braised beef with potatoes.
    </p>
  </v-app>
</template>

<script>
export default {
  name: 'Braising',
  data () {
    return {
      images: [
        'https://images-na.ssl-images-amazon.com/images/I/81j2fU7E4%2BL.jpg',
        'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1523571268969&di=98c026cc03b8c19a45bc6d3675a51748&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimage%2Fc0%253Dpixel_huitu%252C0%252C0%252C294%252C40%2Fsign%3D1c868ec73dd3d539d530078353ff8c3c%2Fa2cc7cd98d1001e9ec6dba36b30e7bec54e797b2.jpg',
        'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1524165985&di=8164eb0c476978cfc9b973ddf1d17ce9&imgtype=jpg&er=1&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimage%2Fc0%253Dpixel_huitu%252C0%252C0%252C294%252C40%2Fsign%3D1040ad4f48a98226accc2367e3fadc6d%2Fa8014c086e061d95f1ff180270f40ad162d9ca4b.jpg'
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
