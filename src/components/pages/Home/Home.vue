<template>
	<div class="home">

		<app-header></app-header>
		<app-banner :banners="banners"></app-banner>
        <fruit-box :HomeFruitBox ="HomeFruitBox"></fruit-box>
		
		<fruit-banner
			v-for="type in types"
			:key = "type.id"
			:type="type"
			:sours="srcs"
		></fruit-banner>

		<popu-comm :pcs="srcs"></popu-comm>

	</div>
</template>

<script type="text/javascript">

	import AppHeader from '../../commons/Header/Header'

	import AppBanner from './Banner'

	import FruitBox from './FruitBox'
	
	import FruitBanner from './FruitBanner'
	import PopuComm from './PopuComm'

	export default {
		name: 'Home',
		data(){
			return {
				banners:[],
          		HomeFruitBox:[],

				srcs: [],
				types:[
					{id:1, title: "果园热卖", url_type: "remai"},
					{id:2, title: "果园精选", url_type: "jingxuan"}
				]
			}
		},
		components: {
			FruitBanner,PopuComm,AppBanner, FruitBox, AppHeader
		},
		methods: {
			getSrc(){
				this.$http('fruit/v3/ad/homepage',{
					params: {type:'2',lonlat:'116.25156%2C40.11619',ad_code:'110114'}
				}).then((res)=>{
					this.srcs = res.data.data.banner.mainBanners;

					this.banners = res.data.data.banner.mainBanners;
            		this.HomeFruitBox = res.data.data.banner.mainBanners;
				})
			}
		},
		created(){
			this.getSrc();
		 }
	}
</script>

<style type="text/css" lang="scss" scoped>
	.home{
		overflow:hidden;
		padding:0.4rem 0 0.52rem;
	}
</style>