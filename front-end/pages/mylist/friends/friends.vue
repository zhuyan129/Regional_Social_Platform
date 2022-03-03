<template>
	<view>
		<uni-indexed-list :options="friendslist" :showSelect="true" @click="bindClick"></uni-indexed-list>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				friendslist:[{
					"letter": "A",
					"data":[
						"angela",
						"安"
					]
				},{
					"letter": "B",
					"data":[
						"bulala",
						"baby"
					]
				}]
			}
		},
		methods: {
			
		}
	}
</script>

<style>

</style>
