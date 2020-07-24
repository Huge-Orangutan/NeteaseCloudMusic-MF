<template>
	<transition name="bottom" mode="in-out">
  <div class="PlayList">
	 <song-list></song-list>
  </div>
	</transition>
</template>

<script>
import SongList from './PlayListChild/SongList.vue'
export default {
  name: 'PlayList',
  components:{
		SongList,
	},

}
</script>
<style scoped>
	.PlayList{
		position: fixed;
		z-index: 5555;
		width: 100vw;
	}
.bottom-enter, .bottom-leave-to {
      transform: translate3d(0, 100%, 0);
			opacity: 0;
}
.bottom-leave, .bottom-enter-to {
      transform: translate3d(0, 0, 0);
			opacity: 1;
}
.bottom-enter-active, .bottom-leave-active {
      transition: all 0.3s
}


</style>
