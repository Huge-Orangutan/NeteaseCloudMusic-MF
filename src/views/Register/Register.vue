<template>
	<div class="Register">
		<div class="textarea">
		<div class="text-div">
			账号：<input class="text" type="text" placeholder="手机号或邮箱" ref="text" />
		</div>
		<div class="password-div">
			密码：<input class="password" type="password" ref="password"/>
		</div>		
		<div class="button">
			<input type="button" value="登录" @click="Save"/>
		</div>
		</div>

	</div>
</template>

<script>
	import {getAccountInformation} from '../../network/register.js'
	export default {
		name:'Register',
		methods:{
			Save(){
				let id = this.$refs.text.value
				let password = this.$refs.password.value
				localStorage.setItem('UserId',id)
				localStorage.setItem('Password',password)
				getAccountInformation(id,password).then(res => {
					localStorage.setItem('token',res.data.token)
					if(res.data.token !== undefined){
						this.$router.push('/mainpage/more')
					}
				})
			}
		},
	}
</script>

<style scoped>
	::-webkit-input-placeholder { /* WebKit browsers */
	  color: #999;
	  font-size: 1px;
	}
	::-moz-placeholder { /* Mozilla Firefox 19+ */
	  color: #999;
	  font-size: 12px;
	}
	:-ms-input-placeholder { /* Internet Explorer 10+ */
	  color: #999;
	  font-size: 12px;
	}   
	.Register{
		color: #000000;
		height: 100vh;
		align-items: center;
		display: flex;
	}
	.textarea{
		margin:0 auto;
	}
	.text-div{
		padding-bottom:10px;
	}
	.text{
		outline: none;
		border: 0;
		border-bottom: 1px solid #000000;
	}
	.password-div{
		
	}
	.password{
		outline: none;
		border: 0;
		border-bottom: 1px solid #000000;
	}
	.button{
		
	}
</style>
