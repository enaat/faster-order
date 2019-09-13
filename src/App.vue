<template>
  <div id="app">
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive"></router-view>
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive"></router-view>
  </div>
</template>

<script>
  import Home from './components/Home'
  export default {
    name: 'App',
    components: {
      Home
    }
  }
</script>

<style scoped>

</style>
