<template>
  <div class="addAddress">
    <!--头部：-->
    <navTop class="fixed-top">
      <strong class="return" @click="toBack">&lt;</strong>
      <strong>{{textTitle}}</strong>
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

      <!--按钮操作：-->
      <div class="mt-4 text-center">
        <button class="btn btn-primary" @click="addEdit">保存收货地址</button>
        <button class="btn btn-danger ml-2" @click="resetEdit">重置</button>
      </div>
    </div>
  </div>
</template>

<script>
  import navTop from './navTop'
  export default {
    name: 'addAddress',
    data: function () {
      return {
        textTitle: '新增收货地址',
        city: '', // v-model绑定
        detailAddress: '',
        userName: '',
        userPhone: '',
        nameFlag: false, // 判断是否显示提示文字
        usernameFlag: false,
        cityFlag: false,
        detailAddressFlag: false
      }
    },
    components: {
      navTop
    },
    computed: {
      user: function () { // 获取当前登录的用户
        return this.$store.state.user;
      }
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

      // 添加地址信息：
      addEdit: function () {
        this.isNull();
        if(!this.nameFlag && !this.usernameFlag && !this.cityFlag && !this.detailAddressFlag){
          this.user.address.push(
            {city: this.city, detailAddress: this.detailAddress, name: this.userName, userPhone: this.userPhone}
          );
          this.$router.push('/user/address');
        }
      },

      // 重置选框内容：
      resetEdit: function () {
        this.city = this.userPhone = this.userName = this.detailAddress = '';
        this.detailAddressFlag = this.nameFlag = this.usernameFlag = this.cityFlag = false;
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
