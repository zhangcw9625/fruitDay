<template>
	<div class="pop-com">
		<h3>人气推荐</h3>
		<div class="pop4">
			<div
				v-for="pop in pops"
				:key="pop.banner_ad_id"
				:pop="pop"
				class="img">
				<div class="img-left">
					<img :src= "pop.image">
				</div>
				<div class="img-right">
					<h4>{{pop.title}}</h4>
					<p>{{pop.subtitle}}</p>
					<div class="price">
						<span class="money">￥{{pop.price}}/<em>{{pop.volume}}</em></span>
						<i class="fa fa-plus-circle"></i>
					</div>
				</div>
			</div>
		</div>
		<div class="pop22">
			<div
				v-for="comm in comms"
				:key="comm.banner_ad_id"
				:comm="comm"
				class="img">
				<div class="img-left">
					<img :src= "comm.image">
				</div>
				<div class="img-right">
					<h4>{{comm.title}}</h4>
					<p>{{comm.subtitle}}</p>
					<div class="price">
						<span class="money">￥{{comm.price}}/<em>{{comm.volume}}</em></span>
						<i class="fa fa-plus-circle"></i>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script type="text/javascript">
	
	export default{
		name: "PopuComm",
		props: ["pcs"],
		data(){
			return {
				pops:[],
				comms: []
			}
		},
		watch:{
			pcs(){
				this.pops = this.pcs[11].content;
				this.comms = this.pcs[12].content;
			}
			
		}
	}
</script>

<style type="text/css" lang="scss" scoped>
	.pop-com{
		overflow:hidden;
		background:#fff;
		h3{
			height:0.64rem;
			line-height:0.64rem;
			text-align:center;
			color:#000;
			font-size:0.18rem;
		}
		.pop4,.pop22{
			overflow:hidden;
			.img{
				height:1.605rem;
				padding:0 0.12rem 0 0.25rem;
				overflow:hidden;
				.img-left{
					width:1.2rem;
					height:1.2rem;
					float:left;
					margin-top:0.20rem;
					img{
						width:100%;
						height:100%;
					}
				}
				.img-right{
					width:1.93rem;
					height:1.05rem;
					margin-left:0.25rem;
					float:left;
					margin-top:0.225rem;
					h4{
						font-size: 0.17rem;
						font-weight:normal;
						margin-bottom:5px;
						color:#3a3a3a;
						white-space: nowrap;
						overflow:hidden;
						text-overflow: ellipsis;
					}
					p{
						margin-bottom:0.37rem;
						color:#878787;
						white-space: nowrap;
						overflow:hidden;
						text-overflow: ellipsis;
					}
					.price{
						position:relative;
						.money{
							display:block;
							color:#ff8000;
							width:100%;
							font-size:0.16rem;
							em{
								font-size:0.12rem;
								font-style:normal;
							}
						}
						.fa-plus-circle{
							position: absolute;
						    top: 0;
						    right: 0;
						    width: .74rem;
						    height: .4rem;
						    text-align: right;
						    line-height: .35rem;
						    font-style: normal;
						   	
						}
						.fa-plus-circle:before{
							display: inline-block;
						    text-align: center;
						    font-size: .24rem;
						    color: #fff;
						    background-color: #ff8000;
						    width: .25rem;
						    height: .25rem;
						    line-height: .25rem;
						    border-radius: 50%;
						}
					}
				}
			}
		}
	}
</style>