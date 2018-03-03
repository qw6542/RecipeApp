<template>
  <div>
    <picture-input
      ref="pictureInput"
      @change="onChange"
      width="485"
      height="300"
      margin="0"
      padding="0"
      accept="image/jpeg,image/png"
      size="300"
      buttonClass="btn"
      :customStrings="{
        upload: '<h1>Bummer!</h1>',
        drag: 'Drag a 😺 GIF or GTFO'
      }">
    </picture-input>
  </div>
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
