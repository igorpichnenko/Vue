<template>
  <div class="project">
    <h1 class="project__title">Мои проекты</h1>
    <ul>
      <li class="project__link">
        <a href="https://next-js-toxin-i2y5ln7tm-igorpichnenko.vercel.app/"
          >Бронирование номеров отеля - React Typescript Next js(ssr) Firebase
          Регистрация и авторизация по email Мультиязычность</a
        >
      </li>
      <li class="project__link">
        <a
          class="project__doc"
          href="https://github.com/igorpichnenko/next-js-toxin"
          >Cсылка на код и документацию</a
        >
      </li>
      <li class="project__link">
        <a href="https://igorpichnenko.github.io/Slider/"
          >Настраеваемый рэндж-слайдер на - Typescript MVP
        </a>
      </li>
      <li class="project__link">
        <a class="project__doc" href="https://github.com/igorpichnenko/Slider"
          >Cсылка на код и документацию</a
        >
      </li>
      <li class="project__link">
        <a href="https://igorpichnenko.github.io/project/"
          >Учебная верстка по макету - Pixel Perfect Responsive Pug Bem Scss
          Jquery
        </a>
      </li>
      <li>
        <a class="project__doc" href="https://github.com/igorpichnenko/project"
          >Cсылка на код и документацию</a
        >
      </li>
    </ul>

    <h3 @click="$router.push('/posts')" class="project__posts">Перейти на страницу с постами =></h3>
  </div>
</template>

<script>
export default {
  name: "Project",
  data() {
    return {};
  },
};
</script>

<style>
.project {
  margin: 40px;
  color: aliceblue;
}
.project__doc {
  color: darkgoldenrod;
}
.project__link {
  margin-bottom: 20px;
}
.project__title {
  margin: 40px;
}
.project__posts{
 margin: 40px;
 cursor: pointer;
 color: goldenrod;
}
</style>
