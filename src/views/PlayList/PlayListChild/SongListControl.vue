<template>
	<div class="SongListControl">
		<div class="OneOfThem" v-for="item in Control">{{item}}</div>
	</div>
</template>

<script>
	export default {
		name: 'SongListControl',
		props:{
			Control:{
				type:Array,
				default:() => []
			},
		},
	}
</script>

<style scoped>
	.SongListControl{
		display: flex;
		text-align: center;
		padding: 20px 30px 15px 30px;
		font-size: 12px;
	}
	.OneOfThem{
		flex:1
	}
</style>
