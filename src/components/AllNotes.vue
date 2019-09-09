<template>
  <div id="app" class="allNotes text-left px-4">
    <ul class="list-unstyled">
      <li v-for="(item,index) in $store.state.allNotes" :key="index"
        @click="edit(index)" :class="{acts: cur===index}">
        {{item.content}}
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'AllNotes',
    data: function () {
      return {
        cur: 0
      }
    },
    methods: {
      edit: function (index) {
        this.cur = index; // 让当前被选中的笔记高亮显示
        this.$store.commit('edit', index);
      }
    }
  }
</script>

<style scoped>
  li{
    color: #EBB92A;
    cursor: pointer;
    background: transparent;
    border: 1px solid #ccc;
    border-radius: 4px;
    padding: 12px 15px;
    margin-bottom: 8px;
    font-weight: bold;
  }
  li.acts{
    color: #fff;
    background: #b4d8d8;
  }
</style>
