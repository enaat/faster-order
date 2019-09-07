<template>
  <div id="app" class="container">
    <div>
      <label for="name" class="font-weight-bold">昵称：</label>
      <input type="text" id="name" class="form-control" placeholder="请输入昵称"
          v-model="name">
    </div>
    <div class="my-3">
      <label for="texts" class="font-weight-bold">留言：</label>
      <textarea id="texts" class="form-control" placeholder="请输入内容"
          v-model="text"></textarea>
    </div>
    <div class="mb-3">
      <button class="btn btn-success" @click="sub">提交留言</button>
    </div>

    <div class="border border-primary">
      <h5 class="bg-primary text-white py-2 px-3">留言列表</h5>
      <p class="text-center text-muted mb-0" v-if="arr.length===0">暂无留言内容哦！！！</p>
      <ul class="list-unstyled p-3 clearfix">
        <li class="mb-3 border p-2 radius" v-for="(item,index) in arr" :key="index">
          <span class="text-danger">{{item.name}}</span> 说：
          <strong>{{item.text}}</strong>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'App',
    data: function () {
      return {
        text: '',
        name: '',
        arr: []
      }
    },
    methods: {
      sub: function () {
        this.arr.push({name: this.name, text: this.text});
      }
    }
  }
</script>

<style>
  .radius{
    border-radius: 8px;
  }
</style>
