<template>
  <button class="my-button">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'my-button'
}
</script>

<style scoped>
.my-button {
  padding: 10px 15px;
  background: inherit;
  color: teal;
  border: 1px solid teal;
  border-radius: 6px;
  margin-right: 10px;
  cursor: pointer;
}
</style>
