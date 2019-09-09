<template>
  <div id="app" class="update h-100">
    <textarea class="w-100 h-100 border border-info outline p-3"
      v-model="$store.state.editText.content" @input="changeInfo"></textarea>
  </div>
</template>

<script>
  export default {
    name: 'Update',
    methods: {
      changeInfo: function () {
        this.$store.commit('changeInfo');
      }
    }
  }
</script>

<style scoped>
  .outline{
    color: #999;
    outline: none;
  }
</style>
