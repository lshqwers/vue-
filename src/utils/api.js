import fetch from './fetch'  // fetch实际上一个axios实例（promise对象）

// ES6 模块：任何一个js文件都可以看成是一个独立作用域的模块

// 第一种写法
// export aaa
// export bbb
// import { aaa, bbb } from './xxx.js'

// 第二种写法：在同一个模块中，最多只能使用一次 export default
// export default
// import ccc from './xxx.js'

// 注册接口
export function regist(data) {
  return fetch({
    url: '/user/regist',
    method: 'POST',
    data
  })
}
// 登录接口
export function login(data) {
  return fetch({
    url: '/user/login',
    method: 'POST',
    data
  })
}

// 获取首页为你推荐的商品列表
// export function getHotGoodList(params) {
//   return fetch({
//     url: '/jd/getHotGoodList',
//     method: 'GET',
//     params
//   })
// }

// 获取商品详情
export function getGoodDetail(params) {
  return fetch({
    url: '/jd/getGoodDetail',
    method: 'GET',
    params
  })
}

// 加入购物车
export function addToCart(data) {
  return fetch({
    url: '/jd/addToCart',
    method: 'POST',
    data
  })
}

// 获取购物车列表
export function getCartList(params) {
  return fetch({
    url: '/jd/getCartList',
    method: 'GET',
    params
  })
}

// 删除一条购物记录
export function deleteCart(params) {
  return fetch({
    url: '/jd/deleteToCart',
    method: 'GET',
    params
  })
}

// 修改购物车中商品的数量
export function updateCart(data) {
  return fetch({
    url: '/jd/updateCartNum',
    method: 'POST',
    data
  })
}

// 提交购物车
export function submitCart(data) {
  return fetch({
    url: '/jd/submitToCart',
    method: 'POST',
    data
  })
}
// 获取商品的类
//  99:5  error  'params' is not defined  no-undef  没有传params
export function getAllCates(params){
  return fetch({
    url:'/jd/getAllCates',
    method:'GET',
    // get方法是用params作为参数
    params
  })
}
// 获取商品列表
export function getHotGoodLists(params){
  return fetch({
    url:'/jd/getHotGoodList',
    method:'GET',
    // get方法是用params作为参数
    params
  })
}
export function del(params){
  return fetch({
    url:'/jd/delGood',
    method:'GET',
    // get方法是用params作为参数
    params
  })
}
export function add(data){
  return fetch({
    url:'/jd/addGood',
    method:'POST',
    // get方法是用params作为参数
    data
  })
}
// 把所有接口方法统一抛出
export default {
  regist,
  login,
  // getHotGoodList,  
  getHotGoodLists,
  getGoodDetail,
  addToCart,
  getCartList,
  deleteCart,
  updateCart,
  submitCart,
  getAllCates,
  del,
  add
}
// 1.api是写接口的文件,在main.js中要全局引用
// 2.fetch是解决跨域的文件
// 3.vue.config.js是服务器的配置文件