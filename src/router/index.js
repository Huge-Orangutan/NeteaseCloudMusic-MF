import Vue from 'vue'
import VueRouter from 'vue-router'
const Register = () => import('../views/Register/Register.vue')
const MainPage = () => import('../views/MainPage/MainPage.vue')
const Home = () => import('../views/MainPage/Home/Home.vue')
const More = () => import('../views/MainPage/More/More.vue')
const Search = () => import('../views/Search/Search.vue')
const PlayList = () => import('../views/PlayList/PlayList.vue')
Vue.use(VueRouter)

const routes = [
  {
	path:'/',
	redirect:'/mainpage/more'
  },
    {
		path:'/register',
		component:Register,
	},
	{
		path:'/mainpage',
		component:MainPage,
		children: [
		  {
			  path:'home',
		  },
			{
				path:'more',
			}
		]
	},
	//Search
	{
	  path: '/search',
	  component: Search,
		children: [
		  {
			  path:'page',
				name:'page'
		  },
		]
  },
	
	//PlayList
	{
	  path: '/playlist',
	  component: PlayList,
	},
]



const router = new VueRouter({
  routes,
  mode:'hash',
})

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

router.beforeEach((to, from, next) => {
  //store的getters中定义获取用户信息的函数 getUser
  //userId为空说明用户未登录
  let isLogin = localStorage.token
  if (isLogin == undefined || null ) {//未登录
    if (to.path !== '/register') {//跳转到登录页
      return next({path: '/register'});
    }else {
      next();
    }
  }else {//已登录
    if (to.path === '/register') {//跳转到首页
      return next({path: '/mainpage/more'});
    }
    next();
  }
});

export default router
