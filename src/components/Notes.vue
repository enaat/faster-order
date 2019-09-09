<template>
  <div id="app" class="notes text-center bg-light py-3 h-100">
    <h1 class="lead mb-4">NOTES</h1>
    <div>
      <router-link to="/allNotes" class="link">All Notes</router-link>
      <router-link to="/favorites" class="link">Favorites</router-link>
    </div>
    <div class="my-4">
      <keep-alive> // 保持之前点击的状态
        <router-view></router-view>
      </keep-alive>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Notes'
  }
</script>

<style scoped>
  .lead{
    font-size: 40px!important;
  }
  .link{
    padding: 6px 30px;
    background: #fff;
    color: #7ba556;
    font-size: 18px;
    border-radius: 5px;
    border: 1px solid #ccc;
  }
  .link:hover{
    text-decoration: none;
  }
  .router-link-active{
    border: 1px solid #dac45a;
    box-shadow: 0 0 5px #fdeda0;
    color: #dac45a;
  }
</style>
