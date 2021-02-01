<template>
  <div id="home">
    <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
    <home-swiper :banners="banners"></home-swiper>
    <home-recommend :recommends="recommends"></home-recommend>
    <home-feature></home-feature>
    <tab-controll class="tab-controll" :title="title"></tab-controll>
    <goods :goods="goods['pop'].list"></goods>
  </div>
</template>

<script>
//Home导入的组件
import NavBar from "@/components/nav_bar/nav-bar";
import HomeSwiper from "./HomeSwiper";
import HomeRecommend from "./HomeRecommend.vue";
import HomeFeature from "./HomeFeature.vue";
import TabControll from "@/components/tab_controll/TabControll.vue";
import Goods from '../../components/goods/goods.vue';
import { getHomedata, getHomedata_goods } from "@/network/home";


export default {
  name: "Home",
  components: {
    NavBar,
    HomeSwiper,
    HomeRecommend,
    HomeFeature,
    TabControll,
    Goods,
  },
  data() {
    return {
      banners: [],
      recommends: [],
      title: ["流行", "新款", "精选"],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] }
      }
    };
  },
  created() {
    //获取首页上半部分数据
    this.getHomedata();
    //获取展示的商品信息
    this.getHomedata_goods('pop');
    this.getHomedata_goods('new');
    this.getHomedata_goods('sell');
  },
  methods: {
    getHomedata() {
      getHomedata().then(res => {
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
      });
    },
    getHomedata_goods(type){
      const page = this.goods[type].page + 1;
      getHomedata_goods(type,page).then(res =>{
        this.goods[type].list.push(...res.data.list)
        this.goods[type].page + 1
      })
    }
  }
};
</script>

<style scoped>
#home {
  
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
.tab-controll {
  position: sticky;
  top: 44px;
}
</style>
