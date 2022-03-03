<template>
	<view class="messages">
		<!-- <view class="single" v-for="item in messages" >
			<image class="sender" src="item.url" mode="widthFix"></image>
			<view class="sendtext">{{item}}</view>
		</view> -->
		
		<view class="messagelist">
			<scroll-view  scroll-y="true" >
				<view class="messagebox">
					<!-- 对方发送消息 -->
					<view class="theirmessagebox" v-for="item in messages">
						<view class="sender">
							<image class="senderimg" src="../../static/backimg.jpg" mode=""></image>
						</view>
						<view class="sendtext">
							<text class="texts">你好呀，一起玩玩玩玩玩玩玩玩玩玩玩玩玩玩玩玩玩玩玩玩玩玩玩玩玩玩耍吗</text>
						</view>
					</view>
					<!-- 自己发出消息 -->
					<view class="mymessagebox" v-for="item in messages">
						<view class="space"></view>
						<view class="sender">
							<image class="senderimg" src="../../static/backimg.jpg" mode=""></image>
						</view>
						<view class="sendtext">
							<text class="texts">好呀好呀</text>
						</view>
					</view>
				</view>
			</scroll-view>
		</view>
		
		<view class="uni-common-mt" >
			<view class="send-form">
				<input class="content" :adjust-position="true" type="text" placeholder=" 请输入信息"  v-model="my_say_text"></input>
				<button class="send" @click="to_send" type="default">
					<view class="fa">发送</view>
				</button>
			</view>
		</view>
	</view>	
</template>

<script>
	export default {
		data() {
			return {
				messages: [1,2,3,4,5,6]
			}
		}
	}
</script>

<style>
	/* .uni-common-mt{
			
		z-index: 2;
		} */
	.messages{
		background: #EBEDEF;
		display: flex;
		flex-direction: column;
		height: 100%;
	}
	.messagelist{
		padding-bottom: calc(var(--window-bottom) + 50px);
	}
	.uni-common-mt{
		background: #F4F6F6;
		position: fixed;
		width: 100%;
		height: 110rpx;
		bottom: 0;
	}
	.send-form{
		display: flex;
		width: 100%;
		height: 80rpx;
		position: fixed;
		bottom: 20rpx;
		text-align: center;	
	}
	.content{
		background: #FFFFFF;
		margin-left: 15rpx;
		width:75%;
		height: 100%;
		z-index: 11;
		border-radius: 10rpx;
	}
	.send{
		width: 20%;
		height: 100%;
		margin-right: 10rpx;
		color: #85C1E9;
		background-color: #85C1E9;
	}
	.fa{
		font-size: 30rpx;
		margin-bottom: 15rpx;
	}
	.theirmessagebox{
		display: flex;
		width: 80%;
		margin: 20rpx 120rpx 20rpx 15rpx;
		align-items: flex-start;
	}
	.mymessagebox{
		width: 80%;
		display: flex;
		flex-direction: row-reverse;
		/* width: 80%; */
		margin: 20rpx 15rpx 20rpx 120rpx;
		align-items: flex-start;
	}
	.sender{
		height: 100rpx;	
	}
	.senderimg{
		width:100rpx;
		height: 100rpx;
		border-radius: 50%;
	}
	.sendtext{
		display: flex;
		align-items: center;
		background: #FFFFFF;
		border-radius: 15rpx;
		height: 90%;
		margin-top: 5rpx;
		margin-left: 15rpx;
		margin-right: 15rpx;
	}
	.texts{
		font-size: 35rpx;
		letter-spacing: 1rpx;
		padding: 15rpx;
	}
</style>
