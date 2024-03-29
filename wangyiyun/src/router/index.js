import Vue from 'vue'
import Router from 'vue-router'
// 重写路由的push方法   原因：在路由中添加了相同的路由
const routerPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return routerPush.call(this, location).catch(error=> error)
}
Vue.use(Router)
export default new Router({
  mode:"history",
  routes: [
    {
      path: '/',
      name: 'App',
      component:()=>import("../App.vue"),
      children:[
        {
          path:'',
          component:()=>import("../page/discover.vue"),
        },{
          path:'my',
          component:()=>import("../page/mymusic.vue")
        },{
          path:'friend',
          component:()=>import("../page/friend.vue")
        },{
          path:'download',
          component:()=>import("../page/download.vue")
        },{
          path:'discover',
          component:()=>import("../page/discover.vue"),
        },{
          path:'discover/playlist',
          component: ()=>import("../page/playlist.vue")
        },{
          path:'discover/album',
          component:()=>import('../page/album.vue')
        },
        {
          path:'discover/toplist',
          component:()=>import('../page/toplist.vue')
        },{
          path:'discover/artist',
          component:()=>import('../page/artist.vue'),
        },
        {
          path:'discover/djradio',
          component:()=>import('../page/djradio.vue'),
        },
        {
          path:'discover/djradio/category',
          component:()=>import('../page/category.vue'),
        },{
          path:'store/product',
          component:()=>import('../page/product.vue'),
        },{
          path:'creator',
          component:()=>import('../page/creator.vue'),
        },{
          path:'signed',
          component:()=>import('../page/signed.vue'),
        },{
          path:'cat',
          component:()=>import('../page/cat.vue'),
        },{
          path:'playlist',
          component:()=>import('../page/commentlist.vue'),
        },{
          path:'hv',
          component:()=>import('../page/hv.vue'),
        },{
          path:'hyzh',
          component:()=>import('../page/hyzh.vue'),
        },{
          path:'ounan',
          component:()=>import('../page/ounan.vue'),
        },{
          path:'ounv',
          component:()=>import('../page/ounv.vue'),
        },{
          path:'omzh',
          component:()=>import('../page/omzh.vue'),
        },{
          path:'rbnan',
          component:()=>import('../page/rbnan.vue'),
        },{
          path:'rbnv',
          component:()=>import('../page/rbnv.vue'),
        },{
          path:'rbzh',
          component:()=>import('../page/rbzh.vue'),
        }
      ]
    } ,{
      path:'/a',
      component:()=>import('../page/product_1.vue'),
    }
  ]
})
