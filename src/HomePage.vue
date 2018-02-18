<template>
  <div class="home">
    <div class="bg-mask"></div>
    <search-box> </search-box>
    <div class="recipe-container">
    <hot-recipe></hot-recipe>
    </div>

  </div>
</template>

<script>
import SearchBox from './components/SearchBox'
import HotRecipe from './components/HotRecipe'
// import RecipeCard from './components/RecipeCard'

export default {
  name: 'home-page',
  components: {
    SearchBox,
    HotRecipe
  }

}
</script>

<style>
  .home {
    /*font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;*/
    text-align: center;
  }
  html, head, body, div, p, h3 {
    padding: 0;
    margin: 0;
    bottom: 0;
  }
  body {
    background-image: url('./assets/img/fantasy-3000308_1920.jpg');
    background-attachment: fixed;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
  }
  .bg-mask {
    position: fixed;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.3);
    z-index: -9999;
  }
  .recipe-container {
    display: inline-block;
    width: 60%;
    background-color: rgba(255, 255, 255, 0.5);
    border-width: 0;
    outline-color: rgba(255, 255, 255, 0.7);
    border-radius: 1.5rem;
    color: white;
    padding: 1rem;
    margin-top: 1.5rem;
  }
</style>
