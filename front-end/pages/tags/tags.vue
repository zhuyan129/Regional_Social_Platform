<template>
	<view class="content">
		<view class="container1">
		  <view>文化</view>
		  <view>历史</view>
		  <view>美术</view>
		</view>
	</view>
</template>

<script>
	
</script>

<style lang="scss">
	/* pages/list/list.wxss */
	.container1 view{
	  width: 150px;
	  height: 100px;
	  text-align: center;
	  line-height: 100px;
	  margin: 10px;
	  padding: 10px;
	}
	
	.container1 view:nth-child(1){
	  background-color: lightgreen;
	}
	.container1 view:nth-child(2){
	  background-color: lightskyblue;
	}
	.container1 view:nth-child(3){
	  background-color: lightpink;
	}
</style>
