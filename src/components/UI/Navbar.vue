<template>
  <div class="navbar">


    <div class="navbar__btn">
      <my-button><router-link to="/about" class="navbar__link">О нас</router-link></my-button>
    </div>
    <div class="navbar__btn">
      <my-button><router-link class="navbar__link" to="/">Главная</router-link></my-button>
    </div>
    <div class="navbar__btn">
      <my-button><router-link to="posts" class="navbar__link">Посты</router-link></my-button>



    </div>


  </div>
</template>

<script>


  export default {
    name: "navbar"
  }
  </script>

  <style>
    .navbar {
      background-color: orange;
      height: 70px;
      box-shadow: 2px 2px 4px gray;
      display: flex;
      align-items: center;
      padding: 15px;
    }
    .navbar__btn {
      width: 80px;
    }
    .navbar__link{
      text-decoration: none;
      color: black;
      border: 1px solid black;
      padding: 5px;
      border-radius: 6px;
    }

  </style>