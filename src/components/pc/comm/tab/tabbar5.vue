<template>
  <div class="tabbar" style="height:60px">
    <div style="width:730px;float: right;margin-top: 10px;margin-right: 10px;">
      <div class="right mr40" style="width:730px;">
        <div style="display:flex">
<<<<<<< HEAD
          <el-input v-model="name" placeholder="巡店员姓名" ></el-input>
          <el-button type="primary" size="mini" class="ml20 blue">搜索</el-button>
          <el-button type="primary" size="mini" class="ml20 blue">设置选中门店权限</el-button>
          <el-button type="primary" size="mini" class="ml20 blue">设置全部门店权限</el-button>
=======
          <el-input v-model="name" placeholder="门店名称" ></el-input>
          <el-button type="primary" size="mini" class="ml20 blue">搜索</el-button>
          <!-- <el-button type="primary" size="mini" class="ml20 blue">设置选中门店权限</el-button>
          <el-button type="primary" size="mini" class="ml20 blue">设置全部门店权限</el-button> -->
>>>>>>> e90c7b4 (暂存)
        </div>
    </div>
  </div>
    
  </div>
</template>

<script>
export default {
  name:'tabbar5',
  data() {
    return {
      type:'',
      type1:'',
      type2:'',
      name:'',
      value1:''
    }
  },
}
</script>

<style lang="less" scoped>
  .tabbar{
    width: 100%;
    background-color: #fff;
    margin-top: 8px;
  }
  .el-button--mini{
    padding: 5px 13px;
}
  .el-button--mini {
    font-size: 12px;
}
 .ml40{
    margin-left: 28px;
}
.ml20{
    margin-left: 14px;
}
.mr40{
  margin-right: 28px;
}
  .el-button--info {
    background-color: #A1A9AF;
    border-color: #A1A9AF;
}
.el-button--info:focus,.el-button--info:hover {
    background: #0B5193;
    border-color: #0B5193;
}
.right{
  display: flex;
  height: 28px;
  align-items: center;
  justify-content:space-between;
}
.blue{
  background-color: #0B5193;
  border-color: #0B5193;
}
.blue:hover{
  background-color: #0b3893;
  border-color: #0b3893;
}
div /deep/.el-input__inner{
  width: 140px;
  height: 26px;
  font-size: 12px;
  color: #8E8E93;
}
div /deep/.el-input__icon{
  line-height: 28px;
}




.colorblue{
  background-color:  #0B5193;
  border-color:  #0B5193;
}
.bodercolor{
  border-color: #0B5193;
  color: #0B5193;
}
.btn{
  width: 44px;
  height: 22px;
  padding: 0;
  line-height: 0;
}
.el-checkbox{
  margin-right: 1.8rem;
}
div /deep/.el-form-item__label{
    font-size: 12px;
  }
div /deep/ .el-range__icon{
  margin-bottom: 8px;
  float: right;
}
div /deep/.el-range-separator{
  margin-bottom: 18px;
}
.el-range-separator{
  margin-top: 0;
}
</style>