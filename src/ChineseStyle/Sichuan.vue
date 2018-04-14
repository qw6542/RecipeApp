<template>
  <v-app>
    <v-carousel>
      <v-carousel-item v-for="(image) in images" :src="image" :key="image"></v-carousel-item>
    </v-carousel>
    <h1>Sichuan Cuisine </h1>
    <p><b>Location:</b> <a href="https://goo.gl/maps/NxqjXTaNmLU2">Sichuan</a>  Southwestern region of China, — Chengdu, Jinan, ChongQing

    <p><b>Distinctives:</b> hot and spicy</p>
    <p> Sichuan province is the birthplace of many dishes that are well-received globally. Sichuan food, originated from the is the most widely served cuisine in China itself. The dishes of Sichuan cuisine are known for their deep and rich flavours, especially the taste of Sichuan pepper which is rare in other regional cuisines.
    </p>
    <h2>Flavors of Sichuan Cuisine</h2>
    <p>Sichuan cuisine holds a reputation for its variety of seasonings used, as each dish requires different cooking methods. As the saying goes, 'one dish with one flavor, with one hundred dishes come hundred flavors.'
    </p>
    <p>Sichuan food is most well-known for its hot and spicy flavor, though it may sport sweet and sour flavors too. The most commonly used spices you can find in most households and eateries are "The Five Fragrances" which consist of fennel, pepper, aniseed, cinnamon, and clove; chili and Sichuan pepper.
    </p>
    <h2>Seasonings of Sichuan Cuisine</h2>
    <p>Dry Red ChilisDried chili peppers, one of the most common seasonings of Sichuan cuisine.
      Sichuan cuisine cannot do without Sichuan pepper, black pepper, chili, broad bean chili paste, shallots, ginger, and garlic. These are must-have seasonings that bring out the intense flavors the dishes are renowned for.
    </p>
    <p>The other fresh produce used range widely from pork to beef, fish, vegetables, and even tofu
    </p>
    <h2>Cooking Methods</h2>
    <p>The cooking methods of Sichuan cuisine vary according to texture and bite required for each specific dish. The array of cooking methods include stir-frying, steaming, braising, baking, and the most popular of which is fast-frying.
    </p>
    <h2>Spicy Diced Chicken (Kung Pao Chicken)
    </h2>
    <p>Kung Pao Chicken is its Cantonese name, and read as Gongbao Jiding in Mandarin.
      The dish is prepared by frying diced chicken and dry red pepper with golden peanuts. Spicy diced chicken is more popular among Westerners than its counterpart mapo tofu. This is because it is usually less spicy, or not at all, when served abroad and outside Sichuan province. Learn how to cook Kung Pao Chicken.
    </p>
    <h2>Sichuan Hot Pot</h2>
    <p>Sichuan hotpot, like most of the cuisine in this humid and populous province, is numbingly spicy. The broth is flavored with chili peppers and other strong-tasting herbs and spices.
    </p>
    <p>The main ingredients include hot pepper, Chinese crystal sugar, and wine. Slices of kidney, chicken breast, beef tripe, goose intestines, spring onion, soy bean sprouts, mushrooms, duck, and sea cucumber are the usual meats used in the dish. Learn more about Hot Pot.
    </p>
  </v-app>
</template>

<script>
export default {
  name: 'SiChuan',
  data () {
    return {
      images: [
        'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1523671800712&di=6de7bd8eeab12cadee0d327e14e253da&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimgad%2Fpic%2Fitem%2Fd6ca7bcb0a46f21f3e96d1cefc246b600d33ae89.jpg',
        'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1523671800711&di=abfee6506c62da6bb35c69fc82b08773&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimage%2Fc0%253Dpixel_huitu%252C0%252C0%252C294%252C40%2Fsign%3Db6b2844ff91fbe090853cb540218695f%2Ffaf2b2119313b07e07f9eb3107d7912397dd8c47.jpg',
        'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1523672057382&di=38cb75379961304f647165a803f6d032&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimgad%2Fpic%2Fitem%2Ff3d3572c11dfa9ecb612808a68d0f703918fc16b.jpg',
        'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1523671800709&di=b4538a169a6d7e86f7f28ce0f128f5a3&imgtype=0&src=http%3A%2F%2Fimgupload.youboy.com%2Fimagestore2016052695955b5e-4fb2-4583-a1bf-7e167643c214.jpg',
        'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1523672000500&di=7791595db65702042e39386609fb2b2c&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimage%2Fc0%253Dpixel_huitu%252C0%252C0%252C294%252C40%2Fsign%3Dfc36d0a5af0f4bfb98dd96146a371d9c%2F2f738bd4b31c8701dfbf0ddc2c7f9e2f0708fffb.jpg'
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
