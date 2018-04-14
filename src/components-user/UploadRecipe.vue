<template>
    <v-app  class="wrapper black" >
  <v-form v-on:submit="submit()" action="#" v-model="valid" method="post"  >
    <h1>Add Your Own recipe:</h1>
    <v-text-field label="Recipe Title" color="white" :dark=false  :rules="titleRules" required   v-model="newRecipe.title" > </v-text-field>
    <h2>Cooking Method</h2>
    <v-select
      :items="dropdown_method"
      label="Select"
      editable
      item-value="text"
      v-model="newRecipe.method"
    ></v-select>
    <h2>Recipe Style</h2>
    <v-select
      :items="dropdown_style"
      label="Select"
      editable
      item-value="text"
      v-model="newRecipe.style"
    ></v-select>

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
      success: false,
      warning: false,
      valid: false,
      titleRules: [
        v => !!v || 'title is required'
      ],
      dropdown_method: [
        { text: 'Boiling' },
        { text: 'Braising' },
        { text: 'DeepFry' },
        { text: 'RedStewing' },
        { text: 'Roasting' },
        { text: 'Steaming' },
        { text: 'StirFry' }
      ],
      dropdown_style: [
        {text: 'Cantonese'},
        {text: 'Shandong'},
        {text: 'Jiangsu'},
        {text: 'Sichuan'},
        {text: 'Fujian'},
        {text: 'AnHui'},
        {text: 'Hunan'}
      ],
      newRecipe: {title: '',
        image: '',
        user_id: '',
        method: '',
        style: '',
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
      if (this.newRecipe.ingredients[0] === undefined || this.newRecipe.descriptions[0] === undefined ||
        this.newRecipe.image === undefined) {
        this.warning = true
      } else {
        this.newRecipe.user_id = this.$auth.getAuthenticatedUser().id
        this.newRecipe.title = this.title
        this.$auth.setHeader()
        this.$http.post('/api/recipes/create', this.newRecipe)
          .then(response => {
            this.success = true
            //
            // this.newRecipe = JSON.parse(JSON.stringify())
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
