<template>
    <div class="swiper-container app-banner">
        <div class="swiper-wrapper">
            <div class="swiper-slide "
                v-for = " banner in bannerbox "
                :key  = " banner.id "
            >
                <img :src="banner.image" alt="">
            </div>
        </div>
        <div class="swiper-pagination"></div>
    </div>
</template>
<script>

import Swiper from 'swiper'
import '../../../../node_modules/swiper/dist/css/swiper.min.css'

import Vue from 'vue'

export default {
    name: 'AppBanner',
    props:["banners"],
    data(){
        return{
            bannerbox:[]
        }
    },
    //https://wap.fruitday.com/v3/ad/homepage?type=2&lonlat=116.252423%2C40.11634&ad_code=110114
    watch:{
        banners(){
         
            this.bannerbox = this.banners[0].content; 
            Vue.nextTick(() => {
            
                new Swiper('.app-banner', {
                    autoplay:true,
                    loop:true,
                    pagination: {
                        el:'.swiper-pagination'
                    }
                })
            })
        }
    }
}
</script>
<style lang="scss" scoped>
    .swiper-wrapper{

        height: 1.6rem;
            img{
                width:100%;
            }
    }
</style>
<style type="text/css">
    .app-banner .swiper-pagination .swiper-pagination-bullet{
        width:0.08rem;
        height:0.04rem;
        background: #000;
        opacity:0.5;
        border-radius:0.03rem;
    }
    .app-banner .swiper-pagination .swiper-pagination-bullet-active{
        border-radius:50%;
        background: #ff7e05;
        width:0.09rem;
        height:0.09rem;
        border:1px solid #fff;
        margin-bottom:-0.02rem;
        opacity:1;
    }
    
</style>

