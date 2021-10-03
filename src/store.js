import { createStore } from "vuex";
import axios from "axios";

const store = createStore({
  state() {
    return {
      isAuth: false,
      weatherData: [
        "",
        [
          { temp: 0, weather: [{ icon: "" }] },
          { temp: 0, weather: [{ icon: "" }] },
          { temp: 0, weather: [{ icon: "" }] },
          { temp: 0, weather: [{ icon: "" }] },
          { temp: 0, weather: [{ icon: "" }] },
        ],
      ],
      randomIndex: 0,
      currentPosition: [],
    };
  },
  mutations: {
    setRandomIndex(state) {
      state.randomIndex = Math.floor(Math.random() * 7);
    },
    setIsAuth(state, isAuth) {
      state.isAuth = isAuth;
    },
    setWeatherData(state, data) {
      let fiveHoursData = [
        data.hourly[0],
        data.hourly[1],
        data.hourly[2],
        data.hourly[3],
        data.hourly[4],
      ];
      state.weatherData = [data.timezone, fiveHoursData];
    },

    setCurrentPosition(state) {
      navigator.geolocation.getCurrentPosition((position) => {
        state.currentPosition = [
          position.coords.latitude,
          position.coords.longitude,
        ];
        localStorage.setItem(
          "CurrentPosition",
          JSON.stringify(state.currentPosition)
        );
      });
    },
  },
  actions: {
    getCurrentWeather(context) {
      axios
        .get(
          `https://api.openweathermap.org/data/2.5/onecall?lat=${
            JSON.parse(localStorage.getItem("CurrentPosition"))[0]
          }&lon=${
            JSON.parse(localStorage.getItem("CurrentPosition"))[1]
          }&exclude=minutely,daily&units=metric&appid=a985ee3f6bd72d99e16a6e0a1c0363c0`
        )
        .then((a) => {
          context.commit("setWeatherData", a.data);
        });
    },
  },
});

export default store;
