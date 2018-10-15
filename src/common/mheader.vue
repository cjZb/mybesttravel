<template>
  <div class="main-top">
    <div style="display: flex; align-items: center" @click="leftarrow">
      <img style="width: 0.17rem; height: 0.31rem" src="./img/leftarrow.png"/>
    </div>
    <div>
      <slot></slot>
    </div>
    <div></div>
  </div>
</template>

<script>
  export default {
    name: 'mheader',
    methods: {
      leftarrow () {
        this.$router.go(-1)
      }
    }
  }
</script>

<style scoped>
  .main-top {
    padding: 0.25rem;
    display: flex;
    justify-content: space-between;
    font-size: 0.30rem;
    background-color: #ffffff;
  }
</style>
