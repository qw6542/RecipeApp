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
        min="8"
        :append-icon="show ? 'visibility' : 'visibility_off'"
        :append-icon-cb="() => (show = !show)"
        :type="show ? 'password' : 'text'"
        counter>
      </v-text-field>
      <v-btn @click="submit" :disabled="!valid">Register</v-btn>
    </v-form>
  </v-container>
</template>
<script>
/* eslint-disable indent */

  export default {
    name: 'register-page',
    data () {
      return {
        show: false,
        valid: false,
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
        password: ''
      }
    },
    methods: {
      submit () {
        if (this.$refs.form.validate()) {
          // Native form submission is not yet supported
//          .post('/api/submit',)
        }
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
