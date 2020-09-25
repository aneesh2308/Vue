import addBlog from "./components/add-blog.vue";
import showBlog from "./components/show-blog.vue";
import singleBlog from "./components/single-blog.vue";

export default [
  { path: "/", component: showBlog },
  { path: "/add", component: addBlog },
  { path: "/blog/:id", component: singleBlog }
];
