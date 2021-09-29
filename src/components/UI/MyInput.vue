<template>

  <input :value="modelValue" @input="updateInput" class="my-input" type="text"/>

</template>

<script>

  export default {
    name: "my-input",
    props:{
      modelValue: [String, Number]
    },
    methods:{
      updateInput(event){
        this.$emit("update:modelValue", event.target.value)
      }
    }
  }
  </script>

  <style>
  
    .my-input {
      width: 100%;
      border: 1px solid orange;
      padding: 10px;
      margin-top: 5px;
      border-radius: 4px;
    }

  </style>