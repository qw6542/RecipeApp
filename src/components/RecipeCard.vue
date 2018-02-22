<template>
  <div class="
    recipe-card
    col-xs-8
    col-xs-offset-2
    col-sm-6
    col-sm-offset-3
    col-md-4
    col-md-offset-4
    col-lg-4
    col-lg-offset-4
    " ref="tref"
    v-bind:style="'height: calc(1 * ' + cardWidth + ');'"
    >
    <div class="card-img">
      <h3>Title</h3>
    </div><!--
    --><div class="card-desc">
      <p>Balabala</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'recipe-card',
  props: ['cardData'],
  data () {
    return {
      'cardWidth': 0
    }
  },
  methods: {
    set_width () {
      this.cardWidth = window.getComputedStyle(this.$refs.tref).width
    }
  },
  mounted () {
    this.set_width()
    window.onresize = this.set_width
  }
}
</script>

<style scoped>
  .recipe-card {
    background: white;
    min-width: 20rem;
    /*min-height: 5rem;*/
    padding: 0 !important;
    text-align: left;
  }
  .recipe-card:hover {
    box-shadow: 0px 0px 10px white;
  }
  .card-img {
    display: inline-block;
    position: relative;
    width: 100%;
    height: 50%;
    background-image: url('../assets/img/fantasy-3000308_1920.jpg');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }

  .card-img > h3 {
    position: absolute;
    margin: 5px 5px;
    padding-top: calc(100% - 2em);
    color: white;
    font-weight: normal;
  }

  .card-desc {
    display: inline-block;
    width: calc(100% - 2em);
    height: calc(50% - 2em);
    float: right;
    padding: 1rem;
  }
</style>
