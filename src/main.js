import { createApp } from "vue";
import App from "./App.vue";
import router from './router'
// import VueMaterial from 'vue-material'
// import 'vue-material/dist/vue-material.min.css'
// import 'vue-material/dist/theme/default.css'

// Vue.use(VueMaterial)



createApp(App).use(router).mount("#app");
