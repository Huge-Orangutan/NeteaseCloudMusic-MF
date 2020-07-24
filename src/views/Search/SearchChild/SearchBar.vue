<template>
	<div class="SearchBar">
	<div class="left" @click='PushBack'>◀</div>
	<div class="center" ref="center"><input type="search" ref="search" placeholder="二次元"></div>
	<div class="right" v-if="isShow">🐷</div>
	</div>
</template>

<script>
	export default {
		name: 'SearchBar',
		props:{
			left:{
				type: Object,
				default:() => {}
			},
			right:{
				type: Object,
				default:() => {}
			},
			PageIndex:{
				type:Number,
				default:0
			}
		},
		data(){
			return{
				isShow:'true'
			}
		},
		mounted() {
			this.PreSet()
		},
		methods:{
			//返回上一路由
			PushBack(){
			  this.$router.back(-1)
				this.$refs.search.value = ''
			},
      PreSet(){
				//预设
				if(this.$route.path == '/search'){
					this.isShow = true
					this.$refs.center.style.marginRight = 0
				}
				if(this.$route.path == '/search/page'){
					this.isShow = false
					this.$refs.center.style.marginRight = 10+'px'
				}
				//监听回车
				let search = this.$refs.search
				search.addEventListener('keyup',(e)=>{
					if(e.keyCode == 13){
						if(search.value == ''){
							search.value  = search.placeholder
						}
						if(this.$route.path !== '/search/page'){
						  this.$router.push({path:'/search/page',query:{key:search.value,page:0}})
						}else{
							this.$router.replace({path:'/search/page',query:{key:search.value,page:this.PageIndex}})
						}
					}
				})
			},
		},
		watch:{
			'$route':function(){
				if(this.$route.query.key !== undefined){
				  this.$refs.search.value = this.$route.query.key
				}
				if(this.$route.path == '/search'){
					this.isShow = true
					this.$refs.center.style.marginRight = 0
				}
				if(this.$route.path == '/search/page'){
					this.isShow = false
					this.$refs.center.style.marginRight = 10+'px'
				}
			}
		}
	}
</script>

<style scoped>
	.SearchBar{
		display: flex;
		position: fixed;
		height:35px;
		line-height: 35px;
		z-index: 10;
		top: 0;
		left: 0;
		right: 0;
		color: black;
	}
	.left{
		width: 50px;
		text-align: center;
	}
	.right{
		width: 50px;
		text-align: center;
	}
	.center{
		flex: 1;
		border-bottom: 1px solid #9e9e9e;
	}
	.center > input{
		border: none;
		outline: none;
		width: 100%;
		font-size: 15px;
	}
	::placeholder {
	  color: #999;
	  font-size: 14px;
	}
</style>
