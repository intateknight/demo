<template>
  <div class="top">
    <div class="top-right">
      <img src="@/assets/pc/img/Frame 874.png" alt="" class="top-right-img">
      <div class="top-right-text">
        <p class="top-right-name">姓名文本</p>
        <p class="top-right-job">检查员&负责人</p>
      </div>
      <i class="el-icon-arrow-down"></i>
    </div>
  </div>
</template>

<script>
export default {
  name:'top'
}
</script>

<style scoped>
  *{
    margin: 0;
    padding: 0;
  }
  .top{
    background-color: #fff;
    width: 100%;
    height: 70px;
  }
  .top-right{
    width: 154px;
    height: 38px;
    float: right;
    display: flex;
    margin-top: 16px;
    margin-right: 27px;
    align-items: center;
    justify-content:space-between;
    cursor: pointer;
  }
  .top-right-img{
    width: 28px;
    height: 28px;
  }
  .top-right-name{
    font-family: 'PingFang SC';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
  }
  .top-right-job{
    font-family: 'PingFang SC';
    font-style: normal;
    font-weight: 700;
    font-size: 12px;
    color: rgba(11, 81, 147, 1);
  }
  .el-icon-arrow-down{
    font-weight: 700;
    font-size: 16px;
  }
</style>