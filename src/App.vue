<template>
  <div>
    <nav-bar> </nav-bar>
    <router-view/>
    <footer-bar></footer-bar>
  </div>
</template>

<script>
import NavBar from './components/NavBar'
import FooterBar from './components/FooterBar'

export default {
  name: 'App',
  components: {
    NavBar,
    FooterBar
  }
}
</script>

<style>
</style>
