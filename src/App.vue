<template>
  <div class="container">
    <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld msg="سلام دنیا! 🌍" />
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  components: {
    HelloWorld
  }
}
</script>

<style scoped>
.container {
  text-align: center;
  margin-top: 50px;
  font-family: Avenir, Helvetica, Arial, sans-serif;
}
img {
  width: 100px;
}
</style>