<<<<<<< HEAD
<template>
  <div>
    <div class="fixed">
      <div style="margin-top: 50px;">
        <van-nav-bar
          title="问题数据"
          left-arrow
          :border="false"
          @click-left="goback()"
        />
      </div>

      <div class="search">
        <van-search
          v-model="value"
          show-action
          placeholder="搜索"
          @search="onSearch"
        >
        <template #action>
          <div @click="onSearch">搜索</div>
        </template>
        </van-search>
        
        <!-- <span style="margin-left: 8px;">筛选</span>
        <van-icon name="filter-o" size="16"/> -->
      </div>

      <div class="time">
        <div class="date">日期：</div>
        <van-field v-model="time1" placeholder="请选择"  class="ipt" @click="show2 = true" readonly/>
        <div class="line"></div>
        <van-field v-model="time2" placeholder="请选择"  class="ipt" @click="show2 = true" readonly/>
        <img src="@/assets/approval/icon/more-vertical.png" alt="">
        <van-calendar v-model="show2" type="range" :show-confirm="false" @confirm="onConfirm" />
      </div>

      <div class="sort">
        <div style="display: flex; justify-content: space-between;width: 100%;">
          <van-button round type="info" size="mini" :color=color1 class="sort_btn" @click="changebtncolor(1)">全部</van-button>
          <van-button round type="info" size="mini" :color=color2 class="sort_btn" @click="changebtncolor(2)">巡店分析</van-button>
          <van-button round type="info" size="mini" :color=color3 class="sort_btn" @click="changebtncolor(3)">自检分析</van-button>
        </div>
      </div>
    </div> 

    <div class="blank"></div>
    <div class="bg">
      <div v-if="this.type == 1">
        <div class="chart">
          <div class="pie">
            <div style="font-size: 16px;font-weight: 700;">未整改情况</div>

            <van-circle
              v-model="currentRate"
              :rate="rate"
              layer-color="#F2CB40"
              color="#2276FC"
              size="56px"
              :stroke-width="60"
            />

            <div style="display: flex;align-items: center;font-size: 14px;">
              <div style="width: 8px;height: 8px;background: #2276FC;border-radius: 4px;margin-right: 12px;"></div>
              <div>
                <div>超时未整改 {{ (rate)*0.1 }}</div>
                <div>({{ rate }}.0%)</div>
              </div>
            </div>

            <div style="display: flex;align-items: center;font-size: 14px;">
              <div style="width: 8px;height: 8px;background: #F2CB40;border-radius: 4px;margin-right: 12px;"></div>
              <div>
                <div>超时未整改 {{ (100-rate)*0.1 }}</div>
                <div>({{ 100-rate }}.0%)</div>
              </div>
            </div>

          </div>
          <div class="pie">
            <div style="font-size: 16px;font-weight: 700;">已整改情况</div>

            <van-circle
              v-model="currentRate2"
              :rate="rate2"
              layer-color="#3BC4CD"
              color="#EE6767"
              size="56px"
              :stroke-width="60"
            />

            <div style="display: flex;align-items: center;font-size: 14px;">
              <div style="width: 8px;height: 8px;background: #EE6767;border-radius: 4px;margin-right: 12px;"></div>
              <div>
                <div>超时未整改 {{ (rate2)*0.1 }}</div>
                <div>({{ rate2 }}.0%)</div>
              </div>
            </div>

            <div style="display: flex;align-items: center;font-size: 14px;">
              <div style="width: 8px;height: 8px;background: #3BC4CD;border-radius: 4px;margin-right: 12px;"></div>
              <div>
                <div>超时未整改 {{ (100-rate2)*0.1 }}</div>
                <div>({{ 100-rate2 }}.0%)</div>
              </div>
            </div>

          </div>
        </div>
        <div class="histogram">
          <div style="background-color: #fff;padding: 10px ;">
            <div id="main" style="height:240px;"></div>
          </div>
        </div>
      </div>
      <div class="list" v-for="item in list" :key="item.id" >
        <div class="list_left" @click="push('/indexpe/wtxq')">
          <div class="left_img">
            <img src="@/assets/patrol/jcmb/Frame 2359.png" alt="">
          </div>
          <div class="left_txt">
            <div>
              <span style="font-weight: 700;">巡店次数：</span> <span>{{ item.frequency }}</span>
            </div>
            <div>
              <span style="font-weight: 700;">总问题数：</span> <span>{{ item.problem }}</span>
            </div>
            <div>
              <span style="font-weight: 700;">逾期问题数：</span> <span>{{ item.overtime }}</span>
            </div>
            <div>
              <span style="font-weight: 700;">已整改问题数：</span> <span>{{ item.ontime }}</span>
            </div>
          </div>
        </div>

      </div>
    </div>
    <div class="blank2"></div>

    <van-tabbar></van-tabbar>
  </div>
</template>

<script>      
export default {
 name:'tjbbpe',
 data() {
  return {
    type:1,
    color1:'#0B5193',
    color2:'#B7CADC',
    color3:'#B7CADC',
    currentRate: 0,
    rate:80,
    currentRate2: 0,
    rate2:60,
    time1:'',
    time2:'',
    show2: false,
    value: '',
    list:[
      {
        id:'1',
        img:'',
        frequency:1,
        problem:0,
        overtime:0,
        ontime:0,
      },
      {
        id:'2',
        img:'',
        frequency:1,
        problem:0,
        overtime:0,
        ontime:0,
      },
      {
        id:'3',
        img:'',
        frequency:1,
        problem:0,
        overtime:0,
        ontime:0,
      },
      {
        id:'4',
        img:'',
        frequency:1,
        problem:0,
        overtime:0,
        ontime:0,
      },
    ]
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
  goback(){
    this.$router.go(-1)
  },
  onSearch(val) {
      console.log(val);
  },
  push(x){
    this.$router.push(x)
  },
  formatDate(date) {
      return `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`;
    },
  onConfirm(date) {
      const [start, end] = date;
      this.show2 = false;
      this.date = `${this.formatDate(start)} - ${this.formatDate(end)}`;
      this.time1 =this.formatDate(start)
      this.time2 =this.formatDate(end)
    },
    changebtncolor(x){
      this.color1 = '#B7CADC'
      this.color2 = '#B7CADC'
      this.color3 = '#B7CADC'
      if(x == 1){
        this.color1 = '#0B5193'
        this.type = 1
        location. reload()
      }else if(x == 2){
        this.color2 = '#0B5193'
        this.type = 0
      }else{
        this.color3 = '#0B5193'
        this.type = 0
      }
    }
 },
}
</script>

<style scoped>
  .histogram{
    padding: 0 12px;
    margin-top: 12px;
  }
  .chart{
    padding: 0 12px;
    display: flex;
    justify-content: space-between;
  }
  .pie{
    box-sizing: border-box;
    /* margin: 0 12px; */
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    width: 45vw;
    height: 250px;
    background: #FFFFFF;
    border-radius: 8px;
    padding: 20px 0;
  }
  .fixed{
    width: 100%;
    height: 200px;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1;
    background-color: #fff;
  }
  .search{
    display:flex;
    align-items: center;
    justify-content: space-between;
    padding-right: 25px;
  }
  .van-search__action{
    box-sizing: border-box;
    width: 68px;
    text-align: center;
    background-color: #0B5193;
    border-top-right-radius: 8px;
    border-bottom-right-radius: 8px;
    color: #fff;
  }
  .van-search{
    width: 86%;
  }
  .van-search__content{
    border-radius: 0;
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
  }
  .van-icon-plus{
    font-weight: 700;
    font-size: 16px;
    color: #0B5193;
  }
  .sort{
    display: flex;
    box-sizing: border-box;
    width: 100%;
    height: 60px;
    border-top: 0.5px solid rgba(0, 0, 0, 0.08);
    border-bottom: 0.5px solid rgba(0, 0, 0, 0.08);
    padding: 16px;
    background-color: #fff;
  }
  .sort_btn{
    width: 104px;
  }
  .bg{
    width: 100%;
    background-color: #fcfcfc;
    /* background-color: #050505; */
    overflow:hidden;
  }
  .list{
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    padding: 12px;
    margin: 12px 14px;
    background-color: #fff;
    height: 136px;
  }
  .list_left{
    display: flex;
    flex-grow: 1;
  }
  .list_btn{
    width: 80px;
    border-radius: 4px;
    height: 28px;
  }
  .list_btn2{
    width: 80px;
    border-radius: 4px;
    height: 28px;
    color: #0BBE28 !important;
  }
  .left_img{
    margin-right: 12px;
  }
  .left_txt{
    /* width: 180px; */
    font-size: 14px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .mt52{
    margin-top: 52px;
  }
  .blank{
  width: 100%;
  height: 280px;
  background-color: #fcfcfc;
  }
  .blank2{
  width: 100%;
  height: 60px;
  background-color: #fcfcfc;
 }
 .popuplist{
  box-sizing: border-box;
  width: 100%;
  height: 50px;
  background-color: #fff;
  font-size: 16px;
  box-shadow: inset 0px 0.5px 0px rgba(0, 0, 0, 0.08);
  line-height: 50px;
  text-align: center;
  color: #333333;
 }
 div /deep/ .van-nav-bar__title{
  font-weight: 700;
 }
 .time{
  /* position: absolute; */
  box-sizing:border-box;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 12px 18px;
  gap: 3px;
  width: 100%;
  height: 52px;
  background: #FFFFFF;
  border-top: 1px solid rgba(0, 0, 0, 0.08);
  border-bottom: 1px solid rgba(0, 0, 0, 0.08);
  overflow: hidden;
}
.date{
  width: 42px;
  height: 20px;
  font-family: 'PingFang SC';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #333333;
}
.line{
  width: 8px;
  height: 1px;
  background: #333333;
  margin-left: 6px;
  margin-right: 6px;
}
.ipt{
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 4px 24px 4px 24px;
  width: 122px;
  height: 28px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 20px;
}
=======
<template>
  <div>
    <div class="fixed">
      <div style="margin-top: 50px;">
        <van-nav-bar
          title="问题数据"
          left-arrow
          :border="false"
          @click-left="goback()"
        />
      </div>

      <div class="search">
        <van-search
          v-model="value"
          show-action
          placeholder="搜索"
          @search="onSearch"
        >
        <template #action>
          <div @click="onSearch">搜索</div>
        </template>
        </van-search>
        
        <!-- <span style="margin-left: 8px;">筛选</span>
        <van-icon name="filter-o" size="16"/> -->
      </div>

      <div class="time">
        <div class="date">日期：</div>
        <van-field v-model="time1" placeholder="请选择"  class="ipt" @click="show2 = true" readonly/>
        <div class="line"></div>
        <van-field v-model="time2" placeholder="请选择"  class="ipt" @click="show2 = true" readonly/>
        <img src="@/assets/approval/icon/more-vertical.png" alt="">
        <van-calendar v-model="show2" type="range" :show-confirm="false" @confirm="onConfirm" />
      </div>

      <div class="sort">
        <div style="display: flex; justify-content: space-between;width: 100%;">
          <van-button round type="info" size="mini" :color=color1 class="sort_btn" @click="changebtncolor(1)">全部</van-button>
          <van-button round type="info" size="mini" :color=color2 class="sort_btn" @click="changebtncolor(2)">巡店分析</van-button>
          <van-button round type="info" size="mini" :color=color3 class="sort_btn" @click="changebtncolor(3)">自检分析</van-button>
        </div>
      </div>
    </div> 

    <div class="blank"></div>
    <div class="bg">
      <div v-if="this.type == 1">
        <div class="chart">
          <div class="pie">
            <div style="font-size: 16px;font-weight: 700;">未整改情况</div>

            <van-circle
              v-model="currentRate"
              :rate="rate"
              layer-color="#F2CB40"
              color="#2276FC"
              size="56px"
              :stroke-width="60"
            />

            <div style="display: flex;align-items: center;font-size: 14px;">
              <div style="width: 8px;height: 8px;background: #2276FC;border-radius: 4px;margin-right: 12px;"></div>
              <div>
                <div>超时未整改 {{ (rate)*0.1 }}</div>
                <div>({{ rate }}.0%)</div>
              </div>
            </div>

            <div style="display: flex;align-items: center;font-size: 14px;">
              <div style="width: 8px;height: 8px;background: #F2CB40;border-radius: 4px;margin-right: 12px;"></div>
              <div>
                <div>超时未整改 {{ (100-rate)*0.1 }}</div>
                <div>({{ 100-rate }}.0%)</div>
              </div>
            </div>

          </div>
          <div class="pie">
            <div style="font-size: 16px;font-weight: 700;">已整改情况</div>

            <van-circle
              v-model="currentRate2"
              :rate="rate2"
              layer-color="#3BC4CD"
              color="#EE6767"
              size="56px"
              :stroke-width="60"
            />

            <div style="display: flex;align-items: center;font-size: 14px;">
              <div style="width: 8px;height: 8px;background: #EE6767;border-radius: 4px;margin-right: 12px;"></div>
              <div>
                <div>超时未整改 {{ (rate2)*0.1 }}</div>
                <div>({{ rate2 }}.0%)</div>
              </div>
            </div>

            <div style="display: flex;align-items: center;font-size: 14px;">
              <div style="width: 8px;height: 8px;background: #3BC4CD;border-radius: 4px;margin-right: 12px;"></div>
              <div>
                <div>超时未整改 {{ (100-rate2)*0.1 }}</div>
                <div>({{ 100-rate2 }}.0%)</div>
              </div>
            </div>

          </div>
        </div>
        <div class="histogram">
          <div style="background-color: #fff;padding: 10px ;">
            <div id="main" style="height:240px;"></div>
          </div>
        </div>
      </div>
      <div class="list" v-for="item in list" :key="item.id" >
        <div class="list_left" @click="push('/indexpe/wtxq')">
          <div class="left_img">
            <img src="@/assets/patrol/jcmb/Frame 2359.png" alt="">
          </div>
          <div class="left_txt">
            <div>
              <span style="font-weight: 700;">巡店次数：</span> <span>{{ item.frequency }}</span>
            </div>
            <div>
              <span style="font-weight: 700;">总问题数：</span> <span>{{ item.problem }}</span>
            </div>
            <div>
              <span style="font-weight: 700;">逾期问题数：</span> <span>{{ item.overtime }}</span>
            </div>
            <div>
              <span style="font-weight: 700;">已整改问题数：</span> <span>{{ item.ontime }}</span>
            </div>
          </div>
        </div>

      </div>
    </div>
    <div class="blank2"></div>

    <van-tabbar></van-tabbar>
  </div>
</template>

<script>      
export default {
 name:'tjbbpe',
 data() {
  return {
    type:1,
    color1:'#0B5193',
    color2:'#B7CADC',
    color3:'#B7CADC',
    currentRate: 0,
    rate:80,
    currentRate2: 0,
    rate2:60,
    time1:'',
    time2:'',
    show2: false,
    value: '',
    list:[
      {
        id:'1',
        img:'',
        frequency:1,
        problem:0,
        overtime:0,
        ontime:0,
      },
      {
        id:'2',
        img:'',
        frequency:1,
        problem:0,
        overtime:0,
        ontime:0,
      },
      {
        id:'3',
        img:'',
        frequency:1,
        problem:0,
        overtime:0,
        ontime:0,
      },
      {
        id:'4',
        img:'',
        frequency:1,
        problem:0,
        overtime:0,
        ontime:0,
      },
    ]
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
  goback(){
    this.$router.go(-1)
  },
  onSearch(val) {
      console.log(val);
  },
  push(x){
    this.$router.push(x)
  },
  formatDate(date) {
      return `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`;
    },
  onConfirm(date) {
      const [start, end] = date;
      this.show2 = false;
      this.date = `${this.formatDate(start)} - ${this.formatDate(end)}`;
      this.time1 =this.formatDate(start)
      this.time2 =this.formatDate(end)
    },
    changebtncolor(x){
      this.color1 = '#B7CADC'
      this.color2 = '#B7CADC'
      this.color3 = '#B7CADC'
      if(x == 1){
        this.color1 = '#0B5193'
        this.type = 1
        location. reload()
      }else if(x == 2){
        this.color2 = '#0B5193'
        this.type = 0
      }else{
        this.color3 = '#0B5193'
        this.type = 0
      }
    }
 },
}
</script>

<style scoped>
  .histogram{
    padding: 0 12px;
    margin-top: 12px;
  }
  .chart{
    padding: 0 12px;
    display: flex;
    justify-content: space-between;
  }
  .pie{
    box-sizing: border-box;
    /* margin: 0 12px; */
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    width: 45vw;
    height: 250px;
    background: #FFFFFF;
    border-radius: 8px;
    padding: 20px 0;
  }
  .fixed{
    width: 100%;
    height: 200px;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1;
    background-color: #fff;
  }
  .search{
    display:flex;
    align-items: center;
    justify-content: space-between;
    padding-right: 25px;
  }
  .van-search__action{
    box-sizing: border-box;
    width: 68px;
    text-align: center;
    background-color: #0B5193;
    border-top-right-radius: 8px;
    border-bottom-right-radius: 8px;
    color: #fff;
  }
  .van-search{
    width: 86%;
  }
  .van-search__content{
    border-radius: 0;
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
  }
  .van-icon-plus{
    font-weight: 700;
    font-size: 16px;
    color: #0B5193;
  }
  .sort{
    display: flex;
    box-sizing: border-box;
    width: 100%;
    height: 60px;
    border-top: 0.5px solid rgba(0, 0, 0, 0.08);
    border-bottom: 0.5px solid rgba(0, 0, 0, 0.08);
    padding: 16px;
    background-color: #fff;
  }
  .sort_btn{
    width: 104px;
  }
  .bg{
    width: 100%;
    background-color: #fcfcfc;
    /* background-color: #050505; */
    overflow:hidden;
  }
  .list{
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    padding: 12px;
    margin: 12px 14px;
    background-color: #fff;
    height: 136px;
  }
  .list_left{
    display: flex;
    flex-grow: 1;
  }
  .list_btn{
    width: 80px;
    border-radius: 4px;
    height: 28px;
  }
  .list_btn2{
    width: 80px;
    border-radius: 4px;
    height: 28px;
    color: #0BBE28 !important;
  }
  .left_img{
    margin-right: 12px;
  }
  .left_txt{
    /* width: 180px; */
    font-size: 14px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .mt52{
    margin-top: 52px;
  }
  .blank{
  width: 100%;
  height: 280px;
  background-color: #fcfcfc;
  }
  .blank2{
  width: 100%;
  height: 60px;
  background-color: #fcfcfc;
 }
 .popuplist{
  box-sizing: border-box;
  width: 100%;
  height: 50px;
  background-color: #fff;
  font-size: 16px;
  box-shadow: inset 0px 0.5px 0px rgba(0, 0, 0, 0.08);
  line-height: 50px;
  text-align: center;
  color: #333333;
 }
 div /deep/ .van-nav-bar__title{
  font-weight: 700;
 }
 .time{
  /* position: absolute; */
  box-sizing:border-box;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 12px 18px;
  gap: 3px;
  width: 100%;
  height: 52px;
  background: #FFFFFF;
  border-top: 1px solid rgba(0, 0, 0, 0.08);
  border-bottom: 1px solid rgba(0, 0, 0, 0.08);
  overflow: hidden;
}
.date{
  width: 42px;
  height: 20px;
  font-family: 'PingFang SC';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #333333;
}
.line{
  width: 8px;
  height: 1px;
  background: #333333;
  margin-left: 6px;
  margin-right: 6px;
}
.ipt{
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 4px 24px 4px 24px;
  width: 122px;
  height: 28px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 20px;
}
>>>>>>> e90c7b4 (暂存)
</style>