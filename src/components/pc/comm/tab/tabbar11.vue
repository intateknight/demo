<template>
  <div class="tabbar" style="height:60px">
    <div style="width:1150px;float: right;margin-top: 10px;margin-right: 10px;">
      <div class="right mr40" style="width:1150px;">
      <el-select v-model="type1" placeholder="请选择模板" >
        <el-option label="模板一" value="shanghai"></el-option>
        <el-option label="模板二" value="beijing"></el-option>
      </el-select>
      <el-select v-model="type2" placeholder="请选择门店" >
        <el-option label="门店一" value="shanghai"></el-option>
        <el-option label="门店二" value="beijing"></el-option>
      </el-select>
      <el-select v-model="type2" placeholder="请选择检查项" >
        <el-option label="检查项一" value="shanghai"></el-option>
        <el-option label="检查项二" value="beijing"></el-option>
      </el-select>
      <div style="display:flex">
        <el-date-picker
                style="width:300px;"
                v-model="value1"
                type="daterange"
                range-separator="-"
                start-placeholder="开始日期"
                end-placeholder="结束日期">
              </el-date-picker>
        <el-button type="primary" size="mini" class="ml20 blue">搜索</el-button>
        <el-button type="primary" icon="el-icon-upload2" size="mini" class="ml20 blue">导出</el-button>
      </div>
    </div>
  </div>
    
  </div>
</template>

<script>
export default {
  name:'tabbar11',
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
/deep/.el-range__close-icon{
  margin-bottom: 8px;
}
</style>