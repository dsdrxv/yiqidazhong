<template>
	<div class="Wode-a">
		<div class="Wode-b">
			<div class="Wode-c">
				<div><img src="../img/Wode2.png" /><img src="../img/Wode3.png" /></div>
			</div>
			<div class="Wode-d">
				<div><img src="../img/Wode1.png"></div>
				<div id="isd"><a>登录</a><span>/</span>&nbsp;<a>注册</a></div>
			</div>
		</div>
		<div class="Wode-ding">
			<div class="Wode-ding2">
				<div class="Wode-ding3">
					<p class="p1">添加爱车</p>
					<p class="p2">想要更多服务吗?快来添加吧!</p>
				</div>
				<div id="tianjia">
					<span id="dddd">添加</span>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name:"Wode"
	}
</script>

<style scoped>
	.Wode-a {
		position: relative;
		width: 100%;
		height: 100%;
	}

	.Wode-b {
		width: 100%;
		height: 400px;
		background: #001e50;
	}

	.Wode-c {
		width: 100%;
		height: 100px;
		border: 1px solid red;
	}

	.Wode-c img {
		width: 7%;
		margin: 0.38667rem 0 0 0.24rem;
		float: right;
	}

	.Wode-c {
		width: 90%;
		margin: 0 auto;
		height: 100px;
	}

	.Wode-d {
		width: 90%;
		margin: 55px auto;
		height: 150px;
		border: 1px solid red;
	}

	.Wode-d div {
		float: left;
		width: 30%;
		height: 100%;
	}

	.Wode-d img {
		width: 74%;
	}

	#isd {
		font-size: 0.46667rem;
		color: #fff;
		line-height: 2.01333rem;
		margin: 0 0 0 0;
		text-align: center;
		font-weight: 600;
	}

	#isd a {
		margin: 0px 7px 0px 0px;
	}

	.Wode-ding {
		position: absolute;
		background: #FFFFFF;
		width: 90%;
		height: 2rem;
		border: 0.01333rem solid #dfe4e8;
		top: 80%;
		left: 5%;
		border-radius: 0.19667rem;
	}

	.Wode-ding2 {
		width: 90%;
		height: 90%;
		margin: 0 auto;
	}

	.Wode-ding2 div {
		float: left;
	}

	.Wode-ding3 {
		width: 60%;
	}

	.p1 {

		font-size: 0.4rem;
		font-weight: 700;
		margin: 0.31333rem 0 0 0;

	}

	.p2 {
		font-size: 0.3333rem;
		font-weight: 500;
		margin: 0.3667rem 0 0 0;

	}

	#dddd {
		display: block;
		width: 1.8rem;
		height: 0.8rem;
		border: 0.04rem solid #01b0f1;
		border-radius: 3.58667rem;
		text-align: center;
		font-size: 0.5rem;
		margin: 0 0xp 0xp 0;
		margin: 0.60667rem 0 0 0.18667rem;
		line-height: rem;
		color: #01b0f1;
	}

	#tianjia {
		width: 30%;
		float: right;
	}
</style>
