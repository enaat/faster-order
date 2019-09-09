<template>
  <div id="app" class="container my-5">
    <div class="row">
      <div class="col-md-2">
        <Nav></Nav>
      </div>
      <div class="col-md-4">
        <Notes></Notes>
      </div>
      <div class="col-md-6">
        <Update></Update>
      </div>
    </div>
  </div>
</template>

<script>
  import Nav from './components/Nav'
  import Notes from './components/Notes'
  import Update from './components/Update'
  export default {
    name: 'App',
    components: {
      Nav,
      Notes,
      Update
    }
  }
</script>

<style>

</style>
