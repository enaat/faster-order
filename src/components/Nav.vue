<template>
  <div class="navs">
    <ul class="list-unstyled fontSize text-center">
      <li class="py-3" @click="add()" :class="{act: cur===0}">添加</li>
      <li class="py-3" @click="love()" :class="{textColor: this.$store.state.flag}">收藏</li>
      <li class="py-3" @click="del()" :class="{act: cur===2}">删除</li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'Navs',
    computed: {
      title: function () {
        return this.$store.state.title;
      },
      cur: function () {
        return this.$store.state.cur;
      }
    },
    methods: {
      add: function () {
        this.$store.commit('add');
      },
      love: function () {
        this.$store.state.flag = !this.$store.state.flag; //记录点击收藏后，文字变红
        this.$store.commit('love');
      },
      del: function () {
        this.$store.commit('del');
      }
    }
  }
</script>

<style scoped>
  .fontSize{
    font-size: 25px;
    height: 500px;
    background: #f1eef9;
  }
  ul>li{
    background: #f1eef9;
    color: #699dfd;
    cursor: pointer;
  }
  .act{
    color: #fff;
    background: #17a2b8;
  }
  .textColor{
    color: #f00;
  }
</style>
