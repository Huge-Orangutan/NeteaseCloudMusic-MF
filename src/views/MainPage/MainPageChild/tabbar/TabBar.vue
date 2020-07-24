<template>
	<div class="TabBar">
		<div class="left"  ref="left"><slot name="left"></slot></div>
		<div class="center" ref="center"><slot name="center"></slot></div>
		<div class="right" ref="right"><slot name="right"></slot></div>
	</div>
</template>

<script>
	export default{
		name:'TabBar',
		mounted() {
		  if(this.$route.path == "/mainpage/more"){
			  this.$refs.left.style.color = 'black'
			  this.$refs.right.style.color = 'black'
		  }
		  if(this.$route.path == "/mainpage/home"){
		  	this.$refs.left.style.color = 'white'
		  	this.$refs.right.style.color = 'white'
		  }
		},
		methods:{
			
		},
		watch:{
			'$route.path':function(newpath,oldpath){
				if(newpath == "/mainpage/more"){
					this.$refs.left.style.color = 'black'
					this.$refs.right.style.color = 'black'
				}
				if(newpath == "/mainpage/home"){
					this.$refs.left.style.color = 'white'
					this.$refs.right.style.color = 'white'
				}
			}
		}
	}
</script>

<style scoped>
	.TabBar{
		display: flex;
		text-align: center;
	}
	.left, .right{
		width:40px;
		padding-left: 10px;
		padding-right: 10px;
	}
	.center{
		flex: 1;
	}

</style>