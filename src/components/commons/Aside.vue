<template>
  <div class="aside">
    <el-row class="tac" style="height:600px">
      <el-col :span="12">
        <h5>
          <i class="el-icon-picture-outline-round" font-size="30px"></i>
        </h5>
        <el-menu
          default-active="2"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b"
        >
          <el-submenu v-for="(nav,index) in navs" :index="index+''" :key="nav.id">
            <template slot="title">
              <i :class="nav.icon"></i>
              <router-link :to="nav.path" tag="span" v-text="nav.title"></router-link>
            </template>
            <el-menu-item-group>
              <el-menu-item v-for="item in nav.children" :key="item.id" :index="item.id+''">
                <template slot="title">
                  <i :class="item.icon"></i>
                  <router-link :to="item.path" tag="span" v-text="item.title"></router-link>
                </template>
              </el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  // data是函数的形式
  data() {
    return {
      navs: [
        {
          id: 1,
          path: "/home",
          title: "首页管理",
          children: [
            {
              id: 11,
              path: "/home/overview",
              title: "概况",
              icon: "el-icon-document"
            },
            {
              id: 12,
              path: "/home/statistics",
              title: "统计",
              icon: "el-icon-setting"
            },
          ]
        },
        {
          id: 2,
          path: "/good",
          title: "商品管理",
          icon: "el-icon-menu"
        }
      ]
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>
<style lang="scss" scoped>
.on {
  color: red;
}
</style>
