<template>
  <div
    id="main"
    class="default-intro"
    :style="{ backgroundImage: `url(${background})` }"
  >
    <div
      class="intro-login"
      :class="{ loginFadeOut: loginState, loginFadeIn: loginFadeIn }"
    >
      <div class="intro-login__imgbox">
        <img src="profile.png" alt="profile" />
      </div>
      <h1 class="intro-login__username">{{name}}</h1>
      <button @click="login" class="intro-login__button">
        Login
      </button>
    </div>
  </div>
</template>

<script>
import background from "../images/backgroundHome.jpeg";
export default {
  

  data() {
    
    return {
      name: "Игорь Алексеевич",
      background: background,
      loginFadeIn: false,
      loginState: false,
    };
  },
  methods: {
    login() {
      this.loginState = true;
      setTimeout(() => {
        this.$router.push("/home");
      }, 500);
    },
  },
  mounted() {
    setTimeout(() => {
      this.loginFadeIn = true;
    }, 0);
  },
};
</script>

<style>
.intro-login {
  transition: all 0.5s;
  opacity: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.intro-login__imgbox img {
  border-radius: 50%;
  background: white;
  width: 200px;
}
.intro-login__username {
  margin: 0;
  margin-top: 8px;
  font-size: 1.5rem;
  text-shadow: 0 0 1.5rem rgba(0, 0, 0, 0.25);
  color: white;
}
.intro-login__button {
  margin-top: 10px;
  padding: 8px 16px;
  border-style: none;
  background: rgba(255, 255, 255, 0.3);
  border-radius: 8px;
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.8);
  transition: all 0.5s;
}
.intro-login__button:hover {
  cursor: pointer;
  background: rgba(255, 255, 255, 0.5);
}
.loginFadeIn {
  opacity: 1;
}

.loginFadeOut {
  opacity: 0;
}
</style>
