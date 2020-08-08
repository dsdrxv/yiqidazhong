<template>
	<div id="shouye-top">
		<div class="shouye-er">
			<img src="../img/logo.png" alt="">
		</div>
		<div class="lunb">
			<van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
				<van-swipe-item><img src="../img/lunb1.png"></van-swipe-item>
				<van-swipe-item><img src="../img/lunb1.png"></van-swipe-item>
				<van-swipe-item><img src="../img/lunb1.png"></van-swipe-item>
				<van-swipe-item><img src="../img/lunb1.png"></van-swipe-item>
				<van-swipe-item><img src="../img/lunb1.png"></van-swipe-item>
				<van-swipe-item><img src="../img/lunb1.png"></van-swipe-item>
			</van-swipe>
		</div>
		<div class="shouye-qie">
			<ul>
				<li><img src="../img/shouye1.png"></li>
				<li><img src="../img/shouye2.png"></li>
				<li><img src="../img/shouye3.png"></li>
				<li><img src="../img/shouye4.png"></li>
			</ul>
		</div>
		<div class="yan"></div>
		<div class="shouye-neiro">
			<div class="xian">
				<p>热门推荐</p>
			</div>
			<div id="huand">
				<div class="shouye-biaoti">
					<div class="yu">
						<img src="../img/shouye-logo.png" />
					</div>
					<div class="zu">
						<span class="zu3">一汽大众</span><br />
						<span class="zu4">07-17 22:35</span>
					</div>
				</div>
				<div class="shouye-he">
					<p>23.58万元-29.58万元,探岳X炽热上</p>
					<p>市</p>
				</div>
				<div class="shouye-tuan">
					<img src="../img/lunb1.png" />
				</div>
				<div class="shouye-zan">
					<div>
						<img id="e2" src="../img/shouyeyanji.png" />
						<img id="e3" src="../img/shouyedian.png" />
						<img id="e4" src="../img/shouyefa.png" />
					</div>
				</div>
			</div>
			<div id="huand">
				<div class="shouye-biaoti">
					<div class="yu">
						<img src="../img/shouye-logo.png" />
					</div>
					<div class="zu">
						<span class="zu3">一汽大众</span><br />
						<span class="zu4">07-17 22:35</span>
					</div>
				</div>
				<div class="shouye-he">
					<p>23.58万元-29.58万元,探岳X炽热上</p>
					<p>市</p>
				</div>
				<div class="shouye-tuan">
					<img src="../img/lunb1.png" />
				</div>
				<div class="shouye-zan">
					<div>
						<img id="e2" src="../img/shouyeyanji.png" />
						<img id="e3" src="../img/shouyedian.png" />
						<img id="e4" src="../img/shouyefa.png" />
					</div>
				</div>
			</div>
			<div id="huand">
				<div class="shouye-biaoti">
					<div class="yu">
						<img src="../img/shouye-logo.png" />
					</div>
					<div class="zu">
						<span class="zu3">一汽大众</span><br />
						<span class="zu4">07-17 22:35</span>
					</div>
				</div>
				<div class="shouye-he">
					<p>23.58万元-29.58万元,探岳X炽热上</p>
					<p>市</p>
				</div>
				<div class="shouye-tuan">
					<img src="../img/lunb1.png" />
				</div>
				<div class="shouye-zan">
					<div>
						<img id="e2" src="../img/shouyeyanji.png" />
						<img id="e3" src="../img/shouyedian.png" />
						<img id="e4" src="../img/shouyefa.png" />
					</div>
				</div>
			</div>
			<br />
			<br />
		</div>
	</div>
</template>

<script>
	export default {

	}
</script>

<style scope>
	#shouye-top {
		width: 100%;
		height: 1000px;
	}

	.yan {
		width: 100%;
		height: 20px;
		background: #f9f9f9;
	}

	.shouye-er {
		width: 100%;
		height: 1.3rem;
	}

	.shouye-er img {
		width: 100%;
	}

	.my-swipe .van-swipe-item {
		color: #39a9ed;
		font-size: 20px;
		line-height: 150px;
		text-align: center;

	}

	.lunb {
		width: 100%;
		height: 6.66667rem;
		top: 0;
		margin-top: -0.2rem;
	}

	.lunb img {
		width: 100%;
	}

	.van-swipe__indicator {
		width: 0.13rem;
		height: 0.13rem;
		background-color: #065acc;
		border-radius: 100%;
		;
	}

	.shouye-qie {
		width: 100%;
		height: 2.33333rem;
		display: flex;
	}

	.shouye-qie ul {
		text-align: center;
		width: 100%;
	}

	.shouye-qie ul li {
		float: left;
		list-style: none;
		width: 25%;
	}

	.shouye-qie img {
		width: 69%;
	}

	.xian {
		border-bottom: 0.01333rem solid #f9f9f9;
		width: 100%;
		height: 1rem;
	}

	.shouye-biaoti {
		width: 100%;
		height: 120px;
	}

	.shouye-biaoti div {
		line-height: 0.73333rem;
		float: left;
	}

	.yu {
		width: 20%;
		height: 100%;
	}

	.yu img {
		width: 61%;
		margin: 0.10667rem 0 0 0.5333rem;
	}

	.zu {
		width: 30%;
		height: 100%;
	}

	.zu3 {
		font-size: 0.50667rem;
	}

	.zu4 {
		font-size: 0.31333rem;
	}

	.shouye-tuan {
		width: 90%;
		height: 5rem;
		margin: 0 auto;
	}

	.shouye-tuan img {
		width: 100%;
	}

	.shouye-he {
		line-height: 0.09333rem;
		width: 100%;
		margin: 0 auto;
		height: 1.3rem;
	}

	.shouye-zan {
		width: 90%;
		height: 1.53333rem;
		margin: 0 auto;

	}

	.shouye-zan div {
		border-bottom: 1px solid;
		height: 80%;
		width: 100%;
	}

	#e2 {
		width: 2.10667rem;
		margin: 0 0 0rem 2.332rem;
		margin-top: 0.12rem;
	}

	#e3 {
		width: 1.54667rem;
		margin: 0 0 0 0.77333rem;
	}

	#e4 {
		width: 1.47333rem;
		margin: 7px 0px 0rem 0.53333rem;
	}

	#huand {
		margin: 0px 0px 0px 0px;
	}
</style>
