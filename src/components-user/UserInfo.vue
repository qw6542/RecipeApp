<template>
    <div class="info">
      <h2>ID:{{user.id}}</h2>
     <form >
       <div class="name">
      <label for="name">Name</label>
      <input id="name" type="text" v-model="user.name">
       </div>
       <div class="email">
         <label for="email">Email</label>
      <input id="email" type="text" v-model="user.email">
       </div>
      <button>Update</button>
      </form>
    </div>
</template>

<script>
import sa from 'superagent'
export default {
  name: 'user-info',
  data: function () {
    return {
      user: {}
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
    }
  },
  mounted: function () {
    this.getInfo()
  }
}
</script>

<style scoped>
  .info {
    width: 70%;
  }
  .name{
    padding: 1rem;
  }
  .email {
    padding: 1rem;
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
