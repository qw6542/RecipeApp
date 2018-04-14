<template>
  <v-app class="cardWrapper">
    <v-carousel>
      <v-carousel-item v-for="(image) in images" :src="image" :key="image"></v-carousel-item>
    </v-carousel>
    <h1>Stir-Frying</h1>
    <p>Frying is a traditional method of cooking in China. When cooking food, put a small amount of oil in the pan to quickly cook on a stir, stir, and cook. During the frying process, food is always in motion. Scatter the food on the side of the pot, and then receive the pot, and then repeat the operation repeatedly. This kind of cooking method makes the meat juice more and more delicious and makes the vegetables tender and brittle. Of course, the method of frying is varied, but the basic method of operation is to heat the wok or pan first (at this time the pan will be hot and it will make a buzzing sound). Fry the meat first and wait until it is cooked. Then fry the vegetables, then pour the fried meat into the pot and mix it with the sauce and seasoning until the juice is harvested. Pan up and down the plate. Because cooking is only done before dinner, do not prepare more than two dishes for each meal.</p>
    <h4>Cooking Utensils Used </h4>
    <p>The cooking utensils are a wok and wok spatula. Stir-frying is typically done on a gas stove, although an electric stove can be used if preheated to a high heat.</p>

    <h4> Ingredients That Can be Cooked in This Way </h4>
    <p>Stir-frying typically uses a combination of meat or seafood, vegetables, and tofu. All ingredients are thinly sliced or cubed. The meat or seafood is marinated using soy sauce, salt, and other seasonings.</p>
    <h4>Steps for Stir-Frying </h4>
    <ol>
      <li>All ingredients should be ready prior to heating up the wok. (The food to be cooked should be finely sliced or shredded into similar sized pieces using a very sharp knife or Chinese cleaver)</li>
      <li> When the wok is hot, a small amount of oil is added.</li>
      <li> The meat or seafood is quickly stirred and turned until semi-cooked. It is then removed from the wok and set to one side.</li>
      <li> More oil is added to the wok, if necessary. The vegetables and/or tofu are added and quickly stir-fried.</li>
      <li> The meat or seafood is added back midway through cooking, the seasonings are adjusted if necessary, and the dish is stirred until done. It should be served immediately.</li>
    </ol>
  </v-app>
</template>

<script>
export default {
  name: 'StirFry',
  data () {
    return {
      images: [
        'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1523571901201&di=98685c053fb792d809817ba52c97dfdb&imgtype=0&src=http%3A%2F%2Fpic.58pic.com%2F58pic%2F13%2F45%2F84%2F82m58PICB69_1024.jpg',
        'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1523571901201&di=b650f6bd5c288f9dd7e5fc29e45de46e&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimage%2Fc0%253Dpixel_huitu%252C0%252C0%252C294%252C40%2Fsign%3Dbbe7190e3efae6cd18b9a32166cb6a48%2F1f178a82b9014a90dacfbe84a2773912b31bee12.jpg',
        'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1523571901203&di=4812ed49df7f2edec3202309c9d98bd9&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimage%2Fc0%253Dpixel_huitu%252C0%252C0%252C294%252C40%2Fsign%3D89a58cfe9b529822113e3183beb21ea7%2F3bf33a87e950352a09da95315843fbf2b2118b54.jpg'
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
