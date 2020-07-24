<template>
<div class="loading"></div>
</template>

<script>
export default {
  name: 'Loading'
}
</script>

<style scoped>
.loading {
  position: absolute;
  left: 0;
  top: 0;
  background:url(../../assets/img/Dual%20Ring-1s-200px.gif) center center no-repeat #fff;
	background-size: 60px;
  width: 100vw;
  height: 100%;
  z-index: 1000;
}
</style>