<template>
  <div id="app">
      <!-- 根据路由来判断,这个页面显示隐藏,而不是同时显示出来 -->
      <!-- 编程式导航,如果路径不存在是,把它跳转到登入页面 $route有url的配置信息 -->
      <router-view to="/register" v-if='$route.path=="/register"'></router-view>
      <!-- 公共的页面 -->
      <Com v-else></Com>
      <!-- 下面显示的是在底部 -->
      <!-- <router-view/> -->
      <!-- <Register></Register> -->
  </div>  
</template>
<script>

export default {
  name: 'App',
  components: {
    // 异步引入组件
    Com:()=>import('@/components/commons/Com.vue'),
    // Register:()=>import('@/view/register/Register.vue')
  }
}
</script>
<style>
body{
  font-size: 12px;
}
*{
  margin: 0px;
  padding: 0px;
}
/* 
  v-if='$route.path="/register"' 下面的是直接赋值,而不是用==进行判断
  [Vue warn]: Error in render:
   "TypeError: Cannot assign to read only property 'path' of object '#<Object>'"
 */
</style>

