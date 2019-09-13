<template>
  <div class="User">
    <router-link class="btn btn-success" v-if="this.$store.state.isLogin===false"
          to="/login" tag="button">登录
    </router-link>

    <div class="login-content" v-else>
      <div class="text-center">
        <p class="font-weight-bold" style="letter-spacing: 2px">
          当前用户：<strong>{{user.name}}</strong>
        </p>
      </div>
      <div class="d-flex justify-content-between p-2 border-top border-bottom"
          @click="goAddress">
        <span>我的地址</span>
        <span>&gt;</span>
      </div>
      <div class="mt-3">
        <button class="btn btn-danger w-100" @click="noLogin">退出登录</button>
      </div>
    </div>
    <!--底部导航：-->
    <navBottom></navBottom>
  </div>
</template>

<script>
  import navBottom from './navBottom'
  export default {
    name: 'User',
    computed: {
      user: function () { // 获取当前登录的用户
        return this.$store.state.user;
      }
    },
    components: {
      navBottom
    },
    methods: {
      // 跳转到地址编辑页面：
      goAddress: function () {
        this.$router.push('/user/address');
      },
      // 让isLogin为false,则可退出登录：
      noLogin: function () {
        this.$store.state.isLogin = false;
      }
    }
  }
</script>

<style scoped>
  .User>button{
    position: absolute;
    top: 50%;
    left: 50%;
    margin-left: -29px;
    margin-top: -19px;
  }
  .login-content{
    width: 100%;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
</style>
