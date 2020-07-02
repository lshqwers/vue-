<template>
  <div class="content">
    <router-view></router-view>
    <!-- 筛选 -->
    <div class="filter">
      <el-row type="flex" align="middle" style="padding: 0px">
        <el-col :span="3">
          <span>品类筛选：</span>
        </el-col>
        <el-col :span="7">
          <el-select v-model="cate" placeholder="请选择">
            <el-option
              v-for="item in cates"
              :key="item.id"
              :label="item.cate_zh"
              :value="item.cate"
            ></el-option>
          </el-select>
        </el-col>
      </el-row>
    </div>
    <div class="gj"> 
    <el-upload
      class="avatar-uploader"
      action="https://jsonplaceholder.typicode.com/posts/"
      :show-file-list="false"
      :on-success="handleAvatarSuccess"
      :before-upload="beforeAvatarUpload">
      <img v-if="imageUrl" :src="imageUrl" class="avatar">
      <i v-else class="el-icon-plus avatar-uploader-icon"></i>
    </el-upload>
    <el-input
        style="width:150px"
        placeholder="请输入名称"
        v-model="input0"
        clearable>
      </el-input>
    <el-input
        style="width:150px"
        placeholder="商品描述"
        v-model="input1"
        clearable>
      </el-input>
       <el-input
      style="width:150px"
      placeholder="请输入价格"
      v-model="input2"
      clearable>
     </el-input>
       <el-input
      style="width:150px"
      placeholder="品类"
      v-model="input3"
      clearable>
     </el-input>
       <el-input
      style="width:120px"
      placeholder="是否热销"
      v-model="input4"
      clearable>
     </el-input>
    <button 
    style="width:50px;height:40px;text-align:center;padding-right:20x;margin-top: 30px;"
    @click="addtoall">
    添加</button>
    </div>
    <el-table :data="list1" border style="width:972px">
      <el-table-column fixed prop="name" label="商品名称" width="150" align="center"></el-table-column>
      <el-table-column prop="name" label="图片" align="center" width="150">
         <template slot-scope="scope">
          <img class="img" :src="scope.row.img">
        </template>
      </el-table-column>
      <el-table-column prop="cate" align="center" label="品类" width="100"></el-table-column>
      <el-table-column prop="price" label="价格" align="center" width="100">
        <template slot-scope='scope'>
          <span v-text='"￥"+scope.row.price'></span>
        </template>
      </el-table-column>
      <el-table-column prop="create_time" label="上架时间" align="center" width="150"></el-table-column>
      <el-table-column prop="hot" label="是否热销" width="170"  align="center">
        <template slot-scope='scope'>
          <span v-text='scope.row.hot ? "是" : "否"'></span>
        </template>
      </el-table-column>
      <el-table-column  label="操作" width="150">
        <template slot-scope="scope">  
          <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
          <el-button type="text" size="small" @click="add()">编辑</el-button>
          <el-button type="text" size="small"  @click="del(scope.row)">刪除</el-button>
        </template>
      </el-table-column>
    </el-table>
        <!-- 分页 -->
    <el-pagination
      style="padding:20px;float:right;margin-right:200px"
      @current-change="currentChange"
      :current-page='page'
      background
      layout="prev, pager, next"
      :total="100">
      </el-pagination>
  </div>
</template>

<script>
// 引入moment的时间的插件
import moment from 'moment'
export default {
  data() {
    return {
      // cate: "全部的分类",
      cate:'',
      cates: [],
      list1: [],
      page: 1,
      id:'',
      size:5,
      imageUrl: '',
      input0:'',
      input1: '',
      input2: '',
      input3: '',
      input4: '',
      tableData: [
        {
         
        }
      ]
    };
  },
  watch: {
    cate: function() {
      this.page = 1
      this.getHotGoodLists()
    }
  },
  methods: {
    handleClick(row) {
        console.log(row,'121221');
    },
    // 删除接口
    del(ids){
         const params = {
           id:ids['_id']
         }
          this.$http.del(params).then(res=>{
            this.list1=res
            console.log(res,'2')
          })
          // 删除之后,重新调接口
          this.getHotGoodLists()
    },
    // 获取商品列表的接口
    getHotGoodLists() {
      const params = {
        hot: false,
        page: this.page,
        size: this.size,
        cate: this.cate
      };
      this.$http.getHotGoodLists(params).then(res => {
        res.map((ele,idx)=>{
          res[idx].create_time=moment(ele.create_time).format('HH:mm:ss')
        })
        this.list1 = res; //后面没有打印res是没有结果,是undefined
        console.log(res);
      });
    },
    // 添加商品的接口
    add(data){
        this.$http.add(data).then(res=>{
          console.log(res)
        })
    },
    //  console.log(this.input1,this.input2,this.input3,this.input4,'22')
    // 点击添加的接口
    addtoall(){
       const prices=parseInt(this.input2)
       const data={
          name:this.input0,     // 商品名称
          img:'https://img13.360buyimg.com/n1/jfs/t6094/107/710811867/382815/4d54717/592bf165N755a88f0.jpg',      
          desc:this.input1,     // 商品描述
          price:prices,         // 价格
          cate: this.input3,    // 品类
          hot: false,           // 是否推荐
          // id: String,        // 非必填(当id存在时为修改,否则为添加)
        }
     this.add(data);
     this.getHotGoodLists()
    },
    // 方法名必须是驼峰命名法
    currentChange(page){
      this.page=page;
      this.getHotGoodLists(page)
      console.log(this.page,page)
    },
     handleAvatarSuccess(res, file) {
        this.imageUrl = URL.createObjectURL(file.raw);
      },
      beforeAvatarUpload(file) {
        const isJPG = file.type === 'image/jpeg';
        const isLt2M = file.size / 1024 / 1024 < 2;

        if (!isJPG) {
          this.$message.error('上传头像图片只能是 JPG 格式!');
        }
        if (!isLt2M) {
          this.$message.error('上传头像图片大小不能超过 2MB!');
        }
        return isJPG && isLt2M;
      }
  },
  mounted() {
    // this.getAllCates();
      this.$http.getAllCates({}).then(res => {
         res.unshift({cate:'',cate_zh:'全部品类'})
        this.cates = res;
      })
    this.getHotGoodLists();
    console.log("商品1", this.getHotGoodLists());
    // this.del()
  }
};
</script>

<style lang="css" scoped>
/* 
  筛选用栅格系统
  移动端要快
  post请求用data
  get请求是params
  method
  要考虑初始化页
  页面的访问都需要配路由
  有token,可以进入首页
  token 存储用户信息,  token  local   拿token得到用户信息,根据用户信息判断token正确,
  如果失败,前端收到
  token有效时间
  刷新token接口
  refreshToken  
  sin
  多重筛选(后端)
 */
.img{
  width: 100px;
  height: 100px;
  display: inline-block;
}
 /* 上传图片 */
  .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 100px;
    height: 100px;
    line-height: 100px;
    text-align: center;
  }
  .avatar {
    width: 100px;
    height: 100px;
    display: block;
  }
  .gj{
    display: flex;
  }
  .el-input{
    line-height: 100px;
  }
</style>
