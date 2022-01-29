<template>
  <SplashScreen :isLoading="isLoading" />
  <HelloWorld msg="Welcome to Your Vue.js App"/>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import SplashScreen from './components/SplashScreen.vue'


export default {
  name: 'App',
  components: {
    HelloWorld,
    SplashScreen,
  },

  data() {
    return { isLoading: true}
  },
  mounted() {
    setTimeout(() => {
      this.isLoading = false
    }, 3500)
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
