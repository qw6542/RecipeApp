<template>
  <div >
    <nav class="nav-bar">
        <div class="right">
          <a href="/">
            <v-icon>home</v-icon>
            Home
          </a>
          <a href="#/chinese"><v-icon></v-icon>Chinese Style</a>
          <a v-show="!islogin" href="#/login">Sign in</a>
        <a v-show="!islogin" href="#/register" >Sign up</a>
        <a v-show="islogin" href="#/profile" >Profile</a>
        <a v-if="islogin" href="" @click="logout">Log Out</a>
        </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'nav-bar',
  data () {
    return {
      islogin: ''
    }
  },
  methods: {
    logout () {
      this.$auth.destroy()
    },
    checkAuth () {
      this.islogin = this.$auth.isAuthenticated()
    }
  },
  created () {
    this.checkAuth()
  }

}
</script>

<style scoped>
  .nav-bar {
    width: 100%;
    height: 3rem;
    background-color: black;
    opacity: 0.5;
    filter: alpha(opacity=50); /* For IE8 and earlier */
    margin: 0;
  }

  .nav-bar a {
    display: inline-block;
    font-size: 1.3em;
    line-height: 3rem;
    color: white;
    padding: 0 2rem;
    text-decoration: none;
  }

  .nav-bar a:hover {
    background-color: rgba(255,255,255,0.5);
  }
  .right {
    right: auto;
  }
</style>
