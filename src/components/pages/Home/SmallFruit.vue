<template> 
    <div class="swiper-container fruit-list">
      <div class="swiper-wrapper" 
        v-if="type.url_type === 'remai' "
        ><div class="swiper-slide fruit-squire"
            v-for="reso in resos"
            :key="reso.banner_ad_id"
            :reso = "reso"
            >
            <div class="sqimg">
                <img :src="reso.image" alt="">
            </div>
            <h4>{{reso.title}}</h4>
            <div class="price">
                <span class="money">￥{{reso.price}}/<em>{{reso.volume}}</em></span>
                <i class="fa fa-plus-circle"></i>
            </div>
          </div>
        </div>
        <div v-else class="swiper-wrapper">
          <div class="swiper-slide fruit-squire"
            v-for="jxso in jxsos"
            :key="jxso.banner_ad_id"
            :reso = "jxso"
          >
          <div class="sqimg">
                <img :src="jxso.image" alt="">
            </div>
            <h4>{{jxso.title}}</h4>
            <div class="price">
                <span class="money">￥{{jxso.price}}/<em>{{jxso.volume}}</em></span>
                <i class="fa fa-plus-circle"></i>
            </div></div>
        </div>

        <div class="swiper-pagination spans"></div>
    </div>

</template>

<script>

import Swiper from 'swiper'
import '../../../../node_modules/swiper/dist/css/swiper.min.css'
import Vue from 'vue'

export default {
    name: 'SmallFruit',
    props: ["sour","type"],
    data(){
        return {
            resos:[],
            jxsos:[]
        }
    },
    watch:{
        sour(){
            this.resos = this.sour[7].content;
            this.jxsos = this.sour[9].content;
            Vue.nextTick(()=>{
                var swiper = new Swiper('.fruit-list', {
                    slidesPerView: 3,
                    spaceBetween: 30,
                    freeMode: true,
                    pagination: {
                        el: '.swiper-pagination',
                        clickable: true,
                    }
                });
            })
        }
    }
}
</script>

<style type="text/css" lang="scss" scoped>
    .fruit-list{
        height:1.7rem;
        .fruit-squire{
            width:1.12rem;
            height:1.7rem;
            .sqimg{
                width:100%;
                height:0.96rem;
                img{
                    width:100%;
                    height:100%;
                }
            }
            h4{
                font-size:0.14rem;
                margin-top:0.1rem;
                text-align:center;
                white-space:nowrap;
                text-overflow:ellipsis;
                overflow:hidden;
            }
            .price{
                position:relative;
                .money{
                    display:block;
                    color:#ff8000;
                    width:100%;
                    font-size:0.14rem;
                    text-indent:0.05rem;
                    em{
                        font-size:0.14rem;
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
                    font-style: normal;
                    
                }
                .fa-plus-circle:before{
                    display: inline-block;
                    text-align: center;
                    font-size: .14rem;
                    color: #fff;
                    background-color: #ff8000;
                    width: .16rem;
                    height: .16rem;
                    line-height: .16rem;
                    border-radius: 50%;
                    margin-top:0.02rem;
                }
            }
        }
        .spans{
            height:0;
            overflow:hidden;
        }
    }
</style>
