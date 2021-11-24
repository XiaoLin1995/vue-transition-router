<template>
  <div>
    <van-nav-bar
      title="Page2-1"
      left-text="Back"
      left-arrow
      @click-left="$router.back($router.transition.backName)"
    />
    <van-cell title="Page3" is-link @click="$router.push('/page3')" />
  </div>
</template>

<script>
export default {
  name: "page2",
};
</script>
