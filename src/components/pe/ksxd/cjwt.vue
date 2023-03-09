<template>
  <div>
    <div class="blank"></div>
    <div class="bg">
      <div class="bgc">
        <div class="list" >
          <van-form @submit="onSubmit">
            <van-field
              v-model="form.username"
              name="门店名称"
              label="门店名称"
              placeholder="点击输入"
              :rules="[{ required: true, message: '请填写用户名' }]"
            />

            <van-field
              readonly
              clickable
              :value="form.select1.value"
              name="巡检项目"
              label="巡检项目"
              placeholder-class="placlass"
              placeholder="点击设置 ＞"
              @click="form.select1.showPicker = true"
            />
            <van-popup v-model="form.select1.showPicker" round position="bottom">
                <van-picker
                  show-toolbar
                  :columns="form.select1.columns"
                  @cancel="form.select1.showPicker = false"
                  @confirm="onConfirm"
                />
            </van-popup>

            <van-field
              readonly
              clickable
              :value="form.select2.value"
              name="处理人"
              label="处理人"
              placeholder-class="placlass"
              placeholder="点击设置 ＞"
              @click="form.select2.showPicker = true"
            />
            <van-popup v-model="form.select2.showPicker" round position="bottom">
                <van-picker
                  show-toolbar
                  :columns="form.select2.columns"
                  @cancel="form.select2.showPicker = false"
                  @confirm="onConfirm2"
                />
            </van-popup>

            <van-field
              readonly
              clickable
              name="最晚处理日期"
              :value="form.select3.value"
              label="时间选择"
              placeholder="点击选择时间"
              @click="form.select3.showPicker = true"
            />
            <van-popup v-model="form.select3.showPicker" position="bottom">
              <van-datetime-picker
                type="date"
                title="选择年月日"
                :min-date="form.select3.minDate"
                :max-date="form.select3.maxDate"
                @confirm="onConfirm3"
                @cancel="form.select3.showPicker = false"
              />
            </van-popup>

            <van-field
              v-model=form.message
              label="问题说明"
              name="问题说明"
              rows="2"
              autosize
              type="textarea"
              maxlength="50"
              placeholder="请输入问题说明"
              show-word-limit
              :rules="[{ required: true, message: '请填写说明' }]"
            />


            <div class="bottom">
              <van-button type="info" native-type="submit" round style="color: #fff;background: #0B5193;border: 0;width: 100%; min-height: 36px;">提交</van-button>
            </div>
          </van-form>
        </div>
      </div>
    </div>
    <div class="blank2"></div>
  </div>
</template>

<script>
export default {
  name:'ckhf',
  data() {
    return {
      form:{
        username:'',
        message:'',
        select1:{
        value:'',
        showPicker: false,
        columns: ['员工礼仪', '某检查项', '某检查项', '某检查项', '某检查项'],
        },
        select2:{
        value:'',
        showPicker: false,
        columns: ['某某人', '某某人', '某某人', '某某人', '某某人'],
        },
        select3:{
        minDate: new Date(2020, 0, 1),
        maxDate: new Date(2025, 10, 1),
        value:'',
        showPicker: false,
        },
      }
    }
  },
  methods: {
    onConfirm(value) {
      this.form.select1.value = value;
      this.form.select1.showPicker = false;
    },
    onConfirm2(value) {
      this.form.select2.value = value;
      this.form.select2.showPicker = false;
    },
    onConfirm3(value) {
      this.form.select3.value = value.toLocaleDateString();
      this.form.select3.showPicker = false;
    },
    goback(){
      this.$router.go(-1)
    },
    push(x){
    this.$router.push(x)
    },
    changetype(x){
      for(var i =0;i<this.list.length;i++){
        this.list[i].type = 'info'
      }
      this.list[x-1].type = 'default'
    },
    onSubmit(values) {
      console.log('submit', values);
      this.push('/indexpe/approval')
    },
  },
}
</script>

<style scoped>
div /deep/.van-field__control::placeholder{
  text-align: right;
  margin-right: 30px;
  }
.bg{
    background-color: #edededb0;
    /* background-color: #050505; */
    /* min-height: 80vh; */
    overflow:hidden;
    padding: 0 12px;
  }
  .bgc{
    margin-top: 10px;
    background-color: #fff;
    padding: 12px 14px 0 14px;
  }
  .list{
    box-sizing: border-box;
    /* width: 90%; */
    background-color: #fff;
    margin-bottom: 12px;
  }
  
  .mt52{
    margin-top: 52px;
  }
  .blank{
  width: 100%;
  height: 420px;
  background-color: #edededb0;
  }
  .blank2{
  width: 100%;
  height: 180px;
  background-color: #edededb0;
 }
 .bottom{
  box-sizing: border-box;
  height: 72px;
  width: 100%;
  padding: 12px 20px;
  background-color: #fff;
  position: fixed;
  left: 0;
  bottom: 50px;
  border: 1px solid #fff;
 }
 div /deep/ .van-nav-bar__title{
  font-weight: 700;
 }
</style>