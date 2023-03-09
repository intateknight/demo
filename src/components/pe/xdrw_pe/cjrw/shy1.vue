<template>
  <div>
   <div style="height: 100vh;background-color: #EBEBEB;width: 100%;">
     <div style="width: 100%;height: 100px;background-color: #fff;padding-top: 50px;box-sizing: border-box;">
         <van-nav-bar
           title=""
           left-arrow
           :border="false"
           @click-left="goback()"
         />
     </div>

     <div >
       <van-form @submit="onSubmit">
        <div  class="van-cell van-field"   style="height: 60px;">
          <van-search v-model="search" placeholder="门店名称" @search="onSearch" style="width:100%"/>
        </div>


        <div  class="van-cell van-field"   style="height: 60px;">
          <div class="van-cell__title van-field__label" style="padding-top: 10px;display: flex;align-items: center;">
            <img src="@/assets/patrol/jcmb/Ellipse 3.png" alt="" >
            <div style="font-size: 16px;font-weight: 700;margin-left: 12px;">门店</div>
          </div>
        </div>
         
        <div  class="van-cell van-field" v-for="item in list" :key="item.id" style="height: 60px;" @click="push('/indexpe/shy2')">
          <div class="van-cell__title van-field__label" style="padding-top: 10px">
            <span>{{ item.txt }}</span>
          </div>
          <div class="van-cell__value van-field__value" style="padding-right: 30px;padding-top: 10px">
            <!-- <van-checkbox v-model="item.checked" style="justify-content: end;" checked-color="#0B5193" @click="itemcheck()"></van-checkbox> -->
            <van-icon name="arrow" size="16"/>
          </div>
        </div>


        <div class="foot" style="position: fixed;bottom: 0;width: 100%;background-color: #fff;">
          <div style="margin: 16px;">
            <van-button round block type="info" native-type="submit" color="#0B5193">确定</van-button>
          </div>
          <div style="height: 50px;">
          </div>
        </div>
       </van-form>
     </div>

     
   </div>
  </div>
</template>
<script>

export default {
name:'shy1',
data() {
 return {
   username: '',
   search:'',
   checked: false,
   all:'',
   checkeditem:[],
   list:[
    {
      id:'1',
      txt:'某某门店',
      checked:false
    },
    {
      id:'2',
      txt:'某某门店',
      checked:false
    },
    {
      id:'3',
      txt:'某某门店',
      checked:false
    },
    {
      id:'4',
      txt:'某某门店',
      checked:false
    },
    {
      id:'5',
      txt:'某某门店',
      checked:false
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
 onSubmit(values) {
     console.log('submit', values);
     this.goback(-1)
 },
 allcheck(){
  for(var i=0;i<this.list.length;i++){
    this.list[i].checked = this.checked
  }
  if(this.checked == true){
    this.all = this.list.length
  }else{
    this.all = 0
  }
 },
 push(x){
  this.$router.push(x)
 },
},
}
</script>

<style scoped>
  div /deep/.van-field__control::placeholder{
  margin-right: 30px;
  }
  .item{
    box-sizing: border-box;
    width: 100%;
    padding: 0.26667rem 0.42667rem;
    overflow: hidden;
    color: #323233;
    font-size: 0.37333rem;
    line-height: 0.64rem;
    background-color: #fff;
  }


</style>