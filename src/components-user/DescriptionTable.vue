<template>
  <div>
    <v-data-table
      :headers="headers"
      :items="descriptions"
      dark
      hide-actions
      class="elevation-1"
    >
      <template slot="items" slot-scope="props">
        <td>{{ props.item.step }}</td>
        <td class="text-xs-left">{{ props.item.detail }}</td>
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
                <v-layout wrap>
                  <v-flex>
                    <v-text-field label="Add Steps" multiLine v-model="edited_description.detail"></v-text-field>
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
  name: 'descriptions-table',
  data: function () {
    return {
      dialog: false,
      headers: [
        { text: 'Description', sortable: false },
        {text: 'Detail', value: 'detail'},
        { text: 'Actions', sortable: false }
      ],
      editedIndex: -1,
      edited_description: {
        step: 0,
        detail: ''
      },
      descriptions: [{step: 1}, {step: 2}, {step: 3}]
    }
  },
  components: {
  },
  computed: {
    formTitle () {
      return this.editedIndex === -1 ? 'New Step' : 'Edit Step'
    }
  },
  watch: {
    dialog (val) {
      val || this.close()
    }
  },
  methods: {
    editItem (item) {
      this.editedIndex = this.descriptions.indexOf(item)
      this.edited_description = Object.assign({}, item)
      this.dialog = true
    },

    deleteItem (item) {
      const index = this.descriptions.indexOf(item)
      confirm('Are you sure you want to delete this item?') && this.descriptions.splice(index, 1)
    },

    close () {
      this.dialog = false
      setTimeout(() => {
        this.editedIndex = -1
      }, 300)
    },

    save () {
      if (this.editedIndex > -1) {
        Object.assign(this.descriptions[this.editedIndex], this.edited_description)
      } else {
        this.edited_description['step'] = this.descriptions.length + 1
        this.descriptions.push(this.edited_description)
      }
      this.close()
      this.$emit('child-say', this.descriptions)
      this.edited_description = {}
    }
  }
}
</script>
