<template>
  <div id="home">
    <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
    <home-swiper :banners='banners'></home-swiper>
    <home-recommend :recommends="recommends"></home-recommend>
    <home-feature></home-feature>
    <ul>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
  </ul>
  </div>
  
</template>

<script>
import NavBar from "@/components/nav_bar/nav-bar";
import HomeSwiper from './HomeSwiper';
import HomeRecommend from './HomeRecommend.vue';
import { getHomedata } from "@/network/home";
import HomeFeature from './HomeFeature.vue';


export default {
  name: "Home",
  components: {
    NavBar,
    HomeSwiper,
    HomeRecommend,
    HomeFeature,
  },
  data() {
    return {
      banners: [],
      recommends: []
    };
  },
  created() {
    getHomedata().then(res => {
      this.banners = res.data.banner.list;
      this.recommends = res.data.recommend.list;
    });
  },
  methods: {
  }
};
</script>

<style scoped>
#home{
  padding-top: 44px;
}
.home-nav {
  background-color: #ff8198;
  color: aliceblue;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 10;
}

</style>
