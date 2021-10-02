<template>
  <router-view></router-view>
</template>

<script>
import background from "./images/backgroundHome.jpeg";
export default {
  name: "App",
  data() {
    return {
      fadeOut: "",
      background: background,
    };
  },
};
</script>

<style>
@font-face {
  font-family: "SDGothicNeoM";
  src: url(./fonts/AppleSDGothicNeoM.ttf) format("woff");
  font-weight: normal;
  font-style: normal;
}
@font-face {
  font-family: "SDGothicNeoT";
  src: url(./fonts/AppleSDGothicNeoT.ttf) format("woff");
  font-weight: normal;
  font-style: normal;
}
@font-face {
  font-family: "SFMonoRegular";
  src: url(./fonts/SFMonoRegular.otf) format("woff");
  font-weight: normal;
  font-style: normal;
}
#app {
  font-family: SDGothicNeoM, SDCothicNeoT;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
html,
body {
  margin: 0;
}
h1 {
  margin: 0;
}
::-webkit-scrollbar {
  display: none;
}
</style>
