<template>
	<view class="ditail">
		<view class="head-hover">
			<view class="tit">
				<view class="back" @click="backWay">
					<image src="/static/utils/ditial/back.png" mode=""></image>
				</view>
				<view class="buctet">
					<text>商品</text>
					<text>详情</text>
				</view>
				<view class="collect" @click="changecollect">
					<image :src="collect" mode=""></image>
				</view>
				<view class="share">
					<image src="/static/utils/ditial/share.png" mode=""></image>
				</view>
			</view>
		</view>
		<view class="showAll">
			<view class="showPic">
				<image src="/static/shopping/pillow.webp"></image>
			</view>
			<view class="showPrice">
				<p>⚡ 折扣价￥<text id="now">{{nowPrice}}</text></p>
				<p>🅾 优惠前￥{{oldPrice}}</p>
				<p>💲 已售{{deal}}</p>
			</view>
			<view class="ticket-show">
				<view class="ticket">
					<image src="/static/utils/ditial/ticket.png" mode=""></image>
					<text>￥{{ticketnum}}</text>
				</view>
				<p class="show-tic-msg">店铺活动 限时优惠卷 截至 <text id="dateEnd">{{dateEnd}}</text></p>
				<view class="getTicket">
					<image src="/static/utils/ditial/get.png" mode=""></image>
				</view>
			</view>

			<view class="basicMsg">
				<view class="shoppingName">
					<view class="log-show">
						<image src="/static/utils/ditial/selfdo.png" mode=""></image>
					</view>
					<text>{{shoppingName}}</text>
				</view>

				<view class="option-show">
					<view class="option">
						<text class="tag-info">选择</text>
						<text class="info">已选：{{option1Context}}</text>
						<view class="more">
							<image src="/static/utils/ditial/more.png" mode=""></image>
						</view>
					</view>
					<view class="address">
						<text class="tag-info">配送</text>
						<view class="location-icon">
							<image src="/static/utils/ditial/location.png" mode=""></image>
						</view>
						<text class="infoB">{{option2Context}}</text>
						<view class="more">
							<image src="/static/utils/ditial/more.png" mode=""></image>
						</view>
					</view>
					<view class="serve">
						<text class="tag-info">服务</text>
						<text class="serve-tick" v-for="(item,index) in option3Context" :key="index">
							✅{{item}}
						</text>
						<view class="more">
							<image src="/static/utils/ditial/more.png" mode=""></image>
						</view>
					</view>
				</view>
			</view>

			<view class="perview">
				<view class="top-pre">
					<text id="top-pre1">评价 ({{preNum}}+)</text>
					<text id="top-pre2">好评率 {{recommend}}%</text>
					<view class="pre-more">
						<image src="/static/utils/ditial/more.png" mode=""></image>
					</view>
				</view>
				<view class="userPre-first">
					<view class="left-msg">
						<view class="usr-basic-top">
							<view class="user-pic-left">
								<image :src="uimage" mode=""></image>
							</view>
							<view class="user-id-right">
								<text>{{uid}}</text>
								<view class="starts-container">
									<text class="stars" v-for="(item,index) in stars" :key="index">
										⭐
									</text>
								</view>

							</view>
						</view>
						<view class="ev-msg">
							<text>{{evaluateMsg}}</text>
						</view>
					</view>
					<view class="right-pic">
						<image :src="evaluatePic" mode=""></image>
					</view>
				</view>
			</view>

			<view class="storeInfo">
				<view class="store-top">
					<view class="storePic-left">
						<image :src="storePic" mode=""></image>
					</view>
					<view class="storeTag-right">
						<view class="storeName-top">
							<text>{{storeName}}</text>
						</view>
						<view class="storeTag-bottom">
							<text v-for="(item,index) in storeTags" :key="index">
								{{item}}
							</text>
						</view>
					</view>
				</view>
				<view class="func-bottom">
					<view class="storeGo">
						<view class="Gopic">
							<image src="/static/utils/ditial/shop.png" mode=""></image>
						</view>
						<text>进店逛逛</text>
					</view>
					<view class="storeGo">
						<view class="Gopic">
							<image src="/static/utils/ditial/hardPick.png" mode=""></image>
						</view>
						<text>精选商品</text>
					</view>
				</view>
			</view>

			<view class="bottom-func">
				<view class="func-icon">
					<image src="/static/utils/ditial/shop.png" mode=""></image>
				</view>
				<view class="func-icon">
					<image src="/static/utils/ditial/customerSer.png" mode=""></image>
				</view>
				<view class="func-icon">
					<image src="/static/utils/ditial/shoppingBucket.png" mode=""></image>
				</view>
				<view class="func-button">
					<button class="func-btnA">
						<text>加入购物车</text>
					</button>
					<button class="func-btnB">
						<text>抢购</text>
						<text>￥{{nowPrice}}</text>
					</button>
				</view>
			</view>
		</view>

	</view>
</template>

<script setup>
	import {
		ref
	} from 'vue';
	const uncollect = "/static/utils/ditial/collect.png"
	const collected = "/static/utils/ditial/collected.png"
	const collect = ref(uncollect)

	//临时改变收藏逻辑
	const changecollect = () => {
		collect.value = collect.value === uncollect ? collected : uncollect
	}

	//临时展示逻辑
	const nowPrice = ref(29.99)
	const oldPrice = ref(50.00)
	const deal = ref(400)
	const ticketnum = ref(10)
	const dateEnd = ref(11.15)

	const shoppingName = ref("简约时尚泡泡纱水洗棉枕套")

	//option
	const option1Context = ref("48x74cm 儿童枕芯内胆套 升级版")
	const option2Context = ref("辽宁省沈阳市和平区南京街南十马路菜鸟驿站（代收点）")
	const option3Context = ref([
		"七天无理由", "包邮", "30天价保"
	])

	//preview
	const preNum = ref(5000)
	const recommend = ref(97)

	//user
	const uimage = ref("/static/user/mainInfo/wei.jpg")
	const uid = ref("薇尔莉特·伊芙加登")
	const stars = ref(5)
	const evaluatePic = ref("/static/user/evaluate/pre1.webp")
	const evaluateMsg = ref("这款枕套非常出色！材质柔软舒适，设计简约时尚，给人一种很好的睡眠体验。")

	//store
	const storePic = ref("/static/utils/ditial/storePic.webp")
	const storeName = ref("昊眠家纺旗舰店")
	const storeTags = ref([
		"自营",
		"5年老店",
		"回头客3万"
	])
	
	//返回上一级
	const backWay = ()=> {
		uni.navigateBack({
			// 返回上一级页面。如果 delta 大于 1，则返回指定的级数
		    delta: 1 
		});
	}
</script>

<style scoped>
	.ditail {
		display: flex;
		justify-content: center;
		width: 100vw;
		height: 100vh;
	}

	/* 悬浮头 */
	.head-hover {
		width: 25rem;
		height: 2.5rem;
		position: fixed;
		top: 0;
		z-index: 1;
	}

	.tit {
		width: 100%;
		height: 100%;
		background-color: rgba(70, 130, 180, 0.8);
		display: flex;
	}

	.tit image {
		width: 100%;
		height: 100%;
	}

	.buctet {
		display: flex;
		align-items: center;
	}

	.buctet text {
		display: block;
		margin: 0 1rem;
		font-size: 0.9rem;
		font-weight: normal;
		white-space: nowrap;
		color: rgba(255, 255, 255, 0.8);
	}

	.back {
		width: 10%;
		margin-left: 0.3rem;
	}

	.collect {
		width: 10%;
		margin-left: 7.5rem;
	}

	.share {
		width: 10%;
		margin-left: 1rem;
	}

	/* 商品展示 */
	.showAll {
		width: 25rem;
		height: 55rem;
		display: flex;
		flex-direction: column;
		background-color: rgba(238, 233, 233, 0.7);
	}

	.showPic {
		width: 100%;
		height: 18rem;
		margin-top: 2.5rem;
	}

	.showPic image {
		width: 100%;
		height: 100%;
	}

	.showPrice {
		width: 100%;
		height: 3rem;
		display: flex;
		align-items: center;
		background-color: rgba(255, 99, 71, 1);
	}

	.showPrice p {
		display: inline-block;
		margin-right: 1rem;
		color: rgba(255, 255, 255, 0.9);
	}

	/* 商品展示优惠卷 */
	.ticket-show {
		width: 100%;
		height: 3rem;
		display: flex;
		align-items: center;
		background-color: rgba(255, 99, 50, 0.8);
	}

	.ticket {
		width: 15%;
		height: 90%;
		display: flex;
		position: relative;
		align-items: center;
		margin-left: 0.3rem;
	}

	.ticket text {
		position: absolute;
		left: 18%;
		color: rgba(255, 48, 48, 1);
	}

	.ticket image {
		width: 100%;
		height: 100%;
	}

	.show-tic-msg {
		margin-left: 1.2rem;
		margin-right: 1.5rem;
		color: rgba(255, 255, 255, 0.9);
	}

	#dateEnd {
		color: rgba(255, 48, 48, 0.9);
	}

	.getTicket {
		width: 10%;
		height: 90%;
	}

	.getTicket image {
		width: 100%;
		height: 100%;
	}

	/* 商品基本信息展示 */
	.basicMsg {
		width: 100%;
		height: 13rem;
	}

	.shoppingName {
		width: 100%;
		height: 20%;
		margin-top: 0.25rem;
		display: flex;
		align-items: center;
		background-color: rgba(207, 207, 207, 0.7);
	}

	.log-show {
		width: 10%;
		height: 50%;
		margin-left: 0.3rem;
	}

	.log-show image {
		width: 100%;
		height: 100%;
	}

	.shoppingName text {
		font-size: 0.9rem;
		font-weight: 600;
		margin-left: 0.3rem;
	}

	/* options各类选项 */
	.option-show {
		width: 100%;
		height: 75%;
		display: flex;
		flex-direction: column;
		border: 1rpx solid transparent;
		box-shadow: 0 4rpx 8rpx rgba(0, 0, 0, 0.2);
		border-radius: 20rpx;
		background-color: rgba(238, 233, 233, 0.7);
	}

	.option {
		width: 100%;
		height: 33%;
		border-top-left-radius: 20rpx;
		border-top-right-radius: 20rpx;
		position: relative;
		display: flex;
		align-items: center;
		color: rgba(0, 0, 0, 0.9);
	}

	.address {
		width: 100%;
		height: 33%;
		position: relative;
		display: flex;
		align-items: center;
		color: rgba(0, 0, 0, 0.9);
	}

	.serve {
		width: 100%;
		height: 33%;
		border-bottom-left-radius: 20rpx;
		border-bottom-right-radius: 20rpx;
		position: relative;
		display: flex;
		align-items: center;
		color: rgba(0, 0, 0, 0.9);
	}

	.serve-tick {
		margin-left: 0.1rem;
		margin-right: 0.5rem;
	}

	.tag-info {
		margin-left: 0.3rem;
		margin-right: 0.8rem;
		white-space: nowrap;
		color: rgba(105, 105, 105, 1);
	}

	.info {
		overflow: hidden;
		/* 隐藏溢出的内容 */
		text-overflow: ellipsis;
		/* 添加省略号 */
		margin-right: 1.2rem;
	}

	.infoB {
		overflow: hidden;
		/* 隐藏溢出的内容 */
		text-overflow: ellipsis;
		/* 添加省略号 */
		margin-right: 1.2rem;
	}

	.location-icon {
		width: 8%;
		height: 50%;
		margin-right: 0.3rem;
	}

	.location-icon image {
		width: 100%;
		height: 100%;
	}

	.more {
		width: 3%;
		height: 45%;
		position: absolute;
		left: 95%;
	}

	.more image {
		width: 100%;
		height: 100%;
	}

	/* 评论区预览 */
	.perview {
		width: 100%;
		height: 9rem;
		border: 1rpx solid transparent;
		border-radius: 20rpx;
		box-shadow: 0 4rpx 8rpx rgba(0, 0, 0, 0.2);
		display: flex;
		flex-direction: column;
		background-color: rgba(238, 233, 233, 0.7);
	}

	.top-pre {
		width: 100%;
		height: 30%;
		position: relative;
		display: flex;
		align-items: center;
	}

	.pre-more {
		width: 4%;
		height: 1.2rem;
		position: absolute;
		left: 94%;
	}

	.pre-more image {
		width: 100%;
		height: 100%;
	}

	#top-pre1 {
		font-size: 1rem;
		font-weight: bold;
		color: rgba(0, 0, 0, 0.8);
		margin-left: 0.3rem;
	}

	#top-pre2 {
		font-size: 0.5rem;
		color: rgba(105, 105, 105, 1);
		margin-left: 11.5rem;
	}

	.userPre-first {
		width: 100%;
		height: 70%;
		display: flex;
	}

	.left-msg {
		width: 70%;
		height: 100%;
	}

	.right-pic {
		width: 30%;
		height: 100%;
	}

	.right-pic image {
		padding: 5%;
		border-radius: 30%;
		width: 90%;
		height: 90%;
	}

	.usr-basic-top {
		width: 65%;
		height: 60%;
		display: flex;
	}

	.user-pic-left {
		width: 35%;
		height: 100%;
	}

	.user-pic-left image {
		width: 100%;
		height: 100%;
		border-radius: 50%;
	}

	.user-id-right {
		width: 65%;
		height: 100%;
		font-size: 0.6rem;
	}

	.user-id-right text {
		display: block;
		margin-top: 0.5rem;
	}

	.starts-container {
		display: flex;
	}

	.ev-msg {
		width: 100%;
		height: 40%;
		overflow: hidden;
	}
	
	/* 店铺信息 */
	.storeInfo {
		width: 100%;
		height: 9rem;
		display: flex;
		flex-direction: column;
		margin-top: 0.3rem;
		border: 1rpx solid transparent;
		box-shadow: 0 4rpx 8rpx rgba(0, 0, 0, 0.2);
		border-radius: 20rpx;
		background-color: rgba(238, 233, 233, 0.7);
	}

	.store-top {
		width: 100%;
		height: 70%;
		display: flex;
	}

	.func-bottom {
		width: 100;
		height: 30%;
		display: flex;
		align-items: center;
	}

	.storePic-left {
		width: 25%;
		height: 100%;
	}

	.storePic-left image {
		width: 100%;
		height: 100%;
		border-radius: 50%;
	}

	.storeTag-right {
		display: flex;
		flex-direction: column;
		justify-content: center;
		width: 75%;
		height: 100%;
	}

	.storeName-top {
		width: 100%;
		height: 60%;
	}

	.storeName-top text {
		display: block;
		margin-top: 1.8rem;
		margin-left: 0.3rem;
		font-size: 1.2rem;
		font-weight: bold;
	}

	.storeTag-bottom {
		width: 100%;
		height: 40%;
	}

	.storeTag-bottom text {
		display: inline-block;
		margin-left: 0.3rem;
		font-size: 0.65rem;
		padding: 0.1rem;
		border: 1rpx solid #FF6A6A;
		border-radius: 15%;
	}

	.storeGo {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 30%;
		height: 80%;
		margin-left: 2rem;
		margin-right: 2rem;
		border: 1rpx solid #FF6A6A;
		border-radius: 40%;
	}

	.Gopic {
		width: 15%;
		height: 50%;
		margin-right: 0.3rem;
	}

	.Gopic image {
		width: 100%;
		height: 100%;
	}

	/* 功能底栏 */
	.bottom-func {
		width: 25rem;
		height: 2.5rem;
		position: fixed;
		bottom: 0;
		z-index: 1;
		display: flex;
		align-items: center;
		background-color: rgba(248,248,255, 1);
	}

	.func-icon {
		width: 8%;
		height: 80%;
		margin-left: 1rem;
	}

	.func-icon image {
		width: 100%;
		height: 100%;
	}

	.func-button {
		width: 50%;
		height: 100%;
		display: flex;
		align-items: center;
		margin-left: 1.5rem;
	}

	.func-button button {
		width: 50%;
		height: 90%;
	}

	.func-btnA {
		font-size: 0.7rem;
		display: flex;
		justify-content: center;
		align-items: center;
		margin-right: 0.3rem;
		border: 1rpx solid #FF6347;
		border-radius: 20rex;
		background-color: rgba(255,185,15, 0.8);
		color:rgba(255, 255, 255, 0.9);
	}
	
	.func-btnA text{
		white-space: nowrap;
	}

	.func-btnB {
		font-size: 0.7rem;
		margin-right: 0.3rem;
		display: flex;
		justify-content: center;
		align-items: center;
		border: 1rpx solid #FF6347;
		border-radius: 20rex;
		background-color: rgba(238,0,0, 0.8);
		color:rgba(255, 255, 255, 0.9);
	}
	
	.func-btnB text{
		white-space: nowrap;
	}
	
</style>