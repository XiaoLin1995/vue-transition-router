<template>
  <div>
    <van-nav-bar
      title="Page3"
      left-text="Back"
      left-arrow
      @click-left="$router.back()"
    />
  </div>
</template>

<script>
export default {
  name: "page2",
};
</script>
