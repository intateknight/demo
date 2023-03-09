<template>
  <div class="avue-sidebar">
    <!-- logo -->
    <div class="logo" @click="push('/indexpc')">
      <img src="@/assets/pc/img/Frame.png" alt="" class="logopic">
      <div class="title">夸克微督导</div>
    </div>
    <!-- 左侧菜单 -->
    <el-menu
      unique-opened
      class="el-menu-vertical-demo"
      text-color="#fff">

     
      <!-- <el-menu-item index="1">
        <i class="el-icon-menu"></i>
        <span slot="title">首页</span>
      </el-menu-item> -->
 
    
      <el-menu-item index="1" @click="push('/indexpc')">
        <i class="el-icon-s-grid"></i>
        <span slot="title">检查模板</span>
      </el-menu-item>


      <el-menu-item index="2" @click="push('/indexpc/mdrw')">
        <i class="el-icon-document"></i>
        <span slot="title">门店任务</span>
      </el-menu-item>
      
      <el-menu-item index="3" @click="push('/indexpc/mdbg')">
        <i class="el-icon-s-order"></i>
        <span slot="title">门店报告</span>
      </el-menu-item>

      <el-menu-item index="4" @click="push('/indexpc/qdsj')">
        <i class="el-icon-coin"></i>
        <span slot="title">签到数据</span>
      </el-menu-item>

      <el-menu-item index="5" @click="push('/indexpc/zgwt')">
        <i class="el-icon-notebook-2"></i>
        <span slot="title">整改问题</span>
      </el-menu-item>

      <el-submenu index="6" >
        <template slot="title" >
          <i class="el-icon-user-solid"></i>
          <span slot="title">督导管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="6-1" class="liitem" @click="push('/indexpc/mdgl')">门店管理</el-menu-item>
          <el-menu-item index="6-2" class="liitem" @click="push('/indexpc/yhgl')">用户管理</el-menu-item>
          <el-menu-item index="6-3" class="liitem" @click="push('/indexpc/jsgl')">角色管理</el-menu-item>
          <el-menu-item index="6-4" class="liitem" @click="push('/indexpc/jKgl')">监控管理</el-menu-item>
          <el-menu-item index="6-5" class="liitem" @click="push('/indexpc/ywsz')">业务设置</el-menu-item>
        </el-menu-item-group>
      </el-submenu>

      <el-submenu index="7">
        <template slot="title">
          <i class="el-icon-pie-chart"></i>
          <span slot="title">数据分析</span>
        </template>
        <el-menu-item-group>
            <el-menu-item index="7-1" class="liitem" @click="push('/indexpc/ztfx')">总体分析</el-menu-item>
            <el-menu-item index="7-2" class="liitem" @click="push('/indexpc/dfph')">得分排行</el-menu-item>
            <el-menu-item index="7-3" class="liitem" @click="push('/indexpc/zgph')">整改排行</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
  </div>
</template>
 
<script>
  export default {
    name: "left",
    data() {
      return {
        changecolor:'changecolor',
        isflase:true
      };
    },
    methods: {
      push(x){
        this.$router.push(x)
      }
    },
  }
</script>
 
<style>
 .avue-sidebar{
  width: 200px;
  height: 100vh;
  background-color: #02111F;
 }
 .logo{
  box-sizing: border-box;
  display: flex;
  width: 100%;
  height: 80px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-weight: 700;
  color: #ffffff;
  border: 0;
  cursor: pointer;
 }
 .logopic{
  width: 20px;
  height: 20px;
 }
 .avue-sidebar{
  background-color: #02111F;
  font-size: 16px;
 }
 .el-submenu__title i{
  font-weight: 700;
  color: #fff;
 }
 .el-menu{
  background-color: #02111F;
 }
 .el-menu-item.is-active {
    outline: none;
    background-color: #0B5193;
}
.el-menu-item:hover {
    outline: 0;
    background-color:#0B5193 ;
}
.el-submenu__title:hover,.el-submenu__title.is-active{
    background-color:#0B5193  ;
}
.liitem{
  background-color: #4383BF;
}
.el-menu-item-group__title{
  padding: 0;
}
.el-menu{
  border: 0;
}
</style>