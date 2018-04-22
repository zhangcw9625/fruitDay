<template>
  <div class="not-found page">
      <div class="nav">
        <div class="back">
          <i @click="back" class="fa fa-chevron-left" aria-hidden="true"></i>
        </div>
        <div class="text">果园优选</div>
        <div class="bj" href="">
          <i class="fa fa-search" aria-hidden="true"></i>
        </div>
      </div>
      <div class="nav-top"> 
        <div class="img" v-for="friut in fruitRegion" :key="friut.id">
          <div class="img-left">
            <img :src= "friut.bphoto">
          </div>
          <div class="img-right">
            <h4>{{friut.product_name}}</h4>
            <p>{{friut.product_desc}}</p>
            <div class="price">
              <span class="money">￥{{friut.price}}/<em>{{friut.volume}}</em></span>
              <i @click="addGoodInCar(friut)" class="fa fa-plus-circle"></i>
            </div>
          </div>
			  </div>     
      </div>
  </div>
</template>
<script>
import {mapActions} from "vuex"
export default {
  name: 'XQ',
  data(){
    return{
       fruitRegion:[]
    }
  },
  methods:{
    back(){
      history.back();
    },
    ...mapActions(['addGoodInCar'])
  },
 // https://wap.fruitday.com/v3/product/sub_category_list?
 //store_id_list=3&class2_id=310&class3_id=319&sort_type=1&tms_region_type=1
 mounted() {
     this.$http.get( '/fruit/v3/product/sub_category_list',{
        params:{
          store_id_list:"3",
          class2_id:"310",
          class3_id:"319",
          sort_type:"1",
          tms_region_type:"1"
          }
        }).then (res => {
          // console.log(res);
           this.fruitRegion = res.data.data.productGroup;
        })
 }
}
</script>

<style lang="scss" scoped>
    .page{
      .nav-top{
        padding-bottom:0.47rem;
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
       
        .nav{
          color:#75a739;
          height: .45rem;
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          background: rgba(248,248,248,.95);
          border-bottom: .01rem solid #d8d8d8;
      .back{
        display: inline-block;
        i{
          width: .4rem;
          color: #75a739;
          display: inline-block;
          font-size: .22rem;
          text-align: center;
          padding-left: 0.07rem;
        }
      }
      .text{
          display: inline-block;
          text-align: center;
          font-size: .17rem;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          width: 2.4rem;
          margin-top: 0.1rem;
          font-weight: normal;
      }
      .bj{
          height: 0.43rem;
          text-align:right;
          font-size: 0.14rem;
          display: inline-block;
          float: right;
          line-height: 0.43rem;
          margin-right: 0.2rem;
      }
    }
    }
</style>