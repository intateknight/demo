<template>
  <div>
    <Tabbar9></Tabbar9>
    <div class="title" style="height:46px;font-size:14px;margin-top: 10px;padding: 0 40px;">
      <div style="width:90px;font-weight: 700;">GPS定位设置</div>
    </div>
    <div class="loop">
      <div class="contain" style="height:60px;font-size:14px;padding: 20px 40px;width: 100%;">
        <div>
          <span>现场巡店时，定位在</span>
          <input type="text" name="" id="" style="width: 60px;height: 28px;border-radius: 4px;border: 1px solid rgba(153, 153, 153, 1);margin: 0 8px;">
          <span>米范围内为正常状态，否则</span>
          <el-radio v-model="radio" label="1" >无法签到</el-radio>
          <el-radio v-model="radio" label="2">允许签到</el-radio>
          <span>，标记为签到/签退地址异常</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Tabbar9 from '@/components/pc/comm/tab/tabbar9.vue'
export default {
name:'ywsz',
components:{Tabbar9},
data() {
  return {
    radio: '1'
  }
},
}
</script>

<style scoped>
  .title{
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    background: #D9D9D9;
    font-weight: 700;
  }
  .contain{
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #fff;
    box-shadow: inset 0px -0.5px 0px rgba(0, 0, 0, 0.08);
  }
  div /deep/ .el-radio {
    margin-right: 0;
    font-size: 10px;
    margin-left: 3px;
  }
  div /deep/ .el-radio__label{
    font-size: 10px;
    padding-left: 3px;
  }
</style>