<template>
    <div  class="footer">
        <footer class="main-nav">
            <a class="footer-item active" >
                <i class="fa fa-home" aria-hidden="true">
                     <span class="inner">
                         <router-link to="/home">首页</router-link>
                     </span>
                     
                </i>
            </a>
            <a class="footer-item active" >
                <i class="fa fa-th-large" aria-hidden="true">
                     <span class="inner">
                         <router-link to="/classify">分类</router-link>
                     </span>
                </i>
            </a>
            <a class="footer-item active" >
                <i class="fa fa-shopping-cart" aria-hidden="true">
                     <span class="inner">
                         <router-link to="/car">购物车</router-link>
                     </span>
                </i>
            </a>
             <a class="footer-item active" >
                <i class="fa fa-user" aria-hidden="true">
                     <span class="inner">
                         <router-link to="/mine">我的</router-link>
                     </span>
                </i>
            </a>
        </footer>
    </div>
</template>
<script>

export default {
  name:"FooterBox"
}
</script>
<style lang="scss" scoped>
    .footer{
        width:100%;
    .main-nav{
        background:#fff;
        top: auto;
        bottom: 0;
        left: 0;
        width: 100%;
        position: fixed;
        display: box;
        box-shadow: 0 -2px 2px 0 rgba(0,0,0,.15);
        height: .5rem;
        font-size: .1rem;
        line-height: 1.2rem;
        display: flex;
        z-index:999;
        padding-bottom:0.2rem;
        a{
            position: relative;
            width: 100%;
            color: #898989;
            display: block;
            text-align: center;
            -webkit-box-flex: 1;
            margin-top: 0.04rem;
            i{
                display: block;
                font-size: .24rem;
                 color: #65a032;
                span{
                    margin-top: 0.01rem;
                    font-size: .12rem;
                    color: #65a032;
                    display: block;
                }
            }
        }
        .main-nav a.active{
            color: #65a032;
        }
    }
  }
</style>

