<template>
  <div>
    <van-nav-bar title="Page1" />
    <van-cell
      title="Page2"
      is-link
      value="Slide"
      @click="$router.push('/page2')"
    />
    <van-cell
      title="Page3"
      is-link
      value="Fade In"
      @click="$router.push({ path: '/page3', transition: 'fade' })"
    />
  </div>
</template>

<script>
export default {
  name: "Home",
};
</script>
