<template>
  <v-app class="cardWrapper">
    <v-carousel>
      <v-carousel-item v-for="(image) in images" :src="image" :key="image"></v-carousel-item>
    </v-carousel>
    <h1>Roasting</h1>
    <p>Peking duckPeking duck
      Many Chinese foods like chicken, duck, a whole sheep, a sheep's leg, and a whole pig can be cooked in this way.

      Usually, meat is prepared (cleaned, seasoned, and basted with cooking oil) then hung above a fire or placed in a very hot oven. The meat must be seared so that the skin tastes crispy.

      When the meat has been roasted, it is then chopped, arranged artfully on a platter, and served with a sauce made from the meat drippings.

      One of the most famous roasted dishes is Peking duck.

      Cooking Utensil Used

      If you want to cook food by roasting it, you'll need an oven.
    </p>
  </v-app>
</template>

<script>
export default {
  name: 'Roasting',
  data () {
    return {
      images: [
        'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1523571402901&di=1bd3a134016bf4fa2958c17352601f58&imgtype=0&src=http%3A%2F%2Fpic.qiantucdn.com%2F58pic%2F22%2F95%2F59%2F57ef56f116be3_1024.jpg',
        'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1523571498662&di=4af99130929dc76bca8544cb92c7596a&imgtype=0&src=http%3A%2F%2Fwww.xmcy.net%2Fupload%2F7d38509075c4effc6d6f972a4f4bdc7a93c9edb7.jpg',
        'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1524166282&di=35e6ae08db6f9e3928fe6c744c73adf4&imgtype=jpg&er=1&src=http%3A%2F%2Fa4.att.hudong.com%2F54%2F10%2F01300534211920134753107169534.jpg'
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
