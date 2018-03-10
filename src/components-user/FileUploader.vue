<template>
    <picture-input
      ref="pictureInput"
      @change="onChange"
      width="485"
      height="300"
      :zIndex= 1
      removable
      accept="image/jpeg,image/png"
      size="300"
      buttonClass="btn"
      class="pad"
      :customStrings="{
        upload: '<h1>Bummer!</h1>',
        drag: 'Drag a 😺 GIF or GTFO'
      }">
    </picture-input>
</template>

<script>
import PictureInput from 'vue-picture-input'
export default {
  name: 'file-uploader',
  data () {
    return {
    }
  },
  components: {
    PictureInput
  },
  methods: {
    onChange (image) {
      console.log('New picture selected!')
      if (image) {
        console.log('Picture loaded.')
        this.image = image
      } else {
        console.log('FileReader API not supported: use the <form>, Luke!')
      }
    }
  }
}
</script>
<style>
</style>
