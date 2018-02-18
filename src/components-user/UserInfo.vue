<template>
    <div class="info">
      <h2>ID:</h2>
     <form >
       <div class="name">
      <label for="name">Name</label>
      <input id="name" type="text">
       </div>
       <div class="email">
         <label for="email">Email</label>
      <input id="email" type="text">
       </div>
      <button>Update</button>
      </form>
    </div>
</template>

<script>
export default {
  name: 'user-info'
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
