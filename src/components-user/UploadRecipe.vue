<template>
  <div>
  <form action="" class=" wrapper">
    <h2>Add Your Own recipe:</h2>
    <div>
    <input type="text" id="title" placeholder="Recipe Name" v-model="title">
    </div>
    <hr/>
    <div>
      <file-uploader></file-uploader>
    </div>
    <hr/>
    <table>
      <tr>
        <th>Quantity</th>
        <th>Measurement</th>
        <th>Ingredient</th>
        <th> </th>
      </tr>
      <tr>
        <td>
          <input type="number" id="quantity" v-model="ingredient_item.quantity" min="0" max="99" ></td>
        <td>
          <input type="text" id="" v-model="ingredient_item.measurement" placeholder="e.g. teaspoon"></td>
        <td><input type="text" id="ingredient" v-model="ingredient_item.ingredient" placeholder="e.g. egg"></td>
        <td><button id="btn-addIngredients" v-on:click="addIngredient">Add This</button></td>
      </tr>
      <tr  v-for="i in ingredients" :key="i.id">
        <td>{{i.quantity}}</td>
        <td>{{i.measurement}}</td>
        <td>{{i.ingredient}}</td>
        <td><a href="#" v-on:click.prevent.stop="deleteIngredient(i)">X</a></td>
      </tr>
    </table>
    <hr/>
    <table class="description-table">
      <tr><th>Description</th></tr>
      <tr>
       <td> <textarea id="description" v-model="des_item"></textarea></td>
      <td> <button id="btn-addDescription" v-on:click="addDescription">Add This</button></td>
      </tr>
    </table>

      <ol>
        <li v-for="i in description" :key="i.id">{{i}} <a href="#" v-on:click.prevent.stop="deleteDescription(i)">X</a></li>
      </ol>

    <button>Submit</button>
  </form >
  </div>
</template>

<script>
import FileUploader from '../components-user/FileUploader'
export default {
  name: 'upload-recipe',
  data: function () {
    return {
      title: '',
      ingredient_item: {
        quantity: null,
        measurement: '',
        ingredient: ''
      },
      des_item: '',
      ingredients: [],
      description: []
    }
  },
  components: {
    FileUploader
  },
  methods: {
    addIngredient () {
      if (this.checkEmpty(this.ingredient_item.ingredient)) {
        this.ingredients.push(this.ingredient_item)
        this.ingredient_item = {ingredient: ''}
      }
    },
    addDescription: function () {
      if (!this.checkEmpty(this.des_item)) {
      } else {
        this.description.push(this.des_item)
        this.des_item = ''
      }
    },
    deleteIngredient (item) {
      let index = this.ingredients.findIndex(obj => obj === item)
      this.ingredients.splice(index, 1)
    },
    deleteDescription (item) {
      let index = this.description.findIndex(obj => obj === item)
      this.description.splice(index, 1)
    },
    checkEmpty: function (item) {
      if (item === '') {
        alert('cannot add empty value')
        return false
      }
      return true
    }
  }
}
</script>

<style scoped>
  .wrapper {
    width: 60%;
    text-align: center;
    margin-left: 20%;
    background-color:#4fc3f7;
    border-radius: 1.5rem;
  }
   .wrapper div
   {
    padding: 1rem;
    margin: 1rem;
  }
  #title{
    width:50%;
    height: 1.5rem;
    text-align: center;
  }
  /*#ingredient{*/
    /*margin-left: 10%;*/
  /*}*/
  /*#description{*/
    /*margin-left: 11%;*/
  /*}*/
  .wrapper label {
    float: left;
  }
  ul,ul li{
    list-style-type: none;
  }
  table{
    text-align: center;
    width: 100%
  }
  #description{
    width: 100%;
    height: 5rem;
    padding: 1rem;
    border-radius:1.5rem;
  }
  .description-table {
    width: 100%;
  }
  .description-table button{
    margin: 1rem;
  }
</style>
