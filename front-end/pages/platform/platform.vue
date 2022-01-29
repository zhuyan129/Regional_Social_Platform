<template>
	<view class="circle">
		<!-- 轮播图 -->
		<swiper :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000" circular="">
			<swiper-item v-for="item in swipers" :key="item.goods_id">
				<image :src="item.image_src" mode="widthFix"></image>
			</swiper-item>
		</swiper>
		<!-- 导航区域 -->
		<view class="nav">
			<view class="nav_item" v-for="(item,index) in navs" :key="index" @click="navItemClick(item.path)">
				<view :class="item.icon"></view>
				<text>{{item.title}}</text>
			</view>
		</view>
		<!-- 推荐笔记部分 -->
		<view class="re_articles">
			<!-- 筛选和排序部分 -->
			<view class="select">
				<!-- <sl-filter :themeColor="themeColor" :menuList="menuList" @result="result"></sl-filter> -->
			</view>
			<!-- 推荐内容部分 -->
			<view class="articles">
				<view class="articles_items" v-for="item in goods" :key="item.goods_id">
					<image :src="item.goods_big_logo" mode="widthFix"></image>
					<view class="ar_tit">
						<text>（文章标题）{{item.goods_name}}</text>
					</view>
					<view class="ar_author">
						<!-- 加个头像 -->
						<image :src="item.goods_small_logo" mode="aspectFit"></image>
						<text>小明</text>
						<!-- 加点赞 -->
					</view>
					
				</view>
			</view>
		</view>
		<!-- 悬浮按钮发表动态 -->
		<view class="floattab">
			<uni-fab
				:pattern="pattern"
				:content="content"
				horizontal="right"
				vertical="bottom"
				direction="horizontal"
				:popMenu="true"
				@trigger="trigger"
				@fabClick="fabClick"
			/>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				swipers: [],
				goods: [],
				navs: [
					{
						icon: 'iconfont icon-wenchuang',
						title: '文创',
						path: '/pages/activity/wenchuang/wenchuang'
					},
					{
						icon: 'iconfont iconfont icon-zixun',
						title: '景区资讯',
						path: '/pages/activity/zixun/zixun'
					},
					{
						icon: 'iconfont icon-jingquS',
						title: '景点介绍',
						path: '/pages/activity/jingqu/jingqu'
					},
					{
						icon: 'iconfont icon-pengyouquan',
						title: '朋友圈',
						path: '/pages/activity/pengyouquan/pengyouquan'
					}
				],
				themeColor:'#000000',
				filterResult:'',
				pattern: {
					color: 'gray',
					backgroundColor: '#FFFFFF',
					selectedColor: '#007AFF',
					buttonColor:'orange'
				},
				content: [
					{
						iconPath: '/static/comment.png',
						selectedIconPath: '/static/comment.png',
						text: '写点什么',
						active: false
					}
				]
			}
		},
		onLoad() {
			this.getSwipers()
			this.getArticles()
		},
		methods:{
			//获取轮播图数据
			async getSwipers() {
				const res = await this.$myRequest({
					url: '/home/swiperdata'//url后面的部分
				})
				this.swipers = res.data.message
			},
			//获取最新动态
			async getArticles() {
				const res = await this.$myRequest({
					url: '/goods/search'
				})
				this.goods = res.data.message.goods
			},
			//导航点击处理函数
			navItemClick (url){
				uni.navigateTo({
					url
				})
			},
			trigger(e) {
				uni.navigateTo({
					url:'/pages/activity/xiedongtai/xiedongtai'
				});
			},
		},
		components: {
		        }
	}
</script>
<style lang=scss>
	@import '../../static/iconfont/iconfont.css';
	.circle{
		swiper{
			width:750rpx;
			height:380rpx;
			image{
				height: 100%;
				width:100%;
			}
		}
		.nav {
			display:flex;
			.nav_item {
				width: 25%;
				text-align: center;
				padding-bottom: 10rpx;
				view{
					width: 120rpx;
					height: 120rpx;
					background: $app-color;
					border-radius: 60rpx;
					margin: 10px auto;
					line-height: 120rpx;
					color:#ffffff;
					font-size: 60rpx;
				}
				.icon-pengyouquan{
					font-size: 80rpx;
				}
				text{
					font-size:25rpx;
					color: $app-color;
				}
			}
		}
		.re_articles {
			background: #EEEEEE;
			.articles {
				padding: 0 15rpx;
				display: flex;
				flex-wrap: wrap;
				justify-content: space-between;
				.articles_items {
					background: #FFFFFF;
					width: 355rpx;
					margin: 10rpx 0;
					box-sizing: border-box;
					image{
						width: 90%;
						height: 150rpx;
						display: block;
						margin: auto;
					}
					.ar_tit{
						font-size: 30rpx;
						font-weight: bold;
					}
					.ar_author{
						font-size: 20rpx;
						color:#888888;
						line-height: 40rpx;
						padding-bottom: 15rpx;
						padding-top: 10rpx;
						image{
							width:40%;
							height: 40rpx;
							margin:0;
						}
					}
				}
				
			}
		}
	}
	
</style>
