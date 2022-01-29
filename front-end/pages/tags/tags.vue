<template>
	<view class="content">
		<dragBall 	class="content_" :onInit='onInit' :colse='colse' @click_='click_'
					:style="'transform:translateX('+ x +'px)'"></dragBall>
	</view>
</template>

<script>
	import dragBall from '../../components/drag-ball/drag-ball.vue';
	export default {
		components:{dragBall},
		data() {
			return {
				onInit:	[{"x":79.45049232358554,"y":123.96125634387865,"radius":30,"color":["#787878","'#25AEBF'"],"colse":false,"size":"10","floating":[0,false],"name":"高富帅"},
				{"x":198.76606872737423,"y":79.28588367513791,"radius":30,"color":["#787878","#25AEBF"],"colse":false,"size":"10","floating":[0,false],"name":"琼瑶"},
				{"x":290.5796037054993,"y":108.66399668264214,"radius":40,"color":["#787878","#25AEBF"],"colse":false,"size":"15","floating":[0,false],"name":"选择困难症"},
				{"x":152.08387466634375,"y":132.84566053159986,"radius":40,"color":["#787878","#25AEBF"],"colse":false,"size":"15","floating":[0,false],"name":"背包客"},
				{"x":222.67202922307413,"y":134.93094592803268,"radius":30,"color":["#787878","#25AEBF"],"colse":false,"size":"10","floating":[0,false],"name":"非洲酋长"},
				{"x":287.6493903164786,"y":188.97865661799298,"radius":40,"color":["#787878","#25AEBF"],"colse":false,"size":"15","floating":[0,false],"name":"轻音乐"},
				{"x":107.73067038886846,"y":187.2797271941687,"radius":30,"color":["#787878","#25AEBF"],"colse":false,"size":"10","floating":[0,false],"name":"烘焙"}],
				colse:false,
				x:320
			}
		},
		onLoad() {
			
		},
		methods: {
			click(){this.colse=true,this.x=0;},
			click_(index){
				
			}
		}
	}
</script>

<style lang="scss">
	page{width: 100%;height: 100%;}
	.content_ {width: 100%;height: 90%;padding-top: 10%;transition: .5s;}
	.content {width: 100%;height: 90%;padding-top: 10%;}
</style>
