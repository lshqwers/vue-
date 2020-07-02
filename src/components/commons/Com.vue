<template>
<div class="qf-layout">
  <el-container>

    <el-aside width="145px">
      <Aside></Aside>
    </el-aside>

    <el-container>

      <el-header>
        <Header>1221212</Header>
      </el-header>

      <el-main>
        <router-view/>
      </el-main>  

    </el-container>

  </el-container>
</div>

</template>
<script>
export default {
  // 引入组件
  components: {
  Aside:()=>import('./Aside.vue'),
  Header:()=>import('./Header.vue'),
  // Content:()=>import('./Content.vue'),
  }
};
</script>

<style lang="scss" scoped>
.qf-layout {
  height: 100%;
  .el-container {
    height: 100%;
    .el-aside {
      background: rgb(48, 65, 86);
      // color: white;
      height: 100%;
    }
  }
  .el-header {
    // background: white;
    // border-bottom: 1px solid #ccc;
    padding: 0px;
  }
  .el-main {
    // background: rgb(238, 240, 243);
    box-sizing: border-box;
    padding: 15px;
  }
}
Aside{
  width: 100%;
  height: 100%;
}
.el-aside{
  height: 400px;
}
</style>
