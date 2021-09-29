<template>
  <button class="my-button">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "my-button",
};
</script>

  <style>
.my-button {
  color: orange;
  background-color: inherit;
  border: 1px solid orange;
  border-radius: 4px;
  width: 300px;
  padding: 10px;

}
</style>