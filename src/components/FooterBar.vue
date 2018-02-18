<template>
  <footer class="page-footer">
    <!--Footer Links-->
      <div class="container-fluid">
      <div class="row">
        <!--First column-->
        <div class="col-lg-3 col-md-3 ml-auto">
        </div>
        <div class="col-lg-3 col-md-3 ml-auto">
          <h5 class="title">Content</h5>
          <p>Recipe site help you to share delicious dish cooking with local ingredients</p>
        </div>

        <div class="col-lg-3 col-md-3 ml-auto">
          <h5>Links</h5>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Login</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>

      </div>
    </div>
    <!--Copyright-->
    <div class="footer-copyright">
      <div class="container-fluid">
        © 2017 Copyright: <a href="#"  rel="nofollow"> www.sample.com </a>
      </div>
    </div>
    <!--/.Copyright-->

  </footer>
</template>

<script>
export default {
  name: 'footer-bar'
}
</script>

<style scoped>

  .footer-container a {
    display: inline-block;
    font-size: 1.3em;
    line-height: 3rem;
    color: white;
    padding: 0 1rem;
    text-decoration: none;
  }

  .footer-container a:hover {
    background-color: rgba(255, 255, 255, 0.3);
  }
  .footer-copyright {
    text-align: center;
  }

</style>
