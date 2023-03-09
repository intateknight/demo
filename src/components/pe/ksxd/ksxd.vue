<template>
  <div>
    <div class="fixed">
      <div style="margin-top: 50px;">
        <van-nav-bar
          left-text="门店名称"
          left-arrow
          :border="false"
          @click-left="goback()"
        />
        <div style="font-size: 16px;margin-left: 20px;margin-bottom: 12px;">员工自检（0/5）</div>
        <div style="width: 100%;height: 240px;overflow: auto;">
          <!-- <img src="@/assets/patrol/jcmb/Frame 2376.png" alt="" style="width: 100%;max-height: 400px;"> -->
          <div class="videoArea" style="width: 100%;height: 100%;" v-if="flag == 1">
            <keep-alive>  
              <video ref="videoPlayer" class="video-js" ></video>
            </keep-alive>
          </div>
          <div v-if="flag == 2">
            <keep-alive>  
              <video id="videoElement" controls autoplay muted width="100%" height="100%"></video>
            </keep-alive>
          </div>
        </div>
        <div style="display: flex;justify-content: space-between;align-items: center; box-shadow: inset 0px -0.5px 0px rgba(0, 0, 0, 0.08);height: 36px;">
          <div @click="push('/indexpe/ksxd/jkgl')" style="width: 33.33333%; display: flex;align-items: center;justify-content: center; box-shadow: inset -0.5px 0px 0px rgba(0, 0, 0, 0.08);">
            <img src="@/assets/patrol/jcmb/Frame.png" alt="">
            <div style="margin: 0 8px;font-size: 14px;">监控</div>
            <div>▼</div>
          </div>
          <div @click="push('/indexpe/ksxd/ysgl')" style="width: 33.33333%;  display: flex;align-items: center;justify-content: center; box-shadow: inset -0.5px 0px 0px rgba(0, 0, 0, 0.08);">
            <img src="@/assets/patrol/jcmb/Frame2.png" alt="">
            <div style="margin: 0 8px;font-size: 14px;">预设位</div>
            <div>▼</div>
          </div>
          <div style="width: 33.33333%;  display: flex;align-items: center;justify-content: center; box-shadow: inset -0.5px 0px 0px rgba(0, 0, 0, 0.08);">
            <div style="margin-right:8px;font-size: 14px;">巡店用时</div>
            <div style="font-size: 14px;font-weight: 700;">{{ time }}</div>
          </div>
        </div>
      </div>

    </div> 

    <router-view></router-view>
    
    <van-tabbar></van-tabbar>
  </div>
</template>

<script>
import eventBus from '@/eventBus/eventBus.js';
import 'video.js/dist/video-js.min.css'
import videojs from 'video.js';
import flvjs from 'flv.js'
import "videojs-flvjs-es6";
import { getVideo,getDeviceList, create } from '@/api/api'     
export default {
 name:'ksxd',
 data() {
  return {
    player: null,
    time:'',
    flag:1,
    device:0,
    deviceName:'',
    org_id:5009,
    url:'',
  }
 },
 methods: {


  goback(){
    this.flag = 1
    this.$router.go(-1)
    this.$nextTick(()=>{
        this.createVideo()
    })
  },
  push(x){
    this.$router.push(x)
  },
  playVido(){
    getVideo().then((res)=>{
      console.log(res);
    })
  },
  play () {
        this.flvPlayer.play();
      },
 createVideo(){
    var options = {
	              autoplay: false,
	              controls: true,
                // preload: 'auto',
                // language: 'zh-CN',
	              sources: [
	                  {    
                        type: "application/x-mpegURL",
	                      src: `http://49.232.216.15:${this.org_id}/supervision/hls/play/${this.deviceName}/index.m3u8`
	                  }
                  ]
	           }
    this.player = videojs(this.$refs.videoPlayer, options, function onPlayerReady() {
        console.log('onPlayerReady', this);
    })
  },
   createFlv(){
    if (flvjs.isSupported()) {
        var videoElement = document.getElementById('videoElement');
        this.flvPlayer = flvjs.createPlayer({
          type: 'flv',
		  isLive: true,
		  hasAudio: false,
          url: `http://49.232.216.15:${this.org_id}/supervision/video_file/source/${this.deviceName}-2023-03-08-02-00-00.flv`		// 自己的flv视频流
        });
        this.flvPlayer.attachMediaElement(videoElement);
        this.flvPlayer.load();
		    this.flvPlayer.play();
    }
  },


  // 控制直播和录像的显示隐藏
  initData(){
    if(this.$route.query.flag == 1){
    this.flag = 1
    this.$nextTick(()=>{
        this.createVideo()
    })
   }else if(this.$route.query.flag == 2){
    this.flag = 2
    this.$nextTick(()=>{
        this.createFlv()
    })
   }else{
    this.flag = 1
    
   }
   
  },

},
// 监听路由
watch: {
    '$route': 'initData'
  },
created() {
      //根据key名获取传递回来的参数，data就是map
      eventBus.$on('addressInfo', function(data){
        console.log(data,"data");
      }.bind(this));
},
mounted() {
  var url = `http://49.232.216.15:${this.org_id}/supervision/device/query`
  getDeviceList(url).then((res)=>{
  this.deviceName = res.data[this.device].ID

  this.$nextTick(()=>{
        this.createVideo()
    })
  })
  var m = 0
  var s = 0


  setInterval(()=>{
    s++
    if(s == 60){
      m++
      s=0
    }
    this.time = m+':'+s
  },1000)
 },

//  computed: {
//     player() {
//       return this.$refs.videoPlayer.player
//     }
//   }
}
</script>

<style scoped>
  
  div /deep/.van-nav-bar__text{
    font-size: 20px;
    font-weight: 700;
    color: #333333;
  }
  div /deep/.van-nav-bar__arrow{
    font-size: 20px;
    font-weight: 700;
    color: #333333;
  }
  .fixed{
    width: 100%;
    /* height: 150px; */
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1;
    background-color: #fff;
  }
  .container {
    background-color: #efefef;
    min-height: 100%;
  }
  .vjs_video_2390-dimensions {
    width: 100%;
    height: 100%;
  }
  .video-js {
    width: 100%;
    height: 100%;
    background-color: #fff;
  }
  
  
</style>