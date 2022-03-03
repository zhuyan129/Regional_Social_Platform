<template>
	<view>
		<uni-list>
			<!-- <view class="stars">
				<view class="stars_items" v-for="item in goods" :key="item.loc_id" @click="navItemClick(item.path)">
					<uni-list-item :show-extra-icon="true"  :title="item.text">
						<view :class="item.icon"></view>
					</uni-list-item>
					</view>
				</view>
			</view> -->	
			<uni-list-item :show-extra-icon="true" :extra-icon="extraIcon" title="北京大学软件与微电子学院" note="大兴区金苑路24号"></uni-list-item>
			<uni-list-item :show-extra-icon="true" :extra-icon="extraIcon" title="冬奥会食堂"></uni-list-item>
			<uni-list-item :show-extra-icon="true" :extra-icon="extraIcon" title="香山公园"></uni-list-item>
			<uni-list-item :show-extra-icon="true" :extra-icon="extraIcon" title="火星"></uni-list-item>
		</uni-list>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				extraIcon:{
					type: 'location'
				}
				
			}
		},
		methods: {
			
		}
	}
</script>

<style>

</style>
