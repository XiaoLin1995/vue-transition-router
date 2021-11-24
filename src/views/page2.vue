<template>
  <div>
    <van-nav-bar
      title="Page2"
      left-text="Back"
      left-arrow
      @click-left="$router.back()"
    />
    <van-cell title="Page2-1" is-link @click="$router.push('/page2/page2-1')" />
    <van-cell title="Page3" is-link @click="$router.push('/page3')" />
    <van-cell title="Forward" is-link @click="$router.forward()" />
    <transition-group tag="div" :name="$router.transition.name">
      <router-view class="router-view" key="1"></router-view>
    </transition-group>
  </div>
</template>

<script>
export default {
  name: "page2",
};
</script>
