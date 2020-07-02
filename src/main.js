import Vue from 'vue'
import App from './App.vue'
import router   from './router'
import ElementUI from 'element-ui'
// 記得去條用
Vue.use(ElementUI)
import 'element-ui/lib/theme-chalk/index.css'
Vue.config.productionTip = false
// 把所有api接口方法，都挂载在Vue的原型上，在组件中就可以使用 this.$http 来访问所有的接口方法
import http from './utils/api'
Vue.prototype.$http = http
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
// h5页面  管理系统 webapp