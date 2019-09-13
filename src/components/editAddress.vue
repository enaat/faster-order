<template>
  <div class="editAddress">
    <!--头部：-->
    <navTop class="fixed-top">
      <strong class="return" @click="toBack">&lt;</strong>
      <strong>修改收货地址</strong>
    </navTop>

    <div class="edit px-3 pb-5 bg-light">
      <div>
        <label>
          <span>收货人：</span>
          <input type="text" class="form-control w-75" v-model="userName"
                 @blur="isNull" :class="{borderError: nameFlag}">
        </label>
        <span v-if="nameFlag">请输入名字</span>
      </div>
      <div>
        <label>
          <span>电话：</span>
          <input type="number" class="form-control w-75" v-model="userPhone"
                 @blur="isNull" :class="{borderError: usernameFlag}">
        </label>
        <span v-if="usernameFlag">手机号不能为空</span>
      </div>
      <div>
        <label>
          <span>所在城市：</span>
          <input type="text" class="form-control w-75" v-model="city"
                 @blur="isNull" :class="{borderError: cityFlag}">
        </label>
        <span v-if="cityFlag">请输入所在的城市</span>
      </div>
      <div>
        <label>
          <span>收货地址：</span>
          <input type="text" class="form-control w-75" v-model="detailAddress"
                 @blur="isNull" :class="{borderError: detailAddressFlag}">
        </label>
        <span v-if="detailAddressFlag">请输入详细地址</span>
      </div>

      <div class="mt-4 text-center">
        <button class="btn btn-primary" @click="saveEdit">保存修改</button>
        <button class="btn btn-danger ml-2" @click="delEdit">删除收货地址</button>
      </div>
    </div>
  </div>
</template>

<script>
  import navTop from './navTop'
  export default {
    name: 'editAddress',
    data: function(){
      return {
        index: this.$route.query.addressIndex, // 当前地址在数组中的索引
        city: this.$route.query.city.city, // 从路由获取到点击的地址信息（传给公共组件）
        userName: this.$route.query.city.name,
        userPhone: this.$route.query.city.userPhone,
        detailAddress: this.$route.query.city.detailAddress,
        nameFlag: false, // 判断是否显示提示文字
        usernameFlag: false,
        cityFlag: false,
        detailAddressFlag: false
      }
    },
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
        this.$router.push('/user/address');
      },

      // 失焦时判断输入框内的格式以及是否为空：
      isNull: function () {
        this.userName ? this.nameFlag=false : this.nameFlag=true;
        this.userPhone ? this.usernameFlag=false : this.usernameFlag=true;
        this.city ? this.cityFlag=false : this.cityFlag=true;
        this.detailAddress ? this.detailAddressFlag=false : this.detailAddressFlag=true;
      },

      // 保存修改(都为真，才编辑成功)：
      saveEdit: function () {
        this.isNull(); // 自动触发判断
        if(!this.nameFlag && !this.usernameFlag && !this.cityFlag && !this.detailAddressFlag){
          this.user.address[this.index] = { // 只能这样改才有效
            city: this.city, detailAddress: this.detailAddress, name: this.userName, userPhone: this.userPhone
          };
          this.$router.push('/user/address');
        }
      },

      // 删除收货地址：
      delEdit: function () {
        if(confirm('确定删除该地址信息吗?')){
          this.user.address.splice(this.index, 1);
          this.$router.push('/user/address');
        }
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
  .edit{
    padding-top: 57px;
  }
  .edit div{
    position: relative;
  }
  .edit label{
    display: flex;
    align-items: center;
    font-size: 14px;
    margin: 20px;
    justify-content: space-between;
  }
  .edit input,.edit button{
    font-size: 14px!important;
  }
  .edit label>span:before{
    content: '* ';
    color: #f00;
  }
  .edit div>span{
    position: absolute;
    font-size: 12px;
    color: #f00;
    bottom: -50%;
    left: 31%;
  }
  /*成功失败时的显示：*/
  .borderError{
    border-color: red!important;
  }
</style>
