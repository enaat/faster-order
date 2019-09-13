<template>
  <div class="Home">
    <!--1. 头部抽出的公共组件：-->
    <div class="fixed-top">
      <navTop>
        <strong>一小时达</strong>
      </navTop>
      <navText></navText>
    </div>

    <!--2. 导航部分：-->
    <!-- 全部：-->
    <div v-for="(item, index) in $store.state.lists" :key="index"
         v-show="$store.state.cur===index">
      <ul class="list-unstyled pt" v-show="$store.state.cur===index">
        <li v-for="(val, idx) in item.listItems" :key="idx"
            class="d-flex justify-content-between align-items-center border-bottom py-3">
          <router-link class="img-content ml-4"
               :to="{path: '/details', query: {obj: {val: val, id: val.id, index: index, idx: idx}}}">
            <img :src="val.src">
          </router-link>
          <div>
            <strong>{{val.title}}</strong>
            <p class="introduce">{{val.introduce}}</p>
            <p class="mb-0 priceColor font-weight-bold">{{val.price | getDollars}}</p>
          </div>
          <div class="align-self-end mr-2">
            <div class="img-cart border border-info" v-if="val.flag"
              @click="changeCartNum(val)">
              <img :src="shopCart">
            </div>
            <div v-else>
              <span class="calculate" @click="calculate(-1, val)">-</span>
              <span>{{val.number}}</span>
              <span class="calculate" @click="calculate(1, val)">+</span>
            </div>
          </div>
        </li>
      </ul>
    </div>

    <!--底部导航：-->
    <navBottom></navBottom>
  </div>
</template>

<script>
  import navTop from './navTop'
  import navText from './navText'
  import navBottom from './navBottom'
  export default {
    name: 'Home',
    data: function(){
      return {
        shopCart: require('@/assets/shopCart.png')
      }
    },
    components: {
      navTop,
      navText,
      navBottom
    },
    filters: {
      getDollars: function (val) {
        return '￥' + val.toFixed(2);
      }
    },
    // 初始时给每个列表项都设置flag为false,便于后面判断使用：
    created: function () {
      this.$store.state.lists.map(item => {
        item.listItems.map(val => {
          this.$set(val, 'flag', true);
        });
      });
    },
    methods: {
      calculate: function (who, val) {
        this.$store.dispatch('calculate', {who, val});
      },
      changeCartNum: function (val) {
        this.$store.dispatch('changeCartNum', val);
      }
    }
  }
</script>

<style scoped>
  .pt{
    padding: 107px 0 46px 0;
  }
  .img-content>img{
    width: 90px;
    height: 90px;
    border-radius: 50%;
  }
  .introduce{
    font-size: 14px;
    margin: 10px 0;
  }
  .img-cart{
    width: 44px;
    height: 44px;
    text-align: center;
    line-height: 40px;
    border-radius: 50%;
    margin-left: 13px;
  }
  .img-cart>img{
    width: 30px;
    height: 30px;
    border-radius: 50%;
  }
  .priceColor{
    color: #FF65AF;
  }
  /* 加减按钮的颜色： */
  .calculate{
    width: 20px;
    height: 20px;
    display: inline-block;
    text-align: center;
    line-height: 20px;
    border: 1px solid #FF65AF;
    border-radius: 50%;
  }
  .calculate:first-of-type{
    color: #FF65AF;
    background: #fff;
  }
  .calculate:last-of-type{
    color: #fff;
    background: #FF65AF;
  }
</style>
