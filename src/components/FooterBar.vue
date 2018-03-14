<template>
    <v-footer  height="auto" class="footer">
      <v-layout row wrap justify-center>
        <a color="white" flat href="/" >Home </a>
        <a color="white" flat  href="https://www.surveymonkey.co.uk/r/8KBXPMT">Survey</a>
        <a color="white" flat>Bug Report</a>
        <a color="white" flat>Contact </a>
        <a color="white" flat href="http://www.ncl.ac.uk">Newcastle University</a>
        <v-flex xs12 py-3 text-xs-center white--text>
          &copy;2018 — <strong>Desertation Project Of Riwang Xue </strong>
        </v-flex>
      </v-layout>
    </v-footer>
</template>

<script>
export default {
  name: 'footer-bar',
  data () {
    return {
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
   .footer{
    width: 100%;
    margin: 0;
    padding: 1em;
    background-color: rgba(0,0,0,0.5);
    overflow: hidden;
    box-shadow: 0 0 0 1px hsla(0,0%,100%,.3) inset, 0 .5em 1em rgba(0, 0, 0, 0.6);
    text-shadow: 0 1px 1px hsla(0,0%,100%,.3);
     /*bottom: 0;*/
  }
    .footer a {
      display: inline-block;
      font-size: 1.3em;
      line-height: 3rem;
      color: white;
      padding: 0 2rem;
      text-decoration: none;
    }

    .footer a:hover {
      background-color: rgba(255,255,255,0.5);
    }

</style>
