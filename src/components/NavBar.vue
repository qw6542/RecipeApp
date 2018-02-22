<template>
  <div id="nav-bar">
    <nav>
      <div id="nav-container">
        <a v-if="!is_login" href="#">Sign in</a>
        <a v-if="!is_login" href="#">Sign up</a>
        <a v-if="is_login" href="#">Log Out</a>
      </div>
    </nav>
  </div>
</template>

<script>
import sa from 'superagent'
export default {
  name: 'nav-bar',
  data () {
    return {
      is_login: false
    }
  },
  methods: {
    loading: function () {
      sa.get('http://www.mocky.io/v2/5a8b0ac93200002c001abdaa')
        .set('Accept', 'application/json')
        .end((err, res) => {
          // Calling the end function will send the request
          if (err) {
            alert(err)
          } else {
            this.is_login = res.body.is_login
          }
        })
    }
    /*
 postman () {
       sa.get('https://fc8e2db2-301a-4a7b-8d6b-32cd9288667d.mock.pstmn.io/auth/status')
         .set('x-api-key', '0a332273c19440eaa8022891e69dc18c')
         .set('Accept', 'application/json')
         .end((err, res) => {
           // Calling the end function will send the request
           if (err) {
             alert(err)
           } else {
             let data = JSON.parse(res.text)
           }
         })
     }
*/
  },
  mounted () {
    this.loading()
  }

}
</script>

<style scoped>
  #nav-container {
    text-align: right;
  }

  #nav-container a {
    display: inline-block;
    font-size: 1.3em;
    line-height: 3rem;
    color: white;
    padding: 0 1rem;
    text-decoration: none;
  }

  #nav-container a:hover {
    background-color: rgba(255, 255, 255, 0.3);
  }

</style>
