<template>
  <div class="page">
      <div class="search">
        <div>
          <i class="fa fa-search" aria-hidden="true">
            <span>   奇异果</span>
          </i>
        </div>
      </div>
      <div class="fruitday-category">
        <ul class="tab">
          <li @click="setf(classify.id)" :class= " [(classify.id===fenlei)?'active':''] " v-for=" classify in classifys " :key = "classify.id">
           {{classify.name}}
          </li>
        </ul>
      </div>
      <div class="items">
        <div class="item">
          <div class="top">
            <h3>{{fenleiclass2.name}}</h3>
          <span href="">全部   
              <i class="fa fa-chevron-right" aria-hidden="true"></i>
          </span>
          </div>
          <router-link to="/xq">
            <dl v-for="fenleis in fenleiclass3" :key="fenleis.id">
            <dt>
              <img :src="fenleis.class_photo" alt="">
            </dt>
            <dd>{{fenleis.name}}</dd>
          </dl>
          </router-link>
        </div>  
      </div>
  </div>
</template>

<script>
export default {
  name: 'Classify',
  data(){
    return{
      classifys:[],
      fenlei:" ",
      fenleiclass3:[],
      fenleiclass2:{}
    }
  },
  methods:{
    setf(id){
      this.fenlei = id;  
    }
  },
  //https://wap.fruitday.com/v3/product/category_list?store_id_list=3
 mounted(){
   this.$http.get("/fruit/v3/product/category_list?",{
     params:{store_id_list:"3"}
   }).then(res=>{
    this.classifys = res.data.data.classOneGroup;
    this.fenlei = res.data.data.classId;
   })
   
 },
 watch:{
   fenlei(){
      this.$http.get("/fruit/v3/product/category_list?",{
      params:{store_id_list:"3",class_id:this.fenlei}
    }).then(res=>{
      this.fenleiclass3 = res.data.data.childrenList[0].class3Group;
      this.fenleiclass2 = res.data.data.childrenList[0].class2Name;
    })
   }
 }
}
</script>

<style lang="scss" scoped>
  .page{
      .search{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    line-height: .28rem;
    text-align: center;
    background: #f8f8f8;
    border-bottom: .01rem solid #d8d8d8;
    div{
      margin: .08rem;
      background: #eee;
      border-radius: .04rem;
      color: #878787;
      font-size: .12rem;
      i{
        font-size: .14rem;
        margin-right: .06rem;
      }
    }
   }
   .fruitday-category{
     .tab{
        position: fixed;
        left: 0;
        top: .47rem;
        width: .8rem;
        background: #f5f5f5;
        text-align: center;
        margin: 0;
        overflow-y: auto;
        height: calc(100% - .89rem);
        padding-top: 0.02rem;
        li{
          height: .42rem;
          width: 100%;
          line-height: .46rem;
          font-size: .15rem;
          color: #3a3a3a;
          border-right: 0;
        }
        .active{
            border-left: .02rem solid #65a032;
            color: #65a032;
            background: #fff;
        }
     }
   }
   .items{
        margin-left: .8rem;
        padding: .1rem .1rem .18rem .1rem;
        position: relative;
        h3{
          font-weight: 400;
          height: .3rem;
          line-height: .3rem;
          text-align: center;
          margin: 0;
          font-size: .14rem;
          color: black;
        }
        span{
          display: block;
          position: absolute;
          top: .1rem;
          right: 0;
          height: .3rem;
          line-height: .3rem;
          font-size: .12rem;
          color: #878787;
          padding-right: .08rem;
        }
   }
   dl{
    width: 33%;
    float: left;
    text-align: center;
    padding-bottom: .2rem;
    dt{
      padding: 0 .1rem;
      img{
          border: 0;
          width: 100%;
          display: block;
      }
    }
   }
  }
   
</style>


