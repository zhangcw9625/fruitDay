<template>
	<div class="fruit-banner">
		<div class="remai" v-if=" type.url_type === 'remai' ">
			<h3>{{type.title}}
			<i class="fa fa-play"></i>
			</h3>
			<div class="img">
				<div class="img-left">
					<img :src= "fsors.image">
				</div>
				<div class="img-right">
					<h4>{{fsors.title}}</h4>
					<p>{{fsors.subtitle}}</p>
					<div class="price">
						<span class="money">￥{{fsors.price}}/<em>{{fsors.volume}}</em></span>
						<i class="fa fa-plus-circle"></i>
					</div>
				</div>
			</div>
		</div>
		<div v-else class="jingxuan">
			<h3>{{type.title}}</h3>
			<div class="imgs">
				<img :src="imrs.image">
			</div>
		</div>
		<small-fruit :sour="sours" :type="type"></small-fruit>	
	</div>
</template>

<script type="text/javascript">
	import SmallFruit from "./SmallFruit"
	export default {
		name: 'FruitBanner',
		props:["type","sours"],
		data(){
			return {
				fsors: [],
				imrs:[]
			}
		},
		components:{
			SmallFruit
		},
		watch: {
			sours(){
				this.fsors = this.sours[6].content[0];
				this.imrs = this.sours[9].content[0];
			}
		}
	}
</script>

<style type="text/css" lang="scss" scoped>
	
	.fruit-banner{
		background:#fff;
		overflow:hidden;
		.remai,.jingxuan{
			h3{
				height:0.64rem;
				line-height:0.64rem;
				text-align:center;
				color:#000;
				font-size:0.17rem;
				.fa-play{
					font-size:0.12rem;
					font-weight:normal;
					margin:0 0 0.02rem 0.05rem;
				}
			}
			.img,.imgs{
				height:1.605rem;
				padding:0 0.12rem 0 0.25rem;
				img{
					width:100%;
					height:100%;
				}
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

