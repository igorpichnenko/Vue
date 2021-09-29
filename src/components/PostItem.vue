<template>
  <div class="post">
    <div>
      <div><strong>Название: </strong> {{ post.title }}</div>
      <div><strong>Описание: </strong> {{ post.body }}</div>
    </div>
    <div class="post__btn">
      <my-button @click="$emit('remove', post)">Удалить</my-button>
      <my-button @click="$router.push(`/posts/${post.id}`)">Открыть</my-button>
    </div>
      
  </div>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      required: true,
    },
  },
};
</script>

  <style>
.post {
  border: 2px solid orange;
  margin-top: 15px;
  border-radius: 4px;
  padding: 15px;
}
.post__btn {
  margin-top: 20px;
  display: flex;
  column-gap: 20px;
}
</style>