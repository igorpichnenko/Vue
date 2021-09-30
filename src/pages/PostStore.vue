<template>
  <div class="app">
    <h1>Страница с постами</h1>
    <my-input
      v-focus
      :model-value="searchQuery"
      @update:model-value="setSearchQuery"
      placeholder="Поиск по названию..."
    />
    <div class="post_form">
      <my-button @click="showDialog">Создать пост</my-button>

      <my-button @click="fetchPosts">Получить посты</my-button>

      <my-select
        :model-value="selectedSort"
        @update:model-value="setSelectedSort"
        :options="sortOptions"
      />
    </div>

    <!--    <my-dialog v-model:show="dialogVisible">
      <post-form @create="createPost" />
    </my-dialog> -->

    <post-list
      :posts="sortedAndSearchedPosts"
      @remove="removePost"
      v-if="!isPostLoading"
    />

    <div class="loading" v-if="isPostLoading">идет загрузка...</div>
    <div v-intersection="loadMorePosts" class="observer"></div>
  </div>
</template>

<script>
import PostForm from "@/components/PostForm";
import PostList from "@/components/PostList";
import { mapState, mapMutations, mapGetters, mapActions } from "vuex";

export default {
  components: {
    PostForm,
    PostList,
  },
  data() {
    return {
      dialogVisible: false,
    };
  },
  methods: {
    ...mapMutations({
      setPage: "post/setPage",
      setSearchQuery: "post/setSearchQuery",
      setSelectedSort: "post/setSelectedSort",
    }),
    ...mapActions({
      loadMorePosts: "post/loadMorePosts",
      fetchPosts: "post/fetchPosts",
    }),

    createPost(post) {
      this.posts.push(post);
      this.dialogVisible = false;
    },
    removePost(post) {
      this.posts = this.posts.filter((p) => p.id !== post.id);
    },
    showDialog() {
      this.dialogVisible = true;
    },
  },
  mounted() {},
  computed: {
    ...mapState({
      posts: (state) => state.post.posts,
      isPostLoading: (state) => state.post.isPostLoading,
      page: (state) => state.post.page,
      limit: (state) => state.post.limit,
      totalPage: (state) => state.post.totalPage,
      selectedSort: (state) => state.post.selectedSort,
      searchQuery: (state) => state.post.searchQuery,
      sortOptions: (state) => state.post.sortOptions,
    }),
    ...mapGetters({
      sortedPosts: "post/sortedPosts",
      sortedAndSearchedPosts: "post/sortedAndSearchedPosts",
    }),
  },
  watch: {},
};
</script>

  <style>
.loading {
  color: blue;
  margin: 40px;
}
.pagination {
  display: flex;
  margin-top: 15px;
  justify-content: space-between;
}
.page {
  border: 1px solid orange;
  padding: 5px;
  margin: 0 5px;
}
.current_page {
  border: 2px solid green;
}
.observer {
  margin-top: 20px;
  background-color: orange;
  height: 30px;
  width: 100%;
  border-radius: 6px;
  box-shadow: 2px 2px 4px gray;
}

.post_form {
  display: flex;
  margin-top: 20px;
  gap: 20px;
}
</style>