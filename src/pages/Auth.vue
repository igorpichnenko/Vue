<template>
  <navbar />
  <div class="auth">
    <form class="auth__form">
      <h2>Форма авторизации</h2>
      <my-input type="email" v-model="inputLogin" placeholder="Введите email" />
      <my-input
        type="password"
        v-model="inputPassword"
        placeholder="Введите пароль"
      />
      <div class="auth__items">
        <my-button @click.prevent="submitForm" type="submit">Войти</my-button>
        <label class="auth__label"
          >запомнить вход<input
            @change="checkboxChange"
            class="auth__checkbox"
            type="checkbox"
        /></label>
      </div>
    </form>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
import Navbar from "../components/Navbar.vue";
export default {
  components: { Navbar },
  data() {
    return {
      inputLogin: "",
      inputPassword: "",
      isChecked: false,
      correctLogin: "admin@test.ru",
      correctPassword: "12345678qwe",
      reg: /(?=.*[a-zA-Z])/g,
    };
  },
  methods: {
    ...mapMutations({
      setIsAuth: "setIsAuth",
    }),
    submitForm() {
      const expression =
        /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])/;

      const correct =
        this.inputLogin === this.correctLogin &&
        this.inputPassword === this.correctPassword;
      if (!expression.test(this.inputLogin.toLowerCase())) {
        alert("введите корректный email");
        return;
      }

      if (this.inputPassword.length < 6) {
        alert("пароль должен быть больше 6 символов");
        return;
      }
      if (!this.reg.test(this.inputPassword.trim())) {
        alert("пароль должен содержать хотя бы одну букву");
        return;
      }
      if (!correct) {
        alert("Введен неверный логин или пароль");
        return;
      }
      if (this.isChecked) {
        localStorage.setItem("auth", "true");
        console.log("");
      }
      this.$router.push("/posts");
      this.setIsAuth(true);
    },
    checkboxChange(event) {
      this.isChecked = event.target.checked;
    },
  },
  mounted() {
    if (this.$store.state.isAuth) {
      this.$router.push("/posts");
    }
  },
};
</script>

<style>
.auth {
  display: flex;
  justify-content: center;
  padding: 40px;
  margin-top: 100px;
}
.auth__form {
  min-width: 500px;
}
.auth__items {
  display: flex;
  justify-content: space-between;
  padding: 40px;
}
.auth__label {
  margin-left: 20px;
  color: teal;
}
.auth__checkbox {
  margin-left: 10px;
}
</style>