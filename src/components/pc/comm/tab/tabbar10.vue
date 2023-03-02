<template>
  <div class="tabbar" style="height:60px;display: flex;">
    <div class="left">
      <button class="colorblue" @click="change(),change1(),push('/indexpc/ztfx')" ref="btn1" style="width:100px;height:36px;margin-left:40px;font-size: 16px;">巡店分析</button>
      <button class="colorgrey" @click="change(),change2(),push('/indexpc/ztfx/zjfx')" ref="btn2" style="width:100px;height:36px;margin-left:40px;font-size: 16px;">自检分析</button>
    </div>
    <div>
    <div style="float: right;margin-right: 10px;">
      <div class="right mr40" >
      <el-select v-model="type1" placeholder="请选择门店"  style="margin-right: 20px;">
        <el-option label="门店一" value="shanghai"></el-option>
        <el-option label="门店二" value="beijing"></el-option>
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
  </div>
</template>

<script>
export default {
  name:'tabbar10',
  data() {
    return {
      type:'',
      type1:'',
      type2:'',
      name:'',
      value1:''
    }
  },
  methods: {
    push(x){
      this.$router.push(x)
    },
    change(){
      this.$refs.btn1.className = 'colorgrey'
      this.$refs.btn2.className = 'colorgrey'
    },
    change1(){
      this.$refs.btn1.className = 'colorblue'
    },
    change2(){
      this.$refs.btn2.className = 'colorblue'
    },
  },
}
</script>

<style lang="less" scoped>
  .tabbar{
    width: 100%;
    background-color: #fff;
    margin-top: 8px;
    align-items: center;
    justify-content:space-between;
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
.colorgrey{
  background-color:  #A1A9AF;
  border: 1px solid #A1A9AF;
  border-radius: 4px;
  color: #FFFFFF;
  font-weight: 700;
}
.colorblue{
  background-color:  #0B5193;
  border: 1px solid #0B5193;
  border-radius: 4px;
  color: #FFFFFF;
  font-weight: 700;
}
/deep/.el-range__close-icon{
  margin-bottom: 8px;
}
</style>