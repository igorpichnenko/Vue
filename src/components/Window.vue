<template>
  <div class="window">
    <div class="window-box">
      <div class="window__header">
        <div class="window__btn-group">
          <button class="btn btn-red" @click="$emit('closeWindow')"></button>
          <button class="btn btn-yellow"></button>
          <button class="btn btn-green"></button>
        </div>
      </div>
      <Safari v-if="i == 1" />
      <Contact v-if="i == 2" />
      <Information v-if="i == 3" />
      <About v-if="i == 4" />
      <Todolist v-if="i == 5" />
      <Terminal v-if="i == 6" />
      <Instagram v-if="i == 7" />
    </div>
  </div>
</template>

<script>
import Information from "./Information.vue";
import Safari from "./Safari.vue";
import Terminal from "./Terminal.vue";
import About from "./About.vue";
import Todolist from "./Todolist.vue";
import Contact from "./Contact.vue";
import Instagram from "./Instagram.vue";
export default {
  name: "Window",
  data() {
    return {};
  },
  props: {
    i: Number,
  },
  components: {
    Safari,
    Information,
    Terminal,
    About,
    Todolist,
    Contact,
    Instagram,
  },
  mounted() {
    if (this.i === 7) {
      this.windowHeaderState = true;
    }
  },
  methods: {
    headerScrollHandler() {
      let scroll = document.documentElement.scrollTop;
      console.log(scroll);
    },
  },
};
</script>

<style>
.window {
  z-index: 4;
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.window-box {
  max-width: 1000px;
  width: 60%;
  height: 65vh;
  background: #262c32;
  border-radius: 12px;
  box-shadow: 0 0 3rem rgba(0, 0, 0, 0.6);
  overflow: auto;
}
.window__header {
  width: 100%;
  height: 2.5rem;
  background: transparent;
  position: sticky;
  top: 0;
}
.window__btn-group {
  margin-left: 10px;
}
.btn {
  margin-top: 20px;
  padding: 0;
  border-style: none;
  width: 14px;
  height: 14px;
  border-radius: 50%;
  margin-left: 8px;
}
.btn-red {
  background: #e04949;
}
.btn-red:hover {
  background: #9c3131;
  cursor: pointer;
}
.btn-yellow {
  background: #f5be50;
}
.btn-green {
  background: #28c640;
}

@media screen and (max-width: 1024px) {
  .window-box {
    max-width: 1000px;
    width: 80%;
    height: 65vh;
    background: #262c32;
    border-radius: 12px;
    box-shadow: 0 0 3rem rgba(0, 0, 0, 0.6);
    overflow: auto;
  }
}
</style>
