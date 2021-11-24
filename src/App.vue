<template>
  <div id="app">
    <transition :name="$router.transition.name">
      <router-view class="router-view"> </router-view>
    </transition>
  </div>
</template>

<script>
export default {
  name: "app",
};
</script>

<style lang="scss">
@import "./styles/router-transiton.css";
body {
  background: gray;
}
#app {
  position: relative;
  width: 100%;
  max-width: 600px;
  height: 100vh;
  overflow: hidden;
  margin: 0 auto;
}
.router-view {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 99;
  background-color: #fff;
}
</style>
