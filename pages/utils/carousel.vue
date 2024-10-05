<template>
	<view class="carousel">
		<swiper class="swiper" indicator-dots autoplay circular interval="3000">
			<swiper-item v-for="(image,index) in images" :key="index">
				<view class="swiper-images">
					<image :src="image"></image>
				</view>
			</swiper-item>
		</swiper>
	</view>
</template>

<script setup>
	import {
		ref
	} from 'vue';
	
	const images = ref([
		"/static/utils/roll/shark.webp",
		"/static/utils/roll/cake.webp",
		"/static/utils/roll/cloth-nasa.webp",
		"/static/utils/roll/keyboard.webp",
		"/static/utils/roll/redmi.webp"
	
	]);
</script>

<style lang="scss" scoped>
	.swiper{
		width: 24rem;
		height: 15rem;
		margin: 0 auto;
		image{
			width: 90%;
			border-radius: 15rpx;
			margin: 0 auto;
		}
	}
	
	.swiper-images{
		display: flex;
		justify-content: center;
	}
</style>