<template>
  <div>
    <v-data-table
      :headers="headers"
      :items="ingredients"
      dark
      hide-actions
      class="elevation-1"
    >
      <template slot="items" slot-scope="props">
        <td>{{ props.item.name }}</td>
        <td class="text-xs-right">{{ props.item.quantity }}</td>
        <td class="text-xs-right">{{ props.item.measurement }}</td>
        <td class="text-xs-right">{{ props.item.preparation }}</td>
        <td class="text-xs-right">{{ props.item.get_from }}</td>
        <td class="justify-center layout px-0">
          <v-btn icon class="mx-0" @click="editItem(props.item)">
            <v-icon color="teal">edit</v-icon>
          </v-btn>
          <v-btn icon class="mx-0" @click="deleteItem(props.item)">
            <v-icon color="pink">delete</v-icon>
          </v-btn>
        </td>
      </template>
    </v-data-table>
        <v-dialog v-model="dialog" hide-overlay max-width="500px" >
          <v-btn color="success" slot="activator" class="mb-2">Add More</v-btn>
          <v-card dark >
            <v-card-title>
              <span class="headline">{{ formTitle }}</span>
            </v-card-title>
                <v-layout row wrap>
                  <v-flex>
                    <v-text-field label="Ingredient" v-model="editedItem.name" required></v-text-field>
                  </v-flex>
                  <v-flex  md4>
                    <v-text-field md6  type="integer" label="Quantity" v-model="editedItem.quantity"></v-text-field>
                  </v-flex>
                    <v-flex  md4>
                    <v-text-field  md6 label="Measurement" v-model="editedItem.measurement"></v-text-field>
                  </v-flex>
                  <v-flex >
                    <v-text-field label="Prepare" v-model="editedItem.preparation"></v-text-field>
                  </v-flex>
                  <v-flex>
                    <v-text-field label="Get from" v-model="editedItem.get_from"></v-text-field>
                  </v-flex>
                </v-layout>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" flat @click.native="close">Cancel</v-btn>
              <v-btn color="blue darken-1" flat @click.native="save">Save</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>

  </div>
</template>

<script>
export default {
  name: 'ingredient-table',
  data: function () {
    return {
      dialog: false,
      headers: [
        {
          text: 'Ingredient',
          value: 'name',
          sortable: false
        },
        { text: 'Quantity', value: 'quantity' },
        { text: 'Measurement', value: 'measurement' },
        { text: 'Prepare', value: 'preparation' },
        { text: 'Get From', value: 'get_from' },
        { text: 'Actions', sortable: false }
      ],
      editedIndex: -1,
      editedItem: {
        name: '',
        quantity: '',
        measurement: '',
        preparation: '',
        get_from: ''
      },
      ingredients: [{}, {}, {}]
    }
  },
  components: {
  },
  computed: {
    formTitle () {
      return this.editedIndex === -1 ? 'New Ingredient' : 'Edit Ingredient'
    }
  },
  watch: {
    dialog (val) {
      val || this.close()
    }
  },
  methods: {
    editItem (item) {
      this.editedIndex = this.ingredients.indexOf(item)
      this.editedItem = Object.assign({}, item)
      this.dialog = true
    },

    deleteItem (item) {
      const index = this.ingredients.indexOf(item)
      confirm('Are you sure you want to delete this item?') && this.ingredients.splice(index, 1)
    },

    close () {
      this.dialog = false
      setTimeout(() => {
        this.editedIndex = -1
      }, 300)
    },

    save () {
      if (this.editedIndex > -1) {
        Object.assign(this.ingredients[this.editedIndex], this.editedItem)
      } else {
        this.ingredients.push(this.editedItem)
      }
      this.editedItem = {}
      this.$emit('child-say', this.ingredients)
      this.close()
    }
  }
}
</script>
