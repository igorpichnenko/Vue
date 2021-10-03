<template>
  <div class="wrapper">
    <navbar />
    <div class="not-found">
      <h1>Страницы не существует 404</h1>
    </div>
    <div class="not-found__footer">
      <my-footer />
    </div>
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
export default {
  components: { Navbar },
};
</script>

<style>
.not-found {
  text-align: center;
  margin-top: 240px;
  color: rgb(95, 25, 25);
  flex: 1 0 auto;
}
.wrapper {
  display: flex;
  flex-direction: column;
  height: 100%;
}
.not-found__footer {
  flex: 0 0 auto;
}
</style>