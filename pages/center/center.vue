<template>
	<view class="container">
		<view class="content">
			<component :is="currentComponent"></component> <!-- 动态内容显示区域 -->
		</view>

		<view class="footer">
			<view class="footer-item" @click="changeComponent('Home')" :class="{ selected: currentTab === 'Home' }">
				<image :src="currentTab === 'Home' ? '/static/center/home-full.png' : '/static/center/home.png'"
					mode=""></image>
				<text :style="{ color: currentTab === 'Home' ? '#F4A460' : '#000' }">首页</text>
			</view>
			<view class="footer-item" @click="changeComponent('Video')" :class="{ selected: currentTab === 'Video' }">
				<image :src="currentTab === 'Video' ? '/static/center/video-full.png' : '/static/center/video.png'"
					mode=""></image>
				<text :style="{ color: currentTab === 'Video' ? '#F4A460' : '#000' }">视频</text>
			</view>
			<view class="footer-item" @click="changeComponent('Messages')"
				:class="{ selected: currentTab === 'Messages' }">
				<image
					:src="currentTab === 'Messages' ? '/static/center/message-full.png' : '/static/center/message.png'"
					mode=""></image>
				<text :style="{ color: currentTab === 'Messages' ? '#F4A460' : '#000' }">消息</text>
			</view>
			<view class="footer-item" @click="changeComponent('Bucket')" :class="{ selected: currentTab === 'Bucket' }">
				<image :src="currentTab === 'Bucket' ? '/static/center/bucket-full.png' : '/static/center/bucket.png'"
					mode=""></image>
				<text :style="{ color: currentTab === 'Bucket' ? '#F4A460' : '#000' }">购物车</text>
			</view>
			<view class="footer-item" @click="changeComponent('Profile')"
				:class="{ selected: currentTab === 'Profile' }">
				<image :src="currentTab === 'Profile' ? '/static/center/user-full.png' : '/static/center/user.png'"
					mode=""></image>
				<text :style="{ color: currentTab === 'Profile' ? '#F4A460' : '#000' }">我</text>
			</view>
		</view>
	</view>
</template>

<script setup>
	import {
		ref,
		markRaw
	} from 'vue';
	import Home from '../parts/home.vue';
	import Video from '../parts/video.vue';
	import Messages from '../parts/messages.vue';
	import Bucket from '../parts/buctet.vue';
	import Profile from '../parts/profile.vue';


	//组件组
	const components = {
		Home: markRaw(Home),
		Video: markRaw(Video),
		Messages: markRaw(Messages),
		Bucket: markRaw(Bucket),
		Profile: markRaw(Profile)
	};

	const currentComponent = ref(components.Home); // 默认显示的组件
	const currentTab = ref('Home'); // 默认选中的 tab 为首页

	const changeComponent = (componentName) => {
		currentComponent.value = components[componentName]; // 切换组件
		currentTab.value = componentName; // 设置当前选中的 tab
	};
</script>

<style scoped>
	.container {
		display: flex;
		flex-direction: column;
		align-items: center;
		height: 100vh;
		/* 全高 */
	}

	.footer {
		position: fixed;
		/* fixed下的宽拉伸也可以left:0 right:0 */
		bottom: 0;
		width: 24rem;
		height: 120rpx;
		display: flex;
		justify-content: space-around;
		background-color: #fff;
		/* 自定义颜色 */
		box-shadow: 0 -2px 5px rgba(0, 0, 0, 0.1);
	}

	.footer-item {
		flex: 1;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		text-align: center;
		padding: 10rpx 5rpx;
		cursor: pointer;
	}

	.footer-item image {
		width: 40rpx;
		height: 40rpx;
	}

	.footer-item text {
		display: block;
		font-size: 10rpx;
	}

	.selected {
		/* dosomething */
	}
</style>