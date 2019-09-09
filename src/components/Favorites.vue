<template>
  <div id="app" class="favorites text-left px-4">
    <ul class="list-unstyled">
      <li v-for="(item,index) in $store.state.favorites" :key="index">
        {{item.content}}
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'Favorites'
  }
</script>

<style scoped>
  li{
    color: #bb6363;
    border: 1px solid #ca5e5e;
    border-radius: 4px;
    padding: 12px 15px;
    margin-bottom: 8px;
    font-weight: bold;
  }
</style>
