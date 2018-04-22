<template>
  <div class="not-found page">
      <div class="nav">
        <div class="back">
          <i class="fa fa-chevron-left" aria-hidden="true"></i>
        </div>
        <div class="text">购物车</div>
        <div class="bj" href="">
          <span>编辑</span>
        </div>
      </div>
      <cell 
			v-for = "friut in cars"
			:key = "friut.id"
			:title = "friut.product_name"
			:label = "friut.price +'/'+ friut.volume+' * '+friut.num"
			:src = "friut.bphoto"
		>
      <div>
  			<button @click="addGoodInCar(friut)" type="danger" size = "small">+</button>
        <button @click ="reduceGoodInCar(friut)" type="danger" size = "small">-</button>
      </div>
		</cell>
		<total></total>
  </div>
</template>

<script>
import Cell from "../../../mz-ui/Cell/Cell"
import Total from "./Total";
import { mapState, mapActions } from 'vuex'
export default {
  name: 'Car',
  components: {Total,Cell},
		computed:{
			...mapState({
				cars: state => state.buycar.cars
			})
		},
		methods: {
			...mapActions(['addGoodInCar', 'reduceGoodInCar'])
		}
}
</script>

<style lang="scss" scoped>
  .nav{
    background-color: #fff;
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
  button{
    width:0.3rem;
    height:0.25rem;
    display:block;
    font-size:0.24rem;
    border:none;
    background:#e62e05;
    border-radius:0.05rem;
    outline:none;
    text-align:center;
    line-height:0.15rem;
    margin-bottom:8px;
    color:#fff;
  }
</style>



