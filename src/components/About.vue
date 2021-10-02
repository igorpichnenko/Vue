<template>
  <div class="about">
    <div class="about__content">
      <div class="about__profile">
        <div class="about__profile__image">
          <img src="profile.png" alt="profile" />
        </div>
        <p class="about__profile__name">Пичненко Игорь Алексеевич</p>
        <p class="about__profile__motto">Be a programmer, not a coder.</p>
      </div>
      <div class="about__skills">
        <h4 class="about__skills__title">Skills</h4>
        <div class="about__skills__skillset">
          <div
            v-for="(a, i) in skillsetData"
            :key="i"
            class="about__skills__item"
          >
            <span
              class="about__skills__icon"
              :style="{ background: skillsetData[i].color }"
            ></span>
            <p class="about__skills__text">{{ skillsetData[i].name }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "About",
  data() {
    return {
      skillsetData: [
        { name: "HTML", color: "#FF5F57" },
        { name: "CSS", color: "#264BDD" },
        { name: "JavaScript", color: "#F1DE50" },
        { name: "Vue.js", color: "#65B485" },
        { name: "Node.js", color: "#92C84A" },
        { name: "React", color: "#353535" },
        { name: "Sass", color: "#C66595" },
        { name: "Typescript", color: "#2F6492" },
      ],
    };
  },
};
</script>

<style>
p {
  margin: 0;
}
.about {
  margin-top: 1rem;
  color: white;
  width: 100%;
}
.about__content {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}
.about__profile {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.about__profile__image {
  width: 70%;
  max-width: 400px;
  opacity: 1;
}
.about__profile__image img {
  width: 100%;
  border-radius: 50%;
  border: 2px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 0 25px rgba(0, 0, 0, 0.3);
  margin-bottom: 1rem;
  background: rgba(0, 0, 0, 0.7);
}

.about__profile__name {
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
}
.about__profile__motto {
  font-size: 1rem;
  font-family: "AppleSDGothicNeoH";
  font-weight: 300;
}
.about__skills {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 2rem 0;
}

.about__skills__title {
  font-size: 1.5rem;
  font-weight: 300;
  margin: 0;
  margin-bottom: 1rem;
}
.about__skills__skillset {
  display: flex;
  justify-content: center;
  margin: 0 10rem;
  flex-wrap: wrap;
}
.about__skills__item {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4px 8px;
  border-radius: 5px;
}
.about__skills__item:hover {
  background: rgba(255, 255, 255, 0.1);
  cursor: pointer;
}
.about__skills__icon {
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
  margin-right: 5px;
  position: relative;
  top: -1px;
}
.about__skills__text {
  font-family: "AppleSDGothicNeoH";
  font-weight: 400;
  font-size: 1rem;
}
</style>
