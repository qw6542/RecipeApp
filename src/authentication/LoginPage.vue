<template>
  <v-container>
  <v-form class="white--text form">
    <v-chip v-model="error" close class="black" >
      <v-avatar class="red">Error</v-avatar>
      {{error_info}}! </v-chip>
    <v-text-field
      label="E-mail"
      v-model=email
      :rules="emailRules"
      required>
    </v-text-field>
    <v-text-field
      name="password"
      label="Enter your password"
      hint="At least 6 characters"
      error
      v-model="password"
      min="8"
      :append-icon="show ? 'visibility_off' : 'visibility' "
      :append-icon-cb="() => (show = !show)"
      :type="show ? 'password' : 'text'"
      counter>
    </v-text-field>
    <v-btn @click="submit" class="green">Login</v-btn>
  </v-form>
  </v-container>
</template>
<script>
/* eslint-disable indent */
  export default {
  name: 'login-page',
  data () {
    return {
      error: false,
      error_info: '',
      show: true,
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail must be valid'
      ],
      email: '',
      password: ''
    }
},
  methods: {
    submit () {
        var data = {
          client_id: 2,
          client_secret: '3XGGedt8u69FqLYSIPypu6zl7OgGwALvmPg1tyk1',
          grant_type: 'password',
          username: this.email,
          password: this.password,
          scope: '*'

    }
      this.$http.post('http://localhost/oauth/token', data)
        .then((response) => {
          // Calling the end function will send the request
            this.$auth.setToken(response.body.access_token, response.body.expires_in + Date.now())
            this.Authentication()
          this.$router.push('/profile')
        },
          (error) => {
          this.error = true
          this.error_info = error.status + ' ' + error.statusText
        }
        )
    },
    Authentication () {
      this.$auth.setHeader()
      this.$http.get('http://localhost/api/user', this.$auth.getHeader())
        .then(response => {
            this.$auth.setAuthenticatedUser(response.body)
          }
        )
    }
  }

}
</script>
<style>
  .form{
    /*background-color: rgba(255, 255, 255, 0.3);*/
    background-color: black;
    opacity: 0.5;
    filter: alpha(opacity=50); /* For IE8 and earlier */
    margin-top: 5rem;
    margin-bottom: 18rem;
    padding: 1rem;
    /*width: 60%;*/
    border-radius: 1.5rem;

  }

</style>
