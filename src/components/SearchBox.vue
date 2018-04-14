<template>
  <div>
    <form action="#" class="search-form">
      <h1>Recipe</h1>
      <input type="search" v-model="str_search" required placeholder="Type in or select an ingredient tag to match the Chinese recipes"/>
      <button type="submit" @click="search">Go</button>
    </form>
    <v-layout row wrap>
      <v-flex xs10 offset-xs1 class="search-tag-container">
    <v-layout off-set row wrap justify-start align-center  v-for="(value, key) in  glossary" :key="key">
        <v-flex xs12 sm2 md2 lg2 >
        <v-switch  :label=key color="white"  v-model=selected :value=key @change="toggle(key)"></v-switch>
        </v-flex>
      <v-flex xs0 sm0 md8 lg8>
      <v-chip v-for="i in value" :key="i"  color="white" close @click="addFood(i, $event)" @input="deleteChip(value,i)">{{i}}</v-chip>
      </v-flex>
    </v-layout>
      </v-flex>
    </v-layout>

  </div>
</template>
<script>
/* eslint-disable no-trailing-spaces */

export default {
  name: 'search-box',
  data () {
    return {
      str_search: '',
      result: '',
      selected: [],
      glossary: {
        'Ingredient': ['Soy Sauce', 'Hoisin sauce', 'Black vinegar', 'Oyster sauce', 'Bean curd',
          'Dried chili peppers', 'Sichuan peppercorn', 'Star anise',
          'Spring Onion', 'Chives', 'Pakchoi', 'Cabbage',
          'Peanut Oil', 'Sesame Oil'],
        'Method': ['Stir-fries', 'Deep-Frying', 'Steaming', 'Red Stewing', 'Boiling', 'Braising'],
        'Style': [ 'Cantonese', 'Shandong', 'Jiangsu', 'Sichuan', 'Fujian', 'AnHui', 'Hunan' ]
      },
      glossary_backup: []
    }
  },
  methods: {
    addFood (food) {
      if (!this.isSelected(food)) {
        this.str_search += food + ' '
        this.selected.push(food)
      } else {
        this.selected.splice(this.selected.indexOf(food), 1)
      }
    },
    deleteChip (cate, item) {
      cate.splice(cate.indexOf(item), 1)
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
    },
    search () {
      let data = {'search': this.str_search}
      this.$http.post('/api/recipes/search', data)
        .then(response => {
          this.result = response
          this.$emit('child-say', response)
        })
    }
  },
  mounted () {
    // copy data inside array
    this.glossary_backup = JSON.parse(JSON.stringify(this.glossary))
  }
}

</script>

<style scoped>
  .search-form h1 {
    color: white;
    font-size: 3em;
    font-weight: normal;
  }
  .search-form input {
    display: inline-block;
    font-size: 1.5em;
    height: 3rem;
    background-color: rgba(255, 255, 255, 0.5);
    border-width: 0;
    outline-color: rgba(255, 255, 255, 0.7);
    border-radius: 1.5rem;
    color: white;
    padding: 1rem;
    margin-top: 1.5rem;
    width: 70%;
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
