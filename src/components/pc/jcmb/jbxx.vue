<template>
  <div>
    <div class="main">
      <div class="tab">
        <div style="cursor: pointer;">
          <span @click="push('/indexpc')">创建模板</span><span> > </span><span>基本信息</span>
        </div>
      </div>
      <div class="top">
        <el-form ref="form" :model="form" label-width="120px" :rules="rules"  class="demo-ruleForm form">
          <el-form-item label="名称：" prop="name" >
            <el-input
              placeholder="name"
              v-model="form.name"
              style="width: 100%"
              clearable
            ></el-input>
          </el-form-item>

          <el-form-item label="可见门店:" prop="region">
            <el-select
              v-model="form.region"
              clearable
              placeholder="请选择"
              style="width: 100%"
            >
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              >
              </el-option>
            </el-select>
          </el-form-item>

          <el-form-item label="等级评判" >
              <el-checkbox label="按百分制得分" v-model="form.resource"></el-checkbox>
          </el-form-item>

          <div class="score" style="margin-left: 30px;">
            <div style="margin-bottom: 14px;">
              <span>优秀 ≥</span>
              <input type="text" style="width:60px; margin: 0 24px;border: 1px solid #999999;border-radius: 4px;">
              <span>分</span>
            </div>
            <div style="margin-bottom: 14px;">
              <span>良好 ≥</span>
              <input type="text" style="width:60px; margin: 0 24px;border: 1px solid #999999;border-radius: 4px;">
              <span>分</span>
            </div>
            <div style="margin-bottom: 14px;">
              <span>及格 ≥</span>
              <input type="text" style="width:60px; margin: 0 24px;border: 1px solid #999999;border-radius: 4px;">
              <span>分</span>
            </div>
            <div style="margin-bottom: 14px;">
              <span>不及格 ≤</span>
              <input type="text" style="width:60px; margin: 0 24px;border: 1px solid #999999;border-radius: 4px;">
              <span>分</span>
            </div>
          </div>
      </el-form>
      </div>

      
      <div class="bottom" style="width: 100%;height: 100px; padding-top: 32px;">
        <div style="width:214px;margin: 0 640px;" class="btnbox">
          <el-button class="bodercolor btn" @click="push('/indexpc')">取消</el-button>
          <el-button type="primary" class="colorblue btn" style="width:84px" @click="push('/indexpc/mbnr')">下一步</el-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name:'jbxx',
  data() {
    return {
      form: {
        name: "",
        region: "",
        resource:'',
        excellent:'',
        good:'',
        pass:'',
        fail:''
      },
      options: [
        {
          value: "选项1",
          label: "门店1",
        },
        {
          value: "选项2",
          label: "门店2",
        },
        {
          value: "选项3",
          label: "门店3",
        },{
          value: "选项4",
          label: "门店4",
        },
      
      ],
        rules: {
        name: [
          { required: true, message: '请输入名称', trigger: 'blur' },
          { min:2, message: '请输入正确的名称', trigger: 'blur' }
        ],
        region: [
            { required: true, message: '请选择门店', trigger: 'change' }
        ],
      }
    }
  },
  methods: {
    push(x){
      this.$router.push(x)
    }
  },
}
</script>

<style scoped>
  *{
    box-sizing: border-box;
  }
  .main{
    width: 100%;
    height: 280px;
    background-color: #fff;
  }
  .tab{
    width: 100%;
    background-color: #fff;
    height: 32px;
    border-top: 0.5px solid rgba(0, 0, 0, 0.18);
    border-bottom: 0.5px solid rgba(0, 0, 0, 0.18);
    margin-bottom: 18px;
    font-size: 12px;
    font-weight: 700;
    padding: 8px 0 8px 28px;
  }
  .top{
    width: 100%;
  }
  .form{
    width: 360px;
    height: 230px;
    margin: 0 auto;
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
  div /deep/.el-input__inner{
    height: 28px;
  }
  .el-form-item {
    margin-bottom: 14px;
  }
  .height{
    height: 18px;
  }
  .score{
    font-size: 14px;
    text-align: right;
    width: 171px;
  }
  div /deep/.el-form-item__label{
    line-height: 1;
  }
  div /deep/.el-form-item__content{
    line-height: 0;
  }
  .bottom{
    background-color: #fff;
    box-shadow: inset 0px 0.5px 0px rgba(0, 0, 0, 0.18);
  }
  .btnbox{
    display: flex;
    justify-content: space-between;
  }
  div /deep/.el-input__icon{
    line-height: 0;
  }
</style>