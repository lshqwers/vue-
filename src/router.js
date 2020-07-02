import Vue from 'vue'
import VueRouter from 'vue-router' 
Vue.use(VueRouter)
// 引用组件
const Home = ()=>import('@/view/home/Home.vue')
const Overview = ()=>import('@/view/home/Overview.vue')
const Statistics = ()=>import('@/view/home/Statistics.vue')
const Good = ()=>import('@/view/good/Good.vue')
const Login= ()=>import('@/view/login/Login.vue')
const Register= ()=>import('@/view/register/Register.vue')
const router =new VueRouter({
    routes: [
        {
          path: '/home',
          component: Home,
          children:[
            { path: 'good', redirect:Good },
          ]
          // children: [
          //   { path: '/home/overview', component: Overview },
          //   { path: '/home/statistics', component: Statistics }
          // ]
        },
        { path: '/home/overview', component: Overview },
        { path: '/home/statistics', component: Statistics },
        { path: '/good', component: Good },
        { path: '/login', component: Login },
        { path: '/register', component: Register },
        { path: '/',component:Good }
      ]
})
// 路由守卫
router.beforeEach(function(to,from,next){
  // 如果当前的路径不是登入路径,判断localStorage有没有token这个key或其他的admin key,
  /* 
     下面的它的思路是,如果是商品的详情页,先判断它有没有token或localStorage其自己设置的字段,
      没有就跳转到登入页面,有直接去跳转想要去的页面
  */
  if(to.path!='/register'){
    if(localStorage.getItem('user')){
      next()
    }else{
      next('/register')
    }
  }else{
    next()
  }
})
export default router
/*
  to.path=!'/register'
  35:6  error  Expected a conditional expression and instead saw an assignment  no-cond-assign
  35:6  error  Unexpected constant condition                                    no-constant-condition
*/