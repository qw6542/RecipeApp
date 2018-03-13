<template>
  <v-container>
    <h1>Receipe</h1>
    <form action="#" class="search-form">
      <input type="search" v-model="str_search" required/>
      <button type = "submit">Go</button>
    </form>
    <v-layout row wrap>
      <v-flex xs10 offset-xs1 class="search-tag-container">
    <v-layout off-set row wrap justify-start align-center  v-for="(value, key) in  glossary" :key="key">
        <v-flex xs12 sm2 md2 lg2 >
        <v-switch  :label=key color="green"  v-model=selected :value=key @change="toggle(key)"></v-switch>
        </v-flex>
      <v-flex xs0 sm0 md8 lg8>
      <v-chip v-for="i in value" :key="i"  color="green" close @click="addFood(i, $event)" @input="deleteChip(value,i)">{{i}}</v-chip>
      </v-flex>
    </v-layout>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<!--<template slot="no-data">-->
  <!--<v-btn color="primary" @click="initialize">Reset</v-btn>-->
<!--</template>-->
<script>
/* eslint-disable no-trailing-spaces */

export default {
  name: 'search-box',
  data () {
    return {
      str_search: '',
      selected: [],
      glossary: {
        'Sauce': ['Soy Sauce', 'Hoisin sauce', 'Black vinegar', 'Oyster sauce', 'Bean curd'],
        'Spice': [ 'Dried chili peppers', 'Sichuan peppercorn', 'Star anise' ],
        'Vegetable': ['Spring Onion', 'Chives', 'Pakchoi', 'Cabbage'],
        'Oil': ['Peanut Oil', 'Sesame Oil', 'Rap Oil']
      },
      glossary_backup: []
    }
  },
  methods: {
    addFood (food) {
      // this.btn = event.currentTarget.innerHTML
      //      alert(+btn.innerHTML)
      if (!this.isSelected(food)) {
        this.str_search += food + ' '
        this.selected.push(food)
      } else {
        this.selected.splice(this.selected.indexOf(food), 1)
      }
    },
    deleteChip (cate, item) {
      cate.splice(item, 1)
    },
    isSelected (food) {
      return this.selected.includes(food)
    },
    toggle (item) {
      if (this.isSelected(item)) {
        this.glossary[item] = []
      } else {
        this.glossary[item] = this.glossary_backup[item]
      }
    }
  },
  mounted () {
    // copy data inside array
    this.glossary_backup = JSON.parse(JSON.stringify(this.glossary))
  }
}

</script>

<style scoped>

  .search-box h1 {
    color: white;
    font-size: 3em;
    font-weight: normal;
  }

  .search-form input {
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

  .search-form button {
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

  .search-form button:hover {
    background-color: rgba(255, 255, 255, 0.3);
  }

  .search-tag-container {
    background-color:rgba(0, 0, 0, 0.5);
    border-radius: 1.5rem;
    margin-top: 2.5rem;
    /*padding-left: calc(17% / 2);*/
    height: auto;
  }
</style>
