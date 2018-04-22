<template>
	<div>
		<div class="nav">
	        <div class="back">
	          <i class="fa fa-chevron-left" aria-hidden="true"></i>
	        </div>
	        <div class="text">个人中心</div>
	        <div class="bj" href="">
	          <span>编辑</span>
	        </div>
	    </div>
		<div class="login">
			<form @submit.prevent= 'login'>
			<input type="text" v-model="username" placeholder="请输入用户名">
			<input type="password" v-model="password" placeholder="请输入密码">
			<button type="submit">登录</button>
			</form>
		</div>
	</div>
</template>

<script type="text/javascript">
	
	import {Toast} from 'mint-ui'
	export default {
		name: "Login",
		data(){
			return {
				username: '',
				password: ''
			}
		},
		methods: {
			login(){
				let {username, password} = this;
				let params = {username, password, callback: (result) => {
					if(result === 1){
						Toast({
							message: '登录成功', duration: 500
						})
					}else{
						Toast({
							message: '登录失败', duration: 500
						})
					}
				}}
				this.$store.dispatch('login', params);
			}
		}
	}
</script>

<style type="text/css" lang="scss" scoped>

.nav{
    background-color: #fff;
    color:#75a739;
    height: .45rem;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background: rgba(248,248,248,.95);
    border-bottom: .01rem solid #d8d8d8;
    .back{
      display: inline-block;
      i{
        width: .4rem;
        color: #75a739;
        display: inline-block;
        font-size: .22rem;
        text-align: center;
        padding-left: 0.07rem;
      }
    }
    .text{
        display: inline-block;
        text-align: center;
        font-size: .18rem;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        width: 2.4rem;
        margin-top: 0.1rem;
        font-weight: normal;
    }
    .bj{
        height: 0.43rem;
        text-align:right;
        font-size: 0.14rem;
        display: inline-block;
        float: right;
        line-height: 0.43rem;
        margin-right: 0.2rem;
    }
}
	
	.login{
		margin:0.8rem auto;
		width: 3.5rem;
		overflow:hidden;
		border:1px solid #aaa;
		border-radius: 0.08rem;
		background:#f6f6f6;
		padding:0.1rem 0 0.3rem;
		input{
			width:90%;
			height:0.45rem;
			display:block;
			margin:0.2rem auto;
			outline:none;
			border:1px solid #ccc;
			font-size:0.18rem;
			padding-left:0.1rem;
		}
		button{
			width:80%;
			height:0.45rem;
			border:1px solid #077214;
			background:#07b11c;
			border-radius:0.05rem;
			display:block;
			text-align:center;
			line-height:0.45rem;
			font-size:0.18rem;
			color:#fff;
			margin:0 auto;
		}
	}
</style>