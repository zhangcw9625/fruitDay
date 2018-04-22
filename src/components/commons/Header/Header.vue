
<template>
	<header class="app-header">
        <div class="headr">
			<div class="position">
                <div class="arri-time">
                    <img :src="logo">
                </div>
				<div class="map">沙河镇</div>
				<i class="fa fa-caret-down"></i>
			</div>
			<i class="fa fa-search"></i>
        </div> 
	</header>
</template>

<script type="text/javascript">

	import Vue from 'vue'

    export default{
        name: 'AppHeader',
        data(){
        	return {
        		logo: 'https://huodongjd1.fruitday.com/sale/appxx/ci_20171025_1.png'
        	}
        }
    }
</script>


<style type="text/css" lang="scss" scoped>
	.app-header{
		position: fixed;
		left:0;
		top:0;
		right:0;
		width:100%;
	    background-color: #fff;
	    min-height:0.37rem;
	    overflow:hidden;
	    line-height:0.36rem;
	    border-bottom:0.04rem solid #ddd;
	    z-index:999;
		.headr{
			
			width:100%;
			background: rgba(101,160,50,0);
			z-index:9;
			display:bolck;
			.position{
				position:relative;
				margin-left:0.16rem;
				width:70%;
				color:#65a032;
				padding-right:0.16rem;
				.arri-time{
					float:left;
					margin-top:0.11rem;
					img{
						width:0.51rem;
						height:0.14rem;
						margin-right:0.05rem;
						border:none;
						display:inline-bolck;
					}
				}
				.map{
					width:auto;
					font-size:0.14rem;
					float:left;
				}
				.fa-caret-down{
					font-size:0.16rem;
					position: relative;
					left:3px;
					top:0.1rem;
					right:0;
					float:left;
				}
			}
			.fa-search{
				width:0.36rem;
				height:0.36rem;
				text-align: right;
				font-size: 0.18rem;
				color: #999;
				font-style:normal;
				position:absolute;
				right:0.1rem;
				top:0.1rem;
				font-weight:normal;
			}
		}
	}
</style>