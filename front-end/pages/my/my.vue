<template>
	<view>
		<view class="myinfo">
			<!-- 背景图片 -->
			<view class="backgroundimgbox">
				<image class="background-img" src="../../static/backimg.jpg" mode=""></image>
			</view>
			<!-- 个人信息 -->
			<view class="info">
				<view class="personal_img">
					<image src="/static/head.jpg" class="head" style="height: 100rpx;width: 100rpx;" mode=""></image>
				</view>
				<view class="personal_info">
					<view class="name">
						<text>traveler</text>
					</view>
					<view class="myfriends">
						<text class="mr-3 ">粉丝 1</text>
						<text>关注 0</text>
					</view>
				</view>
				
			</view>
			<view class="introduce">
				<view class="label">
					北京大学
				</view>
				<view class="label">
					北京
				</view>
			</view>
			<view class="write">
				<text>简介：介绍一下自己，让别人更不了解你</text>
			</view>
		</view> 
				
		<!-- 三个小列表 -->
		<view class="mylistbox">
			<view class="mylist">
				<view class="mylist_item" v-for="(item,index) in mylists" :key="index" @click="navItemClick(item.path)">
					<uni-list-item :show-extra-icon="true"  :title="item.title">
						<view :class="item.icon"></view>
						<!-- <text slot="myicon" :class="item.icon"></text> -->
					</uni-list-item>
				</view>
			</view>	
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				mylists: [
					{
						icon: 'iconfont icon-wenchuang',
						title: '收藏',
						path: '/pages/mylist/star/star'
					},
					{
						icon: 'iconfont iconfont icon-zixun',
						title: '足迹',
						path: '/pages/mylist/footprint/footprint'
					},
					{
						icon: 'heart',
						title: '设置',
						path: '/pages/mylist/footprint/footprint'
					}
					// ,
					// {
					// 	icon: 'iconfont icon-jingquS',
					// 	title: '好友',
					// 	path: '/pages/mylist/friends/friends'
					// }
				],
			};
		},
		onLoad() {
			
		},
		methods:{
			navItemClick (url){
				uni.navigateTo({
					url
				})
			}
		}
	}
</script>

<style lang="scss">
	.myinfo{
		display: flex;
		flex-direction: column;
		width: 100%;
		height: 325rpx;
		background: #585eaa;
		.backgroundimgbox{
			width: 100%;
			z-index: 19;
			.background-img{
				width: 100%;
			}
		}
		
		.info {
			.personal_img{
				 margin: -50rpx 0 0 30rpx;
				.head{
					width:100rpx;
					height: 100rpx;
					border-radius: 50%;
				}
			}
			display: flex;
			z-index: 20;
			width: 100%;
			position: absolute;
			top: 200rpx;
			.personal_info{
				flex-direction: column;
				margin: -60rpx 0 0 30rpx;
				.name{
					font-size:50rpx;
					color: #FFFFFF;
					line-height: 70rpx;
				}
				.myfriends{
					font-size:35rpx;
					color: #FFFFFF;
					line-height: 50rpx;
				}
			}
		}
		.introduce{
			z-index: 20;
			width: 100%;
			height: 50rpx;
			line-height: 30rpx;
			position: absolute;
			top: 280rpx;
			color: #EEEEEE;
			margin-left: 30rpx;
			.label{
				height: 30rpx;
				padding: 0 5rpx;
				line-height: 30rpx;
				font-size: 25rpx;
				background: #444444;
				color: #999999;
				float: left;
				border-radius: 5rpx;
				margin-right: 20rpx;
			}
		}
		.write{
			z-index: 20;
			width: 100%;
			position: absolute;
			top: 320rpx;
			margin-left: 30rpx;
			height: 30rpx;
			// padding: 0 5rpx;
			// line-height: 30rpx;
			font-size: 25rpx;
			color: #EEEEEE;
		}
	}
	.mylistbox{
		position: absolute;
		top: 360rpx;
		background: #FFFFFF;
		z-index: 23;
		width: 100%;
		border-radius: 20rpx;
		.mylist{
			margin-top: 20rpx;
		}
	}
// flex px-2 py-3 align-center
</style>
