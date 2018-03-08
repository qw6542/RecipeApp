<template>
    <v-footer height="auto" class="shaddow">
      <v-layout row wrap justify-center>
        <v-btn
          color="white"
          flat
          v-for="link in links"
          :key="link"
          class="content"
        >
          {{ link }}
        </v-btn>
        <v-flex xs12 py-3 text-xs-center white--text>
          &copy;2018 — <strong>Desertation Project</strong>
        </v-flex>
      </v-layout>
    </v-footer>
</template>

<script>
export default {
  name: 'footer-bar',
  data () {
    return {
      links: ['Home', 'About Us', 'Team', 'Services', 'Blog', 'Contact Us']
    }
  }
}
</script>
<style scoped>
    /**transparent effect
    * cover screen bottom
    * rgba better than using opacity
    * child will inherite if using opacity
    */
   .shaddow{
    width: 100%;
    margin: 0;
    padding: 1em;
    background-color: rgba(0,0,0,0.5);
    overflow: hidden;
    box-shadow: 0 0 0 1px hsla(0,0%,100%,.3) inset, 0 .5em 1em rgba(0, 0, 0, 0.6);
    text-shadow: 0 1px 1px hsla(0,0%,100%,.3);
     /*bottom: 0;*/
  }

</style>
