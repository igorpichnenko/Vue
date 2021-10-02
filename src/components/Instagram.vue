<template>
  <div class="instagram">
    <header class="instagram__header">
      <nav class="instagram__nav">
        <img class="instagram__nav__logo" src="../images/instagram-logo.png" />
        <ul class="instagram__nav__menu">
          <li><i class="far fa-plus-square"></i></li>
          <li><i class="far fa-heart"></i></li>
          <li><i class="far fa-comment"></i></li>
        </ul>
      </nav>
    </header>
    <InstagramPost
      :instagramData="instagramData"
      :i="i"
      v-for="(a, i) in instagramData"
      :key="i"
      @like="
        instagramData[i].likes++;
        instagramData[i].liked = true;
      "
      @dislike="
        instagramData[i].likes--;
        instagramData[i].liked = false;
      "
    />
  </div>
</template>

<script>
import InstagramPost from "./InstagramPost.vue";
export default {
  name: "Instagram",
  data() {
    return {
      instagramData: [
        {
          name: "Ryan",
          profileImage: "https://placeimg.com/100/100/arch",
          postImage: "https://placeimg.com/640/480/arch",
          likes: 11,
          date: "October 20",
          liked: true,
          content: "Я тоже хочу пойти завтра😍",
        },
        {
          name: "Apeach",
          profileImage: "https://placeimg.com/200/200/people",
          postImage: "https://placeimg.com/640/480/people",
          likes: 22,
          date: "October 26",
          liked: false,
          content: "I'm Yulhyeon-dong Blood Barrage",
        },
        {
          name: "Muzi",
          profileImage: "https://placeimg.com/100/100/animals",
          postImage: "https://placeimg.com/640/480/animals",
          likes: 49,
          date: "September 12",
          liked: false,
          content: "How does a person's name become Um Jun-sik?",
        },
      ],
    };
  },
  components: {
    InstagramPost,
  },
};
</script>

<style>
.instagram {
  width: 100%;
  margin-top: 10px;
}
.instagram__header {
  position: sticky;
  width: 100%;
}
.instagram__nav {
  display: flex;
  margin: 0 1.5rem;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
}
.instagram__nav__logo {
  width: 7rem;
  height: 100%;
}
.instagram__nav__menu {
  display: flex;
  color: white;
  font-size: 1.5rem;
  margin: 0;
}
.instagram__nav__menu li {
  margin-left: 1.5rem;
}
</style>
