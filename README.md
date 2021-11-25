# Vue-Transition-Router

## Install

```
yarn add vue-transition-router
```

or

````
npm install vue-transition-router
````

## Demo

[demo link](https://xiaolin1995.github.io/vue-transition-router/demo/)

## Usage

```js
// router.js
import Vue from "vue";
import VueRouter from "vue-router";
import transitionRouter from "vue-transition-router";

const routes = [
  {
    path: "/",
    name: "Home",
    meta: {
      transition: "", // Empty string can cancel the transition. If not set, it will be the default value
    },
    component: () => import("../views/home.vue"),
  },
  {
    path: "/page2",
    name: "page2",
    meta: {
      //   transition: "",
    },
    component: () => import("../views/page2.vue"),
    children: [
      {
        path: "page2-1",
        name: "page2-1",
        component: () => import("../views/page2-1.vue"),
        meta: {
          //   transition: "",
        },
      },
    ],
  },
  {
    path: "/page3",
    name: "page3",
    component: () => import("../views/page3.vue"),
  },
];

let router = new VueRouter({
  mode: "hash",
  base: process.env.BASE_URL,
  routes,
});

export default transitionRouter(router, {
  forwardName: "slide-left",
  backName: "slide-right"
});
```

```css
.slide-right-enter-active,
.slide-left-enter-active,
.slide-right-leave-active,
.slide-left-leave-active {
  box-shadow: -20px 0 20px 0px rgba(0, 0, 0, 0.1);
  will-change: transform;
  transition: all 0.3s ease-out;
}

.slide-left-enter-active {
  transform: translateX(100%);
}
.slide-left-enter-to {
  transform: translateX(0);
}
.slide-right-enter-active {
  transform: translateX(-100%);
}
.slide-right-enter-to {
  transform: translateX(0);
}
.slide-right-enter-from {
  opacity: 0;
  transform: translateX(-50%);
}
.slide-right-leave-to {
  z-index: 100;
  transform: translateX(100%);
}
.slide-right-leave-from {
  box-shadow: -20px 0 20px 0px rgba(0, 0, 0, 0.1);
}
.slide-left-enter-from {
  z-index: 100;
  transform: translateX(100%);
  box-shadow: -20px 0 20px 0px rgba(0, 0, 0, 0.1);
}
.slide-left-leave-to {
  opacity: 0.4;
  transform: translateX(-50%);
}
```

```html
// main router
<template>
    <div>
        <transition :name="$router.transition.name">
            <router-view class="router-view"> </router-view>
        </transition>
    </div>
</template>
```

```html
// children router, There may be bugs with transtion
<template>
    <div>
        <transition-group :name="$router.transition.name">
            <router-view class="router-view" key="1"> </router-view>
        </transition>
    </div>
</template>
````

```html
<template>
  <div>
    <div
      @click="$router.push({ path: '/yourPath', transtion: 'your transition name' })"
    ></div>
    <div
      @click="$router.replace({ path: '/yourPath', transtion: 'your transition name' })"
    ></div>
    <div @click="$router.back('your transition name')"></div>
    <div @click="$router.forward('your transition name')"></div>
    <div @click="$router.go(1, 'your transition name')"></div>

    <router-link
      :to="{ path: 'home', transition: 'your transition name' }"
    ></router-link>
  </div>
</template>
```
