<template>
	<view class="bucket-container">
		<view class="show-title">
			<text class="bucket-self">购物车({{totalShoping}})</text>
			<text class="adress">{{adress}}</text>
			<text class="org">🛒管理</text>
		</view>

		<view class="top-func">
			<view class="func-item" id="it1"><text>全部</text></view>
			<view class="func-item" id="it2"><text>降价</text></view>
			<view class="func-item" id="it3">
				<text>筛选</text>
				<view class="sort">
					<image src="/static/part/bucket/sort.png" mode="">
					</image>
				</view>
			</view>
		</view>

		<view class="shoppings">
			<view class="shopping-item" v-for="(shopping,index) in shoppings" :key="index">
				<view class="shop-info">
					<view class="choiceA">
						<image src="/static/part/bucket/unchoice.png" mode=""></image>
					</view>
					<view class="shopTag">
						<image :src="shopping.shopTag" mode=""></image>
					</view>
					<view class="shopName">
						<view class="shopName-it">
							<text>{{shopping.shopName}}</text>
						</view>
						<view class="seeMore">
							<image src="/static/part/bucket/more.png" mode=""></image>
						</view>
					</view>
				</view>
				<view class="shopping-info">
					<view class="infoLeft">
						<view class="choiceB">
							<image src="/static/part/bucket/unchoice.png" mode=""></image>
						</view>
						<view class="leftPic">
							<image :src="shopping.shoppingPic" mode=""></image>
						</view>
					</view>
					<view class="infoRight">
						<view class="shoppingName">
							<text>{{shopping.shoppingName}}</text>
						</view>
						<view class="shoppingType">
							<text>{{shopping.shoppingType}}</text>
						</view>
						<view class="shoppingPrice">
							<view class="price">
								<text>￥{{shopping.shoppingPrice}}</text>
								<text>到手价</text>
							</view>
							<view class="ud">
								<text> - </text>
								<text id="shopping-sum"> 1 </text>
								<text> + </text>
							</view>
						</view>
					</view>
				</view>
			</view>
		</view>

		<view class="pay-container">
			<view class="pay">
				<view class="sellect-all">
					<view class="payAllselect">
						<image src="/static/part/bucket/unchoice.png" mode=""></image>
					</view>
					<view class="all-sort">
						<text>全选</text>
					</view>
				</view>

				<view class="total-sum">
					<text>合计：</text>
					<text id="total-after">￥{{totalPrice}}</text>
				</view>

				<view class="payNow">
					<!-- 这里用totalShoping临时代替 应使用被选中的商品数 -->
					<button>去结算({{totalShoping}})</button>
				</view>
			</view>
		</view>
	</view>
</template>

<script setup>
	import {
		computed,
		ref
	} from 'vue';
	const adress = ref("辽宁省沈阳市和平区南京街南十马路菜鸟驿站（代收点）")
	const shoppings = ref([{
			shopName: "BougiesLAFRANCAISE",
			shopTag: "/static/part/bucket/selfdo.png",
			shoppingPic: "/static/shopping/perfume1.webp",
			shoppingName: "法国进口BLF香薰",
			shoppingType: "[醇厚]深情玫瑰",
			shoppingPrice: "288.00",
			shoppingNum: "1"
		},
		{
			shopName: "喜芊旗舰店",
			shopTag: "/static/part/bucket/selfdo.png",
			shoppingPic: "/static/shopping/lightA.webp",
			shoppingName: "高档轻奢宇航员摆件",
			shoppingType: "潮玩太空兔(蓝灰)",
			shoppingPrice: "128.58",
			shoppingNum: "1"
		},
		{
			shopName: "李宁官方网店",
			shopTag: "/static/part/bucket/confrim.png",
			shoppingPic: "/static/shopping/ln.webp",
			shoppingName: "李宁工装外套",
			shoppingType: "黑色",
			shoppingPrice: "358.00",
			shoppingNum: "1"
		}
	])

	const totalShoping = ref(shoppings.value.length)
	const totalPrice = computed(() => {
		return shoppings.value.reduce((sum, item) => {
			return sum + parseFloat(item.shoppingPrice) * parseInt(item.shoppingNum);
		}, 0);
	});
</script>

<style scoped>
	.bucket-container {
		width: 100vw;
		height: 100vh;
		display: flex;
		align-items: center;
		flex-direction: column;
		position: relative;
		background-color: rgba(205, 201, 201, 0.8);
	}

	/* top栏 */
	.show-title {
		width: 24rem;
		height: 3rem;
		position: relative;
		display: flex;
		align-items: center;
		background-color: rgba(0, 139, 139, 0.9);
	}

	.bucket-self {
		width: 15%;
		white-space: nowrap;
		margin-left: 0.5rem;
		margin-right: 1.2rem;
		font-size: 1rem;
		font-weight: bold;
		color: rgba(255, 255, 255, 0.8);
	}

	.adress {
		width: 50%;
		/* 省略号小连招 */
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
		border: 1rpx solid transparent;
		border-radius: 20rpx;
		font-size: 0.8rem;
		color: rgba(255, 255, 255, 0.8);
		background-color: rgba(205, 201, 201, 0.5);
	}

	.org {
		position: absolute;
		width: 5%;
		white-space: nowrap;
		font-size: 0.9rem;
		color: rgba(255, 255, 255, 0.8);
		left: 80%;
	}

	/* 粘性功能栏 */
	.top-func {
		width: 24rem;
		height: 2rem;
		display: flex;
		position: sticky;
		top: 0;
		z-index: 1;
		background-color: rgba(238, 233, 191, 1);
	}

	.func-item {
		width: 20%;
		display: flex;
		justify-content: center;
		align-items: center;
		white-space: nowrap;
		font-size: 0.8rem;
		font-weight: bold;
		color: rgba(0, 0, 0, 0.8);
	}

	#it1 {
		color: rgba(178, 34, 34, 0.9);
	}

	#it2 {
		margin-left: 5rem;
		margin-right: 5rem;
	}

	.sort {
		width: 25%;
		height: 60%;
	}

	.sort image {
		width: 100%;
		height: 100%;
	}

	/* 购物车主体 */
	.shoppings {
		width: 24rem;
		display: flex;
		flex-direction: column;
		align-items: center;
		background-color: rgba(205, 201, 201, 0.8);
	}

	/* 购物车上半 */
	.shopping-item {
		width: 95%;
		height: 10rem;
		margin-top: 0.5rem;
		margin-bottom: 0.5rem;
		border: 1rpx solid transparent;
		border-radius: 15rpx;
		box-shadow: 0 4rpx 8rpx rgba(0, 0, 0, 0.2);
		display: flex;
		flex-direction: column;
		align-items: center;
		background-color: rgba(238, 233, 233, 1);
	}

	.shop-info {
		width: 100%;
		height: 20%;
		display: flex;
		align-items: center;
	}

	.shopping-info {
		width: 100%;
		height: 80%;
	}

	.choiceA {
		width: 5%;
		height: 50%;
		display: flex;
		justify-content: center;
		align-items: center;
		margin-left: 0.3rem;
		margin-right: 0.3rem;
	}

	.choiceA image {
		width: 100%;
		height: 100%;
	}

	.shopTag {
		width: 10%;
		height: 50%;
		display: flex;
		justify-content: center;
		align-items: center;
		margin-right: 0.2rem;
		;
	}

	.shopTag image {
		width: 100%;
		height: 100%;
	}

	.shopName {
		position: relative;
		width: 60%;
		height: 80%;
		display: flex;
		align-items: center;
	}

	.shopName-it {
		max-width: 90%;
		height: 100%;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
		display: flex;
		align-items: center;
		font-size: 0.9rem;
	}

	.seeMore {
		width: 5%;
		height: 60%;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.seeMore image {
		width: 100%;
		height: 100%;
	}

	/* 购物车下半 */
	.shopping-info {
		width: 100%;
		height: 80%;
		display: flex;
		align-items: center;
	}

	.infoLeft {
		width: 40%;
		height: 90%;
		display: flex;
		align-items: center;
	}

	.choiceB {
		width: 12%;
		height: 15%;
		display: flex;
		justify-content: center;
		align-items: center;
		margin-left: 0.3rem;
	}

	.choiceB image {
		width: 100%;
		height: 100%;
	}

	.leftPic {
		width: 80%;
		height: 90%;
		margin-left: 0.3rem;
	}

	.leftPic image {
		width: 100%;
		height: 100%;
		border-radius: 15rpx;
	}

	.infoRight {
		width: 60%;
		height: 90%;
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.shoppingName {
		width: 90%;
		height: 30%;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
		font-size: 0.85rem;
		font-weight: bold;
		display: flex;
		align-items: center;
	}

	.shoppingType {
		width: 90%;
		height: 30%;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
		display: flex;
		align-items: center;
		font-size: 0.6rem;
		border: 1rpx solid transparent;
	}

	.shoppingType text {
		padding: 0.1rem;
		border-radius: 15rpx;
		color: rgba(0, 0, 0, 0.6);
		background-color: rgba(205, 201, 201, 0.8);
	}

	.shoppingPrice {
		width: 90%;
		height: 40%;
		position: relative;
		display: flex;
		align-items: center;
	}

	.price {
		max-width: 50%;
		height: 60%;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
		display: flex;
		align-items: center;
		color: rgba(255, 0, 0, 0.75);
	}

	.price text {
		font-size: 0.3rem;
		font-weight: bold;
		margin-left: 0.1rem;
		margin-right: 0.1rem;
		white-space: nowrap;
	}

	.ud {
		max-width: 40%;
		height: 40%;
		display: flex;
		align-items: center;
		position: absolute;
		left: 50%;
		margin-left: 0.3rem;
		margin-right: 0.3rem;
	}

	.ud text {
		display: inline-block;
		font-weight: bold;
		margin-left: 0.3rem;
		margin-right: 0.3rem;
	}

	#shopping-sum {
		padding-left: 0.4rem;
		padding-right: 0.4rem;
		border-radius: 15rpx;
		background-color: rgba(205, 201, 201, 0.5);
	}

	/* 付款栏 */
	.pay-container {
		position: fixed;
		bottom: 3.75rem;
		z-index: 1;
	}
	
	.pay {
		width: 24rem;
		height: 3rem;
		background-color: rgba(238, 233, 233, 1);
		display: flex;
		align-items: center;
	}

	.sellect-all {
		width: 20%;
		height: 90%;
		display: flex;
		align-items: center;
		margin-left: 0.3rem;
	}

	.payAllselect {
		width: 25%;
		height: 50%;
		margin-left: 0.3rem;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.payAllselect image {
		width: 100%;
		height: 100%;
	}

	.all-sort {
		width: 60%;
		height: 60%;
		display: flex;
		justify-content: center;
		align-items: center;
		font-size: 0.8rem;
	}

	.total-sum {
		width: 30%;
		height: 90%;
		margin-left: 4rem;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	
	.total-sum text{
		white-space: nowrap;
	}

	.payNow {
		width: 25%;
		height: 90%;
		display: flex;
		justify-content: center;
		align-items: center;
		position: absolute;
		left: 70%;
	}

	.payNow button {
		color: rgba(255, 255, 255, 0.8);
		background-color: rgba(238, 0, 0, 0.8);
		border-radius: 20rpx;
		font-size: 0.85rem;
		white-space: nowrap;
	}
	
	#total-after{
		font-size: 1rem;
		font-weight: bold;
		color: rgba(255, 0, 0, 0.75);
	}
</style>