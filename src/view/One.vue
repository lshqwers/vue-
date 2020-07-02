<template>
  <div id="app">
<el-header style="fon-size:100px">后台管理系统</el-header>
<el-container style="height: 500px; border: 1px solid #eee">
  <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
    <el-menu>店铺</el-menu>
    <el-menu :default-openeds="['1', '3']"  :default-active="this.$route.path" router>
      <el-submenu index="1">
        <template slot="title"><i class="el-icon-message"></i>店铺</template>
        <el-menu-item-group>
          <template slot="title">商品管理</template> 
          <el-menu-item index="1-1">商品管理</el-menu-item>
          <el-menu-item index="1-2">商品分組</el-menu-item>
          <el-menu-item index="1-2">商品頁模板</el-menu-item>
        </el-menu-item-group>
        <!-- <el-menu-item-group title="分组2">
          <el-menu-item index="1-3">选项3</el-menu-item>
        </el-menu-item-group> -->
        <!-- <el-submenu index="1-4">
          <template slot="title">选项4</template>
          <el-menu-item index="1-4-1">选项4-1</el-menu-item>
        </el-submenu> -->
      </el-submenu>
      <el-submenu index="2">
        <template slot="title"><i class="el-icon-menu"></i>商品工具</template>
        <el-menu-item-group>
          <!-- <template slot="title">分组一</template> -->
          <el-menu-item index="2-1">批量改價</el-menu-item>
          <el-menu-item index="2-2">商品導入</el-menu-item>
          <el-menu-item index="2-2">素材導入</el-menu-item>
        </el-menu-item-group>
        <!-- <el-menu-item-group title="分组2">
          <el-menu-item index="2-3">选项3</el-menu-item>
        </el-menu-item-group>
        <el-submenu index="2-4">
          <template slot="title">选项4</template>
          <el-menu-item index="2-4-1">选项4-1</el-menu-item>
        </el-submenu> -->
      </el-submenu>
      <el-submenu index="3">
        <template slot="title"><i class="el-icon-setting"></i>我要分銷</template>
        <el-menu-item-group>
          <!-- <template slot="title">分组一</template> -->
          <el-menu-item index="3-1">市場選貨</el-menu-item>
          <el-menu-item index="3-2">商品設置</el-menu-item>
        </el-menu-item-group>
        <!-- <el-menu-item-group title="分组2">
          <el-menu-item index="3-3">选项3</el-menu-item>
        </el-menu-item-group> -->
        <!-- <el-submenu index="3-4">
          <template slot="title">选项4</template>
          <el-menu-item index="3-4-1">选项4-1</el-menu-item>
        </el-submenu> -->
      </el-submenu>
    </el-menu>
    <el-menu style="font-size:20px">客户</el-menu>
    <el-menu style="font-size:20px">数据</el-menu>
    <el-menu style="font-size:20px">资产</el-menu>
  </el-aside>
  <el-container>
    <el-header style="text-align: right; font-size: 12px">
      <el-dropdown>
        <i class="el-icon-setting" style="margin-right: 15px"></i>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>查看</el-dropdown-item>
          <el-dropdown-item>新增</el-dropdown-item>
          <el-dropdown-item>删除</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <span>商品管理</span>
    </el-header>
    
    <el-main>
      <el-table :data="tableData">
        <el-table-column prop="date" label="日期" width="140">
        </el-table-column>
        <el-table-column prop="name" label="商品名稱" width="120">
        </el-table-column>
        <el-table-column prop="address" label="地址">
        </el-table-column>
      </el-table>
    </el-main>
    <el-pagination
      background
      layout="prev, pager, next"
      :total="100">
    </el-pagination>
  </el-container>
</el-container>
</div >
</template>
<script>
export default {
  name: 'App',
    data() {
      const item = {
        date: '2016-05-02',
        name: '商品',
        address: '上海市普陀区金沙江路 1518 弄'
      };
      return {
        tableData: Array(7).fill(item)
      }
    }
}
</script>
<style>
  .el-header {
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
  }
  
  .el-aside {
    color: #333;
    background: #333;
    height: 600px;
  }
  section{
    height: 620px;
  }
  aside {
    width: 100px;
  }
  .el-menu{
    /* color: #ffffff; */
    /* background: #333; */
    font-size: 16px !important;
    text-align: center;
    cursor: pointer;
  }
  .el-header{
   font-size: 30px;
   background:gray;
   text-align: center;
  }
  
  /* 
    商品工具
    批量改價
    商品導入
    素材導入

    我要分銷
    市場選貨
    商品設置
   */
   /* 
      管理系统,可以用全局引用
      在app.vue写样式
      把所有的组件,不同组件放一个功能
      首页组件放首页文件中
      根组件 的名字是class中
      父>&子元素
    */
        
    /*
      店铺
      订单
      客户
      数据
      资产
    */
</style>

