<template>
	<view>
		<uni-list>
			<!-- <view class="chat_persons" v-for="person in persons" :key="person.id">
				<uni-list-chat
					:avatar-circle="true"
				    :title={{person.name}}
				    :avatar="person.headpic"
				    :note={{person.talk}}
				    :time={{person.time}}
				    badge-positon="left"
				    badge-text="dot"
					:badge-text={{person.num}}
					:clickable="true"
					@click="onClick"
					></uni-list-chat>
			</view> -->
			
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
				// persons: []
			}
		},
		onLoad() {
			this.getPersons()
		},
		methods: {
			onClick() {
				uni.navigateTo({
					url:'/pages/chat/chat'
				});
		},
			// async getPersons() {
			// 	const res = await this.$myRequest({
			// 		url: ''
			// 	})
			// 	this.persons = res.data.message.persons
			// }
	},
	}
</script>

<style>

</style>