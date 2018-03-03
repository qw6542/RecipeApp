<template>
  <div id="nav-bar">
    <nav>
      <div id="nav-container">
        <a v-if="!is_login" href="http://localhost/login">Sign in</a>
        <a v-if="!is_login" href="http://localhost/signup">Sign up</a>
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
  },
  mounted () {
  //    this.loading()
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
