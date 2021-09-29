<template>

  <select 
  class="my-select" 
  v-model="modelValue" 
  @change="changeOption">
 
    <option disabled value=""
    >Выберите из списка</option>
    
    <option 
    v-for="option in options"
    :key="option.value"
    :value="option.value">{{option.name}}</option>
  </select>

</template>

<script>

  export default {
    name: "my-select",
    props: {
      modelValue: {
        type: String
      },
      options: {
        type: Array,
        default: () => []
        }
      },
      methods: {
        changeOption(event) {
          this.$emit("update:modelValue", event.target.value)
        }
      }
    }
  </script>

    <style>

      .my-select {
        color: orange;
        border: 1px solid orange;
        outline: unset;
        background-color: inherit;
        padding: 10px;
        margin-top: 20px;
        margin-left: 10px;
        border-radius: 6px;
      }

    </style>