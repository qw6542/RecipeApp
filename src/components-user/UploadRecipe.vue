<template>
  <v-app  class="wrapper">
  <form action="">
    <h2>Add Your Own recipe:</h2>
    <v-text-field label="Recipe Title" color="white" :dark=false v-model="title" > </v-text-field>
      <file-uploader></file-uploader>
    <br/>
    <IngredientTable class="mx-2"></IngredientTable>
    <DescriptionTable class="mx-2"></DescriptionTable>
      <v-btn dark>Save All</v-btn>
      <v-btn color="success">Submit</v-btn>

  </form >
  </v-app>
</template>

<script>
import FileUploader from '../components-user/FileUploader'
import IngredientTable from '../components-user/IngredientTable'
import DescriptionTable from '../components-user/DescriptionTable'
export default {
  name: 'upload-recipe',
  data: function () {
    return {
      title: ''
    }
  },
  components: {
    FileUploader,
    IngredientTable,
    DescriptionTable
  }
}
</script>

<style scoped>
  .wrapper {
    background-color:rgba(0, 0, 0, 0.5);
    border-radius: 1.5rem;
    color: white;
  }
</style>
