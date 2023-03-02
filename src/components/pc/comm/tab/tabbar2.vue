<template>
  <div class="tabbar">
    <div class="left">
      <button class="colorblue" @click="changetypeto1(),change(),change1()" ref="btn1" style="width:70px;height:36px;margin-left:40px;font-size: 16px;">全部</button>
      <button class="colorgrey" @click="changetypeto2(),change(),change2()" ref="btn2" style="width:100px;height:36px;margin-left:40px;font-size: 16px;">巡店任务</button>
      <button class="colorgrey" @click="changetypeto2(),change(),change3()" ref="btn3" style="width:100px;height:36px;margin-left:40px;font-size: 16px;">自检任务</button>
    </div>
    <div class="right mr40" >
      <el-input
        placeholder="搜索"
        prefix-icon="el-icon-search"
        v-model="value"
        class="search">
      </el-input>
      <el-button type="primary" size="mini" class="ml20 blue">搜索</el-button>
      <el-button type="primary" icon="el-icon-circle-plus-outline" size="mini" class="ml20 blue" v-if="type==2" @click="changenoneto1">创建任务</el-button>
    </div>
    <div class="cover" v-if="none == 1"></div>
    <div class="message" v-if="none == 1" style="width:600px;height: 866px;">
      <div class="top">
        <div>
          <p>创建任务</p>
        </div>
        <div @click="changenoneto0">
          <i class="el-icon-close"></i>
        </div>
      </div>
      <div class="mid">
        <el-form
          :model="ruleForm"
          :rules="rules"
          ref="ruleForm"
          label-width="140px"
          label-size="16px"
          class="demo-ruleForm"
          style="font-size: 16px;"
        >
          <el-form-item label="任务类型：" prop="region" style="width:475px;">
            <el-select v-model="ruleForm.region" placeholder="请选择">
              <el-option label="类型一" value="类型一"></el-option>
              <el-option label="类型二" value="类型二"></el-option>
            </el-select>
          </el-form-item>  

          <el-form-item label="任务名称：" prop="name" style="width:340px;">
            <el-input v-model="ruleForm.name"></el-input>
          </el-form-item>

          <el-form-item label="检查模板：" prop="template" style="width:475px;">
            <el-select v-model="ruleForm.template" placeholder="请选择">
              <el-option label="检查项一" value="检查项一"></el-option>
              <el-option label="检查项二" value="检查项二"></el-option>
            </el-select>
          </el-form-item>

          <el-form-item label="执行门店：" prop="store" style="width:475px;">
            <el-select v-model="ruleForm.store" placeholder="请选择">
              <el-option label="门店一" value="shanghai"></el-option>
              <el-option label="门店二" value="beijing"></el-option>
            </el-select>
          </el-form-item>

          <el-form-item label="指定巡店员：" prop="shopman" style="width:475px;">
            <el-select v-model="ruleForm.shopman" placeholder="请选择">
              <el-option label="巡店员一" value="巡店员"></el-option>
              <el-option label="巡店员二" value="巡店员"></el-option>
            </el-select>
          </el-form-item>

          <el-form-item label="审核员：" prop="investigator" style="width:475px;">
            <el-select v-model="ruleForm.investigator" placeholder="请选择">
              <el-option label="审核员一" value="审核员一"></el-option>
              <el-option label="审核员二" value="审核员二"></el-option>
            </el-select>
          </el-form-item>

          <el-form-item label="有效期：" >
            <el-date-picker
              style="width:340px;"
              v-model="value1"
              type="daterange"
              range-separator="-"
              start-placeholder="开始日期"
              end-placeholder="结束日期">
            </el-date-picker>
          </el-form-item>

          <el-form-item label="循环方式：" >
            <el-radio-group v-model="ruleForm.resource">
              <el-radio label="单次任务"></el-radio>
              <el-radio label="循环任务"></el-radio>
            </el-radio-group>
          </el-form-item>

          <el-form-item label="提醒设置：">
            <el-checkbox-group v-model="ruleForm.checkbox">
              <el-checkbox label="任务开始" ></el-checkbox>
              <el-checkbox label="截至前一天" ></el-checkbox>
              <el-checkbox label="指定日期提醒" ></el-checkbox>
              <el-checkbox label="完成前每日定时提醒" ></el-checkbox>
            </el-checkbox-group>
          </el-form-item>

          <el-form-item label="任务说明：" style="width:475px;">
            <el-input type="textarea" v-model="ruleForm.desc"></el-input>
          </el-form-item>

        </el-form>
      </div>
      <div class="foot">
        <el-button class="bodercolor btn" @click="changenoneto0">取消</el-button>
        <el-button type="primary" class="colorblue btn" @click="submitForm('ruleForm')" >保存</el-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name:'tabbar2',
  data() {
    return {
      value:'',
      value1:'',
      type:'1',
      radio: '1',
      none :'0',
      ruleForm: {
          name: '',
          region: '',
          template:'',
          store:'',
          shopman:'',
          investigator:'',
          resource:'',
          checkbox:[]
        },
        rules: {
          name: [
            { required: true, message: '请输入任务名称', trigger: 'blur' },
          ],
          region: [
            { required: true, message: '请选择任务类型', trigger: 'change' }
          ],
          template:[
            { required: true, message: '请选择模板', trigger: 'change' }
          ],
          store:[
            { required: true, message: '请选择门店', trigger: 'change' }
          ],
          shopman:[
            { required: true, message: '请选择巡店员', trigger: 'change' }
          ],
          investigator:[
            { required: true, message: '请选择审核员', trigger: 'change' }
          ],
        }
    }
  },
  methods: {
    submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
    changetypeto2(){
      this.type = 2
    },
    changetypeto1(){
      this.type = 1
    },
    changenoneto1(){
    this.none = 1
    },
    changenoneto0(){
      this.none = 0
    },
    push(){
      this.$router.push('/indexpc/jbxx')
    },
    change(){
      this.$refs.btn1.className = 'colorgrey'
      this.$refs.btn2.className = 'colorgrey'
      this.$refs.btn3.className = 'colorgrey'
    },
    change1(){
      this.$refs.btn1.className = 'colorblue'
    },
    change2(){
      this.$refs.btn2.className = 'colorblue'
    },
    change3(){
      this.$refs.btn3.className = 'colorblue'
    },
  },
}
</script>

<style scoped>
  .tabbar{
    width: 100%;
    height: 60px;
    display: flex;
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
  width: 180px;
  height: 26px;
  font-size: 12px;
  color: #8E8E93;
}
div /deep/.el-input__icon{
  line-height: 28px;
}
.cover {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,0.5);
  z-index: 200;
}
.message{
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  position: absolute;
  width: 420px;
  height: 184px;
  left: 550px;
  top: 30px;
  background-color: #fff;
  z-index: 201;
}
.top{
  width: 100%;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 11px 28px;
  height: 42px;
  background: #FFFFFF;
  font-size: 18px;
  font-weight: 700;
  box-shadow: inset 0px -0.5px 0px rgba(0, 0, 0, 0.08);
}
.mid{
  width: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 10px 28px 0 28px;
  background: #FFFFFF;
}
.foot{
  width: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  padding: 16px 40px;
  gap: 28px;
  height: 68px;
  background: #FFFFFF;
  box-shadow: inset 0px 0.5px 0px rgba(0, 0, 0, 0.08);
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
  /* margin-bottom: 8px; */
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
div /deep/ .el-range__close-icon{
  height: 150%;
}
div /deep/ .el-icon-date{
  height: 150%;
}
div /deep/.el-form-item{
  margin-bottom: 0;
}
div /deep/ .el-form-item__error{
  font-size: 8px;
  padding-top: 0;
  top:95%
}
</style>