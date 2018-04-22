<template>
	<div>
		<div class="nav">
	        <div class="back">
	          <i class="fa fa-chevron-left" aria-hidden="true"></i>
	        </div>
	        <div class="text">个人中心</div>
	        <div class="bj" href="">
	          <span>编辑</span>
	        </div>
	    </div>
		<div class="user">
			<div class="content">
				<h4>用户名：{{userInfo.username}}</h4>
				<p>性别：男</p>
				<p>昵称：狗子不傻</p>
				<p>爱好：撩妹子</p>
				<p>个性签名：╰つ 情不知所起 一往情深゛</p>
				<p><button @click="EXIT">退 出</button></p>
			</div>
		</div>
	</div>
</template>

<script type="text/javascript">
	import {EXIT} from '../../../store/other/const.js';
	import {mapState, mapMutations} from 'vuex';
	export default {
		name: "User",
		computed: mapState({
			userInfo: state => state.other.userInfo
		}),
		methods: {
			...mapMutations([EXIT])
		}
	}
</script>

<style type="text/css" lang="scss" scoped>

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
        font-size: .18rem;
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
	.user{
		width:100%;
		height:100%;
		overflow:hidden;
		margin:-0.05rem auto;
		background:#fff;
		color:#369;
		font-size:0.18rem;
		padding:0.3rem ;
		.content{
			width:70%;
			margin:0 auto;
			h4{
				text-indent:0.1rem;
				line-height:0.45rem;
				font-weight:normal;
				border-bottom:1px dashed #174603
			}
			p{
				text-indent:0.1rem;
				line-height:0.45rem;
				border-bottom:1px dashed #174603
			}
			p:last-of-type{
				border:none;
				display:flex;
				button{
					width:80%;
					height:0.4rem;
					background:#444;
					border:1px solid #12190f;
					border-radius:0.06rem;
					display:bolck;
					margin: 0.3rem auto;
					color:#fff;
					font-size:0.18rem;
					text-align: cneter;
					line-height:0.4rem;
					font-family:"微软雅黑";
				}
			}
		}
	}
</style>