<template>
  <div class="goods" key="show_img">
    <div class="goods-item" v-for="item in goods">
      <a href="#">
        <img :src="item.show.img" alt="" />
        <div class="goods-item-info">
          <p>{{ item.title }}</p>
          <span>价格:</span><span class="price">{{ item.price }}</span> <span>收藏</span
          ><span>{{ item.cfav }}</span>
        </div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "goods",
  props: {
    goods: {
      type: Array,
      default() {
        return [];
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
a{
  text-decoration: none;
  color: black;
}
.goods {
  
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
.goods-item {
  width: 48%;
  padding-bottom: 44px;
  position: relative;
}
.goods-item img {
  width: 100%;
  border-radius: 4px;
}
.goods-item-info{
  position: absolute;
  left: 0;
  right: 0;
  bottom: 5px;
  overflow: hidden;
  text-align: center;
  font-size: 12px;
}
.goods-item-info p{
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  width: 70%;
}
.goods-item-info .price{
  color: #ff8198;
}
</style>
