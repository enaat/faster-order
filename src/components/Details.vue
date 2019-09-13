<template>
  <div class="Details">
    <navTop class="fixed-top">
      <strong class="return" @click="toBack">&lt;</strong>
      <strong>商品详情</strong>
    </navTop>
    <div class="text-center px-3 box">
      <div class="my-4 img-top">
          <img :src="clickItem.src">
      </div>
      <div class="borders py-3">
        <strong>{{clickItem.title}}</strong>
        <p class="my-3 text-muted small letter">{{clickItem.introduce}}</p>
        <strong class="text-danger">{{clickItem.price | getDollar}}</strong>
      </div>
      <ul class="list-unstyled my-3 borders round py-4">
        <!--让其多次遍历出详情信息：-->
        <li v-for="i in 15">{{clickItem.detailsInfo}}</li>
      </ul>
    </div>

    <!--底部购买：-->
    <div class="fixed-bottom border-top d-flex justify-content-around bg-light align-items-center">
      <div class="img-footer w-25 text-center">
        <div @click="toCart">
          <img :src="img">
          <span class="badge badge-danger" v-show="$store.getters.addCarts!==0">
            {{$store.getters.addCarts}}
          </span>
        </div>
      </div>
      <div class="w-75">
        <button class="btn btn-danger w-100 py-3 font-weight-bold"
           @click="changeCartNum">加入购物车</button>
      </div>
    </div>
  </div>
</template>

<script>
  import navTop from './navTop'
  import navBottom from './navBottom'
  export default {
    name: 'Details',
    data: function(){
      return {
        obj: {}, // 存储id,索引等
        clickItem: {}, // 通过获得的id等来找到被点击的商品
        img: require('@/assets/shopPacket.png')
      }
    },
    created: function(){
      // 被点击的商品的id值，索引值，及其父所在的索引
      this.obj = this.$route.query.obj;
      // 被点击的商品
      this.clickItem = this.$store.state.lists[this.obj.index].listItems[this.obj.idx];
    },
    filters: {
      getDollar: function (val) {
        return '￥' + val.toFixed(2);
      }
    },
    components: {
      navTop,
      navBottom
    },
    methods: {
      toBack: function () { // 回到主页
        this.$router.push('/home');
      },
      changeCartNum: function () {
        this.$store.dispatch('changeCartNum', this.obj.val);
      },
      toCart: function () { // 转到购物车
        this.$router.push('/cart');
      }
    }
  }
</script>

<style scoped>
  .box{
    padding-top: 57px;
    padding-bottom: 62px;
  }
  .img-top>img{
    width: 180px;
    height: 180px;
    border-radius: 50%;
  }
  .letter{
    letter-spacing: 2px;
  }
  .borders{
    border: 1px dashed #ccc;
  }
  .round{
    border-right: none;
    border-left: none;
  }
  .return{
    font-size: 30px;
    line-height: 21px;
    position: absolute;
    left: 15px;
  }
  .img-footer>div{
    position: relative;
  }
  .img-footer .badge{
    position: absolute;
    right: 32%;
    top: -8%;
  }
  .img-footer img{
    width: 30px;
    height: 30px;
  }
</style>
