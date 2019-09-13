<template>
  <div class="Login">
    <!--头部：-->
    <navTop class="fixed-top">
      <strong class="return" @click="toBack">&lt;</strong>
      <strong>登录</strong>
    </navTop>
    
    <!--中间登录部分：-->
    <div class="login-main px-5 w-100">
      <div class="mb-4">
        <input type="number" placeholder="请输入您的手机号" class="form-control"
            v-model.number="username">
        <input type="password" placeholder="请输入您的密码" class="form-control my-4"
            v-model="psd">
      </div>
      <div class="d-flex justify-content-center">
        <button class="btn btn-success w-25" @click="login">登录</button>
        <button class="btn btn-outline-secondary w-25 ml-3" @click="register">注册</button>
      </div>
    </div>
  </div>
</template>

<script>
  import navTop from './navTop'
  export default {
    name: 'Login',
    data: function(){
      return {
        username: '',
        psd: ''
      }
    },
    computed: {
      // 获取用户数据表：
      users: function () {
        return this.$store.state.users;
      }
    },
    components: {
      navTop
    },
    methods: {
      // 回到购物车页面
      toBack: function () {
        this.$router.push('/cart');
      },

      // 判断该用户是否已注册,若注册了，则直接可跳转到支付页面;否则需注册：
      login: function () {
        this.users.map(item => {
          if(this.username === item.username && this.password === item.password){
            this.$store.state.isLogin = true; // 证明已注册
            this.$store.state.user = item; // 存储当前登录的用户信息
            this.$router.push('/cart');
          }else{
            alert('账号/密码不正确，请重新输入');
          }
        });
      },

      // 去注册：
      register: function () {
        this.$router.push('/register');
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
  .login-main{
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
  }
</style>
