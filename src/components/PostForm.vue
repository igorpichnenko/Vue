<template>
  <form @submit.prevent>
    <h4 class="form__title">Создание поста</h4>
    <div class="from__inputs">
      <my-input v-model="post.title" placeholder="Название" />
      <my-input v-model="post.body" placeholder="Описание" />
    </div>
    <div class="from__button">
      <my-button @click="createPost">Создать</my-button>
    </div>
  </form>
</template>

<script>
export default {
  data() {
    return {
      post: {
        title: "",
        body: "",
      },
    };
  },
  methods: {
    createPost() {
      this.post.id = Date.now();
      this.$emit("create", this.post);
      this.post = {
        title: "",
        body: "",
      };
    },
  },
};
</script>

  <style>
.from__button {
  margin: 30px;
}
.from__inputs {
  margin-left: 30px;
  width: 300px;
}
.form__title {
  margin-left: 100px;
  margin-bottom: 20px;
  margin-top: 30px;
}
</style>