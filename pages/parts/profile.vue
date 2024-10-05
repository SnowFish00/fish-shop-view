<template>
	<view class="myself-container">
		<view class="top-container">
			<view class="top-float">
				<view class="self-content">
					<text>我的</text>
				</view>
				<view class="self-top-icons">
					<view class="self-icon">
						<image src="/static/part/profile/service-un.png" mode=""></image>
					</view>
					<view class="self-icon">
						<image src="/static/part/profile/setting.png" mode=""></image>
					</view>
				</view>
			</view>
		</view>

		<view class="user-show-container">
			<view class="user-pic">
				<image :src="user.pic" mode=""></image>
			</view>
			<view class="user-right">
				<view class="user-name">
					<text id="uname">{{user.name}}</text>
				</view>
				<view class="user-tags">
					<view class="tag-info">
						<text>鱼露值3985</text>
					</view>
					<view class="tag-info">
						<text>学生认证</text>
					</view>
				</view>
			</view>
		</view>

		<view class="first-func-container">
			<view class="user-num-show">
				<view class="num-show">
					<text class="num-self">980.25</text>
					<text class="num-info">账户余额</text>
				</view>
				<view class="num-show">
					<text class="num-self">3985</text>
					<text class="num-info">鱼露值</text>
				</view>
				<view class="num-show">
					<text class="num-self">12</text>
					<text class="num-info">优惠卷</text>
				</view>
			</view>
			<view class="spilt"></view>
			<view class="wallet">
				<view class="wallet-icon">
					<image src="/static/part/profile/wallet.png" mode=""></image>
				</view>
				<view class="wallet-con">
					<text>我的钱包</text>
				</view>
			</view>
		</view>

		<view class="common-func-container">
			<view class="both-row">
				<view class="func-icon">
					<image src="/static/part/profile/order.png" mode=""></image>
				</view>
				<view class="icon-info">
					<text>全部订单</text>
				</view>
			</view>
			<view class="both-row">
				<view class="func-icon">
					<image src="/static/part/profile/pay.png" mode=""></image>
				</view>
				<view class="icon-info">
					<text>待付款</text>
				</view>
			</view>
			<view class="both-row">
				<view class="func-icon">
					<image src="/static/part/profile/receive.png" mode=""></image>
				</view>
				<view class="icon-info">
					<text>待收货</text>
				</view>
			</view>
			<view class="both-row">
				<view class="func-icon">
					<image src="/static/part/profile/transport.png" mode=""></image>
				</view>
				<view class="icon-info">
					<text>待发货</text>
				</view>
			</view>
			<view class="both-row">
				<view class="func-icon">
					<image src="/static/part/profile/back.png" mode=""></image>
				</view>
				<view class="icon-info">
					<text>退款/售后</text>
				</view>
			</view>
		</view>
				
		<view class="common-func-container-double">
			<view class="my-serve">
				<text>我的服务</text>
			</view>
			<view class="func-container">
				<!-- 逻辑复用 -->
				<view class="common-func-container">
					<view class="both-row">
						<view class="func-icon">
							<image src="/static/part/profile/serve.png" mode=""></image>
						</view>
						<view class="icon-info">
							<text>官方客服</text>
						</view>
					</view>
					<view class="both-row">
						<view class="func-icon">
							<image src="/static/part/profile/focus.png" mode=""></image>
						</view>
						<view class="icon-info">
							<text>关注店铺</text>
						</view>
					</view>
					<view class="both-row">
						<view class="func-icon">
							<image src="/static/part/profile/star.png" mode=""></image>
						</view>
						<view class="icon-info">
							<text>收藏</text>
						</view>
					</view>
					<view class="both-row">
						<view class="func-icon">
							<image src="/static/part/profile/evaluate.png" mode=""></image>
						</view>
						<view class="icon-info">
							<text>待评价</text>
						</view>
					</view>
					<view class="both-row">
						<view class="func-icon">
							<image src="/static/part/profile/history.png" mode=""></image>
						</view>
						<view class="icon-info">
							<text>足迹</text>
						</view>
					</view>
				</view>
			</view>
			<view class="func-container">
				<view class="common-func-container">
					<view class="both-row">
						<view class="func-icon">
							<image src="/static/part/profile/adress.png" mode=""></image>
						</view>
						<view class="icon-info">
							<text>收货地址</text>
						</view>
					</view>
					<view class="both-row">
						<view class="func-icon">
							<image src="/static/part/profile/points.png" mode=""></image>
						</view>
						<view class="icon-info">
							<text>积分</text>
						</view>
					</view>
					<view class="both-row">
						<view class="func-icon">
							<image src="/static/part/profile/help.png" mode=""></image>
						</view>
						<view class="icon-info">
							<text>帮助</text>
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script setup>
	import {
		ref
	} from 'vue';

	const user = ref({
		pic: "/static/user/mainInfo/jr.jpg",
		name: "杰瑞",
		tags: ["鱼露值3985", "学生认证"]
	})
</script>

<style scoped>
	.myself-container {
		width: 100vw;
		height: 1000vh;
		display: flex;
		flex-direction: column;
		align-items: center;
		background-color: rgba(205, 201, 201, 0.8);
	}

	/* 顶部栏 */
	.top-container {
		width: 24rem;
		height: 3rem;
		display: flex;
		justify-content: center;
		position: relative;
		align-items: center;
	}

	.top-float {
		width: 24rem;
		height: 3rem;
		display: flex;
		align-items: center;
		position: fixed;
		top: 0;
		z-index: 1;
		background-color: #9F79EE;
	}

	.self-content {
		width: 15%;
		height: 80%;
		display: flex;
		align-items: center;
		justify-content: center;
		position: absolute;
		left: 40%;
	}

	.self-content text {
		font-size: 1rem;
		color: rgba(255, 255, 255, 0.8);
	}

	.self-top-icons {
		width: 20%;
		height: 70%;
		display: flex;
		align-items: center;
		position: absolute;
		left: 78.5%;
	}

	.self-icon {
		width: 30%;
		height: 70%;
		display: flex;
		justify-content: center;
		align-items: center;
		margin: 0 0.4rem;
	}

	.self-icon image {
		width: 100%;
		height: 100%;
	}

	/* 个人展示预览 */
	.user-show-container {
		width: 24rem;
		height: 8rem;
		display: flex;
		align-items: center;
		position: relative;
		background-image: url("/static/part/profile/space.png"), linear-gradient(to right, #F97714, #EA3E43);
		/* 混合模式 */
		background-blend-mode: normal;
		background-size: cover;
		background-position: center;
		background-repeat: no-repeat;
	}

	.user-pic {
		width: 15%;
		height: 45%;
		display: flex;
		justify-content: center;
		align-items: center;
		position: absolute;
		left: 10%;
	}

	.user-pic image {
		width: 100%;
		height: 100%;
		border-radius: 50%;
	}

	.user-right {
		width: 30%;
		height: 45%;
		display: flex;
		flex-direction: column;
		position: absolute;
		left: 25%;
	}

	.user-name {
		width: 100%;
		height: 50%;
		display: flex;
		align-items: center;
	}

	#uname {
		margin-left: 0.5rem;
		color: rgba(255, 255, 255, 0.8);
	}

	.user-tags {
		width: 100%;
		height: 50%;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.tag-info {
		width: 50%;
		height: 70%;
		display: flex;
		align-items: center;
		justify-content: center;
		margin-left: 0.5rem;
		border-radius: 15rpx;
		background-color: rgba(205, 201, 201, 0.5);
	}

	.tag-info text {
		white-space: nowrap;
		font-size: 0.5rem;
		color: rgba(255, 255, 255, 0.8);
	}

	/* 功能栏1 */
	.first-func-container {
		width: 24rem;
		height: 4rem;
		display: flex;
		align-items: center;
		margin-top: 0.5rem;
		border-radius: 30rpx;
		background-color: rgba(238, 233, 233, 1);
	}

	.user-num-show {
		width: 70%;
		height: 90%;
		display: flex;
		align-items: center;
		margin-left: 1rem;
	}

	.num-show {
		width: 25%;
		height: 80%;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		margin: 0 1rem;
	}

	.num-info {
		font-size: 0.5rem;
		color: rgba(156, 156, 156, 1);
	}

	.num-self {
		white-space: nowrap;
		font-size: 0.8rem;
		color: #d81e06;
	}

	.spilt {
		width: 0.1rem;
		height: 80%;
		display: block;
		margin: 0 0.3rem;
		background-color: rgba(112, 128, 144, 0.3);
	}

	.wallet {
		width: 16.5%;
		height: 72%;
		display: flex;
		flex-direction: column;
		align-items: center;
		margin-left: 0.3rem;
	}

	.wallet-icon {
		width: 55%;
		height: 70%;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.wallet-icon image {
		width: 100%;
		height: 100%;
	}

	.wallet-con {
		width: 100%;
		height: 30%;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.wallet-con text {
		font-size: 0.5rem;
		color: rgba(156, 156, 156, 1);
		white-space: nowrap;
	}

	/* 功能栏2 */
	.common-func-container {
		width: 24rem;
		height: 5rem;
		display: flex;
		align-items: center;
		margin-top: 0.5rem;
		border-radius: 30rpx;
		background-color: rgba(238, 233, 233, 1);
	}

	.both-row {
		width: 15%;
		height: 75%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		margin: 0 0.6rem;
	}

	.func-icon {
		width: 55%;
		height: 55%;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.func-icon image {
		width: 100%;
		height: 100%;
	}

	.icon-info {
		width: 100%;
		height: 30%;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.icon-info text {
		color: rgba(156, 156, 156, 1);
		font-size: 0.5rem;
	}
	
	/* 功能栏3 */
	.common-func-container-double{
		width: 24rem;
		height: 12rem;
		display: flex;
		flex-direction: column;
		justify-content: center;
		margin-top: 0.5rem;
		border-radius: 30rpx;
		background-color: rgba(238, 233, 233, 1);
	}
	
	.my-serve{
		width: 100%;
		height: 2rem;
		display: flex;
		align-items: center;
		margin-top: 0.3rem;
		background-color: rgba(238, 233, 233, 1);
	}
	
	.my-serve text{
		margin-left: 0.9rem;
		font-size: 1rem;
		font-weight: normal;
		color: rgba(54,54,54, 1);
	}
	
	.func-container{
		width: 100%;
		height: 5rem;
		display: flex;
		justify-content: center;
		align-items: center;
	}
</style>