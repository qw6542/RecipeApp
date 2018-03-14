<template>
  <v-app  class="wrapper">
  <v-form action="" v-model="valid" >
    <h2>Add Your Own recipe:</h2>
    <v-text-field label="Recipe Title" color="white" :dark=false  :rules="titleRules" required v-model="title" > </v-text-field>
      <image-uploader  v-on:child-say="uploadImage"></image-uploader>
    <br/>
    <IngredientTable v-on:child-say="inputIngredient" class="mx-2"></IngredientTable>
    <DescriptionTable v-on:child-say="inputDescription" class="mx-2"></DescriptionTable>
      <v-btn dark>Save All</v-btn>
      <v-btn @click="submit" :disabled="!valid" color="success">Submit</v-btn>
  </v-form >
      <v-chip  v-model="success" close class="success" > Recipe Uploaded</v-chip>
    <v-chip v-model="warning" close class="warning"> Please Enter At Least  One Ingredient,Reciepe and Image</v-chip>
  </v-app>
</template>

<script>
import ImageUploader from './ImageUploader'
import IngredientTable from '../components-user/IngredientTable'
import DescriptionTable from '../components-user/DescriptionTable'
export default {
  name: 'upload-recipe',
  data: function () {
    return {
      title: '',
      success: false,
      warning: false,
      valid: false,
      titleRules: [
        v => !!v || 'title is required'
      ],
      newRecipe: {title: '',
        image: '',
        user_id: '',
        ingredients: [],
        descriptions: []
      }
    }
  },
  methods: {
    uploadImage (image) {
      this.newRecipe.image = image
    },
    inputDescription (data) {
      this.newRecipe.descriptions = data
    },
    inputIngredient (data) {
      this.newRecipe.ingredients = data
    },
    submit  () {
      if (this.newRecipe.ingredients.length === 0 || this.newRecipe.descriptions.length === 0 ||
        this.newRecipe.image === undefined) {
        this.warning = true
      } else {
        this.newRecipe.user_id = this.$auth.getAuthenticatedUser().id
        this.newRecipe.title = this.title
        this.$auth.setHeader()
        this.$http.post('http://www.recipe123.uk/api/recipes/create', this.newRecipe)
          .then(response => {
            this.success = true
            this.newRecipe.splice(0, this.newReciepe.length)
          }, (error) => {
            console.log(error)
          })
      }
    }
  },
  components: {
    ImageUploader,
    IngredientTable,
    DescriptionTable
  },
  mounted () {
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
