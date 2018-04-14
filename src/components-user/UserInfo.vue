<template>
<div>
      <v-container>
        <v-layout>
          <v-flex>
            <h2>ID:{{user.id}}</h2>
            <h2>Email:{{user.email}}</h2>
            <form >
              <v-text-field
                label="name"
                v-model=user.name
                :rules="nameRules"
                :counter="10"
                required>
              </v-text-field>
              <v-btn @click="updateUser">Update</v-btn>
            </form>
          </v-flex>
        </v-layout>
      </v-container>
</div>
</template>
<script>
export default {
  name: 'user-info',
  data: function () {
    return {
      user: {},
      nameRules: [
        v => !!v || 'Name is required',
        v => (v && v.length <= 10) || 'Name must be less than 10 characters'
      ]
    }
  },
  methods: {
    setAuthenticatedUser () {
      this.$auth.setHeader()
      this.$http.get('/api/user', this.$auth.getHeader())
        .then(response => {
          this.$auth.setAuthenticatedUser(response.body)
          this.user = response.body
          console.log(this.user)
          this.$emit('child-say', this.user)
        }
        )
    },
    updateUser () {
      this.$http.post('/api/user/update', this.user)
        .catch(error => console.log(error)
        )
    }
  },
  mounted () {
    this.setAuthenticatedUser()
  }
}
</script>
