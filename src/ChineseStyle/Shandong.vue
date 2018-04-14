<template>
  <v-app>
    <v-carousel>
      <v-carousel-item v-for="(image) in images" :src="image" :key="image"></v-carousel-item>
    </v-carousel>
    <h1>Shandong Cuisine </h1>
    <p><b>Location:</b> <a href="https://goo.gl/maps/xzMNTA66ioE2">Shandong</a> northern east-coast China — Qingdao, Jinan, Qufu, Mount Tai
    <p><b>Distinctives:</b> salty and crispy, favoring braising and seafood.</p>
    <h2>Flavors of Shandong Cuisine </h2>
    <p>— Fishy, Salty, Tender, Light and Crispy</p>
    <p>A wide variety of seafood are used to make Shandong dishes, and the people also like to eat pork. An ancient medical/science text describes the people in the area as relishing both fish and salt, and the people still do
    </p>
    <h2>Their Favorite Cooking Methods</h2>
    <p>The Shandong chef's goal: Unlike other Chinese styles such as Sichuan style where the cook buries the food in a lot of spices and oil, the main aim of an authentic Shandong style chef is to preserve the cut, color, and taste of the main ingredients. So relatively little spice or sugar is used generally and the bao stir fry method is used often.</p>
    <p><b>Soup making:</b> Clear broth and white varieties of soups are also popular. The white variety may contain milk or cream. The tradition of making soups stems from the western side of Shandong.</p>
    <p><b>Healthy food:</b> Since the main aim is to preserve the cut, color, and taste, the style of cooking preserves the nutritive value of the food. So the cuisine is generally healthy providing you eat wisely and don't overindulge in any particular food such as pork dishes or lobster.</p>
  </v-app>
</template>

<script>
export default {
  name: 'ShanDong',
  data () {
    return {
      images: [
        'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1523671634342&di=fde88d5aa85696c563282addae9f6b16&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimage%2Fc0%253Dpixel_huitu%252C0%252C0%252C294%252C40%2Fsign%3D33c5a388da58ccbf0fb1bd7a70a0d952%2F4610b912c8fcc3ce43e6c3099945d688d43f20e1.jpg',
        'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1523671582934&di=72920393d9400336413212c0de4046cf&imgtype=0&src=http%3A%2F%2Fimage4.cnpp.cn%2Fupload%2Fimages%2F20151216%2F21405922115_550x401.jpg',
        'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1523671634347&di=900945852ec05631938122094e0563e0&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimage%2Fc0%253Dpixel_huitu%252C0%252C0%252C294%252C40%2Fsign%3D7af628f989025aafc73f768b9295ce08%2Fdbb44aed2e738bd418f9dc08aa8b87d6277ff92b.jpg'
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
