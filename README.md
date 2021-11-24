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

```html
// main router
<template>
    <div>
        <transition :name="$router.transition.name">
            <router-view class="router-view"> </router-view>
        </transition>
    </div>
</template>
````

```html
// children router
<template>
    <div>
        <transition-group :name="$router.transition.name">
            <router-view class="router-view" key="1"> </router-view>
        </transition>
    </div>
</template>
```

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
      transition: "", // Empty string can cancel the transition
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
```

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
