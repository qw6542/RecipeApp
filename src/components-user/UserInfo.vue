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
              <v-btn>Update</v-btn>
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
      this.$http.get('http://www.recipe123.uk/api/user', this.$auth.getHeader())
        .then(response => {
          this.$auth.setAuthenticatedUser(response.body)
          this.user = response.body
          this.$emit('child-say', this.user)
        }
        )
    }
  },
  mounted () {
    this.setAuthenticatedUser()
  }
}
</script>
