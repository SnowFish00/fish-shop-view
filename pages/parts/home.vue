<template>
	<view class="container">
		<view class="top-area">
			<view class="tit">
				<text>小鱼商城</text>
			</view>
			<!-- 搜索框 -->
			<view class="search">
				<input class="siput" :placeholder="backContext" type="text" />
				<image src="/static/part/home/search.png"></image>
				<button class="search-btn">搜索</button>
			</view>
		</view>
		<!-- 幻灯片 -->
		<view class="slide-show">
			<carousel-vue></carousel-vue>
		</view>
		<!-- 任务栏 -->
		<view class="task">
			<view class="first-task">
				<view class="task-together">
					<image src="/static/part/home/gift.png"></image>
					<span>活动</span>
				</view>
				<view class="task-together">
					<image src="/static/part/home/ticket.png"></image>
					<span>神卷</span>
				</view>
				<view class="task-together">
					<image src="/static/part/home/cents.png"></image>
					<span>积分</span>
				</view>
				<view class="task-together">
					<image src="/static/part/home/second.png"></image>
					<span>秒杀</span>
				</view>
				<view class="task-together">
					<image src="/static/part/home/sort.png"></image>
					<span>分类</span>
				</view>
			</view>
		</view>
		<!-- 展示栏 -->
		<view class="shopping-show">
			<view class="shop-item" v-for="(product, index) in products" :key="index" @click="jumpTodetial">
				<image :src="product.src"></image>
				<view class="shopShow">
					<span id="showName">{{product.shopName}}</span>
					<span class="money">
						<p id="newPrice">￥<text>{{product.money}}</text>到手价</p>
						<p id="oldPrice">￥{{product.origin}}</p>
					</span>
					<view class="tags-container">
						<span v-for="(tag, tagIndex) in product.tags" :key="tagIndex">
							<p class="tags">{{ tag }}</p>
						</span>
					</view>
				</view>
			</view>
		</view>
		
		<view class="lowest">
			<image src="/static/part/home/low.png" mode=""></image>
		</view>
	</view>
</template>

<script setup>
	import {
		ref,
		onMounted,
		onUnmounted
	} from 'vue';
	import CarouselVue from '../utils/carousel.vue';
	const backIndex = ref(0)
	const backhold = ref([
		"iphone16",
		"f75狼蛛",
		"三只松鼠",
		"乐事薯片",
		"便携屏"
	])
	const backContext = ref("")
	const changeBack = () => {
		backIndex.value = (backIndex.value + 1) % backhold.value.length
		backContext.value = backhold.value[backIndex.value]
	}

	const intv = ref(null)
	onMounted(() => {
		intv.value = setInterval(changeBack, 3000)
		onUnmounted(() => {
			clearInterval(intv.value);
		})
	})

	//single测试
	const products = ref([]);
	const originalProducts = ref([{
			src: "/static/utils/roll/shark.webp",
			shopName: "宜家鲨鲨抱枕",
			origin: 900.00,
			money: 499.00,
			tags: ["包邮", "30天价保"]
		},
		// 其他商品
		{
			src: "/static/utils/roll/cake.webp",
			shopName: "鲍师傅糕点",
			origin: 50.00,
			money: 40.00,
			tags: ["包邮", "30天价保"]
		},
		{
			src: "/static/utils/roll/cloth-nasa.webp",
			shopName: "NASA冲锋衣",
			origin: 210.00,
			money: 199.00,
			tags: ["七天无理由", "包邮", "30天价保"]
		},
		{
			src: "/static/utils/roll/keyboard.webp",
			shopName: "DAGK 机械键盘",
			origin: 499.00,
			money: 299.00,
			tags: ["七天无理由", "包邮", "30天价保"]
		},
		{
			src: "/static/utils/roll/redmi.webp",
			shopName: "红米 Node14",
			origin: 4999.00,
			money: 3899.00,
			tags: ["七天无理由", "包邮", "30天价保"]
		}
	]);
	
	for (let i = 0; i < 200; i++) {
		// 生成一个介于0到originalProducts.value.length之间的随机索引
		const randomIndex = Math.floor(Math.random() * originalProducts.value.length);
		// 使用随机索引从originalProducts.value中选取一个元素
		const randomProduct = originalProducts.value[randomIndex];
		// 将随机选取的商品添加到products数组中
		products.value.push(randomProduct);
	}
	
	// 跳转详情页
	const jumpTodetial = ()=>{
		uni.navigateTo({
			url:'/pages/utils/detial'
		})
	}
	
</script>

<style scoped>
	.container {
		display: flex;
		flex-direction: column;
		align-items: center;
		width: 100vw;
		height: 100vh;
	}

	/* 头部悬浮 */
	.top-area {
		width: 30rem;
		height: 15%;
		display: flex;
		flex-direction: column;
		align-items: center;
		background: linear-gradient(to bottom, #ffc0cb, #ffffff);
		position: fixed;
		z-index: 1;
	}

	.tit {
		margin-top: 30rpx;
	}

	.tit text {
		font-size: 1rem;
		font-weight: 100;
	}

	.search {
		display: flex;
		/* 保证垂直居中 后续移动绝对定位 */
		align-items: center;
		position: relative;
		width: 21rem;
		margin: 50rpx auto;
	}

	.siput {
		width: 100%;
		padding-top: 5rpx;
		padding-bottom: 5rpx;
		padding-left: 50rpx;
		padding-right: 80rpx;
		border: 3rpx solid black;
		border-radius: 20rpx;
	}

	.search image:nth-of-type(1) {
		position: absolute;
		width: 40rpx;
		height: 40rpx;
		top: 20%;
		left: 10rpx;
	}

	.search-btn {
		position: absolute;
		top: 10%;
		right: 10rpx;
		width: 100rpx;
		height: 45rpx;
		text-align: center;
		/* 水平居中 */
		line-height: 40rpx;
		/* 行高设置为与按钮高度一致，确保垂直居中 */
		font-size: 20rpx;
		white-space: nowrap;
		/* 禁止换行 */
		border-radius: 15rpx;
		background-color: rgba(238, 59, 59, 1);
		color: white;
	}

	/* 幻灯片 */
	.slide-show {
		/* 与 move-top 的高度保持一致，避免重叠 */
		margin-top: 18vh;
	}

	/* 功能栏 */
	.task {
		width: 25rem;
		height: 8%;
		display: flex;
		justify-content: center;
		margin-top: 30rpx;
	}

	.first-task {
		width: 100%;
		margin: 0 50rpx;
		display: flex;
		align-items: center;
		border-radius: 20rpx;
		background-color: rgba(238, 233, 233, 0.3);
	}

	.task-together {
		display: flex;
		flex-direction: column;
		align-items: center;
		margin: 0 35rpx;
	}

	.task-together image {
		width: 70rpx;
		height: 70rpx;
	}

	/* 商品加载 */
	.shopping-show {
		width: 22rem;
		column-count: 2;
		column-gap: 2rpx;
		margin: 50rpx auto;
	}

	.shop-item {
		display: flex;
		flex-direction: column;
		padding: 2rpx;
		margin: 0rpx 2rpx;
		margin-bottom: 10rpx;
		/* 避免在列之间断开 */
		break-inside: avoid-column;
		border: 1rpx solid #2E8B57
	}

	.shop-item image {
		display: block;
		width: 100%;
	}

	.shopShow {
		display: flex;
		flex-direction: column;
	}

	.money p {
		display: inline-block;
	}

	#oldPrice {
		font-size: 3rpx;
		margin-left: 5rpx;
		color: rgba(119, 136, 153, 0.9);
	}

	#newPrice {
		font-size: 24rpx;
		color: rgba(238, 44, 44, 0.9);
	}

	.tags-container {
		display: flex;
	}

	.tags {
		display: inline-block;
		margin-right: 5rpx;
		font-size: 1rpx;
		color: rgba(255, 130, 71, 0.8);
	}
	
	.lowest{
		display: flex;
		justify-content: center;
		width: 20rem;
	}
	.lowest image{
		width: 100%;
	}
</style>