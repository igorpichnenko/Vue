<template>
  <navbar />
  <div class="post">
    <h1>Подробности о посте</h1>
    <post-item
      v-for="post in posts"
      :post="post"
      :key="post.id"
      :show="false"
    />
  </div>
</template>

<script>
import axios from "axios";
import PostItem from "@/components/PostItem";
import Navbar from "../components/Navbar.vue";
export default {
  components: { PostItem, Navbar },
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
              id: this.$route.params.id,
              _limit: this.limit,
            },
          }
        );

        this.posts = response.data;
      } catch (e) {
        alert("Ошибка");
      }
    },
  },
  mounted() {
    this.fetchPosts();
    if (!this.$store.state.isAuth && !localStorage.getItem("auth")) {
      this.$router.push("/auth");
    }
  },
};
</script>

<style scoped>
.post {
  padding: 40px;
}
</style>
