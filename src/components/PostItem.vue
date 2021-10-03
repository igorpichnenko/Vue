<template>
  <div class="post">
    <div>
      <div
        class="post__image"
        :style="{
          backgroundImage: `url(https://placeimg.com/40${post.id}/30${post.id}/arch)`,
        }"
      ></div>
      <div>{{ post.id }}</div>
      <div><strong>Название:</strong> {{ post.title }}</div>
      <div><strong>Описание:</strong> {{ post.body }}</div>
    </div>
    <div v-if="show" class="post__btns">
      <my-button @click="$router.push(`/posts/${post.id}`)">
        Открыть
      </my-button>
      <my-button @click="$emit('remove', post)"> Удалить </my-button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    show: {
      type: Boolean,
      default: true,
    },
    post: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
.post {
  padding: 15px;
  border: 2px solid teal;
  margin-top: 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 6px;
}
.post__btns {
  display: flex;
}
.post__image {
  width: 500px;
  height: 300px;
  background-size: cover;
  margin-bottom: 0.3rem;
}
</style>
