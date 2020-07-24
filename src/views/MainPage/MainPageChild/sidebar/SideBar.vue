<template>
	<div class="SideBar" :class="{SideBarShow:isShow}">
		<div class="Shade" @click="isShowClick()" :class="{ShadeShow:isShow}"></div>
		<div class="SideBarContent" :class="{SideBarContentShow:isShow}">
			<div class="button">
		      <input type="button" value="退出"  @click="Quit"/>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'SideBar',
		data(){
			return{
				
			}
		},
		methods:{
			isShowClick(){
				this.$store.commit('isShowChance')
			},
			Quit(){
				localStorage.clear();
				this.$router.push('register')
			}
		},
		computed:{
			isShow(){
				return this.$store.state.isShow
			}
		},
	
	}
</script>

<style>
	.SideBar{
		color: #000000;
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		z-index: 555555;
		visibility: hidden;
	}
	.SideBarShow{
		visibility: visible;
	}
	.Shade{
		background-color: rgba(0,0,0,0.8);
		height: 100%;
		visibility: hidden;
		transition:.3s;
		opacity: 0;
	}
	.ShadeShow{
		visibility:visible;
		opacity: 1;
	}
	.SideBarContent{
		background-color: white;
		height: 100%;
		width: 80%;
		position: absolute;
		top: 0;
		visibility:hidden;
		transform:translateX(-100%);
		transition:.3s;
	}	

	.SideBarContentShow{
		  visibility:visible;
		  transform:translateX(0);
	}
</style>
