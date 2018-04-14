<template>
  <div>
    <picture-input
      v-bind:image="image"
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
        drag: 'Drag or click to upload photo here'
      }">
    </picture-input>
  </div>
</template>

<script>
import PictureInput from 'vue-picture-input'
export default {
  name: 'image-uploader',
  data () {
    return {
      image: ''
    }
  },
  components: {
    PictureInput
  },
  methods: {
    onChange (image) {
      console.log('New picture selected!')
      if (image) {
        this.$emit('child-say', image)
      } else {
        console.log('FileReader API not supported: use the <form>, Luke!')
      }
    }
  }
}
</script>
<style>
</style>
