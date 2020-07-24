<template>
  <div id="app">
	<keep-alive exclude="PlayList">
	<router-view></router-view> 
	</keep-alive>
	<bottom-bar></bottom-bar>
	<Interface></Interface>
  </div>
</template>

<script>
import BottomBar from './components/bottombar/BottomBar.vue'
import Interface from './components/Interface/Interface.vue'
export default {
  name: 'app',
  components:{
	  BottomBar,
		Interface
  },

}
</script>


<style>
@import url("./assets/css/normalize.css");
</style>
