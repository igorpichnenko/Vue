<template>
  <div class="post">
    <h1>Подробности о посте</h1>
    <post-item v-for="post in posts" :post="post" :key="post.id" />
  </div>
</template>

<script>
import axios from "axios";
import PostItem from "@/components/PostItem";
export default {
  components: { PostItem },
  data() {
    return {
      posts: [],
      limit: 1,
      totalPages: 0,
    };
  },
  methods: {
    async fetchPosts() {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/posts",
          {
            params: {
              _id: 1,
              _limit: this.limit,
            },
          }
        );
        this.totalPages = Math.ceil(
          response.headers["x-total-count"] / this.limit
        );
        this.posts = response.data;
      } catch (e) {
        alert("Ошибка");
      }
    },
  },
  mounted() {
    this.fetchPosts();
   
  },
};
</script>

<style scoped>
.post {
  padding: 40px;
}
</style>
