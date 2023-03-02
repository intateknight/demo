<<<<<<< HEAD
<template>
  <div>
    <div class="tabbar" style="height:60px">
    <div style="width:1000px;float: right;margin-top: 10px;margin-right: 10px;">
      <div class="right mr40" style="width:900px;">
      <el-select v-model="type1" placeholder="全部门店" >
        <el-option label="全部门店" value="全部门店"></el-option>
        <el-option :label=item.store_name :value=item.store_name v-for="item in list2" :key="item.store_id"></el-option>
      </el-select>
      <el-select v-model="type2" placeholder="全部状态" >
        <el-option label="全部状态" value="全部状态"></el-option>
        <el-option label="已完成" value="已完成"></el-option>
        <el-option label="未完成" value="未完成"></el-option>
      </el-select>
      <div style="display:flex">
        <el-date-picker
          style="width:325px;"
          v-model="value1"
          type="daterange"
          range-separator="-"
          start-placeholder="开始日期"
          end-placeholder="结束日期">
        </el-date-picker>
        <el-button type="primary" size="mini" class="ml20 blue" @click="push()">搜索</el-button>
      </div>
    </div>
  </div>
    
    </div>

    <div class="title" style="height:46px;font-size:14px;padding: 0 40px;">
      <div style="width:85px">门店</div>
      <div style="width:85px">使用模板</div>
      <div style="width:60px">检查项项</div>
      <div style="width:130px">创建时间</div>
      <div style="width:130px">最晚整改时间</div>
      <div style="width:60px">处理状态</div>
      <div style="width:50px">处理人</div>
      <div style="width:50px">巡店员</div>
      <div style="width:70px">巡店方式</div>
      <div style="width:110px;height: 19px;"></div>
    </div>
    <div class="loop">
      <div class="contain" style="height:60px;font-size:14px;padding: 0 40px;" v-for="item in list" :key="item.problem_id">
        <div style="width:85px">{{ item.store_name}}</div>
        <div style="width:85px">{{ item.template_name }}</div>
        <div style="width:60px">{{ item.spot_check_item }}</div>
        <div style="width:130px">{{item.create_at}}</div>
        <div style="width:130px">{{item.final_corrected_time}}</div>
        <div style="width:60px">{{ item.state }}</div>
        <div style="width:50px">{{ item.username }}</div>
        <div style="width:50px">{{ item.patrol_username }}</div>
        <div style="width:70px">{{ item.patrol_way }}</div>
        <button class="btn" style="width:110px;height:36px" @click="changenoneto1(item.problem_id)">查看详情</button>
      </div>
    </div>
    <div class="foot" style="height:56px;padding: 10px 60px;">
      <div class="footleft">
        <div class="footmain" style="width:480px;font-size: 14px;">
          <div style="width:46px">共50条</div>
          <div style="width:246px;display: flex;justify-content: space-between;align-items: center;" >
            <button style="width:32px;height:32px;" class="footbtn2" ref="btn1" @click="change(),change1()">1</button>
            <button style="width:32px;height:32px;" class="footbtn" ref="btn2" @click="change(),change2()">2</button>
            <button style="width:32px;height:32px;" class="footbtn" ref="btn3" @click="change(),change3()">3</button>
            <button style="width:32px;height:32px;" class="footbtn" ref="btn4" @click="change(),change4()">4</button>
            <button style="width:32px;height:32px;" class="footbtn" ref="btn5" @click="change(),change5()">5</button>
          </div>
          <div style="width:108px;display: flex;justify-content: space-between;align-items: center;">
            <div>跳至</div>
            <input type="text" name="" id="" style="width: 40px;height: 28px;">
            <div>页</div>
          </div>
        </div>
      </div>
    </div>
    <div class="cover" v-if="none == 1"></div>
    <div class="message" v-if="none == 1" style="height:600px;width: 600px;">
      <div class="top">
        <div>
          <p>任务详情</p>
        </div>
        <div @click="changenoneto0">
          <i class="el-icon-close"></i>
        </div>
      </div>
      <div class="mid" style="margin-top:28px;margin-left:40px;font-size: 16px;">
        <div style="margin-bottom:18px">
          <span>门店：</span>
          <span>{{ obj.store_name}}</span>
        </div>
        <div style="margin-bottom:18px">
          <span>使用模板：</span>
          <span>{{ obj.template_name }}</span>
        </div>
        <div style="margin-bottom:18px">
          <span>检查项项：</span>
          <span>{{ obj.spot_check_item }}</span>
        </div>
        <div style="margin-bottom:18px">
          <span>创建时间：</span>
          <span>{{ obj.create_at }}</span>
        </div>
        <div style="margin-bottom:18px">
          <span>最晚整改时间：</span>
          <span>{{ obj.final_corrected_time }}</span>
        </div>
        <div style="margin-bottom:18px">
          <span>处理状态：</span>
          <span>{{ obj.state }}</span>
        </div>
        <div style="margin-bottom:18px">
          <span>处理人：</span>
          <span>{{ obj.username }}</span>
        </div>
        <div style="margin-bottom:18px">
          <span>巡店员：</span>
          <span>{{ obj.patrol_username }}</span>
        </div>
        <div style="margin-bottom:18px">
          <span>巡店方式：</span>
          <span>{{ obj.patrol_way }}</span>
        </div>
        <div>
          <div>整改照片(视频)：</div>
          <img :src=obj.img alt="" style="width:200px;height:120px">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { query } from '@/api/api'  
export default {
name:'zgwt',
data() {
  return {
    none:'0',
    type:'',
    type1:'',
    type2:'',
    name:'',
    value1:'',
    list2:[],
    obj:{},
    term:{
        auth: 2,
        project: "微督导",
        table: "sys_store_info",
        conditions: {
            pagination: {
                page: 1,
                pageSize: 5
            },
            fields: ["store_name","store_id"],
            query: {
                and: []
            }
        }
    },
    term2:{
          auth: 2,
          project: "微督导",
          table: "biz_problem",
          conditions: {
              pagination: {
                  page: 1,
                  pageSize: 10
              },
              fields: [],
              query: {
                and: [
                  {match:{} }
                ]
              }
          }
      },
    list:[]
  }
},
methods: {
    change(){
      this.$refs.btn1.className = 'footbtn'
      this.$refs.btn2.className = 'footbtn'
      this.$refs.btn3.className = 'footbtn'
      this.$refs.btn4.className = 'footbtn'
      this.$refs.btn5.className = 'footbtn'
    },
    change1(){
      this.$refs.btn1.className = 'footbtn2'
    },
    change2(){
      this.$refs.btn2.className = 'footbtn2'
    },
    change3(){
      this.$refs.btn3.className = 'footbtn2'
    },
    change4(){
      this.$refs.btn4.className = 'footbtn2'
    },
    change5(){
      this.$refs.btn5.className = 'footbtn2'
    },
    changenoneto1(x){
      this.none = 1
      this.obj = this.list.find(item =>{
        return item.problem_id == x
      })
    },
    changenoneto0(){
      this.none = 0
    },
    getStoreList(){
      query(this.term).then((res)=>{
       if(res.error == ''){
        this.list2 = res.data
       }else{
        console.log('接口连接失败');
       }
    })
    },
    push(){
      if((this.type1 == '' && this.type2 == '')||(this.type1 == '全部门店' && this.type2 == '全部状态')){
        this.$router.push('/indexpc/zgwt')
      }else if((this.type1 == '' || this.type1 == '全部门店') && this.type2 !== ''){
        this.$router.push({path:'/indexpc/zgwt',query:{state:this.type2}})
      }else if(this.type1 !== '' && (this.type2 == '' || this.type2 == '全部状态')){
        this.$router.push({path:'/indexpc/zgwt',query:{store_name:this.type1}})
      }
      else{
        this.$router.push({path:'/indexpc/zgwt',query:{store_name:this.type1,state:this.type2}})
        
        // location.reload()
      }
    },
    getProblemList(){
     query(this.term2).then((res)=>{
      if(res.error == ''){
        this.list = res.data
        // console.log(this.list);
      }else{
          console.log('接口连接失败');
        }
      })
    },
    initData(){
      this.term2.conditions.query.and[0].match = this.$route.query
      this.getProblemList()
    }
    
  },
  mounted() {
    this.getStoreList()
    this.getProblemList()
  },
  watch: {
    '$route': 'initData'
  },
}
</script>

<style scoped>
  .title{
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    background: #D9D9D9;
    font-weight: 700;
    /* padding-right: 150px; */
  }
  .contain{
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #fff;
    box-shadow: inset 0px -0.5px 0px rgba(0, 0, 0, 0.08);
  }
  .btn{
    border: 1px solid #0B5193;
    border-radius: 4px;
    color: #0B5193;
    background-color: #fff;
  }
  .btn:hover{
    background-color: #d6d6d6;
  }
  .foot{
    box-sizing: border-box;
    width: 100%;
    background-color: #fff;
  }
  .footmain{
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .footleft{
    float: right;
  }
  .footbtn{
    background: #FFFFFF;
    border: 1px solid #999999;
    border-radius: 8px;
  }
  .footbtn2{
    background: #0B5193;
    border: 1px solid #0B5193;
    border-radius: 8px;
    color: #fff;
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
  width: 400px;
  height: 460px;
  left: 580px;
  top: 160px;
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
.tabbar{
    width: 100%;
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
  width: 140px;
  height: 26px;
  font-size: 12px;
  color: #8E8E93;
}
div /deep/.el-input__icon{
  line-height: 28px;
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
  margin-bottom: 8px;
  float: right;
}
div /deep/.el-range-separator{
  margin-bottom: 18px;
}
.el-range-separator{
  margin-top: 0;
}
div /deep/.el-range__close-icon{
  margin-bottom: 8px;
}
=======
<template>
  <div>
    <div class="tabbar" style="height:60px">
    <div style="width:1000px;float: right;margin-top: 10px;margin-right: 10px;">
      <div class="right mr40" style="width:900px;">
      <el-select v-model="type1" placeholder="全部门店" >
        <el-option label="全部门店" value="全部门店"></el-option>
        <el-option :label=item.store_name :value=item.store_name v-for="item in list2" :key="item.store_id"></el-option>
      </el-select>
      <el-select v-model="type2" placeholder="全部状态" >
        <el-option label="全部状态" value="全部状态"></el-option>
        <el-option label="已完成" value="已完成"></el-option>
        <el-option label="未完成" value="未完成"></el-option>
      </el-select>
      <div style="display:flex">
        <el-date-picker
          style="width:325px;"
          v-model="value1"
          type="daterange"
          range-separator="-"
          start-placeholder="开始日期"
          end-placeholder="结束日期">
        </el-date-picker>
        <el-button type="primary" size="mini" class="ml20 blue" @click="push()">搜索</el-button>
      </div>
    </div>
  </div>
    
    </div>

    <div class="title" style="height:46px;font-size:14px;padding: 0 40px;">
      <div style="width:85px">门店</div>
      <div style="width:85px">使用模板</div>
      <div style="width:60px">检查项项</div>
      <div style="width:130px">创建时间</div>
      <div style="width:130px">最晚整改时间</div>
      <div style="width:60px">处理状态</div>
      <div style="width:50px">处理人</div>
      <div style="width:50px">巡店员</div>
      <div style="width:70px">巡店方式</div>
      <div style="width:110px;height: 19px;"></div>
    </div>
    <div class="loop">
      <div class="contain" style="height:60px;font-size:14px;padding: 0 40px;" v-for="item in list" :key="item.problem_id">
        <div style="width:85px">{{ item.store_name}}</div>
        <div style="width:85px">{{ item.template_name }}</div>
        <div style="width:60px">{{ item.spot_check_item }}</div>
        <div style="width:130px">{{item.create_at}}</div>
        <div style="width:130px">{{item.final_corrected_time}}</div>
        <div style="width:60px">{{ item.state }}</div>
        <div style="width:50px">{{ item.username }}</div>
        <div style="width:50px">{{ item.patrol_username }}</div>
        <div style="width:70px">{{ item.patrol_way }}</div>
        <button class="btn" style="width:110px;height:36px" @click="changenoneto1(item.problem_id)">查看详情</button>
      </div>
    </div>
    <div class="foot" style="height:56px;padding: 10px 60px;">
      <div class="footleft">
        <div class="footmain" style="width:480px;font-size: 14px;">
          <div style="width:46px">共50条</div>
          <div style="width:246px;display: flex;justify-content: space-between;align-items: center;" >
            <button style="width:32px;height:32px;" class="footbtn2" ref="btn1" @click="change(),change1()">1</button>
            <button style="width:32px;height:32px;" class="footbtn" ref="btn2" @click="change(),change2()">2</button>
            <button style="width:32px;height:32px;" class="footbtn" ref="btn3" @click="change(),change3()">3</button>
            <button style="width:32px;height:32px;" class="footbtn" ref="btn4" @click="change(),change4()">4</button>
            <button style="width:32px;height:32px;" class="footbtn" ref="btn5" @click="change(),change5()">5</button>
          </div>
          <div style="width:108px;display: flex;justify-content: space-between;align-items: center;">
            <div>跳至</div>
            <input type="text" name="" id="" style="width: 40px;height: 28px;">
            <div>页</div>
          </div>
        </div>
      </div>
    </div>
    <div class="cover" v-if="none == 1"></div>
    <div class="message" v-if="none == 1" style="height:600px;width: 600px;">
      <div class="top">
        <div>
          <p>任务详情</p>
        </div>
        <div @click="changenoneto0">
          <i class="el-icon-close"></i>
        </div>
      </div>
      <div class="mid" style="margin-top:28px;margin-left:40px;font-size: 16px;">
        <div style="margin-bottom:18px">
          <span>门店：</span>
          <span>{{ obj.store_name}}</span>
        </div>
        <div style="margin-bottom:18px">
          <span>使用模板：</span>
          <span>{{ obj.template_name }}</span>
        </div>
        <div style="margin-bottom:18px">
          <span>检查项项：</span>
          <span>{{ obj.spot_check_item }}</span>
        </div>
        <div style="margin-bottom:18px">
          <span>创建时间：</span>
          <span>{{ obj.create_at }}</span>
        </div>
        <div style="margin-bottom:18px">
          <span>最晚整改时间：</span>
          <span>{{ obj.final_corrected_time }}</span>
        </div>
        <div style="margin-bottom:18px">
          <span>处理状态：</span>
          <span>{{ obj.state }}</span>
        </div>
        <div style="margin-bottom:18px">
          <span>处理人：</span>
          <span>{{ obj.username }}</span>
        </div>
        <div style="margin-bottom:18px">
          <span>巡店员：</span>
          <span>{{ obj.patrol_username }}</span>
        </div>
        <div style="margin-bottom:18px">
          <span>巡店方式：</span>
          <span>{{ obj.patrol_way }}</span>
        </div>
        <div>
          <div>整改照片(视频)：</div>
          <img :src=obj.img alt="" style="width:200px;height:120px">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { query } from '@/api/api'  
export default {
name:'zgwt',
data() {
  return {
    none:'0',
    type:'',
    type1:'',
    type2:'',
    name:'',
    value1:'',
    list2:[],
    obj:{},
    term:{
        auth: 2,
        project: "微督导",
        table: "sys_store_info",
        conditions: {
            pagination: {
                page: 1,
                pageSize: 5
            },
            fields: ["store_name","store_id"],
            query: {
                and: []
            }
        }
    },
    term2:{
          auth: 2,
          project: "微督导",
          table: "biz_problem",
          conditions: {
              pagination: {
                  page: 1,
                  pageSize: 10
              },
              fields: [],
              query: {
                and: [
                  {match:{} }
                ]
              }
          }
      },
    list:[]
  }
},
methods: {
    change(){
      this.$refs.btn1.className = 'footbtn'
      this.$refs.btn2.className = 'footbtn'
      this.$refs.btn3.className = 'footbtn'
      this.$refs.btn4.className = 'footbtn'
      this.$refs.btn5.className = 'footbtn'
    },
    change1(){
      this.$refs.btn1.className = 'footbtn2'
    },
    change2(){
      this.$refs.btn2.className = 'footbtn2'
    },
    change3(){
      this.$refs.btn3.className = 'footbtn2'
    },
    change4(){
      this.$refs.btn4.className = 'footbtn2'
    },
    change5(){
      this.$refs.btn5.className = 'footbtn2'
    },
    changenoneto1(x){
      this.none = 1
      this.obj = this.list.find(item =>{
        return item.problem_id == x
      })
    },
    changenoneto0(){
      this.none = 0
    },
    getStoreList(){
      query(this.term).then((res)=>{
       if(res.error == ''){
        this.list2 = res.data
       }else{
        console.log('接口连接失败');
       }
    })
    },
    push(){
      if((this.type1 == '' && this.type2 == '')||(this.type1 == '全部门店' && this.type2 == '全部状态')){
        this.$router.push('/indexpc/zgwt')
      }else if((this.type1 == '' || this.type1 == '全部门店') && this.type2 !== ''){
        this.$router.push({path:'/indexpc/zgwt',query:{state:this.type2}})
      }else if(this.type1 !== '' && (this.type2 == '' || this.type2 == '全部状态')){
        this.$router.push({path:'/indexpc/zgwt',query:{store_name:this.type1}})
      }
      else{
        this.$router.push({path:'/indexpc/zgwt',query:{store_name:this.type1,state:this.type2}})
        
        // location.reload()
      }
    },
    getProblemList(){
     query(this.term2).then((res)=>{
      if(res.error == ''){
        this.list = res.data
        // console.log(this.list);
      }else{
          console.log('接口连接失败');
        }
      })
    },
    initData(){
      this.term2.conditions.query.and[0].match = this.$route.query
      this.getProblemList()
    }
    
  },
  mounted() {
    this.getStoreList()
    this.getProblemList()
  },
  watch: {
    '$route': 'initData'
  },
}
</script>

<style scoped>
  .title{
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    background: #D9D9D9;
    font-weight: 700;
    /* padding-right: 150px; */
  }
  .contain{
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #fff;
    box-shadow: inset 0px -0.5px 0px rgba(0, 0, 0, 0.08);
  }
  .btn{
    border: 1px solid #0B5193;
    border-radius: 4px;
    color: #0B5193;
    background-color: #fff;
  }
  .btn:hover{
    background-color: #d6d6d6;
  }
  .foot{
    box-sizing: border-box;
    width: 100%;
    background-color: #fff;
  }
  .footmain{
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .footleft{
    float: right;
  }
  .footbtn{
    background: #FFFFFF;
    border: 1px solid #999999;
    border-radius: 8px;
  }
  .footbtn2{
    background: #0B5193;
    border: 1px solid #0B5193;
    border-radius: 8px;
    color: #fff;
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
  width: 400px;
  height: 460px;
  left: 580px;
  top: 160px;
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
.tabbar{
    width: 100%;
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
  width: 140px;
  height: 26px;
  font-size: 12px;
  color: #8E8E93;
}
div /deep/.el-input__icon{
  line-height: 28px;
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
  margin-bottom: 8px;
  float: right;
}
div /deep/.el-range-separator{
  margin-bottom: 18px;
}
.el-range-separator{
  margin-top: 0;
}
div /deep/.el-range__close-icon{
  margin-bottom: 8px;
}
>>>>>>> e90c7b4 (暂存)
</style>