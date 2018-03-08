<template>
<div>
    <v-jumbotron :gradient="gradient" class="info">
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
    </v-jumbotron>
</div>
</template>

<script>
import sa from 'superagent'
export default {
  name: 'user-info',
  data: function () {
    return {
      gradient: 'to top, grey, black',
      user: {},
      nameRules: [
        v => !!v || 'Name is required',
        v => (v && v.length <= 10) || 'Name must be less than 10 characters'
      ]
    }
  },
  methods: {
    getInfo: function () {
      sa.get('http://www.mocky.io/v2/5a8b2b1a320000d8171abe01')
        .set('Accept', 'application/json')
        .end((err, res) => {
          // Calling the end function will send the request
          if (err) {
            alert(err)
          } else {
            this.user = res.body.user
          }
        })
    },
    update () {
    }
  },
  mounted: function () {
    this.getInfo()
  }
}
</script>

<style scoped>
  .info {
    width: 80%;
    float: right;
    opacity: 0.5;
    filter: alpha(opacity=50); /* For IE8 and earlier */
    margin-bottom: 10rem;
    color: white;
  }

</style>

<!--{-->
<!--"islogin":true,-->
<!--"user":{-->
<!--"id" : 1,-->
<!--"name" : "alice",-->
<!--"email" : "alice@example.com"-->
<!--}-->
<!--}-->
