<template>
  <div id="nav-bar">
    <nav>
      <div id="nav-container">
        <a href="#">Sign in</a><!-- Do not remove
        --><a href="#">Sign up</a>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'nav-bar'
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
