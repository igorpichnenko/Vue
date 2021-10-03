<template>
  <div class="navbar">
    <div @click="$router.push('/')" class="navbar__title">
      MacBook Portfolio
    </div>
    <div class="navbar__btns">
      <my-button @click="$router.push('/posts')">Посты</my-button>
      <my-button style="margin-left: 20px" @click="$router.push('/home')"
        >На главную</my-button
      >
      <my-button
        style="margin-left: 20px"
        @click="buttonClick"
        v-if="!isVisible"
        >Выйти</my-button
      >
      <my-button
        v-if="isVisible"
        style="margin-left: 20px"
        @click="$router.push('/auth')"
        >Войти</my-button
      >
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  data(){
    return{
      isVisible: !this.$store.state.isAuth && !localStorage.getItem('auth')
    }
  },
  methods: {
    buttonClick() {
      this.$router.push("/auth");
      localStorage.removeItem("auth");
      this.setIsAuth(false);
    },
    ...mapMutations({
      setIsAuth: "setIsAuth",
    }),
  },
};
</script>

<style scoped>
.navbar {
  height: 50px;
  background-color: lightgray;
  box-shadow: 2px 2px 4px gray;
  display: flex;
  align-items: center;
  padding: 0 15px;
}
.navbar__btns {
  margin-left: auto;
}
.navbar__title {
  color: teal;
  cursor: pointer;
}
</style>
