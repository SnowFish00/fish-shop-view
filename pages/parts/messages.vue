<template>
	<view class="msg-container">
		<view class="top-float-container">
			<view class="top-float">
				<view class="msg-self">
					<text>消息({{unread}})</text>
				</view>
				<view class="msg-icons">
					<view class="icon-item">
						<image src="/static/part/msssage/clear.png" mode=""></image>
					</view>
					<view class="icon-item">
						<image src="/static/part/msssage/search.png" mode=""></image>
					</view>
					<view class="icon-item">
						<image src="/static/part/msssage/setting.png" mode=""></image>
					</view>
				</view>
			</view>
		</view>

		<view class="AD">
			<view class="ad-icon">
				<image src="/static/part/msssage/gift.png" mode=""></image>
			</view>
			<view class="ad-info">
				<text>抽纸一元包邮！立刻抢购~</text>
			</view>
		</view>

		<view class="mag-sort">
			<view class="sort-item">
				<view class="sort-cion">
					<image src="/static/part/msssage/service-y.png" mode=""></image>
				</view>
				<view class="sort-info">
					<text>客服信息</text>
				</view>
				<view class="show-num-tag">
					<!-- 上限99 -->
					<text>{{showUnreadPart1}}</text>
				</view>
			</view>
			<view class="sort-item">
				<view class="sort-cion">
					<image src="/static/part/msssage/transport.png" mode=""></image>
				</view>
				<view class="sort-info">
					<text>交易物流</text>
				</view>
				<view class="show-num-tag">
					<!-- 上限99 -->
					<!-- 暂时隐藏 暂未编辑逻辑 -->
					<text v-show="showUnreadOtherParts">99</text>
				</view>
			</view>
			<view class="sort-item">
				<view class="sort-cion">
					<image src="/static/part/msssage/notify.png" mode=""></image>
				</view>
				<view class="sort-info">
					<text>服务通知</text>
				</view>
				<view class="show-num-tag">
					<!-- 上限99 -->
					<text v-show="showUnreadOtherParts">99</text>
				</view>
			</view>
			<view class="sort-item">
				<view class="sort-cion">
					<image src="/static/part/msssage/fast-new.png" mode=""></image>
				</view>
				<view class="sort-info">
					<text>快讯</text>
				</view>
				<view class="show-num-tag">
					<!-- 上限99 -->
					<text v-show="showUnreadOtherParts">99</text>
				</view>
			</view>
			<view class="sort-item">
				<view class="sort-cion">
					<image src="/static/part/msssage/other.png" mode=""></image>
				</view>
				<view class="sort-info">
					<text>其他</text>
				</view>
				<view class="show-num-tag">
					<!-- 上限99 -->
					<text v-show="showUnreadOtherParts">99</text>
				</view>
			</view>
		</view>

		<view class="msg-main">
			<view class="talk-item" v-for="(talk,index) in talks" :key="index">
				<view class="shop-self-pic">
					<image :src="talk.shopPic" mode=""></image>
				</view>
				<view class="talk-right">
					<view class="talk-top">
						<view class="shop-name">
							<text>{{talk.shopName}}</text>
						</view>
						<view class="talk-data">
							<text>{{talk.dataRecently}}</text>
						</view>
					</view>
					<view class="talk-bottom">
						<view class="talk-perview">
							<text>{{talk.talkPerview}}</text>
						</view>
						<view class="talk-unread">
							<text>{{talk.unread}}</text>
						</view>
					</view>
				</view>
				<view class="spilt"></view>
			</view>
		</view>
	</view>
</template>

<script setup>
	import {
		ref
	} from 'vue';
	const unread = ref(15)
	const showUnreadPart1 = ref(15)
	const showUnreadOtherParts = ref(false)
	
	// 展示数据
	const talks = ref([
	{
		shopPic:"/static/shop/shopself/BougiesLAFRANCAISE.webp",
		shopName:"BougiesLAFRANCAISE",
		dataRecently:"2024/10/01",
		talkPerview:"您选的这款是畅销的醇厚玫瑰，好评率最高的一款香薰",
		unread:6
	},
	{
		shopPic:"/static/shop/shopself/xq.webp",
		shopName:"喜芊家居",
		dataRecently:"2024/09/30",
		talkPerview:"好的亲，马上为你发货",
		unread:4
	},
	{
		shopPic:"/static/shop/shopself/lining.webp",
		shopName:"李宁官方网店",
		dataRecently:"2024/09/30",
		talkPerview:"亲，鞋子合适吗，如有不合适的情况，我们七天无理由退还的哦",
		unread:3
	},
	{
		shopPic:"/static/shop/shopself/aula.webp",
		shopName:"狼蛛旗舰店",
		dataRecently:"2024/09/28",
		talkPerview:"亲，这是我们的使用说明书，还有什么问题联系我们哦",
		unread:1
	},
	{
		shopPic:"/static/shop/shopself/weilong.webp",
		shopName:"卫龙官方店",
		dataRecently:"2024/09/26",
		talkPerview:"亲，好吃的话记得再次光临哦，期待再次相遇",
		unread:1
	}
	])
</script>

<style scoped>
	.msg-container {
		width: 100vw;
		height: 100vh;
		display: flex;
		align-items: center;
		flex-direction: column;
		background-color: rgba(205, 201, 201, 0.8);
	}

	/* 悬浮顶栏 */
	.top-float-container {
		width: 24rem;
		height: 3rem;
		display: flex;
		justify-content: center;
		align-items: center;
		position: relative;
	}

	.top-float {
		width: 24rem;
		height: 3rem;
		display: flex;
		align-items: center;
		position: fixed;
		top: 0;
		z-index: 1;
		background-color: rgba(255, 99, 71, 1);
	}

	.msg-self {
		width: 30%;
		height: 80%;
		margin-left: 0.5rem;
		display: flex;
		align-items: center;
		margin-left: 40%;
		font-size: 1rem;
		font-weight: bold;
		white-space: nowrap;
	}

	.msg-icons {
		width: 30%;
		height: 70%;
		display: flex;
		align-items: center;
		position: absolute;
		left: 70%;
	}

	.icon-item {
		width: 20%;
		height: 65%;
		margin-left: 0.3rem;
		margin-right: 0.3rem;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.icon-item image {
		width: 100%;
		height: 100%;
	}

	/* 滚动广告 */
	.AD {
		width: 24rem;
		height: 2rem;
		display: flex;
		align-items: center;
		background-color: rgba(255, 165, 79, 0.5);
	}

	.ad-icon {
		width: 5%;
		height: 60%;
		margin-left: 0.5rem;
		display: flex;
		justify-items: center;
		align-items: center;
	}

	.ad-icon image {
		width: 100%;
		height: 100%;
	}

	.ad-info {
		width: 80%;
		height: 60%;
		display: flex;
		align-items: center;
		margin-left: 0.3rem;
		color: #FF8C00;
	}

	/* 消息分类 */
	.mag-sort {
		width: 24rem;
		height: 4rem;
		display: flex;
		align-items: center;
	}

	.sort-item {
		width: 15%;
		height: 80%;
		display: flex;
		flex-direction: column;
		align-items: center;
		position: relative;
		margin-left: 1rem;
	}

	.sort-cion {
		width: 70%;
		height: 70%;
	}

	.sort-cion image {
		width: 100%;
		height: 100%;
	}

	.sort-info {
		width: 90%;
		height: 30%;
		display: flex;
		align-items: center;
		justify-content: center;
		white-space: nowrap;
		font-size: 0.5rem;
	}

	.show-num-tag {
		width: 1.2rem;
		height: 1.2rem;
		position: absolute;
		display: flex;
		justify-content: center;
		align-items: center;
		left: 80%;
	}

	.show-num-tag text {
		display: block;
		width: 1rem;
		height: 1rem;
		font-size: 0.5rem;
		text-align: center;
		border: 1rpx solid transparent;
		border-radius: 50%;
		background-color: #d81e06;
	}

	/* 消息 */
	.msg-main {
		width: 24rem;
		margin-top: 0.5rem;
		border: 1rpx solid transparent;
		border-radius: 40rpx;
		display: flex;
		flex-direction: column;
		align-items: center;
		background-color: rgba(238, 233, 233, 1);
	}
	
	.talk-item{
		width: 95%;
		height: 4rem;
		display: flex;
		align-items: center;
		margin-top: 0.3rem;
		position: relative;
		margin-bottom: 0.1rem;
	}
	
	.shop-self-pic{
		width:15%;
		height: 80%;
		display: flex;
		justify-content: center;
		align-items: center;
		margin-left: 0.3rem;
	}
	
	.shop-self-pic image{
		width: 100%;
		height: 100%;
		border-radius: 50%;
	}
	
	.talk-right{
		width: 80%;
		height: 90%;
		display: flex;
		flex-direction: column;
		align-items: center;
		margin-left: 0.3rem;
	}
	
	.talk-top{
		width: 100%;
		height: 45%;
		position: relative;
		display: flex;
		align-items: center;
	}
	
	.shop-name{
		width: 60%;
		height: 100%;
		display: flex;
		align-items: center;
	}
	
	.shop-name text{
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
	}
	
	.talk-data{
		width: 35%;
		height: 60%;
		position: absolute;
		left: 70%;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	
	.talk-data text{
		font-size: 0.5rem;
		color: rgba(130,130,130, 1);
	}
	
	.talk-bottom{
		width: 100%;
		height: 55%;
		position: relative;
		display: flex;
		align-items: center;
	}
	
	.talk-perview{
		width: 80%;
		height: 80%;
		display: flex;
		align-items: center;
	}
	
	.talk-perview text{
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
		font-size: 0.8rem;
		color: rgba(130,130,130, 1);
	}
		
	.talk-unread{
		width: 8%;
		height: 70%;
		display: flex;
		justify-content: center;
		align-items: center;
		position: absolute;
		left:90% ;
	}
	
	.talk-unread text{
		width: 1rem;
		height: 1rem;
		border: 1rpx solid transparent;
		border-radius: 50%;
		font-size: 0.8rem;
		text-align: center;
		color: rgba(255, 255, 255, 0.8);
		background-color: #d81e06;
		
	}
	
	/* 分割线 */
	.spilt{
		position: absolute;
		width: 80%;
		height: 3%;
		left: 20%;
		bottom: 0;
		background-color:rgba(105, 105, 105, 0.8) ;
	}
</style>