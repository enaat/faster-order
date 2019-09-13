<template>
  <div class="Address">
    <!--头部：-->
    <navTop class="fixed-top">
      <strong class="return" @click="toBack">&lt;</strong>
      <strong>我的收获地址</strong>
    </navTop>

    <div class="address-info bg-light">
      <ul class="list-unstyled">
        <li v-for="(item, index) in user.address" :key="index"
            class="p-3 border-bottom d-flex justify-content-between align-items-center">
          <div>
            <p>{{item.name}}</p>
            <p>{{item.userPhone}}</p>
            <p>{{item.city}}{{item.detailAddress}}</p>
          </div>
          <div>
            <a href="javascript:void(0);" @click="edit(item, index)">编辑</a>
          </div>
        </li>
      </ul>
    </div>
    <div class="px-4 addAddress">
      <router-link class="btn w-100" to="/user/addAddress">新增收获地址</router-link>
    </div>
  </div>
</template>

<script>
  import navTop from './navTop'
  export default {
    name: 'Address',
    computed: {
      user: function () { // 获取当前登录的用户
        return this.$store.state.user;
      }
    },
    components: {
      navTop
    },
    methods: {
      toBack: function () { // 回到用户信息页面
        this.$router.push('/user');
      },
      edit: function (item, index) {
        this.$router.push({path: '/user/editAddress', query: {city: item, addressIndex: index}});
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
  .address-info{
    padding-top: 57px;
  }
  .address-info li p{
    margin: 1px 0;
    font-size: 14px;
    color: #777;
  }
  .address-info a{
    font-size: 14px;
  }
  .addAddress{
    width: 100%;
    position: absolute;
    bottom: 15px;
  }
  .addAddress>.btn{
    color: #fff;
    font-weight: bold;
    background: #f3586c;
  }
</style>
