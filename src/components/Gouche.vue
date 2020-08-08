<template>
	<div class="shouye-gouche">
		<div class="shouye-gouchelunb">
			<van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
				<van-swipe-item><img src="../img/gouche1.png"></van-swipe-item>
				<van-swipe-item><img src="../img/gouche1.png"></van-swipe-item>
				<van-swipe-item><img src="../img/gouche1.png"></van-swipe-item>
			</van-swipe>
		</div>

		<div class="shouye-pian">
			<ul>
				<li>
					<img src="../img/gouche5.png" />
				</li>
				<li>
					<img src="../img/shouyegouche5.png" />
				</li>
				<li>
					<img src="../img/shouye-op1.png" />
				</li>
				<li>
					<img src="../img/shouye-op2.png" />
				</li>
			</ul>
		</div>

		<div class="shouye-chezi">
			<div class="shouyebian-q">
				<p>全部车型</p>
			</div>
			<div class="shouyemin">
				<div class="lidd">
					<ul>
						<li><img src="../img/Goueve.png" /></li>
						<li id="ddd"><img src="../img/Goueve.png" /></li>
					</ul>
				</div>
				<div class="lidd">
					<ul>
						<li><img src="../img/Goueve.png" /></li>
						<li id="ddd"><img src="../img/Goueve.png" /></li>
					</ul>
				</div>
				<div class="lidd">
					<ul>
						<li><img src="../img/Goueve.png" /></li>
						<li id="ddd"><img src="../img/Goueve.png" /></li>
					</ul>
				</div>
				<div class="lidd">
					<ul>
						<li><img src="../img/Goueve.png" /></li>
						<li id="ddd"><img src="../img/Goueve.png" /></li>
					</ul>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name:'Gouche'
	}
</script>

<style>
	.shouye-gouche {
		font-family: "微软雅黑";
		width: 100%;
	}

	.shouye-gouchelunb {
		width: 100%;

	}

	.shouye-gouchelunb img {
		width: 100%;
	}

	.my-swipe .van-swipe-item {
		color: #fff;
		font-size: 20px;
		text-align: center;
		line-height: 0rem;
		background-color: #39a9ed;
	}

	.shouye-pian ul li {

		width: 25%;
		float: left;
		list-style: none;
		text-align: center;
		margin-top: 0.60667rem;

	}

	.shouye-pian {
		width: 100%;
		height: 2.6rem;
	}

	.shouye-pian li img {
		width: 53%;
		height: 1.4rem;
	}

	.shouye-chezi {
		width: 90%;
		margin: 0 auto;
		height: 21.33333rem;
	}

	.shouyebian-q {
		border-left: 0.1rem solid #01b0f1;
		width: 100%;
		line-height: 0.67333rem;
	}

	.shouyebian-q p {
		font-weight: 600;
		font-size: 0.41333rem;
		margin-left: 0.13333rem;
	}

	.shouyemin div {
		width: 100%;
		margin-top: 0.46667rem;
	}

	.lidd ul li {
		list-style: none;
		width: 50%;
		float: left;
	}


	.lidd img {
		width: 90%;
		margin: 0.06667rem 0 0 0.19333rem;
		height: 4.76rem;
	}
</style>
