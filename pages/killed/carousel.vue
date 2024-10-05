<template>
	<view class="carousel" @touchstart="handleTouchStart" @touchmove="handleTouchMove" @touchend="handleTouchEnd">
		<view class="carousel-images">
			<image v-for="(image, index) in images" :key="index" :src="image" v-show="index === curIndex" />
		</view>
		<view class="indicators">
			<span v-for="(image, index) in images" :key="index" @click="goToIndex(index)"
				:class="{ active: index === curIndex }">
			</span>
		</view>
	</view>
</template>

<script setup>
	import {
		ref,
		onMounted,
		onUnmounted
	} from 'vue';

	const curIndex = ref(0);
	const images = ref([
		"/static/utils/roll/shark.webp",
		"/static/utils/roll/cake.webp",
		"/static/utils/roll/cloth-nasa.webp",
		"/static/utils/roll/keyboard.webp",
		"/static/utils/roll/redmi.webp"

	]);

	// 滑动切换
	const startX = ref(0);
	const endX = ref(0);

	const handleTouchStart = (event) => {
		startX.value = event.touches[0].clientX; // 获取开始触摸的 X 坐标
	};

	const handleTouchMove = (event) => {
		endX.value = event.touches[0].clientX; // 获取移动中的 X 坐标
	};

	const handleTouchEnd = () => {
		if (startX.value - endX.value > 50) {
			// 向左滑动，切换到下一张图片
			next();
		} else if (endX.value - startX.value > 50) {
			// 向右滑动，切换到上一张图片
			prev();
		}
	};

	const next = () => {
		curIndex.value = (curIndex.value + 1) % images.value.length;
	};

	const prev = () => {
		curIndex.value = (curIndex.value - 1 + images.value.length) % images.value.length;
	};

	const goToIndex = (index) => {
		curIndex.value = index;
	};

	// 自动切换
	const interval = ref(null);

	onMounted(() => {
		interval.value = setInterval(() => {
			next();
		}, 4000); // 每4秒切换一次

		// 清除定时器
		onUnmounted(() => {
			clearInterval(interval.value);
		});
	});
</script>

<style scoped>
	.carousel {
		position: relative;
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.carousel-images {
		display: flex;
		overflow: hidden;
		width: 80%;
		position: relative;
	}

	.carousel-images image {
		width: 100%;
		height: 12.5rem;
	}
	
	.carousel-images image[v-show] {
		display: block;
		/* 只显示当前的图片 */
	}

	.indicators {
		display: flex;
		justify-content: center;
		margin-top: 10rpx;
	}

	.indicators span {
		display: inline-block;
		width: 10rpx;
		height: 10rpx;
		border-radius: 50%;
		background-color: #ccc;
		margin: 0 5rpx;
		cursor: pointer;
	}

	.indicators .active {
		background-color: #333;
		/* 当前图片的样式 */
	}
</style>