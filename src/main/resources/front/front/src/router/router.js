import VueRouter from 'vue-router'

//引入组件
import Index from '../pages'
import Home from '../pages/home/home'
import Login from '../pages/login/login'
import Register from '../pages/register/register'
import Center from '../pages/center/center'
import Messages from '../pages/messages/list'
import Forum from '../pages/forum/list'
import ForumAdd from '../pages/forum/add'
import ForumDetail from '../pages/forum/detail'
import MyForumList from '../pages/forum/myForumList'
import News from '../pages/news/news-list'
import NewsDetail from '../pages/news/news-detail'
import xueshengList from '../pages/xuesheng/list'
import xueshengDetail from '../pages/xuesheng/detail'
import xueshengAdd from '../pages/xuesheng/add'
import sushexinxiList from '../pages/sushexinxi/list'
import sushexinxiDetail from '../pages/sushexinxi/detail'
import sushexinxiAdd from '../pages/sushexinxi/add'
import sushefenpeiList from '../pages/sushefenpei/list'
import sushefenpeiDetail from '../pages/sushefenpei/detail'
import sushefenpeiAdd from '../pages/sushefenpei/add'
import shuidianfeiList from '../pages/shuidianfei/list'
import shuidianfeiDetail from '../pages/shuidianfei/detail'
import shuidianfeiAdd from '../pages/shuidianfei/add'
import jinrususheList from '../pages/jinrusushe/list'
import jinrususheDetail from '../pages/jinrusushe/detail'
import jinrususheAdd from '../pages/jinrusushe/add'
import churususheList from '../pages/churusushe/list'
import churususheDetail from '../pages/churusushe/detail'
import churususheAdd from '../pages/churusushe/add'
import weixiuxinxiList from '../pages/weixiuxinxi/list'
import weixiuxinxiDetail from '../pages/weixiuxinxi/detail'
import weixiuxinxiAdd from '../pages/weixiuxinxi/add'
import weishengxinxiList from '../pages/weishengxinxi/list'
import weishengxinxiDetail from '../pages/weishengxinxi/detail'
import weishengxinxiAdd from '../pages/weishengxinxi/add'
import kaoqinxinxiList from '../pages/kaoqinxinxi/list'
import kaoqinxinxiDetail from '../pages/kaoqinxinxi/detail'
import kaoqinxinxiAdd from '../pages/kaoqinxinxi/add'
import systemintroList from '../pages/systemintro/list'
import systemintroDetail from '../pages/systemintro/detail'
import systemintroAdd from '../pages/systemintro/add'

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
	return originalPush.call(this, location).catch(err => err)
}

//配置路由
export default new VueRouter({
	routes:[
		{
      path: '/',
      redirect: '/index/home'
    },
		{
			path: '/index',
			component: Index,
			children:[
				{
					path: 'home',
					component: Home
				},
				{
					path: 'center',
					component: Center,
				},
				{
					path: 'messages',
					component: Messages
				},
				{
					path: 'forum',
					component: Forum
				},
				{
					path: 'forumAdd',
					component: ForumAdd
				},
				{
					path: 'forumDetail',
					component: ForumDetail
				},
				{
					path: 'myForumList',
					component: MyForumList
				},
				{
					path: 'news',
					component: News
				},
				{
					path: 'newsDetail',
					component: NewsDetail
				},
				{
					path: 'xuesheng',
					component: xueshengList
				},
				{
					path: 'xueshengDetail',
					component: xueshengDetail
				},
				{
					path: 'xueshengAdd',
					component: xueshengAdd
				},
				{
					path: 'sushexinxi',
					component: sushexinxiList
				},
				{
					path: 'sushexinxiDetail',
					component: sushexinxiDetail
				},
				{
					path: 'sushexinxiAdd',
					component: sushexinxiAdd
				},
				{
					path: 'sushefenpei',
					component: sushefenpeiList
				},
				{
					path: 'sushefenpeiDetail',
					component: sushefenpeiDetail
				},
				{
					path: 'sushefenpeiAdd',
					component: sushefenpeiAdd
				},
				{
					path: 'shuidianfei',
					component: shuidianfeiList
				},
				{
					path: 'shuidianfeiDetail',
					component: shuidianfeiDetail
				},
				{
					path: 'shuidianfeiAdd',
					component: shuidianfeiAdd
				},
				{
					path: 'jinrusushe',
					component: jinrususheList
				},
				{
					path: 'jinrususheDetail',
					component: jinrususheDetail
				},
				{
					path: 'jinrususheAdd',
					component: jinrususheAdd
				},
				{
					path: 'churusushe',
					component: churususheList
				},
				{
					path: 'churususheDetail',
					component: churususheDetail
				},
				{
					path: 'churususheAdd',
					component: churususheAdd
				},
				{
					path: 'weixiuxinxi',
					component: weixiuxinxiList
				},
				{
					path: 'weixiuxinxiDetail',
					component: weixiuxinxiDetail
				},
				{
					path: 'weixiuxinxiAdd',
					component: weixiuxinxiAdd
				},
				{
					path: 'weishengxinxi',
					component: weishengxinxiList
				},
				{
					path: 'weishengxinxiDetail',
					component: weishengxinxiDetail
				},
				{
					path: 'weishengxinxiAdd',
					component: weishengxinxiAdd
				},
				{
					path: 'kaoqinxinxi',
					component: kaoqinxinxiList
				},
				{
					path: 'kaoqinxinxiDetail',
					component: kaoqinxinxiDetail
				},
				{
					path: 'kaoqinxinxiAdd',
					component: kaoqinxinxiAdd
				},
				{
					path: 'systemintro',
					component: systemintroList
				},
				{
					path: 'systemintroDetail',
					component: systemintroDetail
				},
				{
					path: 'systemintroAdd',
					component: systemintroAdd
				},
			]
		},
		{
			path: '/login',
			component: Login
		},
		{
			path: '/register',
			component: Register
		},
	]
})
