<template>

  <button class="my-button">
    <slot></slot>
  </button>

</template>

<script>

  export default {
    name: "my-button"
  }
  </script>

  <style>

    .my-button {
      color: orange;
      background-color: inherit;
      border: 1px solid orange;
      border-radius: 4px;
      margin-top: 10px;
      padding: 10px;
      width: 100%;
      margin-left: 10px;
    }

  </style>