<template>
	<div class="TabControl">
		<div class="TabControlItem" v-for="item in tab">
		<div class="icon">{{item.image}}</div>
		<div>{{item.name}}</div>
		</div>
	</div>
</template>

<script>
	export default{
		name:'TabControl',
		props:{
			tab:{
				type: Object,
				default(){
					return {}
				}
			}
		}
	
	}	
</script>

<style scoped>
	.TabControl{
		text-align: center;
		padding-top: 15px;
	}
	.TabControlItem{
		font-size: 10px;
		display: inline-block;
		margin-left: 5px;
		margin-right: 5px;
	}
	.icon{
		font-size: 18px;
	}
	.TabControlItem > div {
		padding-bottom: 5px;
	}
</style>
