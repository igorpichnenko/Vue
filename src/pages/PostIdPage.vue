<template>
  <div class="wrapper">
    <navbar />
    <div class="post">
      <h1>Подробности о посте</h1>
      <div v-if="posts.length < 1" class="post__error">
        Подробности не найдены
      </div>
      <post-item
        v-for="post in posts"
        :post="post"
        :key="post.id"
        :show="false"
      />
    </div>
    <div class="post__footer">
      <my-footer />
    </div>
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
.wrapper {
  display: flex;
  flex-direction: column;
  height: 100%;
}
.post {
  padding: 40px;
  flex: 1 0 auto;
}

.post__footer {
  flex: 0 0 auto;
}

.post__error {
  padding: 40px;
  color: rgb(77, 19, 9);
}
</style>
