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

     <div style="margin-top: 12px;">
       <van-form @submit="onSubmit">
         
        <div  class="van-cell van-field" v-for="item in list" :key="item.id" @click="changetype(item.id)" style="height: 60px;">
          <div class="van-cell__title van-field__label" style="padding-top: 10px">
            <span>{{ item.txt }}</span>
          </div>
          <div class="van-cell__value van-field__value" style="float: right;padding-right: 30px;padding-top: 10px">
            <van-icon name="success"  v-if="item.type == 1" size="20" color="#0B5193"/>
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
name:'bjmbpe',
data() {
 return {
   username: '',
   list:[
    {
      id:'1',
      txt:'所有门店',
      type:'1'
    },
    {
      id:'2',
      txt:'某某门店',
      type:'0'
    },
    {
      id:'3',
      txt:'某某门店',
      type:'0'
    },
    {
      id:'4',
      txt:'某某门店',
      type:'0'
    },
    {
      id:'5',
      txt:'某某门店',
      type:'0'
    },
    {
      id:'6',
      txt:'某某门店',
      type:'0'
    },
    {
      id:'7',
      txt:'某某门店',
      type:'0'
    },

  ]
 }
},
methods: {
 goback(){
   this.$router.go(-1)
 },
 onSubmit(values) {
     console.log('submit', values);
     this.goback(-1)
 },
 changetype(x){
  if(this.list[x-1].id == 1){
    if(this.list[0].type == 0){
    for(var i =1;i<this.list.length;i++){
      this.list[i].type = 0
    }
    this.list[0].type = 1}
    else{
      this.list[0].type =0
    }
  }else{
    if(this.list[x-1].type == 0){
      this.list[0].type = 0
      this.list[x-1].type = 1
    }else{
      this.list[x-1].type = 0
    }
  }
 }
},
}
</script>

<style scoped>
  div /deep/.van-field__control::placeholder{
  text-align: right;
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