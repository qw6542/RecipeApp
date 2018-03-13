<template>
  <v-container>
    <v-form v-model="valid" class="form white--text">
      <v-text-field
        label="E-mail"
        v-model=email
        :rules="emailRules"
        required>
      </v-text-field>
      <v-text-field
        label="Name"
        v-model=name
        :rules="nameRules"
        required>
      </v-text-field>
      <v-text-field
        name="password"
        label="Enter your password"
        hint="At least 6 characters"
        v-model="password"
        min="6"
        :type="show ? 'password' : 'text'"
        counter
        required
      >
      </v-text-field>
      <v-text-field
        name="password"
        label="Confirm Your password"
        v-model="password_confirmation"
        min="6"
        :append-icon="show ? 'visibility' : 'visibility_off'"
        :append-icon-cb="() => (show = !show)"
        :type="show ? 'password' : 'text'"
        counter
        required
      >
      </v-text-field>
      <p v-show="password != password_confirmation">passowrd must match !</p>
      <v-btn @click="submit" :disabled="!valid" class="green">Register</v-btn>
    </v-form>
  </v-container>
</template>
<script>
/* eslint-disable indent */

  export default {
    name: 'register-page',
    component: {
    },
    data () {
      return {
        show: false,
        valid: false,
        match: false,
        success: false,
        name: '',
        nameRules: [
          v => !!v || 'Name is required',
          v => (v && v.length <= 10) || 'Name must be less than 10 characters'
        ],
        emailRules: [
          v => !!v || 'E-mail is required',
          v => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail must be valid'
        ],
        email: '',
        password: '',
        password_confirmation: ''
      }
    },
    methods: {
      submit () {
        var data = {
          name: this.name,
          email: this.email,
          password: this.password
        }
        this.$http.post('http://localhost:80/api/register', data)
          .then(() => {
              // Calling the end function will send the request
              alert('Register Success!')
              this.$router.push('/login')
            },
            () => {
              this.error = true
            }
          )
      }
    }
  }
</script>
<style>
  .form{
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
