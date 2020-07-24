<template>
	<div>
		<div class="OneOfThem" v-for="(item,index) in list" @click="PushIndex(index)">
			<div class="left" v-if="isshowleft(item)"><img src="../../../../assets/img/icon/bofang.png"></div>
			<div class="middle">
				<div class="SongName">
				 <div class="ItemName" ref="ItemName" :class="{ItemNameShow:isItemNameShow(index)}">{{item.name}}</div>
				 <div class="alia" v-if="isAliaShow(index)">（{{item.alia[0]}}）</div>
				</div>
				<div class="SongDetail">{{item.ar[0].name}}-{{item.al.name}}</div>
			</div>
			<div class="right">⚙</div>
		</div>
	</div>
</template>

<script>
	export default{
		name:'SongMod',
		props:{
			list:{
				type:Array,
				default:()=>[]
			}
		},
		mounted() {
			
		},
		methods:{
			isshowleft(item){
			    if(item.name == this.$store.state.PlayNow.songName){
					return true
				}
			},
			//当有歌曲介绍的时候显示歌曲介绍
			isAliaShow(index){
				if(this.list[index].alia[0] !== undefined){
					return true
				}
			},
			//当没有歌曲介绍的时候，歌名超过容器的时候省略
			isItemNameShow(index){
				if(this.list[index].alia[0] == undefined){
					return true
				}
			},
			PushIndex(index){
				if(index == this.$store.state.index){
					this.$store.commit('ControlInterfaceShow')
				}
				this.$emit('PushIndex',index)
			}
		},
		watch:{

		}
	}
</script>

<style scoped>
	.OneOfThem{
		display: flex;
		padding-bottom: 15px;
	}
	.left{
		position: relative;
		width: 25px;
		margin-right: 10px;
	}
	.left img{
		position: absolute;
		width: 100%;
		top:50%;
		margin-top:-12.5px
	}
	.middle{
		flex: 1;
		overflow: hidden;
	}
	
	.SongName{
		font-size: 13px;
		display: flex;
		margin-right: 2em;
		padding-bottom: 5px;
		overflow: hidden;
		text-overflow: ellipsis;
	}
	.ItemName{
		white-space:nowrap;
	}
	.ItemNameShow{
		overflow:hidden;
		text-overflow: ellipsis;
	}
	.alia{
		color: #9a9a9a;	
		white-space:nowrap;
		overflow:hidden;
		text-overflow: ellipsis;
	}
	.SongDetail{
		font-size: 12px;
		color: #888888;
		margin-right: 1em;
		white-space:nowrap;
		overflow:hidden;
		text-overflow: ellipsis;
	}
	.right{
		width: 24px;
		font-size: 15px;
	}
</style>
