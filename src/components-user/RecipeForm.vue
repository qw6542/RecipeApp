<template>
    <Form>
      <input type="text" placeholder="title">
      <input type="text" placeholder="ingredient">
      <input type="file" name="image">
      <textarea name="message" rows="10" cols="30">
    </textarea>
      <button>Submit</button>
    </Form>
</template>

<script>
export default {
  name: 'recipe-form'
}
</script>

<style scoped>

</style>
