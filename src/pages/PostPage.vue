<template>
  <div class="app">
    <h1>Страница с постами</h1>
    <my-input v-model="searchQuery" placeholder="Поиск по названию..." />
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
    <!--  <div class="pagination">
      <div 
      class="page" 
      v-for="pageNumber in totalPage" 
      :key="pageNumber"
      :class="{'current_page': page === pageNumber }"
      @click="changePage(pageNumber)">
        {{ pageNumber }}
      </div>
    </div> -->
  </div>
</template>

<script>
import PostForm from "@/components/PostForm";
import PostList from "@/components/PostList";
import axios from "axios";

export default {
  components: {
    PostForm,
    PostList,
  },
  data() {
    return {
      posts: [],
      dialogVisible: false,
      isPostLoading: false,
      page: 1,
      limit: 10,
      totalPage: 0,
      selectedSort: "",
      searchQuery: "",
      sortOptions: [
        { value: "title", name: "Сортировка по названию" },
        { value: "body", name: "Сортировка по описанию" },
      ],
    };
  },
  methods: {
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
    /*  changePage(pageNumber){
        this.page = pageNumber
      },*/

    async fetchPosts() {
      try {
        if (this.page === this.totalPage) return;
        this.isPostLoading = true;
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/posts",
          {
            params: {
              _page: this.page,
              _limit: this.limit,
            },
          }
        );
        this.totalPage = Math.ceil(
          response.headers["x-total-count"] / this.limit
        );
        this.posts = [...this.posts, ...response.data];
      } catch (e) {
        alert(e);
      } finally {
        this.isPostLoading = false;
      }
    },
    async loadMorePosts() {
      try {
        this.page += 1;

        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/posts",
          {
            params: {
              _page: this.page,
              _limit: this.limit,
            },
          }
        );
        this.totalPage = Math.ceil(
          response.headers["x-total-count"] / this.limit
        );
        this.posts = [...this.posts, ...response.data];
      } catch (e) {
        alert(e);
      }
    },
  },
  mounted() {
    this.fetchPosts();

    /* const options = {
      rootMargin: "0px",
      threshold: 1.0,
    };
    const callback = (entries, observer) => {
      if (entries[0].isIntersecting && this.page < this.totalPage)
        this.loadMorePosts();
    };
    const observer = new IntersectionObserver(callback, options);
    observer.observe(this.$refs.observer); */
  },
  computed: {
    sortedPosts() {
      return [...this.posts].sort((a, b) =>
        a[this.selectedSort]?.localeCompare(b[this.selectedSort])
      );
    },
    sortedAndSearchedPosts() {
      return this.sortedPosts.filter((post) =>
        post.title.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    },
  },
  watch: {
    /*  page(){
          this.fetchPosts();
        }*/
    /*
        selectedSort(newValue){
          
        this.posts.sort((a,b)=>{
        return  a[newValue]?.localeCompare(b[newValue])
        })
        }
        */
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