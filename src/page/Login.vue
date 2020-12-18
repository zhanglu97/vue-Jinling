<template>
	<div class="Login">
		<div class="Header">
			<h3>
				<img class="logo_img" src="@/assets/img/Login_logo.png">
				<i></i>
				金陵药业
			</h3>
		</div>
		<div class="loginBody login_input">
			<div class="login-top">金陵药业 · 质量管理系统</div>
			<el-form :model="LoginForm" ref="LoginForm" class="demo-ruleForm">
				<el-form-item>
					<el-input v-model="LoginForm.name" placeholder="请输入用户名" class="loginInput">
						<i slot="prefix" class="el-input__icon el-icon-user"></i>
					</el-input>
				</el-form-item>
				<el-form-item prop="password">
					<el-input type="password" v-model="LoginForm.password" autocomplete="off" show-password placeholder="请输入密码" @keyup.enter.native="LoginSubmit" class="loginInput">
						<i slot="prefix" class="el-input__icon el-icon-lock"></i>
					</el-input>
				</el-form-item>
				<el-form-item prop="password">
					<el-checkbox v-model="LoginForm.remember">记住用户</el-checkbox>
				</el-form-item>
					<div class="login-button" @click="LoginSubmit">登 录</div>
			</el-form>
		</div>
		<div class="footer">
			<p>Copyright 2019 © Refull All rights reserved    建议使用“Chrome / IE / 搜狗高速” 浏览器</p>
		</div>
	</div>
</template>

<script>
    import {getRoutePages} from '@/router'
	export default {
		name: 'Login',
		data() {
			return {
				LoginForm: {
					name: '',
					password: '',
					remember: false
				},
			}
		},
		methods:{
			LoginSubmit(){
				if(this.LoginForm.name){
                    if(this.LoginForm.password){
                        //登录成功
                        sessionStorage.setItem('loginStatus',1) //设置登录状态为已登录
						sessionStorage.setItem('userInfo', JSON.stringify(this.LoginForm)) //记录登录信息

                        this.$router.addRoutes([getRoutePages()])//添加路由
						this.$router.push({
							name:'FirstPage'
						})
                        return;
                    }
                    this.$message.error('密码不能为空!');
                    return;
                }else{
					this.$message.error('用户名不能为空!');
				}
			}
		},
	}
</script>

<style scoped lang="scss">
	.Login {
		background-image: url(../assets/img/banner_bg1.png);
		height: 100%;
		background-size: cover;
		.Header {
			height: 60px;
			line-height: 60px;
			color: #fff;
			background: rgb(160, 16, 22);
			h3 {
				width: 100%;
				margin: 0 auto;padding: 0 170px;
				font-size: 30px;
				font-weight: normal;
                position: relative;
			}
			span {
				font-size: 14px;
				font-weight: 400;
				float: right;
			}
			.logo_img {
                position: absolute;
				top: 14px;
                left: 100px;
			}
		}
		.loginBody {
			width: 500px;
			margin: 0 auto;
			height: 300px;
			background-color: rgba(160, 16, 22, 0.5);
			margin-top: calc(50vh - 250px);
            box-shadow: 0 0 20px #ffffff;    
            padding: 20px 50px;
			border-radius: 10px;
			.login-top {
				font-size: 24px;
				box-sizing: border-box;
				color: #ffffff;
				margin-bottom: 20px;
                text-align: center;
                text-align-last: justify;
			}
			.login-button {
				cursor: pointer;
				width: 80%;
				text-align: center;
				padding: 10px 0px;
				background-color: #34bfc6;
				margin: 0 auto;
				color: #ffffff;
				font-size: 14px;
				border-radius: 30px;
				&:active{
                    opacity: 0.8;
                }
            }
            .el-form {
                padding: 0 30px;
            }
		}
		.footer {
			color: #ffffff;
			position: fixed;
			bottom: 0px;
			width: 100%;
			padding: 10px;
			p {
				text-align: center;
			}
		}
	}
</style>
