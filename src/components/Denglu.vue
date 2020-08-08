<template>
	<div class="deng">
		<div id="lll">
			<van-notice-bar left-icon="volume-o" v-text="tr" v-show="ss" />
		</div>
		<div class="dengq">
			<div class="error">
				<van-icon @click="dele()" name="cross" />
			</div>
			<div class="in">登录</div>
			<div class="shu">
				<van-cell-group>
					<van-field v-model="tel" @input="myipone" type="tel" placeholder="请输入手机号" maxlength="11" />
				</van-cell-group>
				<van-field v-model="sms" @input="kkyy()" center clearable placeholder="请输入短信验证码">
					<template #button>
						<van-button @click='dian()' v-show="col" size="small" type="primary" color="#666">{{kkt}}</van-button>
					</template>
				</van-field>
			</div>
			<div class="check">
				<div>
					<van-checkbox v-model="checked" checked-color="#999"></van-checkbox>
				</div>
				<div class="read">我已阅读并同意<span>服务协议</span>和<span>隐私服务</span></div>
			</div>
			<div class="butt">
				<van-button type="primary" size="large" color="#ccc" @click="denglu()">立即登录</van-button>
			</div>
			<div class="other">
				其它登录方式
			</div>
			<div class="im"><img src="../img/1.png" class="img" /></div>

			<van-popup v-model="show">{{gs}}</van-popup>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				tel: '',
				sms: '',
				checked: false,
				col: false,
				show: false,
				kkt: '获取验证码',
				nums: 60,
				gs: '手机号格式错误',
				tr: '',
				ss: false,
				mo: 0,
				yz: 0,
				sjhh: '',
				mmh: ''
			};
		},
		// created() {
		// 	document.getElementById("nav").style.display="none"
		// },
		methods: {
			myipone() {
				if (this.tel.length == 11) {
					this.col = true;
					if (!(/^1[3456789]\d{9}$/.test(this.tel))) {
						this.show = true;
					}
				} else {
					this.col == false;
					this.sjhh = this.tel
				}
			},
			dele() {
				this.$router.push({
					path: '/mine'
				})
			},
			dian() {
				var that = this;
				this.nums = 60;
				for (var i = 0; i < 6; i++) {
					var radom = Math.floor(Math.random() * 100000);
					this.yz += radom;
				}
				console.log(this.yz)
				this.mo = Math.floor(Math.random() * 6)
				clearInterval(this.settime)
				this.settime = setInterval(function() {
					that.nums--;
					if (that.nums < 0) {
						that.nums = 60;
						that.kkt = "重发验证码";
					} else {
						that.kkt = that.nums + "秒后重发"
						console.log(that.mo)
						that.mat = setTimeout(function() {
							that.ss = true;
							that.tr = that.yz;
							that.mmh = that.yz
						}, that.mo * 1000)
					}
				}, 1000)

			},
			kkyy() {
				if (this.sms == "") {
					this.show = true;
					this.gs = "验证码不能为空"
				} else if (this.sms != this.yz) {
					this.show = true;
					this.gs = "密码不正确"
				} else {
					this.show = false;
					this.ss = false
				}
			},
			denglu() {
				if (this.mmh != "")
					this.$router.push({
						path: "/"
					})
			}
		}
	};
</script>

<style scope>
	.deng {
		height: 100%;
		position: fixed;
		z-index: 9;
		width: 100%;
		background: #fff;
	}

	.error {
		float: right;
		font-size: 2rem;
		margin-top: -2rem;
	}

	.dengq {
		width: 80%;
		margin: 0 auto;
		margin-top: 4rem;
	}

	.in {
		margin-top: 1.875rem;
		font-size: 2.1875rem;
		font-weight: bold;
		color: #666;
	}

	.shu {
		margin-top: 2.5rem
	}

	.check {
		margin-top: 2rem;
		display: flex;
	}

	.read {
		margin-left: 0.625rem;
		color: #999;
		font-size: 1.3rem;
	}

	.read span {
		color: blue;
		margin-left: 0.3125rem;
	}


	.other {
		margin-top: 20rem;
		text-align: center;
		color: #666;
		font-size: 1.3rem;
	}

	.img {
		width: 80%;
	}

	.im {
		text-align: center;
		margin-top: 1.4rem;
	}

	.lll {
		position: fixed;
		top: 0;
	}

	.van-button--large {
		width: 100%;
		height: 3.66667rem;
	}
</style>
