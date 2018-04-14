<template>
  <v-app class="cardWrapper">
    <v-carousel>
      <v-carousel-item v-for="(image) in images" :src="image" :key="image"></v-carousel-item>
    </v-carousel>
    <h1>Red Stewing</h1>
    red-cooked porkRed-cooked pork
    Red stewing is a unique Chinese cooking technique, used primarily for cooking a tougher cut of meat or poultry.

    Preparation
    The food is cooked very slowly over a low flame. Meat is usually browned first, then large quantities of soy sauce, sugar, wine or sherry, ginger, five-spice powder, chili powder, cilantro, and other seasonings are added, together with water or broth.

    It may take up to several hours before the meat is done to the desired tenderness. The finished product can be served hot or cold. The sauce is rich and dark brown; hence the descriptive name “red stewing”.

    Famous Red-Cooked Dishes
    The most famous examples of red-cooking are red-cooked spare ribs and red-cooked fish.

    Cooking Utensils Used
    For red-cooking you need a stew pot, or a slow cooker.
  </v-app>
</template>

<script>
export default {
  name: 'RedStewing',
  data () {
    return {
      images: [
        'http://img0.imgtn.bdimg.com/it/u=2039463737,102085507&fm=200&gp=0.jpg',
        'http://img5.imgtn.bdimg.com/it/u=481138309,1334496706&fm=200&gp=0.jpg',
        'http://img0.imgtn.bdimg.com/it/u=650855611,439922063&fm=200&gp=0.jpg'
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
