<template>
  <v-app>
    <v-carousel>
      <v-carousel-item v-for="(image) in images" :src="image" :key="image"></v-carousel-item>
    </v-carousel>
    <h1> Hunan </h1>
    <ul>
      <li>
        <strong>Location:</strong> <a href="https://goo.gl/maps/o5U8mBtdPEk">Hunan Province </a>southern central China; Changsha, Zhangjiajie
    </li>
      <li>
        <strong>Distinctives:</strong> spicy, favoring  stir-frying, steaming, and smoking<br>
      </li>
    </ul>
    <h2> Hunan Cuisine favors sour and spicy flavors.</h2>
    <p>    Due to its geographical position, the climate of Hunan Province is mild and wet, so the people there mostly love to eat red pepper to refresh themselves and get rid of wetness. Dishes with pickled vegetables and red pepper are appetizing and refreshing. With respect to the style of dishes, there are folk dishes, economical popular dishes as well as substantial banquet and elegant feast dishes. There are also home dishes and disease-curing and body-building dishes cooked with medicinal herbs. There are more than 800 local dishes and famous courses of local flavors.
    </p>
    <h2>Their Favorite Cooking Methods</h2>
    <p>
    Their cuisine is thought of as the melting pot of the larger regional cuisines around them. Their cooks use various ways to prepare food. They commonly boil soups or stews, stir-fry, bake, braise, smoke, pickle or ferment.
    </p>
    <p>Fermentation: To store vegetables and meat for the winter or preserve it through the hot summers, Hunanese have traditionally eaten much pickled and fermented food. They pickle tofu by letting it sit for few weeks. It is then mixed with liquor, salt, star anise, and chili and fermented in pickling jars for a month or more.</p>
    <h2>Steamed fish head with Chopped Chili Pepper</h2>
    <p>The fish head is super tender and juicy; it only has the sweet flavor of fish. But with the ornament of the chopped chili pepper, it becomes salty and spicy. When you take one piece of the fish head and dig it into the soup around, then put it into your mouth, you will find something explodes on your tongue suddenly. The authentic Duo Jiao Yu Tou is very hot. You will busy search for water or beverage when you first tasted it. But if you can let it stay on your tongue for a little longer, the natural sweetness of the fish will come out and ease your nerves. You will never have enough of it if you dare try. For someone like spicy foods, this is the must-try dish.</p>
  </v-app>
</template>

<script>
export default {
  name: 'HuNan',
  data () {
    return {
      images: [
        'https://wayofchina.com/wp-content/uploads/2018/03/duo_jiao_yu_tou.jpg',
        'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1523671186781&di=2859ea3c75ae09bf18a1b31aaf9099e8&imgtype=0&src=http%3A%2F%2Fwww.maojiafandian.com%2Fuploads%2Fallimg%2F141107%2F1-14110G6194O42.jpg',
        'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1523671186780&di=7216eedc0995eff79220af6d549b84cd&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimage%2Fc0%253Dpixel_huitu%252C0%252C0%252C294%252C40%2Fsign%3Dc67f5a37ba3533fae1bb9b6ec1ab9873%2F9345d688d43f87947b659b17d91b0ef41bd53a75.jpg',
        'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1523671186780&di=ab604165542ecd8c5f2056ce0ce27afd&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimage%2Fc0%253Dshijue1%252C0%252C0%252C294%252C40%2Fsign%3Dd864503e27f5e0fefa15814234095edd%2F9825bc315c6034a876a4e7a6c113495409237656.jpg'
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
</style>
