<template>
    <div class="home-movie-box">
        <div class="top">
            <div class="left" v-for= " film in films " :key = "film.banner_ad_id">
                <img :src="film.image" alt="">
            </div>
        </div>
        <div class="bottom" v-for=" da in datas" :key=" da.banner_ad_id ">
            <img :src="da.image" alt="">
        </div>                
    </div>

</template>
<script>
import Footer from './Footer'
export default {
  name: 'HomeFruitBox',
  props: ['HomeFruitBox'],
  data () {
      return {
          films: [],
          datas:[],
          page: 1
      }
  },
   //https://wap.fruitday.com/v3/ad/homepage?type=2&lonlat=116.252423%2C40.11634&ad_code=110114
   watch:{
       HomeFruitBox(){
           this.films = this.HomeFruitBox[2].content;
           this.datas =this.HomeFruitBox[4].content;
        }
   },
  components: {
      Footer
  }
}
</script>
<style lang="scss">
    .home-movie-box{
        margin-bottom: .1rem;
        background-color: #fff;
        .top{
            height: 1.16rem;
            .left{
            float: left;
            height: 85.7143px;
            border: 0;
            display: block;
            margin: 0.1rem  0  0.05rem 0.12rem;
            width:45%;
            img{
                height: 0.86rem;
                width: 100%;
            }
        }
        }
        .bottom{
            width: 100%;
            margin-top: 0.1rem;
            img{
                width: 100%;
                height: 1.6rem;
            }
        }
    }
</style>

