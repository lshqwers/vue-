<template>
<div class="header">
    <el-container>
    <el-header style="text-align: right; font-size: 12px">
      <el-dropdown>
        <i class="el-icon-setting" style="margin-right: 15px;background:#fff"></i>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item @click="tunchu">
            <router-link to="/register" tag="span">
           <span  @click="tunchu">退出</span>
            </router-link>
          </el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <span>点击退出</span>
    </el-header>
    </el-container>
</div>
</template>

<script>
export default {
  methods:{
    tunchu(){
     // localStorage清除的是key,清除token或(adimin)
     localStorage.removeItem('user')
     console.log('jss')
    }
  }
}
</script>

<style lang="css" scoped>
/* h1{
     background: rgb(48, 65, 86);
     height: 60px;
} */
.el-header {
     background: rgb(48, 65, 86);
     line-height: 60px;
     color: #ffffff;
}
/*
操作
localStorage.setItem(key,value)保存数据
localStorage.getItem(key)获取数据
localStorage.removeItem(key)删除数据
localStorage.clear()删除全部数据
同理 sessionStorage
*/
</style>
