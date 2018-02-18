<template>
  <div>
  <vue-goodshare-facebook
  page_url="https://github.com"
  title_social="Facebook"
  has_icon
  ></vue-goodshare-facebook>
  </div>
</template>

<script>
import VueGoodshareFacebook from 'vue-goodshare/src/providers/Facebook.vue'
import VueFab from 'vue-float-action-button'

export default {
  name: 'social-sharing',
  components: {
    VueGoodshareFacebook,
    VueFab
  }
}
</script>

<style scoped>

</style>
