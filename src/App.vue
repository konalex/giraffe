<template>
  <div id="app">
    <div class="container">
      <input v-model="username" type="text" placeholder="Bret | Antonette | Delphine">
      <Twitter :username="username" />
      <hr />
      <Products />
      <hr>
      <Posts />
    </div>
  </div>
</template>

<script>
import Twitter from "./components/twitter/Twitter";
import Products from "./components/products/Products";
import Posts from './components/posts/Posts';

export default {
  name: "App",
  components: { Twitter, Products, Posts },
  data() {
    return {
      username: ''
    }
  }
};
</script>

<style lang="sass" scoped>
.container
  width: 50%
  margin: 2rem auto
  input
    width: 25%
</style>
