<template>
  <div class="Register">
    <!--头部：-->
    <navTop class="fixed-top">
      <strong class="return" @click="toBack">&lt;</strong>
      <strong>注册</strong>
    </navTop>

    <div class="register-content w-75">
      <div>
        <input type="text" placeholder="请输入您的姓名" class="form-control"
               v-model="name" @blur="name==='' ? flagName=true : flagName=false">
        <p class="text-danger" v-if="flagName">请输入!!!</p>
      </div>
      <div>
        <input type="number" placeholder="请输入您的用户名" class="form-control my-4"
               v-model.number="username" @blur="username==='' ? flagUserName=true : flagUserName=false">
        <p class="text-danger" v-if="flagUserName">请输入!!!</p>
      </div>
      <div>
        <input type="password" placeholder="请输入您的密码" class="form-control my-4"
               v-model="psd" @blur="psd==='' ? flagPsd=true : flagPsd=false">
        <p class="text-danger" v-if="flagPsd">请输入!!!</p>
      </div>
      <div>
        <input type="password" placeholder="请再次输入您的密码" class="form-control my-4"
               v-model="repsd" @blur="repsd===psd ? flagRePsd=false : flagRePsd=true">
        <p class="text-danger" v-if="flagRePsd">两次输入密码不一致...</p>
      </div>
      <button class="btn btn-danger w-100" @click="register">注册</button>
    </div>
  </div>
</template>

<script>
  import navTop from './navTop'
  export default {
    name: 'Register',
    data: function(){
      return {
        name: '',
        username: '',
        psd: '',
        repsd: '',
        flagName: false,
        flagUserName: false,
        flagPsd: false,
        flagRePsd: false
      }
    },
    components: {
      navTop
    },
    methods: {
      // 回到登录页面
      toBack: function () {
        this.$router.push('/login');
      },

      // 注册：
      register: function () {
        if(!this.flagName && !this.flagUserName && !this.flagPsd && !this.flagRePsd){
          let $id = this.$store.state.users.length+1; // 自定义id值
          this.$store.state.users.push(
            {id: $id, name: this.name, username: this.username, psd: this.psd, address: []}
          );
          this.$router.push('/login');
        }
      }
    },
  }
</script>

<style scoped>
  .return{
    font-size: 30px;
    line-height: 21px;
    position: absolute;
    left: 15px;
  }
  .register-content{
    position: absolute;
    transform: translate(-50%, -50%);
    left: 50%;
    top: 50%;
  }
  .register-content>div{
    position: relative;
  }
  .register-content p{
    font-size: 14px;
    position: absolute;
    margin-bottom: 0;
    left: 14px;
    bottom: -23px;
  }
</style>
