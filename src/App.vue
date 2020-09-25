<template>
  <div id="app">
    <app-header></app-header>
    <router-view></router-view>
  </div>
</template>

<script>
import addBlog from "./components/add-blog.vue";
import showBlog from "./components/show-blog.vue";
import header from "./components/header.vue";

export default {
  components: {
    "add-blog": addBlog,
    "show-blog": showBlog,
    "app-header": header
  },
  data() {
    return {};
  },
  methods: {}
};
</script>

<style scoped>
h1 {
  margin: 0px;
  font-family: "Nunito-Semibold";
}
</style>
