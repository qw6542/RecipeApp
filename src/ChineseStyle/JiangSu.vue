<template>
  <v-app>
    <v-carousel>
      <v-carousel-item v-for="(image) in images" :src="image" :key="image"></v-carousel-item>
    </v-carousel>
    <h1>JianSu Cuisine</h1>
    <p><b>Location:</b> <a href="https://goo.gl/maps/A6ECVs8wroM2">Jiangsu Province</a> (coastal east China) — Nanjing, Suzhou</p>
    <p><b>Distinctives:</b> seafood; richly aromatic with fine presentation</p>
    <p>
      Deep-frying is used to produce crisp-textured food. It is usually used to fry a variety of meats and vegetables in oil heated to a high temperature.

      Cooking Utensils Used
      Deep-frying is done with a deep saucepan or a deep fryer, a Chinese scoop strainer (used to contain foods in a deep fryer and to strain foods when removed from the oil), and long chopsticks.
    </p>
    <h2>Flavors — Marine, Moderate, and Natural</h2>
    <p>A wide variety of seafoods are eaten. Unlike most Western seafood restaurants where the main dishes include a few varieties of fish and oysters, Jiangsu people eat many things most people have never seen. The wide range of sea vegetable dishes is something healthful to explore.
    </p>
    <p>Their chefs emphasize bringing out the distinct natural flavors in the rich range of meat and plant ingredients in their dishes. So they don't add much salt, sugar or seasonings like chili powder that hide and overwhelm the ingredients' flavors. So their meals are richly aromatic.
    </p>
    <h2>Ingredients of Jiangsu Cuisine
    </h2>
    <p><b>Seafood:</b> Since Jiangsu is on the coast, the fresh seafood is the highlight. The high income means the people demand high quality ingredients, and the chefs are known for selecting the best seafood for their dishes.
    </p>
    <p><b>Staples:</b> Both rice and wheat products are the staples. Jiangsu people also grow various root crops for staple foods. A favorite dish and a popular snack is sweet taro filled rice balls or rice cakes.
    </p>
    <p><b>Herbs and vegetables:</b> The province is also known for its wide diversity of agricultural products. There are a lot of lakes and ponds in the region, so much watershield, lotus, Chinese chestnuts, winter bamboo shoots, water bamboo, and water chestnuts are eaten. Jiangsu's comparatively wealthy people are also particular about choosing vegetable/herb combination dishes for their health effects.
    </p>
    <p>Jiangsu chefs pay attention to both the season and the weather, and according to their understanding, they use different foods to achieve balance and promote health and comfort. For example, ginseng is thought to be good for consumption in cold weather, and by most elderly people.
    </p>
    <p>For Chinese, food is medicine. You could talk with your guide, waiters, or local Chinese friends about your health or how you feel physically, and they'll help select the right dishes for you. Yancheng City in particular is known for medicinal dishes. Learn more about Chinese Medicinal Food.
    </p>
    <h2>Cooking Methods and Styles
    </h2>
    <p>Reflecting the wealthy and imperial origins of the style, their chefs use very elaborate and precise cooking methods and presentation. Their cooking methods are more complex than stir-frying. They commonly stew, braise, simmer, and warm to preserve the original flavors and to maintain clarity, freshness, and mildness.
    </p>
  </v-app>
</template>

<script>
export default {
  name: 'JiangSu',
  data () {
    return {
      images: [
        'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1523671371476&di=db7e6b4b6850696f2ce7001e6967c07a&imgtype=0&src=http%3A%2F%2Fimgs.focus.cn%2Fupload%2Fnews%2F7998%2Fa_79975837.jpg',
        'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1523671371475&di=9864156fbcb14333ef0a910e89eb2f51&imgtype=0&src=http%3A%2F%2Fwww.6681.com%2Fuploads%2Fallimg%2F160509%2F40-160509111136-50.jpg',
        'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1523671446581&di=a507fc32e240e15aedca84011644639a&imgtype=0&src=http%3A%2F%2Fimg.ea3w.com%2F387%2F386981.jpg'
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
