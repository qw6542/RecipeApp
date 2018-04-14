<template>
  <v-app>
    <v-carousel>
      <v-carousel-item v-for="(image) in images" :src="image" :key="image"></v-carousel-item>
    </v-carousel>
    <h1>Anhui Cuisine </h1>
    <p>  <b>Location:</b> <a href="https://goo.gl/maps/ESU5MiwAEdv"> Anhui Province </a>(inland E. China)Huangshan (Yellow Mts.), Hefei</p>
    <p>  <b>Distinctives:</b> many wild plant/animal ingredients, more stewing and oil </p><br/>
    <p>Anhui cuisine (Hui Cai for short), one of the eight most famous cuisines in China, features the local culinary arts of Huizhou. It comprises the specialties of South Anhui, Yanjiang and Huai Bei. The highly distinctive characteristic of Anhui cuisine lies not only in the elaborate choices of cooking materials but also in the strict control of cooking process. </p>
    <p>Most ingredients in Anhui cuisine, such as pangolin, stone frog, mushroom, bayberry, tea leaves, bamboo shoot, dates, games, etc., are from mountain area. Huangshan Mountain has abundant products for dish cooking. Huangshan Chukka has tender flesh and a sweet taste. It can be boiled in clear soup or braised in soy sauce. The dishes help relieve internal fever and build up vital energy. The white and tender bamboo shoots produced on Huangshan Mountain can be made into very delicious food. Xianggu, a kind of top-grade mushroom grows on old trees, is also very tasty.</p>
    <p>Anhui cuisine chefs pay more attention to the taste, color of dishes and the temperature to cook them, and are good at braising and stewing. They are experts especially in cooking delicacies from mountains and sea. Anhui dishes preserve most of the original taste and nutrition of the materials. Generally the food here is slightly spicy and salty. Some master dishes usually stewed in brown sauce with stress on heavy oil and sauce. Ham is often added to improve the taste and sugar candy added to gain freshness.</p>
    <p>High up on the menu are stewed soft shell turtle with ham, Huangshan braised pigeon, steamed stone frog, steamed rock partridge, stewed fish belly in brown sauce, bamboo shoots cooked with sausage and dried mushroom, etc.</p>
      <h2>Stewed soft shell turtle with ham</h2>
      <p>One whole soft shell turtle, pork, ham, bamboo shoots, a clove of garlic, shallot, ginger, soy sauce, salt, rice wine, black pepper, lard are all stewed together in a pot on charcoal fire. The dish is not greasy and can lead diners to endless aftertastes.</p>
      <h2>Steamed stone frog</h2>
     <p>Inhabited in caves, stone frog is a special product in
       Huangshan Mountain. It weights 250 grams or so, whose belly is white and back black with stripe. Stone frog is rich in protein, calcium and so on. It has the functions of clearing heat, improving vision and nutrition. It is one of the best exotic dishes from mountains.</p>
    <h2>Bamboo shoots cooked with sausage and dried mushroom</h2>
    <p>It is one traditional flavor in Huizhou mountainous area. Cooked with sausage and dried mushrooms, the bamboo shoots are more fragrant. It is delicious, and noted for its good color, juicy meat and thick soup.</p>
    <h2>Li Hongzhang Hotchpotch </h2>
    <p>Li Hongzhang hotchpotch is a popular dish named after one of Anhui's famous personages. Li Hongzhang was a top official of the late Qing Dynasty (1644-1911 AD). When he was in office, he paid a visit to the US and hosted a banquet for all his American friends. As the specially prepared dishes continued to flow, the chefs, with limited resources, began to fret. Upon Li Hongzhang's order, the remaining kitchen ingredients were thrown together into an impromptu stew, containing sea cucumber, squid, tofu, ham, mushroom, chicken meat and other less identifiable food materials! Thus appetites were quenched and a dish was created.</p>
  </v-app>
</template>

<script>
export default {
  name: 'AnHui',
  data () {
    return {
      images: [
        'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1524268254&di=1f147c9d77f1899466e9827e4e095875&imgtype=jpg&er=1&src=http%3A%2F%2Fimg01.gongjiao.com%2F2016-07%2F05%2F577b4920%2F577b492057e1b67c1bb4c17e%2F1467704078873_767887.jpg',
        'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=47551920,2185739804&fm=200&gp=0.jpg',
        'https://timgsa.baidu.com/timg?image&quality=80&size=b10000_10000&sec=1523663821&di=a30c2d25864bfc8b6ab6459bee3d8a41&src=http://www.sinocars.com/uploadfile/2016/0325/20160325014817791.jpg',
        'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1523670511504&di=5c2071096f87a0ecd59e98ad80ec6df7&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimgad%2Fpic%2Fitem%2Fcdbf6c81800a19d82e9da10f39fa828ba61e4619.jpg',
        'http://img4.imgtn.bdimg.com/it/u=3347815350,4085566202&fm=200&gp=0.jpg'
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
