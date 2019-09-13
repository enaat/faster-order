<template>
  <div class="navText">
    <!--<div v-for="(item, index) in $store.state.lists" :key="index"-->
         <!--@click="$store.state.cur=index" :class="{act: $store.state.cur===index}">-->
      <!--<a href="javascript:void(0);" class="d-inline-block text-dark">-->
        <!--{{item.name}}-->
      <!--</a>-->
    <!--</div>-->
    <div :class="{moveNav: flag}">
      <span v-show="flag" @click="flag=false">&lt;</span>
      <a href="javascript:void(0);" class="d-inline-block text-dark"
         v-for="(item, index) in $store.state.lists" :key="index"
         @click="$store.state.cur=index" :class="{act: $store.state.cur===index}">
        {{item.name}}
      </a>
      <span @click="flag=true" v-show="!flag">&gt;</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'navText',
    data: function () {
      return {
        flag: false
      }
    }
  }
</script>

<style scoped>
  .navText{
    height: 50px;
    overflow: hidden;
    position: relative;
    box-shadow: 0 0 4px #ccc;
  }
  /*装导航栏的容器，便于移动：*/
  .navText>div{
    background: #f3f2f2;
    transition: all 0.8s;
    position: absolute;
    left: 0;
  }
  .navText>.moveNav{ /* 移动 */
    left: -316px;
  }

  .navText a{
    width: 80px;
    height: 100%;
    float: left;
    text-align: center;
    line-height: 50px;
  }
  .navText .act{
    color: #0ff!important;
    background: #fff;
  }
  a:hover{
    text-decoration: none;
  }
  .navText span{
    width: 20px;
    height: 20px;
    color: #fff!important;
    font-weight: bold;
    border-radius: 50%;
    text-align: center;
    line-height: 20px;
    background: rgba(0,0,0,0.3);
    position: fixed;
    transform: translateY(75%);
  }
  .navText span:first-of-type{
    left: 0;
  }
  .navText span:last-of-type{
    right: 0;
  }
</style>
