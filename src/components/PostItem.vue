<template>
  <div class="post">
    <div>
      <div>
        {{post.id}}
      </div>
      <div>
        <strong>Название: </strong> {{post.title}}
      </div>
      <div>
        <strong>Описание: </strong> {{post.body}}
      </div>
    </div>
    <my-button @click="$emit('remove', post)">Удалить</my-button>
  </div>

</template>

<script>

  export default {
    props: {
      post: {
        type: Object,
        required: true,
      }
    }
  }
  </script>

  <style>
    .post {
      padding: 15px;
      border: 2px solid orange;
      margin-top: 15px;
      border-radius: 4px;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
  </style>