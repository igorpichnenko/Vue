<template>
  <div class="app">
     <h1>Страница с постами</h1>
    <my-input v-focus v-model="searchQuery" placeholder="Поиск по названию..." />
    <div class="post_form">
      <my-button @click="showDialog">Создать пост</my-button>

      <my-button @click="fetchPosts">Получить посты</my-button>

      <my-select v-model="selectedSort" :options="sortOptions" />
    </div>

    <my-dialog v-model:show="dialogVisible">
      <post-form @create="createPost" />
    </my-dialog>

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
import { ref } from "vue";
import usePosts from "@/hooks/usePosts";
import useSortedPosts from "@/hooks/useSortedPosts";
import useSortedAndSearchedPosts from "@/hooks/useSortedAndSearchedPosts";

export default {
  components: {
    PostForm,
    PostList,
  },
  data() {
    return {
      dialogVisible: false,
      sortOptions: [
        { value: "title", name: "Сортировка по названию" },
        { value: "body", name: "Сортировка по описанию" },
      ],
    };
  },
  setup(props) {
    const { totalPage, posts, isPostLoading } = usePosts(10);
    const { selectedSort, sortedPosts } = useSortedPosts(posts);
    const { searchQuery, sortedAndSearchedPosts } =
      useSortedAndSearchedPosts(sortedPosts);
    return {
      totalPage,
      posts,
      isPostLoading,
      selectedSort,
      sortedPosts,
      searchQuery,
      sortedAndSearchedPosts,
    };
  },
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