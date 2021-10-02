<template>
  <div class="contact">
    <div class="contact__title">
      <h1>Contact me!</h1>
    </div>
    <div class="contact__content">
      <a
        target="_blank"
        :href="contactData[i].address"
        v-for="(a, i) in contactData"
        :key="i"
        class="contact__content__item"
      >
        <i :class="contactData[i].icon"></i>
        <p class="contact__content__text">{{ contactData[i].text }}</p>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "Contact",
  data() {
    return {
      contactData: [
        {
          icon: "fab fa-github",
          text: "Github",
          address: "https://github.com/igorpichnenko",
        },
        {
          icon: "fas fa-cube",
          text: "Blog",
          address: "https://zen.yandex.ru/profile/editor/id/6158199bf747396c7dab4060#status=ok&am_social=false",
        },
        { icon: "fas fa-envelope", text: "igorpichnenko@gmail.com" },
      ],
    };
  },
};
</script>

<style>
a {
  text-decoration: none;
  color: white;
}
.contact {
  margin-top: 30px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
}
.contact__title {
  margin-bottom: 2rem;
  width: 100%;
  text-align: center;
}
.contact__content__item {
  display: flex;
  align-items: center;
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
  transition: all 0.5s;
}
.contact__content__item:hover {
  cursor: pointer;
  transform: scale(110%);
}
.contact__content__item i {
  margin-right: 1rem;
}
</style>
