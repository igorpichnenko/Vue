<template>
  <div class="information">
    <div class="information__logo">
      <img :src="logo" alt="vue-logo" />
    </div>
    <div class="information__title">
      <p>Based on Vue3</p>
    </div>
    <div class="information__library">
      <div
        v-for="(a, i) in informationLibrary"
        :key="i"
        class="information__library__item"
      >
        <p>{{ a }}</p>
      </div>
    </div>
    <div class="information__copyright">
      <p>
       Igor developed by
        <a
          target="_blank"
          class="information__copyright__link"
          href="https://github.com/cre4tive97"
          >igorpichnenko@gmail.com</a
        >
      </p>
    </div>
  </div>
</template>

<script>
import logo from "../assets/logo.png";
export default {
  name: "Setting",
  data() {
    return {
      logo: logo,
      informationLibrary: ["vuex4", "vue-router4", "axios"],
    };
  },
};
</script>

<style>
.information {
  font-family: "AppleSDGothicNeoH";
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
  margin-top: 70px;
}
.information__logo img {
  width: 150px;
}
.information__title {
  font-size: 1.75rem;
  font-weight: 100;
  color: white;
  text-shadow: 0 0 15px rgba(0, 0, 0, 0.5);
  margin-bottom: 1rem;
}
.information__library {
  display: flex;
  width: 220px;
  justify-content: space-between;
  align-items: center;
}

.information__library__item {
  padding: 4px 8px;
  background: rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  font-weight: 100;
}
.information__copyright {
  width: 100%;
  position: relative;
  top: 100px;
  font-size: 0.75rem;
  font-weight: 100;
  text-align: center;
}
</style>
