<template>
  <div class="home">
    
    <MapView />
    <router-link to="/messages">Messages</router-link>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import MapView from '@/components/MapView.vue'
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    MapView
  }
}
</script>
