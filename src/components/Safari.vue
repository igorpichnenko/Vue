<template>
  <div class="google">
    <img
      class="google__img"
      :src="require(`@/images/google.png`)"
      alt="google"
    />
    <form class="google__form">
      <i class="fas fa-search"></i>
      <input @input="getInputData" class="google__input" type="text" />
      <div v-show="inputEmptyCheck == 1" class="google__alert">
        <span>Input is empty.</span>
      </div>
      <div class="google__alert" v-show="searchStatus > 0">
        <span
          >{{ searchStatus }} секунды спустя,{{ inputData }} откроет результаты поиска.</span
        >
      </div>

      <button class="google__btn" @click="openGoogleResult">Google поиск</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "Safari",
  data() {
    return {
      inputData: "",
      inputEmptyCheck: 0,
      searchStatus: 0,
    };
  },
  methods: {
    getInputData(e) {
      this.inputData = e.target.value;
    },
    openGoogleResult(e) {
      e.preventDefault();
      if (this.inputData !== "") {
        this.searchStatus = 2;
        setTimeout(() => {
          window.open(`https://www.google.com/search?q=${this.inputData}`);
          this.searchStatus = 0;
        }, 2000);
      } else {
        this.inputEmptyCheck = 1;
        setTimeout(() => {
          this.inputEmptyCheck = 0;
        }, 2000);
      }
    },
  },
};
</script>

<style>
.google {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 90px;
}
.google__img {
  margin-bottom: 30px;
}
.google__form {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  max-width: 400px;
  width: 50%;
}

.google__form i {
  position: absolute;
  top: 0.85rem;
  left: -1.7rem;
  color: rgba(255, 255, 255, 0.5);
}

.google__input {
  width: 100%;
  background: transparent;
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 2rem;
  height: 2.5rem;
  padding: 0 3rem;
  font-size: 1rem;
  color: white;
  margin-bottom: 40px;
  position: relative;
}
.google__input:focus {
  outline: none;
  background: rgba(255, 255, 255, 0.1);
  border: none;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  border: 1px solid rgba(255, 255, 255, 0.1);
}
.google__input:hover {
  background: rgba(255, 255, 255, 0.1);
  border: none;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.google__btn {
  background: rgba(255, 255, 255, 0.1);
  padding: 8px 16px;
  border-style: none;
  border-radius: 4px;
  color: white;
}
.google__btn:hover {
  cursor: pointer;
}
.google__alert {
  position: absolute;
  top: 3rem;
  color: white;
  background: black;
  padding: 4px 12px;
  border-radius: 12px;
  font-size: 14px;
}
</style>
