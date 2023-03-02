<<<<<<< HEAD
<template>
  <div>
   <div style="height: 100vh;background-color: #EBEBEB;width: 100%;">
     <div style="width: 100%;height: 100px;background-color: #fff;padding-top: 50px;box-sizing: border-box;">
         <van-nav-bar
           title="创建任务"
           left-arrow
           :border="false"
           @click-left="goback()"
         />
     </div>

     <div style="margin-top: 20px;">
       <van-form @submit="onSubmit">
        <van-field
           readonly
           clickable
           :value="value"
           name="任务类型"
           label="任务类型"
           placeholder-class="placlass"
           placeholder="点击设置 ＞"
           @click="showPicker = true"
         />
         <van-popup v-model="showPicker" round position="bottom">
            <van-picker
              show-toolbar
              :columns="columns"
              @cancel="showPicker = false"
              @confirm="onConfirm"
            />
        </van-popup>

         <van-field
           v-model="username"
           name="任务名称"
           label="任务名称"
           placeholder-class="placlass"
           placeholder="点击输入"
           :rules="[{ required: true, message: '请输入任务名' }]"
         />
        
         <van-field
           readonly
           clickable
           :value="value2"
           name="检查模板"
           label="检查模板"
           placeholder-class="placlass"
           placeholder="点击设置 ＞"
           @click="showPicker2 = true"
         />
         <van-popup v-model="showPicker2" round position="bottom">
            <van-picker
              show-toolbar
              :columns="columns2"
              @cancel="showPicker2 = false"
              @confirm="onConfirm2"
            />
        </van-popup>

        <van-field
           readonly
           clickable
           v-model="shop"
           name="门店范围"
           label="门店范围"
           placeholder-class="placlass"
           placeholder="点击设置 ＞"
           @click="push('/indexpe/mdfw')"
         />

         <van-field
           readonly
           clickable
           v-model="shop"
           name="指定店员"
           label="指定店员"
           placeholder-class="placlass"
           placeholder="点击设置 ＞"
           @click="push('/indexpe/zddy1')"
         />

         <van-field
           readonly
           clickable
           v-model="shop"
           name="审核员"
           label="审核员"
           placeholder-class="placlass"
           placeholder="点击设置 ＞"
           @click="push('/indexpe/shy1')"
         />

         <van-field
           readonly
           clickable
           :value="value4"
           label="有效期"
           placeholder-class="placlass"
           placeholder="点击设置 ＞"
           style="margin-top: 20px;"
           @click="showPicker4 = true"
         />
         <van-popup v-model="showPicker4" position="bottom">
            <van-datetime-picker
              title="选择有效期"
              type="data"
              :columns-order="['year','month', 'day','hour','minute' ]"
              :formatter="formatter"
              @confirm="onConfirm4"
              @cancel="showPicker4 = false"
            />
         </van-popup>

        <van-field name="radio" label="单选框">
          <template #input>
            <van-radio-group v-model="radio" direction="horizontal">
              <van-radio name="1" checked-color="#0B5193">单次任务</van-radio>
              <van-radio name="2" checked-color="#0B5193">循环任务</van-radio>
            </van-radio-group>
          </template>
        </van-field>

        <van-field
           readonly
           clickable
           :value="value3"
           name="设置提醒"
           label="设置提醒"
           placeholder-class="placlass"
           placeholder="点击设置 ＞"
           @click="showPicker3 = true"
        />
        <van-popup v-model="showPicker3" round position="bottom">
            <van-picker
              show-toolbar
              :columns="columns3"
              @cancel="showPicker3 = false"
              @confirm="onConfirm3"
            />
        </van-popup>

        <van-field
           v-model="txt"
           name="任务说明"
           label="任务说明"
           placeholder-class="placlass"
           placeholder="点击输入"
           style="margin-top: 20px;"
         />
        
        <div class="foot" style="position: fixed;bottom: 0;width: 100%;background-color: #fff;">
          <div style="margin: 16px;">
            <van-button round block type="info" native-type="submit" color="#0B5193">保存</van-button>
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
name:'cjrw',
data() {
 return {
  //  currentDate: new Date(),
   username: '',
   txt:'',
   radio: '1',
   shop:'',
   value: '',
   value2:'',
   value3:'',
   value4:'',
   showPicker: false,
   showPicker2: false,
   showPicker3: false,
   showPicker4: false,
   columns: ['巡店任务', '自检任务'],
   columns2: ['店员', '督导','店长'],
   columns3: ['任务开始时', '截止前一天','指定日期提前','完成前每日定时提前'],
 }
},
methods: {
 goback(){
   this.$router.go(-1)
 },
 onSubmit(values) {
     console.log('submit', values);
     this.push('/indexpe/bjmbpe2')
 },
 push(x){
  this.$router.push(x)
 },
 onConfirm(value) {
  this.value = value;
  this.showPicker = false;
  },
  onConfirm2(value) {
  this.value2 = value;
  this.showPicker2 = false;
  },
  onConfirm3(value) {
  this.value3 = value;
  this.showPicker3 = false;
  },
  onConfirm4(time) {
  this.value4 = time.toLocaleString();
  this.showPicker4 = false;
  },
  formatter(type, val) {
      if (type === 'year') {
        return val + '年';
      }
      if (type === 'month') {
        return val + '月';
      }
      if (type === 'day') {
        return val + '日';
      }
      if (type === 'hour') {
        return val + '时';
      }
      if (type === 'minute') {
        return val + '分';
      }
      return val;
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
  div /deep/ .van-nav-bar__title{
  font-weight: 700;
  }
  div /deep/.van-field__label{
    margin-right: 1.32rem;
  }
=======
<template>
  <div>
   <div style="height: 100vh;background-color: #EBEBEB;width: 100%;">
     <div style="width: 100%;height: 100px;background-color: #fff;padding-top: 50px;box-sizing: border-box;">
         <van-nav-bar
           title="创建任务"
           left-arrow
           :border="false"
           @click-left="goback()"
         />
     </div>

     <div style="margin-top: 20px;">
       <van-form @submit="onSubmit">
        <van-field
           readonly
           clickable
           :value="value"
           name="任务类型"
           label="任务类型"
           placeholder-class="placlass"
           placeholder="点击设置 ＞"
           @click="showPicker = true"
         />
         <van-popup v-model="showPicker" round position="bottom">
            <van-picker
              show-toolbar
              :columns="columns"
              @cancel="showPicker = false"
              @confirm="onConfirm"
            />
        </van-popup>

         <van-field
           v-model="username"
           name="任务名称"
           label="任务名称"
           placeholder-class="placlass"
           placeholder="点击输入"
           :rules="[{ required: true, message: '请输入任务名' }]"
         />
        
         <van-field
           readonly
           clickable
           :value="value2"
           name="检查模板"
           label="检查模板"
           placeholder-class="placlass"
           placeholder="点击设置 ＞"
           @click="showPicker2 = true"
         />
         <van-popup v-model="showPicker2" round position="bottom">
            <van-picker
              show-toolbar
              :columns="columns2"
              @cancel="showPicker2 = false"
              @confirm="onConfirm2"
            />
        </van-popup>

        <van-field
           readonly
           clickable
           v-model="shop"
           name="门店范围"
           label="门店范围"
           placeholder-class="placlass"
           placeholder="点击设置 ＞"
           @click="push('/indexpe/mdfw')"
         />

         <van-field
           readonly
           clickable
           v-model="shop"
           name="指定店员"
           label="指定店员"
           placeholder-class="placlass"
           placeholder="点击设置 ＞"
           @click="push('/indexpe/zddy1')"
         />

         <van-field
           readonly
           clickable
           v-model="shop"
           name="审核员"
           label="审核员"
           placeholder-class="placlass"
           placeholder="点击设置 ＞"
           @click="push('/indexpe/shy1')"
         />

         <van-field
           readonly
           clickable
           :value="value4"
           label="有效期"
           placeholder-class="placlass"
           placeholder="点击设置 ＞"
           style="margin-top: 20px;"
           @click="showPicker4 = true"
         />
         <van-popup v-model="showPicker4" position="bottom">
            <van-datetime-picker
              title="选择有效期"
              type="data"
              :columns-order="['year','month', 'day','hour','minute' ]"
              :formatter="formatter"
              @confirm="onConfirm4"
              @cancel="showPicker4 = false"
            />
         </van-popup>

        <van-field name="radio" label="单选框">
          <template #input>
            <van-radio-group v-model="radio" direction="horizontal">
              <van-radio name="1" checked-color="#0B5193">单次任务</van-radio>
              <van-radio name="2" checked-color="#0B5193">循环任务</van-radio>
            </van-radio-group>
          </template>
        </van-field>

        <van-field
           readonly
           clickable
           :value="value3"
           name="设置提醒"
           label="设置提醒"
           placeholder-class="placlass"
           placeholder="点击设置 ＞"
           @click="showPicker3 = true"
        />
        <van-popup v-model="showPicker3" round position="bottom">
            <van-picker
              show-toolbar
              :columns="columns3"
              @cancel="showPicker3 = false"
              @confirm="onConfirm3"
            />
        </van-popup>

        <van-field
           v-model="txt"
           name="任务说明"
           label="任务说明"
           placeholder-class="placlass"
           placeholder="点击输入"
           style="margin-top: 20px;"
         />
        
        <div class="foot" style="position: fixed;bottom: 0;width: 100%;background-color: #fff;">
          <div style="margin: 16px;">
            <van-button round block type="info" native-type="submit" color="#0B5193">保存</van-button>
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
name:'cjrw',
data() {
 return {
  //  currentDate: new Date(),
   username: '',
   txt:'',
   radio: '1',
   shop:'',
   value: '',
   value2:'',
   value3:'',
   value4:'',
   showPicker: false,
   showPicker2: false,
   showPicker3: false,
   showPicker4: false,
   columns: ['巡店任务', '自检任务'],
   columns2: ['店员', '督导','店长'],
   columns3: ['任务开始时', '截止前一天','指定日期提前','完成前每日定时提前'],
 }
},
methods: {
 goback(){
   this.$router.go(-1)
 },
 onSubmit(values) {
     console.log('submit', values);
     this.push('/indexpe/bjmbpe2')
 },
 push(x){
  this.$router.push(x)
 },
 onConfirm(value) {
  this.value = value;
  this.showPicker = false;
  },
  onConfirm2(value) {
  this.value2 = value;
  this.showPicker2 = false;
  },
  onConfirm3(value) {
  this.value3 = value;
  this.showPicker3 = false;
  },
  onConfirm4(time) {
  this.value4 = time.toLocaleString();
  this.showPicker4 = false;
  },
  formatter(type, val) {
      if (type === 'year') {
        return val + '年';
      }
      if (type === 'month') {
        return val + '月';
      }
      if (type === 'day') {
        return val + '日';
      }
      if (type === 'hour') {
        return val + '时';
      }
      if (type === 'minute') {
        return val + '分';
      }
      return val;
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
  div /deep/ .van-nav-bar__title{
  font-weight: 700;
  }
  div /deep/.van-field__label{
    margin-right: 1.32rem;
  }
>>>>>>> e90c7b4 (暂存)
</style>