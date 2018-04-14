<template>
  <v-app>
    <v-carousel>
      <v-carousel-item v-for="(image) in images" :src="image" :key="image"></v-carousel-item>
    </v-carousel>
    <h1>Cantonese Cuisine </h1>
    <p><b>Location:</b> Southeast China — <a href="https://goo.gl/maps/nhYY4iYvJXK2">Guangzhou</a>, Shenzhen, Hong Kong, Macau...</p>
    <p> <b>Distinctives:</b> sweeter, favoring braising and stewing, adding various sauces</p>
    <p>Cantonese Cuisine, also widely called Yue Cuisine in China, is the most exquisite cuisine of all eight major cuisines in China. Originated from China’s Guangdong Province, it is distinguished for the fresh and tender taste, extensive and innovative ingredients and exquisite workmanship.
    </p>
    <p>Though having the shortest history, Cantonese Cuisine enjoys a much more profound international influence than other Chinese cuisines. Popularized with the prevalence of Chinese restaurants around the world, of which, majority are Cantonese Cuisine restaurants operated by Cantonese origins, Cantonese Cuisine is usually the first introduction of Chinese food for many foreigners.
    </p>
    <p>Compared with other Chinese cuisines, Cantonese Cuisine is characterized in fresh and tender taste. Top priority of Cantonese Cuisine is to retain the original flavor of the ingredients. Neither over saucing nor overcooking is desirable in Cantonese Cuisine. Thus, among the many cooking method, Cantonese Cuisine favors steaming and braising the most. Other techniques include shallow frying, stir frying and stewing are also frequently used in Cantonese Cuisine. Sauce, though crucial in Cantonese Cuisine, is usually kept in light flavor. Most widely used sauces in Cantonese Cuisine are oyster sauce, plum sauce and sweet sauce.
    </p>
    <p>
      Cantonese Cuisine is widely known for its extensive and innovative ingredients. This perhaps is partly because of the abundant natural produces of Guangdong Province, and partly due to the inventive and happy-to-incorporate personality nature of the Cantonese. Situated in the subtropical zone, Guangdong Province enjoys a warm and rainy climate, which creates a favorable environment for many plants, fungi and the like. Bordering China’s South Sea, Guangdong has long been a trading port. Many foreign ingredients imported from other countries are used in Cantonese Cuisine. Compared with Chinese of other regions, Cantonese seem more open-minded to the food ingredients. Almost all edible things, including those rarely eaten or rarely seen on average Chinese or Western tables are commonly used in Cantonese dishes, such as snake, cat, mouse and etc.
    </p>
    <p>Late start gives Cantonese Cuisine the convenience of absorbing the merits of other cuisines. After blending them with the local flavors and improved according to the advices of customers, Cantonese Cuisine gradually forms its own characteristics and stands out with them. Extensive and singular application of ingredients, exquisite workmanship and the fresh and tender taste has captivated the palates of the world.
    </p>
    <h2>Cooking Methods </h2>
    <p>Stir frying and steaming are the two most common cooking methods. But stir fried dishes are not as common as in Sichuan. Cantonese like to boil soups, braise or roast meats, and sauté food too. These cooking methods are aimed to preserve the flavor of the dishes. There are also popular deep fried foods that are often eaten as snacks, deserts, or breakfast foods. See below for examples.</p>
    <h3>notable Cantonese dishes:</h3>
    <ul>
      <li>Sliced Boiled Chicken (Baiqieji)
      </li>
      <li>Roasted Suckling Pig (Kaoruzhu)
      </li>
      <li>Black chicken soup (wujitang)
      </li>
    </ul>
  </v-app>
</template>

<script>
export default {
  name: 'Cantonese',
  data () {
    return {
      images: [
        'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1523670239418&di=b319c956466ceecb055fdef40ff76607&imgtype=0&src=http%3A%2F%2Fimg.mp.itc.cn%2Fupload%2F20161115%2F4dcb179c64af4b1ca28b394f066dfb66_th.jpeg',
        'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1523670239418&di=16379239ffa0baf004c7c658cfc06b1f&imgtype=0&src=http%3A%2F%2Fn1.itc.cn%2Fimg8%2Fwb%2Frecom%2F2016%2F05%2F09%2F146273132096929880.JPEG',
        'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1523670239418&di=0cb62ab0f21cf05664dc133b3d75d9fd&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimage%2Fc0%253Dpixel_huitu%252C0%252C0%252C294%252C40%2Fsign%3Ddbbb19fd01d162d991e36a5c78a7cc80%2F0b46f21fbe096b632f97096907338744ebf8ac79.jpg',
        'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1523670239416&di=91498d146d985aff52e4f07366bb646a&imgtype=0&src=http%3A%2F%2Fimg.mp.itc.cn%2Fupload%2F20170511%2F87643cba54ef44a08e0fa5b8a4e9ff4e_th.jpg',
        'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1523670239414&di=aa00cfd462c471e18ef3258a47451fa7&imgtype=0&src=http%3A%2F%2Fpic1.win4000.com%2Fwallpaper%2F7%2F55cda11b2af6e.jpg'
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
