<template>
	<div class= "InterfaceMid">
		<div class= "stick"></div>
		<div class= "circle">
			<div class= "circle1"></div>
			<div class= "circle2"></div>
			<div class="circle3" 
			:class="{circle3AddScale:isAddScale}" 
			@touchstart="touchstart" 
			@touchend="touchend"><img :src= 'this.$store.state.PlayNow.img'></div>
		</div>
		<div class="MidControl"></div>
	</div>
</template>

<script>
	export default{
		name: "InterfaceMid",
		data(){
			return{
				isAddScale: false
			}
		},
		methods:{
			touchstart(){
				this.isAddScale = true
			},
			touchend(){
				this.isAddScale = false
			}
		},
	}
</script>

<style scoped>
	.InterfaceMid{
    width: 100%;
		height: 100%;
	}
	.stick{
	  
	}
	.circle{
		position: absolute;
		width: 200px;
		height: 200px;
	  top: 30%;
		left: 50%;
		margin-left: -100px;
	}
	.circle1{
		position: absolute;
		background-color: #bababa;
		width: 100%;
		height: 100%;
		border-radius: 50%;
		filter: blur(6px);
	}
	.circle2{
		position: absolute;
		height: 100%;
		width: 100%;
		background-color: #000000;
		border-radius: 50%;
	}
	.circle3{
		position: absolute;
		height: 100%;
		width: 100%;
		border-radius: 50%;
		overflow: hidden;
		transform: scale(0.75);
		z-index: 999;
	}
	.circle3 img{
		position: relative;
		width:auto;
		height:auto;
		max-width:100%;
		max-height:100%;
		animation: rotateArround 15s linear infinite;
	}
	.circle3AddScale{
		transform: scale(1);
		transition: 0.4s;
	}
	@keyframes rotateArround{
		from {transform: rotateZ(0deg);}
			to {transform: rotateZ(360deg);}
	}
</style>
