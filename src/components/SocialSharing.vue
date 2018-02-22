<template>
  <div>
  <vue-goodshare-facebook
  page_url="https://github.com"
  has_icon
  ></vue-goodshare-facebook>
  </div>
</template>

<script>
import VueGoodshareFacebook from 'vue-goodshare/src/providers/Facebook.vue'
export default {
  name: 'social-sharing',
  components: {
    VueGoodshareFacebook
  }
}
</script>

<style scoped>
div {
  float: right;
}
</style>
