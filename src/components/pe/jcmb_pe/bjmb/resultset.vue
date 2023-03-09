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
        <div>
        <div  class="van-cell van-field">
          <div class="van-cell__title van-field__label">
            <span>优秀</span>
          </div>
        </div>

        <div  class="van-cell van-field">
          <div class="van-cell__title van-field__label">
            <span>允许修改</span>
          </div>
          <div class="van-cell__value van-field__value" style="float: right;padding-right: 30px;">
            <van-switch v-model="switchChecked" size="20" active-color="#0B5193" />
          </div>
        </div>

        <div  class="van-cell van-field">
          <div class="van-cell__title van-field__label">
            <span>必填</span>
          </div>
          <div class="van-cell__value van-field__value" style="float: right;padding-right: 30px;">
            <van-switch v-model="switchChecked" size="20" active-color="#0B5193" />
          </div>
        </div>
         
        <div  class="van-cell van-field">
          <div class="van-cell__title van-field__label">
            <span>奖励</span>
          </div>
          <div class="van-cell__value van-field__value" style="float: right;padding-right: 30px;">
            <div>
              <input type="text" placeholder="点击输入"  style="width:60px;display:inline-block;padding-left: 6px;text-align: center;" >
              <span style="color: #333333;">—</span>
              <input type="text" placeholder="点击输入"  style="width:60px;display:inline-block;padding-left: 6px;text-align: center;" >
              <span style="color: #333333;">元</span>
            </div>
          </div>
        </div>
        </div>
        
        <div style="margin-top: 12px;">
        <div  class="van-cell van-field">
          <div class="van-cell__title van-field__label">
            <span>合格</span>
          </div>
        </div>

        <div  class="van-cell van-field">
          <div class="van-cell__title van-field__label">
            <span>允许修改</span>
          </div>
          <div class="van-cell__value van-field__value" style="float: right;padding-right: 30px;">
            <van-switch v-model="switchChecked" size="20" active-color="#0B5193" />
          </div>
        </div>

        <div  class="van-cell van-field">
          <div class="van-cell__title van-field__label">
            <span>必填</span>
          </div>
          <div class="van-cell__value van-field__value" style="float: right;padding-right: 30px;">
            <van-switch v-model="switchChecked" size="20" active-color="#0B5193" />
          </div>
        </div>
         
        <div  class="van-cell van-field">
          <div class="van-cell__title van-field__label">
            <span>奖励</span>
          </div>
          <div class="van-cell__value van-field__value" style="float: right;padding-right: 30px;">
            <div>
              <input type="text" placeholder="点击输入"  style="width:60px;display:inline-block;padding-left: 6px;text-align: center;" >
              <span style="color: #333333;">—</span>
              <input type="text" placeholder="点击输入"  style="width:60px;display:inline-block;padding-left: 6px;text-align: center;" >
              <span style="color: #333333;">元</span>
            </div>
          </div>
        </div>
        </div>

        <div style="margin-top: 12px;">
        <div  class="van-cell van-field">
          <div class="van-cell__title van-field__label">
            <span>不合格</span>
          </div>
        </div>

        <div  class="van-cell van-field">
          <div class="van-cell__title van-field__label">
            <span>允许修改</span>
          </div>
          <div class="van-cell__value van-field__value" style="float: right;padding-right: 30px;">
            <van-switch v-model="switchChecked" size="20" active-color="#0B5193" />
          </div>
        </div>

        <div  class="van-cell van-field">
          <div class="van-cell__title van-field__label">
            <span>必填</span>
          </div>
          <div class="van-cell__value van-field__value" style="float: right;padding-right: 30px;">
            <van-switch v-model="switchChecked" size="20" active-color="#0B5193" />
          </div>
        </div>
         
        <div  class="van-cell van-field">
          <div class="van-cell__title van-field__label">
            <span>惩罚</span>
          </div>
          <div class="van-cell__value van-field__value" style="float: right;padding-right: 30px;">
            <div>
              <input type="text" placeholder="点击输入"  style="width:60px;display:inline-block;padding-left: 6px;text-align: center;" >
              <span style="color: #333333;">—</span>
              <input type="text" placeholder="点击输入"  style="width:60px;display:inline-block;padding-left: 6px;text-align: center;" >
              <span style="color: #333333;">元</span>
            </div>
          </div>
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
name:'resultset',
data() {
 return {
   username: '',
   switchChecked: false,
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
  input{
				border: none;	 
			}

</style>