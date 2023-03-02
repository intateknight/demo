<template>
  <div>
    <Tabbar11></Tabbar11>
    <div style="margin-top: 10px;display: flex;padding: 0 10px;justify-content: space-around;margin-bottom: 10px;">
      <div style="height:270px;background-color: #fff;border-radius: 8px;display: flex;" class="w300">
        <div>
          <el-progress type="circle" :percentage="percentage" define-back-color="#FFDA54" :format="format" :width="150" :stroke-width="10" color="#2276FC" style="margin-top: 65px;margin-left: 40px;"></el-progress>
        </div>
        <div style="margin-top: 90px;margin-left: 30px;">
          <div style="display: flex;align-items: center;">
            <div style="width:8px;height: 8px;border-radius: 4px;background-color: #2276FC;margin-right: 12px;"></div>
            <div style="font-size: 14px;">
              <div>超时未整改 {{ percentage*0.1 }}</div>
              <div>({{ percentage }}.0%)</div>
            </div>
          </div>
          <div style="display: flex; margin-top: 20px;align-items: center;">
            <div style="width:8px;height: 8px;border-radius: 4px;background-color: #FFD954;margin-right: 12px;"></div>
            <div style="font-size: 14px;">
              <div>超时未整改 {{ (100-percentage)*0.1 }}</div>
              <div>({{ 100-percentage }}.0%)</div>
            </div>
          </div>
        </div>
      </div>

   
      <div style="height:270px;background-color: #fff;border-radius: 8px;display: flex;" class="w300">
        <div>
          <el-progress type="circle" :percentage="percentage2" define-back-color="#FCD0B1" :format="format2" :width="150" :stroke-width="10" color="#129999" style="margin-top: 65px;margin-left: 40px;"></el-progress>
        </div>
        <div style="margin-top: 90px;margin-left: 30px;">
          <div style="display: flex;align-items: center;">
            <div style="width:8px;height: 8px;border-radius: 4px;background-color: #129999;margin-right: 12px;"></div>
            <div style="font-size: 14px;">
              <div>超时未整改 {{ percentage2*0.1 }}</div>
              <div>({{ percentage2 }}.0%)</div>
            </div>
          </div>
          <div style="display: flex; margin-top: 20px;align-items: center;">
            <div style="width:8px;height: 8px;border-radius: 4px;background-color: #FCD0B1;margin-right: 12px;"></div>
            <div style="font-size: 14px;">
              <div>超时未整改 {{ (100-percentage2)*0.1 }}</div>
              <div>({{ 100-percentage2 }}.0%)</div>
            </div>
          </div>
        </div>
      </div>

      <div style="height:270px;background-color: #fff;border-radius: 8px;" class="w800">
        <div id="main" style="width: 760px;height:200px;margin-top: 40px;margin-left: 20px;"></div>
      </div>

    </div>
    <div class="title" style="height:46px;font-size:14px;padding: 0 40px;">
      <div style="width:20px"></div>
      <div style="width:70px">门店</div>
      <div style="width:60px">问题总数</div>
      <div style="width:70px">按时整改率</div>
      <div style="width:70px">超时整改率</div>
      <div style="width:90px">超时未整改率</div>
      <div style="width:90px">模板名称</div>
      <div style="width:30px">分组</div>
      <div style="width:70px">检查项</div>
      <div style="width:60px">不合格数</div>
      <div style="width:50px">合格数</div>
      <div style="width:60px">不适用数</div>
      <div style="width:60px;margin-right: 150px;">不合格率</div>
    </div>
    <div class="loop">
      <div class="contain" style="height:60px;font-size:14px;padding: 20px 40px;width: 100%;" v-for="item in list" :key="item.id">
        <el-checkbox v-model="item.checked" @change="getitem(item.id)"></el-checkbox>
        <div style="width:70px">{{ item.name }}</div>
        <div style="width:60px">{{ item.problem }}</div>
        <div style="width:70px">{{ item.ontime }}</div>
        <div style="width:70px">{{ item.timeout }}</div>
        <div style="width:90px">{{ item.overtime }}</div>
        <div style="width:90px">{{ item.template }}</div>
        <div style="width:30px">{{ item.group }}</div>
        <div style="width:70px">{{ item.checkitem }}</div>
        <div style="width:60px">{{ item.unqualified }}</div>
        <div style="width:50px">{{ item.qualified }}</div>
        <div style="width:60px">{{ item.inapplicable }}</div>
        <div style="width:60px;margin-right: 150px;">{{ item.failurerate }}</div>
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
  </div>
</template>

<script>
import Tabbar11 from '@/components/pc/comm/tab/tabbar11.vue'
export default {
name:'zgph',
components:{Tabbar11},
data() {
  return {
    checked: false,
    percentage: 80,
    percentage2: 40,
    list:[
      {
        id:'1',
        checked: false,
        name:'预设门店名',
        problem:'10',
        ontime:'60.0%',
        timeout:'40.0%',
        overtime:'80.0%',
        template:'预设模板名称',
        group:'日检',
        checkitem:'已开封物料',
        unqualified:'1',
        qualified:'0',
        inapplicable:'0',
        failurerate:'100%'
      },
      {
        id:'2',
        checked: false,
        name:'预设门店名',
        problem:'10',
        ontime:'60.0%',
        timeout:'40.0%',
        overtime:'80.0%',
        template:'预设模板名称',
        group:'日检',
        checkitem:'已开封物料',
        unqualified:'1',
        qualified:'0',
        inapplicable:'0',
        failurerate:'100%'
      },
      {
        id:'3',
        checked: false,
        name:'预设门店名',
        problem:'10',
        ontime:'60.0%',
        timeout:'40.0%',
        overtime:'80.0%',
        template:'预设模板名称',
        group:'日检',
        checkitem:'已开封物料',
        unqualified:'1',
        qualified:'0',
        inapplicable:'0',
        failurerate:'100%'
      },
      {
        id:'4',
        checked: false,
        name:'预设门店名',
        problem:'10',
        ontime:'60.0%',
        timeout:'40.0%',
        overtime:'80.0%',
        template:'预设模板名称',
        group:'日检',
        checkitem:'已开封物料',
        unqualified:'1',
        qualified:'0',
        inapplicable:'0',
        failurerate:'100%'
      },
      {
        id:'5',
        checked: false,
        name:'预设门店名',
        problem:'10',
        ontime:'60.0%',
        timeout:'40.0%',
        overtime:'80.0%',
        template:'预设模板名称',
        group:'日检',
        checkitem:'已开封物料',
        unqualified:'1',
        qualified:'0',
        inapplicable:'0',
        failurerate:'100%'
      },
      {
        id:'6',
        checked: false,
        name:'预设门店名',
        problem:'10',
        ontime:'60.0%',
        timeout:'40.0%',
        overtime:'80.0%',
        template:'预设模板名称',
        group:'日检',
        checkitem:'已开封物料',
        unqualified:'1',
        qualified:'0',
        inapplicable:'0',
        failurerate:'100%'
      },
    ],
  }
},
mounted() {
  var myChart = this.$echarts.init(document.getElementById('main'));
  var category = ['检查项名称1', '检查项名称2', '检查项名称3', '检查项名称4', '检查项名称5'];
  var barData = [66.6, 94.2, 22.0, 57.8, 8.1];

  var option = {
      title: {
      text: '问题Top5'
      },
      tooltip: {
          trigger: 'axis',
          axisPointer: {
              type: 'cross'
          }
      },
      grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
      },
      xAxis: {
          type: 'value',
          axisLine: {
              show: false
          },
          axisTick: {
              show: false
          }
      },
      yAxis: [{
          type: 'category',
          data: category,
          splitLine: {
              show: false
          },
          axisLine: {
              show: false
          },
          axisTick: {
              show: false
          },
          offset: 10,
          nameTextStyle: {
              fontSize: 15
          }
      },
      {
          name:'不合格率(%)',
          position:'right',
          splitLine: {
              show: false
          },
          axisLine: {
              show: false
          },
          axisTick: {
              show: false
          },
      }],
      series: [{
          name: '百分之',
          type: 'bar',
          data: barData,
          barWidth: 14,
          barGap: 10,
          smooth: true,
          label: {
              show: true,
              position: 'right',
              offset: [5, -2],
              textStyle: {
                  color: '#666666',
                  fontSize: 13
              },
              formatter: "{c}%"
          },
          itemStyle: {
              emphasis: {
                  barBorderRadius: 2
              },
              normal: {
                  barBorderRadius: 2,
                  color: '#2276FC'
              }
          }
      }]
  };
  myChart.setOption(option);
},
methods: {
  getitem(x) {
      if(this.list[x-1].checked == true){
       console.log(x);}
       else{
        if(this.checked == true)
        this.checked = false
      }
    },
  format() {
    return  '未整改情况';
  },
  format2() {
    return  '已整改情况';
  },
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
},
}
</script>

<style scoped>
  .w300{
    width: 260px;
  }
  .w800{
    width: 560px;
  }
  .title{
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    background: #D9D9D9;
    font-weight: 700;
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
    color: #fff;
    background-color: #0B5193;
  }
  .box{
    background: #CECECE;
    border-radius: 8px;
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
</style>