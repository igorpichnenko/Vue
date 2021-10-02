<template>
  <div>
    <div class="home-main" :style="{ backgroundImage: `url(${background})` }">
      <Introduce v-if="localStorageCheck == null" />
      <div class="window-div" v-for="(a, i) in apps" :key="i">
        <Window
          v-show="windowState == i"
          @closeWindow="windowState = -1"
          :i="i"
        />
      </div>
      <div class="home-apps" :class="{ homeFadeIn: homeFadeIn }">
        <div
          v-for="(a, i) in apps"
          :key="i"
          class="icon"
          @click="windowState = i"
        >
          <img :src="apps[i].image" :alt="apps[i].name" />
          <p>{{ apps[i].name }}</p>
        </div>
      </div>
    </div>
    <transition name="sidebarAnimation">
      <Sidebar
        v-show="sidebarState"
        @openWindow="
          sidebarState = false;
          windowState = $event + 1;
        "
      />
    </transition>
    <footer class="footer-bar">
      <div class="footer__btn" @click="clickfooterBtn"></div>
      <div class="footer__currentTime">
        <p>{{ currentTimeData }}</p>
      </div>
    </footer>
  </div>
</template>

<script>
import background from "../images/backgroundHome.jpeg";
import Introduce from "../components/Introduce.vue";
import Window from "../components/Window.vue";
import Sidebar from "../components/Sidebar.vue";

export default {
  name: "Home",
  components: {
    Introduce,
    Window,
    Sidebar,
  },
  data() {
    return {
      homeFadeIn: false,
      localStorageCheck: localStorage.getItem("check"),
      background: background,
      icons: ["project", "safari", "message", "setting", "about", "todolist"],
      windowState: Number,
      apps: [
        { id: 0, name: "Project", image: require("../images/project.png") },
        { id: 1, name: "Safari", image: require("../images/safari.png") },
        { id: 2, name: "Contact", image: require("../images/message.png") },
        {
          id: 3,
          name: "Information",
          image: require("../images/setting.png"),
        },
        { id: 4, name: "About me", image: require("../images/about.png") },
        { id: 5, name: "Todo list", image: require("../images/todolist.png") },
        { id: 6, name: "Terminal", image: require("../images/terminal.png") },
        { id: 7, name: "Instagram", image: require("../images/instagram.png") },
      ],
      currentTimeData: "",
      sidebarState: false,
    };
  },
  methods: {
    createRandomIndex() {
      this.randomIndex = Math.floor(Math.random() * 7);
      console.log(this.randomIndex);
    },
    getCurrentTime() {
      let date = new Date();
      function hour() {
        if (date.getHours() < 10) {
          return `0${date.getHours()}`;
        } else {
          return `${date.getHours()}`;
        }
      }
      function minute() {
        if (date.getMinutes() < 10) {
          return `0${date.getMinutes()}`;
        } else {
          return `${date.getMinutes()}`;
        }
      }

      this.currentTimeData = `${hour()}:${minute()}`;
      setInterval(() => {
        let date = new Date();
        function hour() {
          if (date.getHours() < 10) {
            return `0${date.getHours()}`;
          } else {
            return `${date.getHours()}`;
          }
        }
        function minute() {
          if (date.getMinutes() < 10) {
            return `0${date.getMinutes()}`;
          } else {
            return `${date.getMinutes()}`;
          }
        }
        this.currentTimeData = `${hour()}:${minute()}`;
      }, 5000);
    },
    clickfooterBtn() {
      if (this.sidebarState == false) {
        this.sidebarState = true;
        this.$store.commit("setRandomIndex");
      } else {
        this.sidebarState = false;
      }
    },
  },

  mounted() {
    setTimeout(() => {
      this.homeFadeIn = true;
    }, 0);

    if (localStorage.getItem("check") == null) {
      localStorage.setItem("check", 1);
    }
    this.getCurrentTime();
  },
};
</script>

<style>
.home-main {
  width: 100vw;
  height: 100vh;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
}

.home-apps {
  opacity: 0;
  transition: all 0.5s;
  z-index: 2;
  width: 600px;
  height: 300px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  margin: auto;
  box-sizing: border-box;
  padding: 1rem;
}
.window-div {
  width: 100%;
  height: 100%;
  position: absolute;
}
.icon {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  margin: 1rem;
}

.icon:hover {
  cursor: pointer;
}

.icon p {
  margin: 0;
}

.icon img {
  width: 6rem;
  height: 6rem;
}

.home-transition-enter-from {
  transform: translateY(50px);
  opacity: 0;
}
.home-transition-enter-active {
  transition: all 1s;
}
.home-transition-enter-to {
  transform: translateY(0px);
  opacity: 1;
}
.homeFadeIn {
  opacity: 1;
}
.footer-bar {
  position: absolute;
  bottom: 0px;
  width: 100%;
  height: 3rem;
  background: rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 5;
  backdrop-filter: blur(16px);
}
.footer__btn {
  width: 30px;
  height: 30px;
  background: rgba(0, 0, 0, 0.4);
  border-radius: 50%;
  margin-left: 1.5rem;
  transition: all 0.3s;
}
.footer__btn:hover {
  transform: scale(110%);
  background: rgba(0, 0, 0, 0.6);
  cursor: pointer;
}
.footer__currentTime {
  width: 70px;
  height: 2rem;
  background: rgba(0, 0, 0, 0.4);
  margin-right: 1.5rem;
  border-radius: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.1rem;
  color: white;
}
.footer__currentTime p {
  position: relative;
  bottom: 2px;
}
.sidebarAnimation-enter-from {
  opacity: 0;
  transform: translateX(-200px);
}
.sidebarAnimation-enter-active,
.sidebarAnimation-leave-active {
  transition: all 0.5s;
}
.sidebarAnimation-enter-to {
  opacity: 1;
  transform: translateX(0px);
}
.sidebarAnimation-leave-to {
  opacity: 0;
  transform: translateX(-200px);
}
</style>
