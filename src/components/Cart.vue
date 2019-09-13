<template>
  <div class="Cart bg-light">
    <navTop>
      <strong>我的购物车</strong>
    </navTop>
    <div>
      <div class="text-muted toolText w-100"
           v-if="$store.getters.addCarts===0">
        你还没添加任何商品哦...
      </div>

      <div v-else>
        <!-- 图片展示及加减部分：-->
        <div class="bg-white my-2">
          <ul class="list-unstyled">
            <li v-for="(val, index) in addCartLists" :key="index"
                class="d-flex justify-content-between align-items-center border-bottom py-4">
              <div class="img-content ml-4">
                <img :src="val.src">
              </div>
              <div>
                <strong>{{val.title}}</strong>
                <p class="introduce">{{val.introduce}}</p>
                <p class="mb-0 priceColor font-weight-bold">{{val.price | getDollars}}</p>
              </div>
              <div class="align-self-end mr-2">
                <span class="calculate" @click="calculate(-1, val)">-</span>
                <span>{{val.number}}</span>
                <span class="calculate" @click="calculate(1, val)">+</span>
              </div>
            </li>
          </ul>
        </div>

        <!-- 总价及运费计算部分： -->
        <div class="detailsCart px-3 bg-white">
          <div>
            <span>商品总价：</span>
            <strong>{{cartPriceAll | getDollars}}</strong>
          </div>
          <div>
            <div class="d-flex align-items-center w-75">
              <span>红包：</span>
              <select class="form-control w-50" v-model="noRedParper"
                      v-if="isChoose===false" disabled="true">
                <option>无可用红包</option>
              </select>
              <select class="form-control w-75" v-model="choose" v-else>
                <option value="10">10元红包(满70使用)</option>
                <option value="15" :disabled="cartPriceAll<100">15元红包(满100使用)</option>
                <option value="25" :disabled="cartPriceAll<140">25元红包(满140使用)</option>
              </select>
            </div>
            <!--红包金额：-->
            <span class="text-danger" v-if="choose">-{{this.choose | getDollars}}</span>
          </div>
          <div>
            <span>商品实付：</span>
            <strong class="text-danger">{{cartPayPrice | getDollars}}</strong>
          </div>
          <div>
            <span>运费（实付满38包邮）：</span>
            <span v-if="cartPayPrice >= 38">包邮</span>
            <span v-else>￥6</span>
          </div>
          <div>
            <span>合计：</span>
            <strong class="text-danger">
              {{(cartPriceAll > 38 ? cartPayPrice : cartPayPrice+6) | getDollars}}
            </strong>
          </div>
        </div>

        <!--底部去结算跳转部分（模拟结算）：-->
        <div class="bg-white mt-2 goPay">
          <button class="btn btn-danger mt-2 mr-2 w-25 font-weight-bold"
                  @click="toPay">去结算
          </button>
        </div>
      </div>
    </div>

    <!--底部导航：-->
    <navBottom></navBottom>
  </div>
</template>

<script>
  import navTop from './navTop'
  import navBottom from './navBottom'
  export default {
    name: 'Cart',
    data: function(){
      return {
        img: require('@/assets/fruit1.jpg'),
        isChoose: false, // 判断是否有可用的红包
        noRedParper: '无可用红包',
        choose: 10,
      }
    },
    computed: {
      // 从获得store中已加入购物车的数组：（通过flag值来判断的）
      addCartLists: function () {
        return this.$store.getters.addCartLists;
      },
      // 购物车总价格：
      cartPriceAll: function () {
        return this.addCartLists.reduce((total, item) => {
          return total + item.number*item.price;
        }, 0);
      },
      // 实际付的价格：
      cartPayPrice: function () {
        return this.cartPriceAll - this.choose;
      }
    },
    filters: {
      getDollars: function (val) { // 单位
        return '￥' + val.toFixed(2);
      }
    },
    created: function(){
      this.redParper();
    },
    methods: {
      calculate: function (who, val) {
        this.redParper();
        this.$store.dispatch('calculate', {who, val});
      },
      // 判断是否有红包可使用，以及可使用的金额：
      redParper: function () {
        if(this.cartPriceAll > 70) {
          this.isChoose = true;
          this.choose = 10;
          if (this.cartPriceAll > 100) {
            this.choose = 15;
            if (this.cartPriceAll > 140) {
              this.choose = 25;
            }
          }
        }else {
          this.choose = 0;
          this.isChoose = false;
        }
      },

      // 判断是否已登录(根据isLogin判断)，若未登录，则跳转到登录界面，否则直接到支付页面：
      toPay: function () {
        if(this.$store.state.isLogin){
          this.$router.push(
            {
              path: '/pay',
              query: {value: this.addCartLists, totalPrice: this.cartPayPrice}
            });
        }else{
          this.$router.push('/login');
        }
      }
    },
    components: {
      navTop,
      navBottom
    }
  }
</script>

<style scoped>
  .toolText{
    text-align: center;
    position: absolute;
    top: 50%;
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

  /* 计算总价等的样式：*/
  .detailsCart>div{
    display: flex;
    padding: 10px 0;
    align-items: center;
    font-size: 15px;
    justify-content: space-between;
  }
  /*结算：*/
  .goPay{
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding-bottom: 68px;
  }
</style>
