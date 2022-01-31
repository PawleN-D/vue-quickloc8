<template>
  <div class="home">
    
    <MapView />
    
  </div>
  <router-link to="/messages">Messages</router-link>
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
