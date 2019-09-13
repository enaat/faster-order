<template>
  <div class="Pay bg-light">
    <!--头部：-->
    <navTop>
      <strong class="return" @click="toBack">&lt;</strong>
      <strong>填写订单</strong>
    </navTop>

    <div class="mt-2 bg-white">
      <ul class="list-unstyled px-3 py-2">
        <li v-for="(item, index) in cartItem" :key="item.id"
            class="d-flex justify-content-between align-items-center border-bottom py-1">
          <div>
            <img :src="item.src">
          </div>
          <div>
            <span>{{item.number}}</span>
          </div>
        </li>
      </ul>

      <div class="d-flex justify-content-between align-items-center px-3 py-2">
        <span>合计：</span>
        <strong class="text-danger">{{totalPrice | getDollars}}</strong>
      </div>
      
      <div class="py-2 my-3 px-3 d-flex color align-items-center">
        <span>选择地址：</span>
        <select class="form-control w-75 color">
          <option value="" v-for="(item, index) in getUserInfo.address" :key="index">
            {{getUserInfo.name}}{{getUserInfo.username}} {{item.city}}{{item.detailAddress}}
          </option>
        </select>
      </div>
    </div>

    <!--底部：-->
    <div class="d-flex justify-content-between align-items-center fixed-bottom p-3 bg-light">
      <div>
        <span>付款：</span>
        <strong class="text-danger">{{totalPrice | getDollars}}</strong>
      </div>
      <div>
        <button class="btn btn-danger" @click="goPay" data-toggle="alert">去支付</button>
      </div>
    </div>
    <div class="alerts w-75 rounded bg-warning py-3" :class="{alerts2: show}">
      <span>支付成功，马上为您派送！！！</span>
    </div>
  </div>
</template>

<script>
  import navTop from './navTop'
  export default {
    name: 'Pay',
    data: function(){
      return {
        show: false
      }
    },
    computed: {
      // 接收传过来的内容（即加入了购物车的商品）：
      cartItem: function () {
        return this.$route.query.value;
      },
      // 总价格：
      totalPrice: function () {
        return this.$route.query.totalPrice;
      },
      // 获得当前登录用户的相关信息：
      getUserInfo: function () {
        return this.$store.state.user;
      }
    },
    components: {
      navTop
    },
    filters: {
      getDollars: function (val) { // 单位
        return '￥' + val.toFixed(2);
      }
    },
    methods: {
      // 回到购物车页面
      toBack: function () {
        this.$router.push('/cart');
      },

      // 遍历出所有商品，让其的flag属性都为true（即清空购物车, 也可点击支付后调用）：
      goPay: function () {
        this.show = true;
        setTimeout(() => {
          this.$store.state.lists.map(item => {
            item.listItems.map(val => {
              this.$set(val, 'flag', true);
            });
          });
          this.toBack();
        }, 2000);
      }
    }
  }
</script>

<style scoped>
  .return{
    font-size: 30px;
    line-height: 21px;
    position: absolute;
    left: 15px;
  }
  img{
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }
  .color{
    font-size: 15px!important;
  }

  /* 弹窗显示：*/
  .alerts{
    position: fixed;
    top: 50%;
    color: #fff;
    left: 50%;
    opacity: 0;
    transition: all 0.6s;
    transform: translate(-50%, -50%);
    text-align: center;
  }
  .alerts2{
    opacity: 1;
  }
</style>
