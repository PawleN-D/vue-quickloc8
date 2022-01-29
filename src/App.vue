<template>
  <SplashScreen :isLoading="isLoading" />
  <MapView />
</template>

<script>

import SplashScreen from './components/SplashScreen.vue'
import MapView from './components/MapView.vue'


export default {
  name: 'App',
  components: {
    SplashScreen,
    MapView
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
