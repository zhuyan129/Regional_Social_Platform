<template>
	<view class="progress_box">
		<view class="inner_box">
			<view class="progress_circle position_view">
				<view class="p_left">
					<view class="left_mask" :style="{transform: 'rotate('+rotate2+'deg)'}"></view>
				</view>
				<view class="p_right">
					<view class="right_mask" :style="{transform: 'rotate('+rotate1+'deg)'}"></view>
				</view>
			</view>
			<view class="mask_circle position_view"></view>
			<view class="circle_img position_view">
				<view class="box">
					<view class="huatong">
						<image src="./image/huatong.png" mode="widthFix"></image>
					</view>
					<view class="time">{{time}}s</view>
				</view>
			</view>
			<view class="tip position_view">
				<view class="tip_top">
					<view class="tip_bottom">向上滑动取消录音</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				rotate1:180,
				rotate2:180,
				rotate1Inter:null,
				rotate2Inter:null,
				time:0,
				timer:null,
			};
		},
		props:["duration"], //最大录音长度
		mounted(){
			this.time = this.duration
			// 进度
			let progress = -180/(this.duration/2)*(50/1000)   
			this.rotate2Inter = setInterval(()=>{
					 this.rotate2=this.rotate2+progress
					 if( this.rotate2 <= 0){
						 this.rotate2 = 0
						 clearInterval(this.rotate2Inter)
						 this.rotate1Inter = setInterval(()=>{
						 		 this.rotate1=this.rotate1+progress
						 		 if( this.rotate1 <= 0){
									 this.rotate1 = 0
						 			 clearInterval(this.rotate1Inter)	 
						 		 }
						 },50)
					 }
			},50)
			this.timer=setInterval(()=>{
				this.time-=1
				if(this.time==this.duration){
					clearInterval(this.timer)
				}
			},1000)
		}
	}
</script>

<style lang="scss" scoped>
.progress_box {
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	z-index: 999;
	width: 100vw;
	height: 100vh;
	background: rgba(0, 0, 0, 0.7);
	.inner_box{
		height: 100%;
		width: 100%;
		position: relative;
		.position_view{
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translateX(-50%) translateY(-50%);
		}
		.main_circle {
			height: 400rpx;
			width: 400rpx;
			background: rgb(175, 175, 175);
			border-radius: 50%;
			z-index: 999;
		}
		.progress_circle {
			position: absolute;
			height: 360rpx;
			width: 360rpx;
			border-radius: 50%;
			z-index: 1000;
			overflow: hidden;
			display: flex;
			background: rgb(216, 216, 216);
			.p_left{
				width: 180rpx;
				height: 360rpx;
				background: rgb(216, 216, 216);
				position: relative;
				overflow: hidden;
				.left_mask{
					// top right bottom left
					position: absolute;
					top: 0;
					left: 0rpx;
					width: 360rpx;
					height: 360rpx;
					border-radius: 50%;
					clip:rect(0rpx, 360rpx, 360rpx,180rpx);
					background: #06e01f;
				}
			}
			.p_right{
				width: 180rpx;
				height: 360rpx;
				background: rgb(216, 216, 216);
				position: relative;
				overflow: hidden;
				.right_mask{
					position: absolute;
					top: 0;
					left: -180rpx;
					width: 360rpx;
					height: 360rpx;
					border-radius: 50%;
					clip:rect(0rpx, 180rpx, 360rpx, 0rpx);
					background: #06e01f;
				}
			}
		}
		.mask_circle {
			height: 320rpx;
			width: 320rpx;
			background: rgb(255, 255, 255);
			border-radius: 50%;
			z-index: 1001;
		}
		.circle_img {
			height: 300rpx;
			width: 300rpx;
			// background: rgb(130, 255, 34);
			border-radius: 50%;
			z-index: 1002;
			display: flex;
			justify-content: center;
			align-items: center;
			.box{
				image{
					z-index: 1002;
					width: 120rpx;
					height: auto;
				}
				.time{
					margin-top: 10rpx;
					width: 100%;
					text-align: center;
					color: #06e01f ;
				}
			}
			
		}
		.tip{
			height:360rpx;
			width: 360rpx;
			.tip_top{
				height:360rpx;
				width: 360rpx;
				position: relative;
				.tip_bottom{
					position: absolute;
					bottom: -200rpx;
					width: 360rpx;
					text-align: center;
					left: 0rpx;
					color: #eeeeee;
					z-index: 1004;
				}
			}
		}
	}
	
}
</style>
