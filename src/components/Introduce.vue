<template>
  <div v-show="carouselState == 0" class="carousel">
    <div class="carousel-box">
      <div v-for="(a, i) in carouselData" :key="i">
        <div v-show="carouselContentCount == i" class="carousel-content">
          <h1>{{ carouselData[i].title }}</h1>
          <p>
            {{ carouselData[i].content1 }} <br />
            {{ carouselData[i].content2 }}<br />
          </p>
          <button @click="carouselCheck">Next</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Introduce",
  data() {
    return {
      carouselState: 0,
      carouselContentCount: 0,
      carouselData: [
        {
          title: "Welcome to my Website!",
          content1: "This website is my portfolio.",
          content2: "I hope you get nice experiences!",
        },
        {
          title: "Click the apps!",
          content1:
            "You can open apps just with clicking app's icon like macOS environment.",
          content2: "Apps will be able to update.",
        },
        {
          title: "Welcome to my Website!",
          content1: "This website is my portfolio.",
          content2: "I hope you get nice experiences!",
        },
      ],
    };
  },
  methods: {
    carouselCheck() {
      if (this.carouselContentCount < this.carouselData.length - 1) {
        this.carouselContentCount++;
      } else {
        this.carouselState = 1;
      }
    },
  },
};
</script>

<style>
.carousel {
  z-index: 3;
  width: 600px;
  height: 300px;
  position: absolute;
  top: 2rem;
  overflow: hidden;
  background: rgba(255, 255, 255, 0.7);
  border-radius: 1rem;
  transform: translateY(0px);
  opacity: 1;
  transition: all 1s;
}
.carousel-box {
  width: 100%;
  display: flex;
  flex-direction: row;
}

.carousel-content {
  width: 100%;
  text-align: center;
  margin-top: 1rem;
  position: absolute;
}
.carousel-content h1 {
  margin-bottom: 1rem;
}
.carouselAnimation {
  transform: translateY(50px);
  opacity: 0;
}
</style>
