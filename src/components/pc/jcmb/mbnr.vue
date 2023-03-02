<template>
  <div>
    <div class="tab">
      <div style="cursor: pointer;">
        <span @click="push('/indexpc')">创建模板</span><span> > </span><span @click="push('/indexpc/jbxx')">基本信息</span><span> > </span><span>模板内容</span>
      </div>
    </div>

    <div class="main" style="padding-top:28px ;height: 600px;">
      <div class="main-box" style="width:800px;margin-left: 600px;">
        <el-form
          :model="ruleForm"
          :rules="rules"
          ref="ruleForm"
          label-width="120px"
          class="demo-ruleForm"
          style="font-size: 16px;"
        >
          <el-form-item label="组别名称" prop="name" style="width:340px;height:36px">
            <el-input v-model="ruleForm.name"></el-input>
          </el-form-item>

          <el-form-item label="检查项类型" prop="region" style="width:475px;height:36px">
            <el-select v-model="ruleForm.type" placeholder="请选择">
              <el-option label="类型一" value="shanghai"></el-option>
              <el-option label="类型二" value="beijing"></el-option>
            </el-select>
          </el-form-item>

          <el-form-item label="检查项" prop="region" style="width:475px;height:36px">
            <el-select v-model="ruleForm.term" placeholder="请选择">
              <el-option label="检查项一" value="shanghai"></el-option>
              <el-option label="检查项二" value="beijing"></el-option>
            </el-select>
          </el-form-item>

          <el-form-item label="分数" prop="score" style="width:340px;height:36px">
            <el-input v-model="ruleForm.score"></el-input><span style="top:-16px;left:260px">分</span>
          </el-form-item>

          <div class="midbox" style="width:800px;height: 176px;">
            <div style="width:100px">结果项设置</div>
            <div class="box1" style="width:354px">
              <div class="row" style="height:44px">
                <span style="width:68px">优秀</span>
                <div><input type="checkbox" name="" id="">允许修改</div>
                <div><input type="checkbox" name="" id="">必填</div>
                <div><input type="checkbox" name="" id="">必填</div>
              </div>
              <div class="row" style="height:44px">
                <span style="width:68px">合格</span>
                <div><input type="checkbox" name="" id="">允许修改</div>
                <div><input type="checkbox" name="" id="">必填</div>
                <div><input type="checkbox" name="" id="">必填</div>
              </div>
              <div class="row" style="height:44px">
                <span style="width:68px">不合格</span>
                <div><input type="checkbox" name="" id="">允许修改</div>
                <div><input type="checkbox" name="" id="">必填</div>
                <div><input type="checkbox" name="" id="">必填</div>
              </div>
              <div class="row" style="height:44px">
                <span style="width:68px">不适应</span>
                <div><input type="checkbox" name="" id="">允许修改</div>
                <div><input type="checkbox" name="" id="">必填</div>
                <div><input type="checkbox" name="" id="">必填</div>
              </div>
            </div>
            <div class="box2" style="width:300px">
              <div class="row" style="height:44px">
                <div>奖&罚</div>
              </div>
              <div class="row" style="height:44px">
                <span style="width:68px">优秀</span>
                <div>￥ <input type="text" name="" id="" style="width:32px;height: 22px;"></div>
                <div>—</div>
                <div>￥ <input type="text" name="" id="" style="width:32px;height: 22px;"></div>
              </div>
              <div class="row" style="height:44px">
                <span style="width:68px">合格</span>
                <div>￥ <input type="text" name="" id="" style="width:32px;height: 22px;"></div>
                <div>—</div>
                <div>￥ <input type="text" name="" id="" style="width:32px;height: 22px;"></div>
              </div>
              <div class="row" style="height:44px">
                <span style="width:68px">不合格</span>
                <div>￥ <input type="text" name="" id="" style="width:32px;height: 22px;"></div>
                <div>—</div>
                <div>￥ <input type="text" name="" id="" style="width:32px;height: 22px;"></div>
              </div>
            </div>
          </div>

          <el-form-item label="标准描述" prop="desc" style="width:475px;">
            <el-input type="textarea" v-model="ruleForm.desc"></el-input>
          </el-form-item>

          <div style="width:195px;display:flex;justify-content: space-between;">
            <div style="width:100px">SOP</div>
            <div style="width:73px;height:68px;border: 1px dashed #999999;border-radius: 8px;text-align: center;cursor: pointer;">
              <p style="margin:12px 0 0 0 ;font-weight:700">+</p>
              <p style="margin:0">上传</p>
            </div>
          </div>

        </el-form>
      </div>
    </div>

    <div class="foot" style="height:80px">
      <el-button type="primary" icon="el-icon-circle-plus-outline" size="mini" class="blue" style="margin:20px 600px">新增模板</el-button>
    </div>

    <div class="bottom" style="width: 100%;height: 50px; padding-top: 32px;">
        <div style="width:214px;margin: 0 640px;" class="btnbox">
          <el-button class="bodercolor btn" @click="push('/indexpc')">取消</el-button>
          <el-button type="primary" class="colorblue btn" style="width:70px" @click="push('/indexpc/mbnr')">确定</el-button>
        </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        ruleForm: {
          name: '',
          type: '',
          term:'',
          desc: '',
          score:''
        },
        rules: {
          name: [
            { required: true, message: '请输入活动名称', trigger: 'blur' },
            { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ],
          region: [
            { required: true, message: '请选择活动区域', trigger: 'change' }
          ],
          desc: [
            { required: true, message: '请填写活动形式', trigger: 'blur' }
          ],
          score: [
            { required: true, message: '请输入分数', trigger: 'blur' },
          ],
        }
      };
    },
    methods: {
      push(x){
        this.$router.push(x)
      }
    }
  }
</script>

<style scoped>
.tab {
  box-sizing: border-box;
  width: 100%;
  background-color: #fff;
  height: 32px;
  border-top: 0.5px solid rgba(0, 0, 0, 0.18);
  border-bottom: 0.5px solid rgba(0, 0, 0, 0.18);
  /* margin-bottom: 18px; */
  font-size: 12px;
  font-weight: 700;
  padding: 8px 0 8px 28px;
}
.main{
  width: 100%;
  background-color: #fff;
}
div /deep/ .el-form-item__label{
  font-size: 12px;
}
div /deep/ .el-input input{
  height: 24px;
}
div /deep/.el-form-item__label{
    line-height: 14px;
    text-align: left;
  }
  div /deep/.el-form-item__content{
    line-height: 0;
}
.el-form-item {
    margin-bottom: 14px;
}
div /deep/.el-input__icon{
    line-height: 0;
}
span{
  position: relative;
}
.midbox{
  display: flex;
  justify-content: space-between;
  margin-bottom: 14px;
}
.midbox .box1{
  height: 100%;
  border: 1px solid #DCDFE6;
  border-radius: 4px;
}
.midbox .box2{
  height: 100%;
  border: 1px solid #DCDFE6;
  border-radius: 4px;
}
 .row{
  display:flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #DCDFE6;
  padding: 0 20px;
}
 .row:last-child{
  border-bottom: 0px solid #000;
}
 .foot{
  background-color: #fff;
  border-top: 1px solid rgba(0, 0, 0, 0.18);
  border-bottom: 1px solid rgba(0, 0, 0, 0.18);

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
  .bottom{
    background-color: #fff;
  }
  .btnbox{
    display: flex;
    justify-content: space-between;
  }
  .blue{
  background-color: #0B5193;
  border-color: #0B5193;
  }
</style>