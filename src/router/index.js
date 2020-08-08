import Vue from 'vue'
import VueRouter from 'vue-router'
import Hada from '../components/Hada.vue'
import TabBar from '../components/TabBar.vue'
import Heafer from '..//components/Heafer.vue'
import Shouye from '../views/Shouye.vue'
import Dizhi from '../components/Dizhi.vue'
import hhhd from '../components/hhhd.vue'
import Gouche from '../components/Gouche.vue'
// import Gou from '../views/Gou.vue'
import Fuwu from '../components/Fuwu.vue'
import Denglu from '../components/Denglu.vue'
import Wode from '../components/Wode.vue'
Vue.use(VueRouter)

const routes = [
	{
		path: '/Hada',
		name: 'Hada',
		component: Hada
	},
	{
		path: '/TabBar',
		name: 'TabBar',
		component: TabBar
	},
	{
		path:'/Heafer',
		name:'Heafer',
		component:Heafer
	},
	{
		path:'/Shouye',
		name:'Shouye',
		component:Shouye,
		children:[
			{
				path:'Hada',
				component:()=>import('../components/Hada')
			},
			{
				path:'Dizhi',
				component:()=>import('../components/Dizhi')
			},
			// {
				// path:'/Shoye/Gou',
				// component:()=>import('../views/Gou')
			// },
			{
				path:'Gouche',
				component:()=>import('../components/Gouche')
			},
			{
				path:'Fuwu',
				component:()=>import('../components/Fuwu')
			},
			{
				path:'Wode',
				component:()=>import('../components/Wode')
			},
			{
				path:'/Shouye',
				redirect:'/Shouye/Hada'
			},
			
		]
	},
	{
		path:'/Dizhi',
		name:'Dizhi',
		component:Dizhi
	},
	{
		path:'/hhhd',
		name:'hhhd',
		component:hhhd
	},
	{
		path:'/Gouche',
		name:'Gouche',
		component:Gouche
	},
	// {
		// path:'/Gou',
		// name:'Gou',
		// component:Gou,
		// children:[
			// {
				// path:'Gouche',
				// component:()=>import('../components/Gouche')
			// }
		// ]
	// },
	{
		path:'/Denglu',
		name:'Denglu',
		component:Denglu
	},
	{
		path:'/Fuwu',
		name:'Fuwu',
		component:Fuwu
	},
	{
		path:'/Wode',
		name:'Wode',
		component:Wode
	}
]

const router = new VueRouter({
	routes
})

export default router
