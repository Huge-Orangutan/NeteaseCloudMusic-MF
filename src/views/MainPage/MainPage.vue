<template>
	<transition name="fade" mode="in-out">
	<div class="MainPage" :class="{showtime:isshow}">
		<div class="bg" :style="{opacity:this.$store.state.opacity}"></div>
		<main-tab-bar class="maintabbar" ref="tabbar" @click.native="ChangeisShow"></main-tab-bar>
		<home ref="home" :class="{showtime:isshow}"></home>
		<more ref="more" :class="{showtime:isshow}"></more>
		<side-bar></side-bar>
	</div>
	</transition>
</template>
<script>
	import Home from './Home/Home.vue'
	import More from './More/More.vue'
	import MainTabBar from './MainPageChild/tabbar/MainTabBar.vue'
	import SideBar from './MainPageChild/sidebar/SideBar.vue'
	export default{
		name:'MainPage',
		components:{
			MainTabBar,
			SideBar,
			Home,
			More
		},
		data(){
			return{
				isshow:'',
				ChangeX: false
			}
		},
		mounted() {
			this.ListenTouchMove()
			this.setZindex()
		},
		methods:{
			ChangeisShow(){
				if(this.isshow == false){
				this.isshow = true
				}
			},
			setZindex(){
				if(this.$route.path == '/mainpage/home'){
					this.$refs.home.$el.style.transform = 'translateX(0)'
				  this.$refs.more.$el.style.transform = 'translateX(100%)'
					this.$store.state.opacity = 0
					this.$store.state.Size = 17
					this.$store.state.Choicecolor = 'rgb(255,255,255)'
				}
				if(this.$route.path == '/mainpage/more'){
					this.$refs.home.$el.style.transform = 'translateX(-100%)'
					this.$refs.more.$el.style.transform = 'translateX(0)'
					this.$store.state.opacity = 1
					this.$store.state.Size = 17
					this.$store.state.Choicecolor = 'rgb(0,0,0)'
				}
			},
			//向左滑动切换路由
			ListenTouchMove(){
				let home = this.$refs.home.$el
				home.addEventListener('touchmove',this.homeslide)
				home.addEventListener('touchend',this.homeend)
				home.addEventListener('touchstart',this.homestart)
			 //  mylist.addEventListener('touchmove',this.homebgslide)
				// mylist.addEventListener('touchend',this.homebgend)
				// mylist.addEventListener('touchstart',this.homebgstart)	
				let more = this.$refs.more.$el
				more.addEventListener('touchmove',this.moreslide)
				more.addEventListener('touchend',this.moreend)
				more.addEventListener('touchstart',this.morestart)	
			},
			homeslide(e){
				if(e.target.parentNode.parentNode.className !== 'MyMusicItem' && e.target.parentNode.className !== 'MyMusicItem')
			  {
			    this.SlideX = e.changedTouches[0].clientX
					let HomeWidth = this.$refs.home.$el.offsetWidth
			  	let SlidingX = this.SlideX - this.StartX
					let SlidingX2 = SlidingX + HomeWidth
					if(SlidingX < 0){
					  this.$refs.home.$el.style.transform = 'translateX('+SlidingX+'px)'
						this.$refs.more.$el.style.transform = 'translateX('+SlidingX2+'px)'
						this.$store.state.opacity = -SlidingX/HomeWidth
						let Color = 255-(-SlidingX/HomeWidth*255)
						this.$store.state.Choicecolor = 'rgb('+Color+','+Color+','+Color+')'
					}
			  }
			},
			homestart(e){
				this.isshow = false
			  if(e.target.parentNode.parentNode.className !== 'MyMusicItem' && e.target.parentNode.className !== 'MyMusicItem'){
				  this.StartX = e.changedTouches[0].clientX
				 }
			},
			homeend(e){
				this.isshow = true
				this.EndX = e.changedTouches[0].clientX
				let FinallX = this.StartX - this.EndX
				let HomeWidth = this.$refs.home.$el.offsetWidth
				if(e.target.parentNode.parentNode.className !== 'MyMusicItem' && e.target.parentNode.className !== 'MyMusicItem'){
				  if(FinallX > HomeWidth/2+25){
					  this.$refs.home.$el.style.transform = 'translateX(-100%)'
					  this.$refs.more.$el.style.transform = 'translateX(0)'
						this.$store.state.opacity = 1
						this.$store.state.Choicecolor = 'rgb(0,0,0)'
						// setTimeout(()=>{
						// 	this.$refs.home.$el.style.transform = 'translateX(0%)'
						// 	this.$refs.more.$el.style.transform = 'translateX(100%)'
						// },200)
						setTimeout(()=>{
							this.$router.push('/mainpage/more')
						})
				  }
				  else{
				  	this.$refs.home.$el.style.transform = 'translateX(0)'
					  this.$store.state.opacity = 0
				  	this.$refs.more.$el.style.transform = 'translateX(100%)'
						this.$store.state.Choicecolor = 'rgb(255,255,255)'
			  	}
			  }
			},//左
			moreslide(e){
				if(e.target.className == "wrapper content MoreList" || e.target.className == 'List' || e.target.parentNode.parentNode.className == 'List' || e.target.parentNode.className == 'List'){
				  if(this.ChangeX == true){this.SlideX = e.changedTouches[0].clientX
				let moreWidth = this.$refs.more.$el.offsetWidth
				let SlidingX = this.SlideX - this.StartX
				let SlidingX2 = SlidingX - moreWidth
				if(SlidingX > 0){
				this.$refs.more.$el.style.transform = 'translateX('+SlidingX+'px)'
				this.$refs.home.$el.style.transform = 'translateX('+SlidingX2+'px)'
				this.$store.state.opacity = 1-SlidingX/moreWidth
				let Color = -SlidingX/moreWidth*255
				this.$store.state.Choicecolor = 'rgb('+Color+','+Color+','+Color+')'
				}}
				}else{this.SlideX = e.changedTouches[0].clientX
				let moreWidth = this.$refs.more.$el.offsetWidth
				let SlidingX = this.SlideX - this.StartX
				let SlidingX2 = SlidingX - moreWidth
				if(SlidingX > 0){
				this.$refs.more.$el.style.transform = 'translateX('+SlidingX+'px)'
				this.$refs.home.$el.style.transform = 'translateX('+SlidingX2+'px)'
				this.$store.state.opacity = 1-SlidingX/moreWidth
				let Color = SlidingX/moreWidth*255
				this.$store.state.Choicecolor = 'rgb('+Color+','+Color+','+Color+')'
				}
				}
			},
			morestart(e){
				if(e.target.className == "wrapper content MoreList" || e.target.className == 'List' || e.target.parentNode.parentNode.className == 'List' || e.target.parentNode.className == 'List'){
				  if(this.ChangeX == true){this.isshow = false
				this.StartX = e.changedTouches[0].clientX }
				}else{this.isshow = false
				this.StartX = e.changedTouches[0].clientX 
				}
			},
			moreend(e){
				if(e.target.className == "wrapper content MoreList" || e.target.className == 'List' || e.target.parentNode.parentNode.className == 'List' || e.target.parentNode.className == 'List'){
				  if(this.ChangeX == true){this.isshow = true
				this.EndX = e.changedTouches[0].clientX
				let FinallX = this.EndX-this.StartX 
				let moreWidth = this.$refs.more.$el.offsetWidth
				if(FinallX > moreWidth/2+25){
					this.$refs.more.$el.style.transform = 'translateX(100%)'
					this.$refs.home.$el.style.transform = 'translateX(0)'
					this.$store.state.opacity = 0
					this.$store.state.Choicecolor = 'rgb(255,255,255)'
					setTimeout(()=>{
						this.$router.push('/mainpage/home')
					})
				}
				else{
					this.$refs.more.$el.style.transform = 'translateX(0)'
					this.$refs.home.$el.style.transform = 'translateX(-100%)'
					this.$store.state.opacity = 1
					this.$store.state.Choicecolor = 'rgb(0,0,0)'
				}}
				}else{this.isshow = true
				this.EndX = e.changedTouches[0].clientX
				let FinallX = this.EndX-this.StartX 
				let moreWidth = this.$refs.more.$el.offsetWidth
				if(FinallX > moreWidth/2+25){
					this.$refs.more.$el.style.transform = 'translateX(100%)'
					this.$refs.home.$el.style.transform = 'translateX(0)'
					this.$store.state.opacity = 0
					this.$store.state.Choicecolor = 'rgb(255,255,255)'
					setTimeout(()=>{
						this.$router.push('/mainpage/home')
					})
				}
				else{
					this.$refs.more.$el.style.transform = 'translateX(0)'
					this.$refs.home.$el.style.transform = 'translateX(-100%)'
					this.$store.state.opacity = 1
					this.$store.state.Choicecolor = 'rgb(0,0,0)'
				}
				}
			},
		},
		watch:{
			'$route':function(){
				if(this.$route.path == '/mainpage/home'){
					this.$store.state.opacity = 0
					this.$refs.home.$el.style.transform = 'translateX(0)'
				  this.$refs.more.$el.style.transform = 'translateX(100%)'
					this.$store.state.Choicecolor = 'rgb(255,255,255)'
				}
				if(this.$route.path == '/mainpage/more'){
					this.$store.state.opacity = 1
					this.$refs.home.$el.style.transform = 'translateX(-100%)'
					this.$refs.more.$el.style.transform = 'translateX(0)'				
					this.$store.state.Choicecolor = 'rgb(0,0,0)'
				}
			}
		}
	}
</script>

<style scoped>
	/* 全局路由动画 */
	.fade-enter, .fade-leave-to {
      visibility: visible;
	 }
	 .fade-leave, .fade-enter-to {
	    visibility: visible;
	 }
	 .fade-enter-active, .fade-leave-active {
	    transition: all 0.3s
	 }
	 .showtime{
		 transition: all 0.2s
	 }
	 .bg{
		 position: absolute;
		 width: 100%;
		 background-color: white;
		 height:40px;
		 z-index: 557;
	 }
</style>
