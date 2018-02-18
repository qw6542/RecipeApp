<template>
  <form action="">
    <label for="title"></label>
    <input type="text" id="title" placeholder="Recipe Name">
    <t3>Add ingredient</t3>
    <input type="text" id="ingredient">
    <button id="btn-addIngredients">Add</button>
    <t3>Add step</t3>
    <input type="text" id="description">
    <button id="btn-addDescription">Add</button>
  </form>
</template>

<script>
export default {
  name: 'upload-recipe',
  data () {
    return {
      ingredients: '',
      description: ''
    }
  }
}
</script>

<style scoped>

</style>
