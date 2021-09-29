<template>

  <div v-if="show" class="my-dialog" @click="hideDialog">
    <div @click.stop class="my-dialog__content">
      <slot></slot>
    </div>
  </div>

</template>

<script>

  export default {
    name: "my-dialog",
    props: {
      show: {
        type: Boolean,
        default: false
        }
      },
      methods:{
        hideDialog(){
          this.$emit('update:show', false)
        }
      }
    }
  </script>

    <style scoped>
      .my-dialog {
        top: 0;
        right: 0;
        left: 0;
        bottom: 0;
        background-color: rgba(0,0,0,0.5);
        position: fixed;
        display: flex;
      }
      .my-dialog__content {
        margin: auto;
        background-color: #fff;
        border-radius: 12px;
      
      }

    </style>