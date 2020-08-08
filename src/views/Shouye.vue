<template>
	<div id="main">
		<div v-show="bol">
			<Heafer></Heafer>
		</div>
		<div class="zhonjian">
			<keep-alive>
				<router-view></router-view>
			</keep-alive>
		</div>
		<div>
			<TabBar></TabBar>
		</div>
	</div>
</template>

<script>
	import TabBar from '../components/TabBar'
	import Heafer from '../components/Heafer'
	export default {
		name: 'Shouye',
		components: {
			TabBar,
			Heafer
		},
		data() {
			return {
				bol: true
			}
		},
		watch: {
			$route(to) {
				if (to.path == '/Shouye/Gouche'||to.path== '/Shouye/Fuwu'||to.path== '/Shouye/Wode') {
					this.bol = false
				} else {
					this.bol = true
				}
			}
		},
	}
</script>

<style scope>
	.is {
		height: 400px;
		width: 100%;
	}

	#mian {
		position: absolute;
	}

	.zhonjian {
		width: 100%;
		overflow: auto;
	}

	.dibu {
		width: 100%;
		height: 50px;
		background: #ffffff;
	}
</style>
