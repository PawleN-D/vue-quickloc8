<template>
  <div :class="{ loader: true, fadeout: !isLoading }">
      <img alt="Vue logo" class="logo" src="../assets/Quicloc8-logo.png">
  </div>
</template>

<script>
export default {
  name: "SplashScreen",
  props: ["isLoading"]
};
</script>

<style>
.loader {
  background-color: #FF5722;
  bottom: 0;
  color: #FFCCBC;
  display: block;
  font-size: 32px;
  left: 0;
  overflow: hidden;
  padding-top: 10vh;
  position: fixed;
  right: 0;
  text-align: center;
  top: 0;
  z-index: 99999999;
}

.fadeout {
  animation: fadeout 3.5s forwards;
}

@keyframes fadeout {
  to {
    opacity: 0;
    visibility: hidden;
  }
}
</style>