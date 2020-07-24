<template>
	<div class="loading">
		<div>
		<div class="loading1"></div>
		<div class="loading2"></div>
		<div class="loading3"></div>
		<div class="loading4"></div>
		<div class="loading5"></div>
		</div>
	</div>
</template>

<script>
	export default{
		name:'LoadingMod'
	}
</script>

<style scoped>
	.loading{
		position: absolute;
		z-index: 200;
		height: 80px;
		bottom: 12%;
	  width: 100%;
		background-color: white;
	}
	.loading > div{
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.loading >div >div{
		width: 5px;
		background-color: #aa282a;
		margin: 0 2px;
	}
	@keyframes myfirst{
		from{height:8px;}
		to{height:20px;}
	}
	.loading1{
		animation:myfirst 0.5s infinite;
	}
	.loading2{
		animation:myfirst 0.5s infinite;
		animation-delay:0.1s;
	}
	.loading3{
		animation:myfirst 0.5s infinite;
		animation-delay:0.2s;
	}
	.loading4{
		animation:myfirst 0.5s infinite;
		animation-delay:0.3s;
	}
	.loading5{
		animation:myfirst 0.5s infinite;
		animation-delay:0.4s;
	}
</style>
