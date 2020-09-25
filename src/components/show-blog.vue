<template>
  <div v-theme:column="'wide'" id="show-blog">
    <h1>All Blog Articles</h1>
    <input type="text" v-model="search" placeholder="search blog">
    <div v-for="blog in filteredBlog" class="single-blog">
      <router-link v-bind:to="'/blog/'+blog.id">
        <h2>{{blog.title}}</h2>
      </router-link>
      <article>{{blog.content | snippet}}</article>
    </div>
  </div>
</template>

<script>
import Mixins from "../mixins/mixins.js";
export default {
  data() {
    return {
      blogs: [],
      search: ""
    };
  },
  methods: {},
  created() {
    this.$http
      .get("https://app1-38859.firebaseio.com/posts.json")
      .then(function(data) {
        return data.json();
      })
      .then(function(data) {
        var blogsArray = [];
        for (let key in data) {
          data[key].id = key;
          blogsArray.push(data[key]);
        }
        this.blogs = blogsArray;
      });
  },
  filters: {
    toUppercase(value) {
      return value.toUpperCase();
    }
    // 'to-uppercase':function(value){
    //   return value.toUpperCase();
    // }
  },
  directives: {
    rainbow: {
      bind(el, binding, vnode) {
        el.style.color =
          "#" +
          Math.random()
            .toString()
            .slice(2, 8);
      }
    }
  },
  mixins: [Mixins]
};
</script>

<style scoped>
h2 {
  color: black;
}
#show-blogs {
  max-width: 800px;
  margin: 0px auto;
}
.single-blog {
  padding: 20px;
  margin: 20px 0;
  box-sizing: border-box;
  background: #eee;
  border: 1px dotted #aaa;
}
#show-blogs a {
  color: #444;
  text-decoration: none;
}
input[type="text"] {
  padding: 8px;
  width: 100%;
  box-sizing: border-box;
}
</style>