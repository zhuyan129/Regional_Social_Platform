<template>
	<view>
		<uni-list>
			<uni-list-chat
				:avatar-circle="true"
                title="张三"
                avatar="https://vkceyugu.cdn.bspapp.com/VKCEYUGU-dc-site/460d46d0-4fcc-11eb-8ff1-d5dcf8779628.png"
                note="你好呀"
                time="1分钟前"
                badge-positon="left"
                badge-text="dot"
				:badge-text="2"
				:clickable="true"
				@click="onClick"
				></uni-list-chat>
				<uni-list-chat
					:avatar-circle="true"
				    title="李四"
				    avatar="https://vkceyugu.cdn.bspapp.com/VKCEYUGU-dc-site/460d46d0-4fcc-11eb-8ff1-d5dcf8779628.png"
				    note="稍后"
				    time="45分钟前"
				    badge-positon="left"
				    badge-text="dot"
					:badge-text="2"
					:clickable="true"
					@click="onClick"
					></uni-list-chat>
		</uni-list>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			onClick() {
				uni.navigateTo({
					url:'/pages/chat/chat'
				});
		}
	},
	}
</script>

<style>

</style>