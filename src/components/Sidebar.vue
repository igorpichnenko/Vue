<template>
  <div class="sidebar">
    <div class="sidebar__greeting">
      <h2>{{ greetingData[greetingStatus] }}</h2>
    </div>
    <div class="sidebar__weather">
      <div class="sidebar__weather__group">
        <p class="sidebar__weather__city">
          {{ $store.state.weatherData[0] }}
        </p>
        <h2 class="sidebar__weather__currentTemperature">
          {{ Math.floor(weatherData[1][0].temp) }}℃
        </h2>
      </div>
      <div class="sidebar__weather__week">
        <div
          class="sidebar__weather__days"
          v-for="(a, i) in weatherData[1].length"
          :key="i"
        >
          <i
            :style="{ color: weatherColor[weatherData[1][i].weather[0].icon] }"
            :class="weatherIcon[weatherData[1][i].weather[0].icon]"
          ></i>
          <span class="sidebar__weather__days__currentTemperature"
            >{{ Math.floor(weatherData[1][i].temp) }}℃</span
          >
          <span class="sidebar__weather__days__currentHour"
            >{{ unixTimeChanger(weatherData[1][i].dt) }}시</span
          >
        </div>
      </div>
    </div>
    <div class="sidebar__recommend">
      <div class="sidebar__recommend__text">
        <p>{{ recommendApps[randomIndex].text }}</p>
      </div>
      <div
        class="sidebar__recommend__app"
        @click="$emit('openWindow', randomIndex)"
      >
        <img :src="recommendApps[randomIndex].image" />
        <span>{{ recommendApps[randomIndex].name }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  name: "Sidebar",
  data() {
    return {
      greetingData: [
        "Good Night",
        "Good Morning",
        "Good Afternoon",
        "Good Evening",
      ],
      greetingStatus: 0,
      recommendApps: [
        {
          id: 0,
          name: "Safari",
          image: require("../images/safari.png"),
          text: "как насчет веб-серфинга в Google?",
        },
        {
          id: 1,
          name: "Contact",
          image: require("../images/message.png"),
          text: "Если вы хотите узнать мою контактную информацию?",
        },
        {
          id: 2,
          name: "Information",
          image: require("../images/setting.png"),
          text: "Хотите знать информацию о сайте?",
        },
        {
          id: 3,
          name: "About me",
          image: require("../images/about.png"),
          text: "Хотите узнать о разработчике?",
        },
        {
          id: 4,
          name: "Todo list",
          image: require("../images/todolist.png"),
          text: "Как насчет добавить новую задачу?",
        },
        {
          id: 5,
          name: "Terminal",
          image: require("../images/terminal.png"),
          text: "Делайте простые вещи в терминале.",
        },
        {
          id: 6,
          name: "Instagram",
          image: require("../images/instagram.png"),
          text: "Оставьте новый канал на Instagram.",
        },
      ],
      weatherIcon: {
        "01d": "fas fa-sun",
        "03d": "fas fa-cloud",
        "02d": "fas fa-cloud-sun",
        "04d": "fas fa-cloud-meatball",
        "09d": "fas fa-cloud-showers-heavy",
        "10d": "fas fa-cloud-sun-rain",
        "11d": "fas fa-poo-storm",
        "13d": "fas fa-snowflake",
        "50d": "fas fa-water",
        "01n": "fas fa-moon",
        "02n": "fas fa-cloud-moon",
        "03n": "fas fa-cloud",
        "04n": "fas fa-cloud-meatball",
        "09n": "fas fa-cloud-showers-heavy",
        "10n": "fas fa-cloud-moon-rain",
        "11n": "fas fa-poo-storm",
        "13n": "fas fa-snowflake",
        "50n": "fas fa-water",
      },
      weatherColor: {
        "01d": "#fcba03",
        "03d": "#c2c2c2",
        "02d": "#c2c2c2",
        "04d": "#bababa",
        "09d": "#bababa",
        "10d": "#c2c2c2",
        "11d": "#bababa",
        "13d": "#bababa",
        "50d": "#bababa",
        "01n": "#7a7991",
        "02n": "#c2c2c2",
        "03n": "#c2c2c2",
        "04n": "#bababa",
        "09n": "#bababa",
        "10n": "#c2c2c2",
        "11n": "#bababa",
        "13n": "#bababa",
        "50n": "#bababa",
      },
    };
  },

  computed: {
    ...mapState(["weatherData", "randomIndex"]),
    ...mapActions(["getCurrentWeather"]),
  },
  methods: {
    unixTimeChanger(time) {
      let date = new Date(time * 1000);
      let hour = "0" + date.getHours();
      return hour.substr(-2);
    },
    greetingtime() {
      let date = new Date();
      let hour = date.getHours();
      if (hour > 0 && hour <= 6) {
        this.greetingStatus = 0;
      } else if (hour > 6 && hour <= 12) {
        this.greetingStatus = 1;
      } else if (hour > 12 && hour <= 18) {
        this.greetingStatus = 2;
      } else {
        this.greetingStatus = 3;
      }
    },
    setCurrentIndex() {
      this.currentIndex = this.$store.state.randomIndex;
    },
  },
  mounted() {
    this.$store.dispatch("getCurrentWeather");
    this.greetingtime();
  },
};
</script>

<style>
.sidebar h2 {
  margin: 0;
}
.sidebar {
  position: absolute;
  left: 0.5rem;
  bottom: 3.5rem;
  background: rgba(0, 0, 0, 0.2);
  border-radius: 0.5rem;
  padding: 0.5rem 1rem;
  color: white;
  width: 200px;
  z-index: 5;
  backdrop-filter: blur(16px);
}
.sidebar__greeting {
  margin-bottom: 0.5rem;
}
.sidebar__weather__city {
  font-size: 0.7rem;
  position: relative;
  top: 4px;
}
.sidebar__weather__group {
  margin-bottom: 1rem;
}
.sidebar__weather {
  background: linear-gradient(170deg, #2087b7, #76b7d8);
  padding: 0.5rem;
  padding-top: 0;
  border-radius: 0.5rem;
  margin-bottom: 0.5rem;
}
.sidebar__weather__week {
  display: flex;
  justify-content: space-between;
}
.sidebar__weather__days {
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 1.5rem;
}
.sidebar__weather__days__currentTemperature {
  font-size: 0.5rem;
}
.sidebar__weather__days__currentHour {
  font-size: 0.5rem;
}
.sidebar__recommend {
  display: flex;
  align-items: center;
  background: rgba(0, 0, 0, 0.5);
  border-radius: 8px;
  padding: 0.5rem 1rem;
}
.sidebar__recommend__app {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 40%;
}
.sidebar__recommend__app:hover {
  cursor: pointer;
}
.sidebar__recommend__app img {
  width: 50px;
  height: 50px;
}
.sidebar__recommend__app span {
  font-size: 0.7rem;
}
</style>
