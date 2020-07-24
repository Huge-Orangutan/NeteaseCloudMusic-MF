<template>
	<transition name="fade">
	<div class="content" v-if = 'ControlInterfaceShow'>
	<div class="Mask" ref="Mask" :style="{backgroundImage:'url('+(this.img)+')'}">
	<div class="Mask1"></div>
	</div>
	<div class="Interface" >
		<interface-nav-bar></interface-nav-bar>
		<interface-mid></interface-mid>
		<interface-bottom-bar></interface-bottom-bar>
	</div>
	</div>
	</transition>
</template>

<script>
	import InterfaceNavBar from './InterfaceChild/InterfaceNavBar.vue'
	import InterfaceMid from './InterfaceChild/InterfaceMid.vue'
	import InterfaceBottomBar from './InterfaceChild/InterfaceBottomBar.vue'
	import {getSongDetail} from '../../network/song.js'
	export default {
		name: 'Interface',
		components:{
			InterfaceNavBar,
			InterfaceMid,
			InterfaceBottomBar
		},
		data(){
			return{
		    img: this.$store.state.PlayNow.img
			}
		},
		computed:{
			ControlInterfaceShow(){
				return this.$store.state.InterfaceisShow
			},
		},
		created() {
			this.PushImgBackGround()
		},
    mounted() {
    	// this.ChangeMaskImg()
    },
		methods:{
			PushImgBackGround(){
				this.img = JSON.parse(localStorage.getItem("PlayNow")).img   	
			},
			ChangeMaskImg(){
				setTimeout(() =>{
				  this.img = this.$store.state.PlayNow.img
				},1500)
			}
		},
		watch:{
			'$store.state.PlayNow.img': function(){
				this.ChangeMaskImg()
			}
		}

	}
</script>

<style scoped>
	.fade-enter, .fade-leave-to {
		    transform: translateY(100%);
	      opacity: 0
	}
	.fade-leave, .fade-enter-to {
		    transform: translateY(0);
	      opacity: 1
	}
	.fade-enter-active, .fade-leave-active {
	      transition: all .4s
	}
	.content{
		background-color: white;
		z-index: 886;
		position: absolute;
		width: 100%;
		height: 100%;
		overflow: hidden;
		z-index: 99999;
		top: 0;
	}

	.Interface{
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		z-index: 888;
		color: white;
	}
	.Mask{
		position: relative;
		width: 100%;
		height: 100%;
		top: 0;
		z-index: 887;
		background-repeat: no-repeat;
		background-size: auto 100%; 
		background-position:center;
		transform: auto;
		filter: blur(40px);
		transform: scale(1.2);
		overflow: hidden;
		transition: 2s;
	}
	.Mask1{
		background-color: #000000;
		height: 100%;
		opacity: 0.35;
	}
</style>
