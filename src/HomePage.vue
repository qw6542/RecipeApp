<template>
  <div>
    <search-box> </search-box>
    <v-layout row wrap>
      <v-flex  xs2  sm2 md2 lg2)></v-flex>
      <v-flex xs8  sm8 md8 lg8>
    <hot-recipe></hot-recipe>
    </v-flex>
    </v-layout>
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
</style>
