<template>
	<div class="total">
		<mz-tab-bar>
			<div class="left">
				总价钱：  <span>{{totalInfo.price}} </span>
				总件数： <span>{{totalInfo.num}}</span>
			</div>
			<div class="right buy-btn">
				结算
			</div>
		</mz-tab-bar>
	</div>
</template>
<script>
	import {mapGetters} from 'vuex'
	export default {
		name: 'Total',
		computed: {
			...mapGetters(['totalInfo'])
		}
	}
</script>

<style lang="scss" scoped>

.total {
	position:fixed;
	left:0;
	bottom:0.53rem;
	width:100%;
	.mint-tabbar{
		height: 60px;
		display:flex;
		border-top:1px solid #ccc;
		justify-content: space-between;
		align-items:center;
		.left{
			padding: 10px;
			line-height: 40px;
			font-size:0.18rem;
		}
		.buy-btn{
			float:right;
			width: 1rem;
			height: 100%;
			line-height: 60px;
			background: #f60;
			color: #FFFFFF;
			text-align: center;
			font-size: 1.5em;
		}
	}
}
</style>