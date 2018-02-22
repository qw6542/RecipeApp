<template>
  <div class="home">
    <search-box> </search-box>
    <div class="recipe-container">
    <hot-recipe></hot-recipe>
    </div>
  </div>
</template>

<script>
import SearchBox from './components/SearchBox'
import HotRecipe from './components/HotRecipe'

export default {
  name: 'home-page',
  components: {
    SearchBox,
    HotRecipe
  }

}
</script>

<style>
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
