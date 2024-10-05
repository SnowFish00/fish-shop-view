<template>
	<view class="main-context">
		<!-- 蒙层 -->
		<view v-show="showTopic || showStatus " class="overlay"></view>
		<!-- 提示框 -->
		<view v-show="showTopic" class="modal">
			<image src="/static/loginPic/message.png"></image>
			<text class="modal-message">{{messageShow}}</text>
			<view class="buts">
				<button class="modal-buttonA" @click="untopic">取消</button>
				<button class="modal-buttonB" @click="untopic">确定</button>
			</view>
		</view>
		<!-- 状态框 -->
		<view v-show="showStatus" class="statusTopic">
			<image :src="showPic" mode=""></image>
			<text class="statusText">{{statusMessage}}</text>
		</view>
		<!-- 主要页面 -->
		<view class="tit">
			<h1>欢迎，请登录！</h1>
		</view>
		<view class="headShow">
			<image src="/static/loginPic/headShow.png" alt=""></image>
		</view>
		<view class="post-login">
			<form @submit.prevent="pushHandle">
				<view class="together">
					<input type="text" placeholder="请输入用户账号" v-model="userAccount" />
					<image src="/static/loginPic/close.png" @click="clearAccount" class="c-icon"></image>
				</view>
				<view class="together">
					<input :type="typein" placeholder="请输入密码" v-model="userPassword" />
					<image :src="curEye" @click="eyeShowIf" class="c-icon"></image>
				</view>

				<view class="law">
					<label>
						<image :src="ck" @click="checkShowIf"></image>
						<span>我阅读并同意 <a href="#">《snowfish隐私条款》</a></span>
					</label>
				</view>
				<view>
					<button @click="pushHandle">登录</button>
				</view>

				<view class="otherDo">
					<label class="registDo"><a href="#">新用户注册</a></label>
					<label class="forgetDo"><a href="#">忘记密码</a></label>
				</view>

				<view class="otherLogin">
					<label class="otherText">其他登录方式(仅游客模式)</label>
					<view class="wqIcon">
						<image src="/static/loginPic/wx.png"></image>
						<image src="/static/loginPic/qq.png"></image>
						<image src="/static/loginPic/tourist.png"></image>
					</view>

				</view>

			</form>
		</view>
	</view>
</template>

<script setup>
	import {
		ref,
		computed
	} from 'vue';
	//form表单
	const userAccount = ref('');
	const userPassword = ref('');

	//账户清除
	const clearAccount = () => {
		userAccount.value = ''
	}

	//密码-小眼睛
	const typein = ref('password');
	const uneye = '/static/loginPic/eye-close.png';
	const eye = '/static/loginPic/eye-open.png';
	const curEye = ref(uneye);
	const eyeShowIf = () => {
		curEye.value = curEye.value === uneye ? eye : uneye;
		changeTorP()
	};
	const changeTorP = () => {
		typein.value = curEye.value === uneye ? 'password' : 'text';
	}

	//选择框
	const checked = ref(false);
	const uncheck = '/static/loginPic/unchecked.png';
	const check = '/static/loginPic/checked.png';
	const ck = ref(uncheck);
	const checkShowIf = () => {
		ck.value = ck.value === uncheck ? check : uncheck;
		changeCorUNC()
	};
	const changeCorUNC = () => {
		checked.value = !checked.value
	}

	//提示框
	const showTopic = ref(false)
	const choise = ref(false)
	const messageShow = ref('')
	const topic = (input) => {
		messageShow.value = input
		showTopic.value = true
	}

	const untopic = (yn) => {
		showTopic.value = false
		messageShow.value = ''
		return yn
	}

	//状态提示
	const showStatus = ref(false)
	const statusShow = ref('')
	const truePic = "/static/loginPic/true.png"
	const falsePic = "/static/loginPic/false.png"
	const statusMessage = ref(truePic)
	const showPic = ref('')
	const setStatus = (ok, input) => {
		showStatus.value = true
		if (ok == 'ok') {
			showPic.value = truePic
		} else {
			showPic.value = falsePic
		}

		statusMessage.value = input

		setTimeout(() => {
			showStatus.value = false
			statusMessage.value = ''
		}, 1500)
	}

	//提交
	const pushHandle = () => {
		if (checked.value == false) {
			topic("请先同意用户协议再登录！")
			return
		}
		if (!userAccount.value || !userPassword.value) {
			topic("账户或者密码不允许为空！")
			return
		} else {
			uniCloud.callFunction({
				name: "login",
				data: {
					action: 'login',
					"userAccount": userAccount.value,
					"password": userPassword.value
				},
				success(res) {
					if (res.result.code == 200) {
						// topic("登录成功：" + "你好用户" + JSON.stringify(res.result.data))
						setStatus("ok", "登录成功：" + "你好用户" + JSON.stringify(res.result.data))
						setTimeout(()=>{
							uni.redirectTo({
								url: '/pages/center/center' // 跳转到 center.vue
							});
						},1600)
					} else {
						// topic("登录失败：" + JSON.stringify(res.result.message))
						setStatus("no", "登录失败：" + JSON.stringify(res.result.message))
					}
				},
				fail(err) {
					topic("发生错误：" + JSON.stringify(err))
					console.error("错误：" + JSON.stringify(err)); // 捕获错误
				}
			})

		}
	}
</script>

<style scoped>
	.main-context {
		display: flex;
		flex-direction: column;
		align-items: center;
		width: 100vw;
		height: 100vh;
	}

	.tit {
		margin-top: 5rem;
		margin-bottom: 2rem;
	}

	.headShow {
		width: 12rem;
		height: 20%;
		margin-top: 20rpx;
		margin-bottom: 30rpx;
	}

	.headShow image {
		width: 100%;
		height: 100%;
	}

	.post-login {
		width: 20rem;
		height: 10%;
	}

	.post-login form .together input {
		margin: 10px auto;
		/* 设置透明边框 */
		border: 5px solid transparent;
		/* 浅灰色微微透明背景 */
		background-color: rgba(211, 211, 211, 0.25);
		border-radius: 10px;
		height: 60rpx;
	}

	.post-login form button {
		margin-top: 30rpx;
		border: 1px solid transparent;
		background-color: rgba(220, 30, 55, 0.65);
		border-radius: 25px;
	}

	.together {
		display: flex;
		align-items: center;
		/* 垂直居中对齐 */
		position: relative;
		/* 使子元素绝对定位相对于此元素 */
	}

	.together input {
		width: 100%;
		/* 确保输入框占满父元素 */
		padding-right: 50rpx;
		/* 给右侧留出空间放图标 */
	}

	.c-icon {
		position: absolute;
		/* 绝对定位 */
		width: 30rpx;
		height: 30rpx;
		top: 50%;
		/* 垂直居中 */
		right: 25rpx;
		/* 距离右侧的距离 */
		transform: translateY(-50%);
		/* 进一步居中 */
		cursor: pointer;
		/* 鼠标悬停时显示手形光标 */
	}

	.law image {
		width: 50rpx;
		height: 50rpx;
	}

	.law span {
		color: grey;
	}

	.law a {
		text-decoration: none;
		/* 去除下划线 */
		color: rgba(30, 200, 250, 0.9);
	}

	.law a:active {
		color: rgba(160, 60, 195, 0.9);
	}

	.law label {
		position: relative;
		display: flex;
		flex-direction: row;
	}

	.law label span {
		position: absolute;
		top: 5%;
		width: 100%;
		left: 60rpx;
	}

	.otherDo {
		display: flex;
		justify-content: space-between;
	}

	.registDo,
	.forgetDo {
		margin: 40rpx 5rpx;
		color: grey;
	}

	.registDo a,
	.forgetDo a {
		text-decoration: none;
		/* 去除下划线 */
		color: grey;
	}

	.registDo a:active,
	.forgetDo a:active {
		color: rgba(160, 60, 195, 0.9);
	}

	.otherLogin {
		margin-top: 15%;
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.otherText {
		color: rgb(112 128 144);
	}

	.wqIcon {
		display: flex;
	}

	.wqIcon image {
		width: 50rpx;
		height: 50rpx;
		margin: 50rpx 80rpx;
	}

	/* 提示框以及蒙层 */
	/* 半透明的灰色背景 */
	.overlay {
		position: fixed;
		top: 0;
		left: 0;
		width: 100vw;
		height: 100vh;
		background-color: rgba(0, 0, 0, 0.5);
		/* 半透明灰色 */
		z-index: 1;
	}

	/* 提示框 */
	.modal {
		position: fixed;
		top: 40%;
		left: 50%;
		transform: translate(-50%, -50%);
		width: 15rem;
		height: 12rem;
		min-width: 300rpx;
		min-height: 300rpx;
		background-color: #fff;
		padding: 10rpx;
		border-radius: 10px;
		text-align: center;
		z-index: 2;
		/* 高于蒙层 */

		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.modal image {
		width: 60%;
		height: 60%;
	}

	.modal-message {
		font-size: 30rpx;
		font-weight: bold;
	}

	.buts {
		margin-top: 50rpx;
		width: 100%;
		display: flex;
	}


	.modal-buttonA {
		color: white;
		background-color: rgba(119, 136, 153, 0.9);
	}

	.modal-buttonB {
		color: white;
		background-color: rgba(67, 205, 128, 0.9);
	}

	/* 展示框 */
	.statusTopic {
		position: fixed;
		top: 40%;
		left: 50%;
		transform: translate(-50%, -50%);
		width: 15rem;
		height: 12rem;
		min-width: 300rpx;
		min-height: 300rpx;
		background-color: rgba(255, 255, 255, 0);
		/* 完全透明 */
		padding: 10rpx;
		border-radius: 10px;
		text-align: center;
		z-index: 2;
		/* 高于蒙层 */

		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.statusTopic image {
		margin-top: 40rpx;
		margin-bottom: 30rpx;
		width: 40%;
		height: 50%;
	}

	.statusText {
		font-size: 30rpx;
		font-weight: bold;
	}
</style>