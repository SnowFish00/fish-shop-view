<template>
	<view class="container-outer">
		<view class="collectAll">
			<view class="video-main">
				<view class="swiper-outer" @touchstart="mouseBegin" @touchend="mouseEnd">
					<swiper class="swiper" :current="current" :vertical="true" @change="change">
						<swiper-item v-for="(video, index) in videoList" :key="index" class="swiper-item">
							<video class="video-item" v-if="current === index" :src="video.url" @click="togglePlay"
								@play="play" @pause="pause" loop autoplay controls="true" object-fit="contain" />
						</swiper-item>
					</swiper>
				</view>
			</view>
			<view class="header-top">
				<view class="vitems">
					<view class="vitem">
						<!-- 暂时静态选择 -->
						<text id="select">推荐</text>
					</view>
					<view class="vitem">
						<text>精选</text>
					</view>
					<view class="vitem">
						<text>关注</text>
					</view>
				</view>
				<view class="search">
					<image src="/static/part/video/search.png" mode=""></image>
				</view>
			</view>

			<view class="auth">
				<view class="aPic">
					<image :src="videoList[current].aPic" mode=""></image>
				</view>
				<view class="func-item">
					<view class="icon-pic">
						<image src="/static/part/video/like.png" mode=""></image>
					</view>
					<text>{{videoList[current].like}}</text>
				</view>
				<view class="func-item">
					<view class="icon-pic">
						<image src="/static/part/video/star.png" mode=""></image>
					</view>
					<text>{{videoList[current].star}}</text>
				</view>
				<view class="func-item">
					<view class="icon-pic">
						<image src="/static/part/video/say.png" mode=""></image>
					</view>
					<text>{{videoList[current].say}}</text>
				</view>
				<view class="func-item">
					<view class="icon-pic">
						<image src="/static/part/video/share.png" mode=""></image>
					</view>
					<text>{{videoList[current].share}}</text>
				</view>
			</view>
			
			<view class="bottom-info">
				<view class="aName">
					<text>@{{videoList[current].shopNamm}}</text>
				</view>
				<view class="introduce">
					<text>{{videoList[current].introduce}}</text>
				</view>
			</view>
			
			<view class="play-icon" v-show="!isPlay">
				<image src="/static/part/video/play.png" mode=""></image>
			</view>
			
		</view>
	</view>

</template>


<script setup>
	import {
		ref,
	} from 'vue';

	const videoList = ref([{
			id: '1',
			url: 'https://tbm-auth.alicdn.com/avpl/tbs_vsucai/copy/018d-20c31ded-a1a74fb4-8cf86aab-3f90/20240119_3947fc982851f816_447396387210_86845457157384_published_mp4_264_hd_taobao.mp4?auth_key=1728143276-0-0-8bc1f94249ecf5b0e2e416c4141526f9&biz=tbs_vsucai-914950601fd8ca2d&t=2132c3c117281405761707673e16b4&t=2132c3c117281405761707673e16b4&b=tbs_vsucai&p=cloudvideo_http_tb_seller_vsucai_publish',
			aPic: '/static/shop/shopself/starReg.webp',
			like:'3899',
			star:'1675',
			say:'346',
			share:'254',
			shopNamm:"StarReg",
			introduce:"为她买一颗星星吧"
		},
		{
			id: '2',
			url: 'https://tbm-auth.alicdn.com/73bbe9f95b148212/aee37b0ea0ec6c3f/20240304_19a2936f1ccfa845_451649401639_96488138681806_published_mp4_264_hd_taobao.mp4?auth_key=1728144435-0-0-6327b5a7b22f635e912c2b283b4bdbb7&biz=tbs_vsucai-e0283c204a569637&t=213cf6fc17281417352526686e161b&t=213cf6fc17281417352526686e161b&b=tbs_vsucai&p=cloudvideo_http_tb_seller_vsucai_publish',
			aPic: '/static/shop/shopself/lining.webp',
			like:'2890',
			star:'997',
			say:'103',
			share:'297',
			shopNamm:"李宁官方网店",
			introduce:"穿上林川，走出户外，给心灵一次深呼吸的机会"
		},
		{
			id: '3',
			url: 'https://tbm-auth.alicdn.com/73bbe9f95b148212/1d767b60c0c8b0c7/20240606_78a35d4e29bf5c70_466132365472_tb_seller_vsucai_publish_mp4_264_hd_wm_invisible_taobao.mp4?auth_key=1728145022-0-0-eadb22674b1915e99395435a55638da4&biz=tbs_vsucai-592792213d34014b&t=21366d5d17281423223063621e1430&t=21366d5d17281423223063621e1430&b=tbs_vsucai&p=cloudvideo_http_tb_seller_vsucai_publish',
			aPic: '/static/shop/shopself/lvlian.webp',
			like:'879',
			star:'315',
			say:'106',
			share:'35',
			shopNamm:"绿联数码旗舰店",
			introduce:"绿联S6魔方插座，快来入手吧"
			
		},
	]);

	const current = ref(0);
	const isPlay = ref(false);
	const touches = ref({
		clientX: 0,
		clientY: 0,
	});

	const change = (e) => {
		current.value = e.detail.current;
		// 自动播放逻辑
		// 尝试使用 e.mp 来获取原生事件对象
		const videoElement = e.mp ? e.mp.target.querySelector('video') : null;
		if (videoElement) {
			videoElement.play();
		}
	};

	const togglePlay = () => {
		const videoElement = document.querySelector('video');
		if (videoElement) {
			if (isPlay.value) {
				videoElement.pause();
				isPlay.value = false
			} else {
				videoElement.play();
				isPlay.value = true
			}
		}
	};

	const play = () => {
		isPlay.value = true;
	};

	const pause = () => {
		isPlay.value = false;
	};


	const mouseBegin = (e) => {
		const touch = e.touches[0];
		touches.value.clientX = touch.clientX;
		touches.value.clientY = touch.clientY;
	};

	const mouseEnd = (e) => {
		const touch = e.changedTouches[0];
		// 获取最后一个触摸点
		const x = touches.value.clientX - touch.clientX;
		// 计算X方向上的移动距离
		const y = touches.value.clientY - touch.clientY;
		// 计算Y方向上的移动距离

		// 判断滑动方向
		if (Math.abs(y) > Math.abs(x)) {
			// 检查Y轴上的移动
			if (y < -50) {
				// 如果Y轴移动大于50，且为负数，表示向上滑
				if (current.value > 0) {
					current.value--;
					// 切换到上一个视频
				}
			} else if (y > 50) {
				// 如果Y轴移动大于50，且为正数，表示向下滑
				if (current.value < videoList.value.length - 1) {
					current.value++;
					// 切换到下一个视频
				}
			}
		}
	};
</script>

<style scoped>
	.container-outer {
		width: 100vw;
		height: 100vh;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.collectAll{
		width: 24rem;
		height: 52rem;
		display: flex;
		position: relative;
		background-color: black;
	}

	/* 视频 */
	.video-main {
		width: 24rem;
		height: 50rem;
		display: flex;
		justify-content: center;
	}

	.swiper-outer {
		width: 100%;
		height: 100%;
	}

	.swiper {
		width: 100%;
		height: 100%;
	}

	.swiper-item {
		height: 100%;
		width: 100%;
	}

	.video-item {
		width: 100%;
		height: 100%;
	}

	/* 顶栏 */
	.header-top {
		width: 24rem;
		height: 5rem;
		position: absolute;
		top: 0;
		display: flex;
		align-items: center;
	}

	.vitems {
		display: flex;
		margin-left: 4rem;
	}

	.vitem {
		font-size: 1.2rem;
		margin: 0 1.2rem;
		color: rgba(190, 190, 190, 0.8);
	}

	#select {
		color: rgba(255, 255, 255, 0.8);
		margin-bottom: 0.3rem;
		border-bottom: 0.3rem solid rgba(255, 255, 255, 0.8);
	}

	.search {
		width: 6%;
		height: 30%;
		display: flex;
		justify-content: center;
		align-items: center;
		position: absolute;
		left: 85%;
	}

	.search image {
		width: 100%;
		height: 100%;
	}

	/* authInfo */
	.auth {
		width: 4rem;
		height: 20rem;
		display: flex;
		flex-direction: column;
		position: absolute;
		top: 45%;
		left: 80%;
		align-items: center;
	}
	
	.aPic{
		width: 90%;
		height: 18%;
		display: flex;
		justify-content: center;
		margin-bottom: 0.3rem;
		align-items: center;
	}
	
	.aPic image{
		width: 100%;
		height: 100%;
		border-radius: 50%;
	}
	
	.func-item{
		width: 65%;
		height: 18%;
		display: flex;
		flex-direction: column;
		align-items: center;
		margin-top: 0.3rem;
	}
	
	.func-item text{
		margin-top: 0.1rem;
		font-size: 1rem;
		color: rgba(255, 255, 255, 0.8);
	}
	
	.icon-pic{
		width: 100%;
		height: 70%;
	}
	
	.icon-pic image{
		width: 100%;
		height: 100%;
	}
	
	/* 底部信息 */
	.bottom-info{
		width: 18rem;
		height:5rem;
		position: absolute;
		left: 0;
		bottom: 12%;
		display: flex;
		flex-direction: column;
		justify-content: center;
	}
	
	.aName{
		font-size: 1.2rem;
		display: flex;
		align-items: center;
		margin-left: 1rem;
		white-space: nowrap;
		text-overflow: ellipsis;
		width: 70%;
		color: rgba(255, 255, 255, 0.8);
	}
	
	.introduce{
		font-size: 0.9rem;
		display: flex;
		margin-left: 1rem;
		width: 95%;
		height: 50%;
		text-overflow: ellipsis;
		color: rgba(255, 255, 255, 0.8);
	}
	
	/* 播放按钮 */
	.play-icon{
		width: 20%;
		height: 10%;
		position: absolute;
		left: 42.5%;
		top: 38.5%;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	
	.play-icon image{
		width: 100%;
		height: 100%;
	}
</style>