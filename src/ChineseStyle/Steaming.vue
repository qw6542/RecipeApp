<template>
  <v-app class="cardWrapper">
    <v-carousel>
      <v-carousel-item v-for="(image) in images" :src="image" :key="image"></v-carousel-item>
    </v-carousel>
    <h1>Steaming </h1>
    <p>
      bamboo steamersSteaming food by using bamboo steamers
      Steaming is a method of cooking using steam. It is considered to be the healthiest cooking technique.

      Steaming can make dishes taste more fresh and delicious. It can retain various nutrients in the food and reduce nutrient loss to a large extent. Therefore, it is widely used for cooking a variety of ingredients.

      Cooking Utensils Used
      Chinese people steam food by using bamboo steamers, which can be stacked one on top of the other, allowing several kinds of foods to be cooked at once, thus saving time and fuel.

      Dishes requiring the most cooking time are placed on the bottom layer near the boiling water, while those requiring less are placed on the top layer. The water should be kept at a slow boil until the food is done.

      Famous Steamed Dishes
      The most famous examples of steaming are dim sum, dumplings, buns, and steamed fish.
    </p>
  </v-app>
</template>

<script>
export default {
  name: 'Steaming',
  data () {
    return {
      images: [
        'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1523571673758&di=509160e6acfd6d493a9bc59e59bfbc78&imgtype=0&src=http%3A%2F%2Fimg3.redocn.com%2Ftupian%2F20141022%2Fshuizhengzhaiguo_3292763.jpg',
        'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1523571686518&di=3727d58ee7e54b49b98eeff72b31db57&imgtype=jpg&src=http%3A%2F%2Fimg4.imgtn.bdimg.com%2Fit%2Fu%3D4210850484%2C3732819010%26fm%3D214%26gp%3D0.jpg',
        'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1523571673754&di=b5b110a96a7d4445a4b55e3ca6eed4dd&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimage%2Fc0%253Dpixel_huitu%252C0%252C0%252C294%252C40%2Fsign%3Da5ff3e593e2ac65c73086e33928ad77d%2Fb90e7bec54e736d1b0566e3190504fc2d5626946.jpg'
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
