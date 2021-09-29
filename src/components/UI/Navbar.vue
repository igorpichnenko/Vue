<template>
  <div class="navbar">
    <div class="navbar__btn">
      <my-button
        ><router-link to="/about" class="navbar__link"
          >О нас</router-link
        ></my-button
      >

      <my-button
        ><router-link class="navbar__link" to="/"
          >Главная</router-link
        ></my-button
      >

      <my-button
        ><router-link to="posts" class="navbar__link"
          >Посты</router-link
        ></my-button
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "navbar",
};
</script>

  <style>
.navbar {
  background-color: orange;
  height: 70px;
  box-shadow: 2px 2px 4px gray;
  display: flex;
  align-items: center;
}
.navbar__btn {
  width: 300px;
  display: flex;
}
.navbar__link {
  text-decoration: none;
  color: rgb(255, 255, 255);
  border: 1px solid rgb(247, 255, 247);
  padding: 5px;
  width: 80px;
  border-radius: 6px;
}
</style>