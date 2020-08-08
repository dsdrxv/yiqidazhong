<template>
	<div class="had22">
		<van-tabbar v-model="active">
			<van-tabbar-item icon="home-o" to="/Shouye">首页</van-tabbar-item>
			<van-tabbar-item icon="search" to="/Shouye/Dizhi">发现</van-tabbar-item>
			<van-tabbar-item icon="friends-o" to="/Shouye/Gouche">购车</van-tabbar-item>
			<van-tabbar-item icon="setting-o" to="/Shouye/Fuwu">服务</van-tabbar-item>
			<van-tabbar-item icon="setting-o" to="/Shouye/Wode">我的</van-tabbar-item>
		</van-tabbar>
	</div>
</template>

<script>
	export default {
		name: 'TabBar',
		data() {
			return {
				active: 0,
			};
		},
	};
</script>

<style scoped>
	.van-tabbar-item__icon {
		position: relative;
		margin-bottom: 1rem;
		font-size: 0.6rem;
	}

	.had22 {
	position: fixed;
    bottom: 1rem;
    left: 0;
    border-bottom: 1px solid red;
    width: 100%;
	}
	.van-tabbar--fixed {
	position: fixed;
    /* bottom: 0.4667rem !important; */
    left: 0;
	height: 1.54667rem;
	}
	.van-tabbar--fixed[data-v-42921124] {
    position: fixed;
    /* bottom: 11px !important; */
    left: 0;
}
.van-tabbar-item {
	font-size: 30px;
}
</style>
