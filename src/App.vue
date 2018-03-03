<template>
  <div id="app" class="home">
    <div class="bg-mask">
    </div>
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
  #app {
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
    background-image: url('./assets/img/3.jpg');
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
</style>
