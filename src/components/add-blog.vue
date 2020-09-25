<template>
  <div id="add-blog">
    <h1>Add a Blog Post</h1>
    <form v-if="!submitted">
      <h3>Blog Title:</h3>
      <input type="text" v-model.lazy="blog.title">
      <h3>Blog Contents:</h3>
      <textarea v-model.lazy="blog.content"></textarea>
      <div id="checkboxes">
        <label>Ninjas</label>
        <input type="checkbox" value="ninjas" v-model="blog.categories">
        <label>Wizard</label>
        <input type="checkbox" value="wizards" v-model="blog.categories">
        <label>Mario</label>
        <input type="checkbox" value="Mario" v-model="blog.categories">
        <label>Cheese</label>
        <input type="checkbox" value="cheese" v-model="blog.categories">
      </div>
      <label>
        <select v-model="blog.author">
          <option v-for="author in authors">{{author}}</option>
        </select>
      </label>
      <button v-on:click.prevent="post">Add a Post</button>
    </form>
    <div v-if="submitted">
      <h3>Thanks for your post</h3>
    </div>
    <div id="preview">
      <h3>Preview Blog</h3>
      <p>Blog title:{{blog.title}}</p>
      <p>Blog Contents:</p>
      <p>{{blog.content}}</p>
      <p>Blog Categories</p>
      <ul>
        <li v-for="category in blog.categories">{{category}}</li>
      </ul>
      <p>Author:{{blog.author}}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      blog: {
        title: "",
        content: "",
        categories: [],
        auhtor: ""
      },
      authors: ["A", "B", "C"],
      submitted: false
    };
  },
  methods: {
    post: function() {
      this.$http
        .post("https://app1-38859.firebaseio.com/posts.json",this.blog)
        .then(function(data) {
          console.log(data);
          this.submitted = true;
        });
    }
  }
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#add-blog * {
  box-sizing: border-box;
}
#add-blog {
  margin: 20px auto;
  max-width: 500px;
}
label {
  display: block;
  margin: 20px 0 10px;
}
input[type="text"],
textarea {
  display: block;
  width: 100%;
  padding: 8px;
}
#preview {
  padding: 10px 20px;
  border: 1px dotted #ccc;
  margin: 30px 0;
}
h3 {
  margin-top: 10px;
}
#checkboxes {
  display: inline-block;
  margin-right: 10px;
}

#checkboxes label {
  display: inline-block;
}
</style>