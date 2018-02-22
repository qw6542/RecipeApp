<template>
  <div id="search-box" class="
    col-xs-10
    col-xs-offset-1
    col-sm-8
    col-sm-offset-2
    col-md-6
    col-md-offset-3
  ">
    <h1>bala</h1>
    <form action="#" id="search-form">
      <input type="search" v-model="str_search" required/>
      <button type = "submit">Go</button>
    </form>
    <div id="search-tag-container">
      <button v-for="item in items" v-on:click="addFood(item)" :key="item"> {{ item }} </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'search-box',
  data () {
    return {
      items: [
        'apple', 'banana',
        'carot', 'Pork',
        'Chicken', 'beef',
        'milk', 'noodle'
      ],
      str_search: ''
    }
  },
  methods: {
    addFood (food) {
      this.str_search += food + ' '
    }
  }
}

</script>

<style scoped>
  @import '../assets/css/material.min.css';

  #search-box h1 {
    color: white;
    font-size: 3em;
    font-weight: normal;
  }

  #search-form input {
    display: inline-block;
    width: 70%;
    font-size: 1.5em;
    height: 3rem;
    background-color: rgba(255, 255, 255, 0.5);
    border-width: 0;
    outline-color: rgba(255, 255, 255, 0.7);
    border-radius: 1.5rem;
    color: white;
    padding: 1rem;
    margin-top: 1.5rem;
  }

  #search-form button {
    display: inline-block;
    font-size: 1.5em;
    height: 3rem;
    border-radius: 1.5rem;
    width: 10%;
    margin: 0 0 0 3%;
    border: 1px solid white;
    color: white;
    background-color: rgba(255, 255, 255, 0);
  }

  #search-form button:hover {
    background-color: rgba(255, 255, 255, 0.3);
  }

  #search-tag-container {
    /*background: white;*/
    width: 70%;
    margin-top: 2.5rem;
    padding-left: calc(17% / 2);
  }

  #search-tag-container button {
    margin: 1em;
  }
</style>
