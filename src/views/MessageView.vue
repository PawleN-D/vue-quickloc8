<template>
  <div class="home">
    <router-link to="/">Home</router-link> 
    <MessagesView />
    
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import MessagesView from '@/components/MessagesView.vue'
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Messages',
  components: {
    MessagesView
  }
}
</script>