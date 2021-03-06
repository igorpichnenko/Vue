<template>
  <div class="wrapper">
    <navbar />
    <div class="posts">
      <div class="posts__items">
        <h1>Страница с постами</h1>
        <div class="post__input">
          <my-input v-model="searchQuery" placeholder="Поиск...." v-focus />
        </div>
        <div class="posts__btns">
          <my-button @click="showDialog"> Создать пост</my-button>
          <my-select v-model="selectedSort" :options="sortOptions" />
        </div>
        <my-dialog v-model:show="dialogVisible">
          <post-form @create="createPost" />
        </my-dialog>
        <post-list
          @remove="removePost"
          :posts="sortedAndSearchedPosts"
          v-if="!isPostsLoading"
        />
        <div v-else>Идет загрузка...</div>
        <div class="posts__pagination">
          <div
            v-for="pageNumber in totalPages"
            :key="pageNumber"
            class="posts__page"
            :class="{
              'posts__current-page': page === pageNumber,
            }"
            @click="changePage(pageNumber)"
          >
            {{ pageNumber }}
          </div>
        </div>
      </div>
      <a-form />
    </div>
    <div class="posts__footer">
      <my-footer />
    </div>
  </div>
</template>

<script>
import PostForm from "@/components/PostForm";
import PostList from "@/components/PostList";
import MyButton from "@/components/UI/MyButton";
import MySelect from "@/components/UI/MySelect";
import MyInput from "@/components/UI/MyInput";
import { usePosts } from "@/hooks/usePosts";
import useSortedPosts from "@/hooks/useSortedPosts";
import useSortedAndSearchedPosts from "@/hooks/useSortedAndSearchedPosts";
import background from "../images/backgroundHome.jpeg";
import { mapMutations } from "vuex";
import Navbar from "../components/Navbar.vue";

export default {
  name: "Posts",
  components: {
    MyInput,
    MySelect,
    MyButton,
    PostList,
    PostForm,
    Navbar,
  },
  data() {
    return {
      background: background,
      dialogVisible: false,
      page: 1,
      sortOptions: [
        { value: "title", name: "По названию" },
        { value: "body", name: "По содержимому" },
      ],
    };
  },
  methods: {
    ...mapMutations({
      setIsAuth: "setIsAuth",
    }),
    changePage(pageNumber) {
      this.page = pageNumber;
    },
    createPost(post) {
      this.posts.push(post);
      this.dialogVisible = false;
    },
    showDialog() {
      this.dialogVisible = true;
    },
    removePost(post) {
      this.posts = this.posts.filter((p) => p.id !== post.id);
    },
  },

  watch: {
    page() {
      this.fetching(this.page);
    },
  },

  setup() {
    const { posts, totalPages, isPostsLoading, fetching } = usePosts(10);
    const { sortedPosts, selectedSort } = useSortedPosts(posts);
    const { searchQuery, sortedAndSearchedPosts } =
      useSortedAndSearchedPosts(sortedPosts);

    return {
      posts,
      totalPages,
      isPostsLoading,
      sortedPosts,
      selectedSort,
      searchQuery,
      sortedAndSearchedPosts,
      fetching,
    };
  },
  mounted() {
    this.fetching(this.page);

    if (!this.$store.state.isAuth && !localStorage.getItem("auth")) {
      this.$router.push("/auth");
    }
  },
};
</script>


<style>
.wrapper {
  display: flex;
  flex-direction: column;
  height: 100%;
}
.posts {
  flex: 1 0 auto;
}
.posts__footer {
  flex: 0 0 auto;
}
.posts__items {
  padding: 40px;
}
.posts__btns {
  margin: 15px 0;
  display: flex;
  justify-content: space-between;
}
.posts__pagination {
  display: flex;
  margin-top: 15px;
}
.posts__page {
  border: 1px solid black;
  margin-right: 5px;

  padding: 10px;
  border-radius: 6px;
}
.posts__current-page {
  border: 2px solid teal;
  border-radius: 6px;
}
.post__input {
  width: 98%;
}
</style>

