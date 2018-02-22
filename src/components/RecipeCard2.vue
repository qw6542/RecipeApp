<template>

<div id="recipe-card-container" class="
    col-xs-10
    col-xs-offset-1
    col-sm-8
    col-sm-offset-2
    col-md-6
    col-md-offset-3
    col-lg-6
    col-lg-offset-3
  ">
    <a class="img" href="#"> </a>
    <div class="info">
     <h2>{{card.title}}</h2>
      <input type="checkbox" id="checkbox" v-model=card.checked>
      <label for="checkbox">Favorite</label>
      <div class="username">By {{card.user}} </div>
      <star-rating v-bind:star-size=10 v-model=card.rating class="star"> </star-rating>
      <social-sharing></social-sharing>
    </div>
  </div>

</template>

<script>
import SocialSharing from './SocialSharing'
import StarRating from 'vue-star-rating'

export default {
  name: 'RecipeCard',
  props: ['card'],
  components: {
    SocialSharing,
    StarRating
  },
  data () {
    return {
    }
  }
}
</script>
<style scoped>
  #recipe-card-container{
    width:100%;
  }
  .img{
    background-image: url("../assets/img/images.jpg");
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    width: 60%;
    height: 11rem;
    float: left;

  }
  .info{
    background-color: #00acc1;
    width: 40%;
    height: 11rem;
    float: right;
  }
  .star{
    float: left;
  }
  /*.username{*/
    /*padding-right: 40%;*/
  /*}*/
</style>
