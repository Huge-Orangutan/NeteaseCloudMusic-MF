<template>
	<div class="MidText" >
		<div class="left">
		<div class="OneOfLeft" 
		:class= "{OneOfLeftColor:currentcount == index}"
		v-for="(item,index) in midtext"
		@click = "ChangeCurrentCount(index)">{{item}}
		</div>
		</div>
		<div class="right"><slot name="right"></slot></div>
	</div>
</template>

<script>
	export default{
		name: 'MidText',
		data(){
			return{
				currentcount: 0
			}
		},
		props:{
			midtext:{
				type:Array,
				default:() => [],
				// default(){
				// 	return []
				// }
			}
		},
		methods:{
			ChangeCurrentCount(index){
				this.currentcount = index
				this.$emit('PushIndex',index)
			},
		},
	}
</script>

<style scoped>
	.MidText{
		display: flex;
		vertical-align:bottom;
	}
	.left{
	  flex: 1;
		vertical-align:bottom;
	}
	.OneOfLeft{
		display: inline;
		font-size: 16px;
		font-weight: bold;
		margin-left: 10px;
	}
	.OneOfLeftColor{
		color: black;
	}
	.right{
	font-size: 11px;
	color: darkgrey;
	vertical-align:bottom;
	margin-top: 2px;
	margin-right: 10px;
	}
</style>
