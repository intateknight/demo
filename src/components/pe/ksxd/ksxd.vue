<<<<<<< HEAD
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
          <video src="http://49.232.216.15:5009/save/02月/22日/房间/2023年02月22日10时08分50秒.mp4" style="width: 100%;" controls v-if="flag == 2"></video>
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

    <router-view  @childClick="childClick"></router-view>
    
    <van-tabbar></van-tabbar>
  </div>
</template>

<script>
import 'video.js/dist/video-js.min.css'
import videojs from 'video.js';
import { getVideo } from '@/api/api'     
export default {
 name:'ksxd',
 data() {
  return {
    player: null,
    time:'',
    flag:1,
    url:'http://49.232.216.15:5004/stream/play/demo/index.m3u8'
  }
 },
 methods: {
  childClick(e){
    this.flag = e
	},
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
  // onPlayerPlay(player) {
  //     alert("play");
  //   },
  //   onPlayerPause(player){
  //     alert("pause");
  //   },
  createVideo(){
    var options = {
	              autoplay: false,
	              controls: true,
                preload: 'auto',
                language: 'zh-CN',
	              sources: [
	                  {
	                      src: this.url
                        // src: 'http://49.232.216.15:5009/save/02月/房间/2023年02月16日16时00分26秒.mp4',
	                  }
	              ]
	           }
    this.player = videojs(this.$refs.videoPlayer, options, function onPlayerReady() {
        console.log('onPlayerReady', this);
    })
  },
 },
 mounted() {
  var m = 0
  var s = 0

  // this.playVido()

  setInterval(()=>{
    s++
    if(s == 60){
      m++
      s=0
    }
    this.time = m+':'+s
  },1000)
 
  this.createVideo()

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
  
  
=======
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
          <video src="http://49.232.216.15:5009/save/02月/22日/房间/2023年02月22日10时08分50秒.mp4" style="width: 100%;" controls v-if="flag == 2"></video>
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

    <router-view  @childClick="childClick"></router-view>
    
    <van-tabbar></van-tabbar>
  </div>
</template>

<script>
import 'video.js/dist/video-js.min.css'
import videojs from 'video.js';
import { getVideo } from '@/api/api'     
export default {
 name:'ksxd',
 data() {
  return {
    player: null,
    time:'',
    flag:1,
    url:'http://49.232.216.15:5004/stream/play/demo/index.m3u8'
  }
 },
 methods: {
  childClick(e){
    this.flag = e
	},
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
  // onPlayerPlay(player) {
  //     alert("play");
  //   },
  //   onPlayerPause(player){
  //     alert("pause");
  //   },
  createVideo(){
    var options = {
	              autoplay: false,
	              controls: true,
                preload: 'auto',
                language: 'zh-CN',
	              sources: [
	                  {
	                      src: this.url
                        // src: 'http://49.232.216.15:5009/save/02月/房间/2023年02月16日16时00分26秒.mp4',
	                  }
	              ]
	           }
    this.player = videojs(this.$refs.videoPlayer, options, function onPlayerReady() {
        console.log('onPlayerReady', this);
    })
  },
 },
 mounted() {
  var m = 0
  var s = 0

  // this.playVido()

  setInterval(()=>{
    s++
    if(s == 60){
      m++
      s=0
    }
    this.time = m+':'+s
  },1000)
 
  this.createVideo()

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
  
  
>>>>>>> e90c7b4 (暂存)
</style>