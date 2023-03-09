<template>
  <div>
    <div class="fixed">
      <div style="margin-top: 50px;">
        <van-nav-bar
          title="门店列表"
          left-arrow
          :border="false"
          @click-left="goback()"
        />
      </div>

      <div class="search">
        <van-search
          v-model="value"
          show-action
          placeholder="门店名称"
          @search="onSearch"
        >
        <template #action>
          <div @click="onSearch">搜索</div>
        </template>
        </van-search>
      </div>
    </div> 

    <div class="blank"></div>
    <div class="bg">
      <div class="list" v-for="item in list" :key="item.id">
        <div  style="margin-right: 12px;">
          <div style="font-size: 16px;font-weight: 700;">{{ item.name }}</div>
          <div style="font-size: 14px;color: #666666;margin-top: 4px;">{{ item.address }}</div>
        </div>
        <div>
          <van-button color="#0B5193" style="width: 88px;height: 38px;" @click="push('/indexpe/ksxd')">巡店</van-button>
        </div>
      </div>
    </div>
    <div class="blank2"></div>

    <van-tabbar></van-tabbar>
  </div>
</template>

<script>      
export default {
 name:'mdlb',
 data() {
  return {
    value: '',
    show:false,
    list:[
      {
        id:1,
        name:'门店名字',
        address:'门店详细地址门店详细地址门店详细地址'
      },
      {
        id:2,
        name:'门店名字',
        address:'门店详细地址门店详细地址门店详细地址'
      },
      {
        id:3,
        name:'门店名字',
        address:'门店详细地址门店详细地址门店详细地址'
      },
      {
        id:4,
        name:'门店名字',
        address:'门店详细地址门店详细地址门店详细地址'
      },
      {
        id:5,
        name:'门店名字',
        address:'门店详细地址门店详细地址门店详细地址'
      },
      {
        id:6,
        name:'门店名字',
        address:'门店详细地址门店详细地址门店详细地址'
      },
    ]
  }
 },
 methods: {
  goback(){
    this.$router.go(-1)
  },
  onSearch(val) {
      console.log(val);
  },
  push(x){
    this.$router.push(x)
  }
 },
}
</script>

<style scoped>
  .fixed{
    width: 100%;
    height: 150px;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1;
    background-color: #fff;
  }
  .search{
    display:flex;
    align-items: center;
    justify-content: space-between;
    /* padding-right: 25px; */
  }
  .van-search__action{
    box-sizing: border-box;
    width: 68px;
    text-align: center;
    background-color: #0B5193;
    border-top-right-radius: 8px;
    border-bottom-right-radius: 8px;
    color: #fff;
  }
  .van-search{
    width: 94%;
  }
  .van-search__content{
    border-radius: 0;
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
  }
  .van-icon-plus{
    font-weight: 700;
    font-size: 16px;
    color: #0B5193;
  }
  
  .bg{
    width: 100%;
    background-color: #fcfcfc;
    /* background-color: #050505; */
    min-height: 80vh;
    overflow:hidden;
  }
  .list{
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 12px;
    margin: 12px 14px;
    background-color: #fff;
    height: 106px;
  }
  
  .mt52{
    margin-top: 52px;
  }
  .blank{
  width: 100%;
  height: 160px;
  background-color: #fcfcfc;
  }
  .blank2{
  width: 100%;
  height: 60px;
  background-color: #fcfcfc;
 }
 div /deep/ .van-nav-bar__title{
  font-weight: 700;
 }
</style>