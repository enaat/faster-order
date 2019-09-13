<template>
  <div class="NavBottom">
    <div class="fixed-bottom border-top d-flex justify-content-around py-2 bg-white">
      <router-link to="/home">
        <div class="commonStyle" :style="{backgroundImage: `url(${homeImg})`}"></div>
      </router-link>
      <router-link to="/cart">
        <div class="commonStyle" :style="{backgroundImage: `url(${cartImg})`}">
          <span class="badge badge-danger" v-show="addCartsNum!==0">{{addCartsNum}}</span>
        </div>
      </router-link>
      <router-link to="/user">
        <div class="commonStyle" :style="{backgroundImage: `url(${userImg})`}"></div>
      </router-link>
    </div>
  </div>
</template>

<script>

  export default {
    name: 'NavBottom',
    data: function () {
      return {
        homeImg: require("@/assets/home.png"),
        cartImg: require("@/assets/cart.png"),
        userImg: require("@/assets/user.png")
      }
    },
    computed: {
      addCartsNum: function () {
        return this.$store.getters.addCarts;
      }
    }
  }
</script>

<style scoped>
  .commonStyle{
    width: 45px;
    height: 45px;
    position: relative;
    background-size: cover;
  }
  .router-link-active>.commonStyle{
    background-position: 100% 100%;
  }
  .badge{
    position: absolute;
    right: 0;
    top: -5px;
  }
</style>
