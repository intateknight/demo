//1.导入vue 和 vuerouter 的包
import Vue from 'vue'
import VueRouter from 'vue-router'

// pe
import IndexPE from '@/components/pe/main/indexpe.vue'
import LoginPE from '@/components/pe/login/loginpe.vue'
import Approval from '@/components/pe/approval/approval.vue'
import Patrol from '@/components/pe/patrol/patrol.vue'
import Jcmbpe from '@/components/pe/jcmb_pe/jcmb_pe.vue'
import Xzflpe from '@/components/pe/jcmb_pe/xzfl/xzfl_pe.vue'
import Bjmbpe from '@/components/pe/jcmb_pe/bjmb/bjmb_pe.vue'
import Bjmbpe2 from '@/components/pe/jcmb_pe/bjmb/bjmb_pe2.vue'
import Kjmd from '@/components/pe/jcmb_pe/bjmb/kjmd.vue'
import Itemtype from '@/components/pe/jcmb_pe/bjmb/itemtype.vue'
import Checkitem from '@/components/pe/jcmb_pe/bjmb/checkitem.vue'
import Djpp from '@/components/pe/jcmb_pe/bjmb/djpp.vue'
import Resultset from '@/components/pe/jcmb_pe/bjmb/resultset.vue'
import Mdxq from '@/components/pe/jcmb_pe/bjmb/mdxq.vue'
import Xdrwpe from '@/components/pe/xdrw_pe/xdrw_pe.vue'
import Cjrw from '@/components/pe/xdrw_pe/cjrw/cjrw.vue'
import Mdfw from '@/components/pe/xdrw_pe/cjrw/mdfw.vue'
import Zddy1 from '@/components/pe/xdrw_pe/cjrw/zddy1.vue'
import Zddy2 from '@/components/pe/xdrw_pe/cjrw/zddy2.vue'
import Shy1 from '@/components/pe/xdrw_pe/cjrw/shy1.vue'
import Shy2 from '@/components/pe/xdrw_pe/cjrw/shy2.vue'
import Rwxq from '@/components/pe/xdrw_pe/cjrw/rwxq.vue'
import Tjbbpe from '@/components/pe/tjbb_pe/tjbb_pe.vue'
import Tjxq from '@/components/pe/tjbb_pe/tjxq.vue'
import Wtsjpe from '@/components/pe/wtsj_pe/wtsj_pe.vue'
import Wtxq from '@/components/pe/wtsj_pe/wtxq.vue'
import Mdlb from '@/components/pe/ksxd/mdlb.vue'
import Ksxd from '@/components/pe/ksxd/ksxd.vue'
import Ygzj from '@/components/pe/ksxd/ygzj.vue'
import Ysgl from '@/components/pe/ksxd/ysgl.vue'
import Jkglpe from '@/components/pe/ksxd/jkgl_pe.vue'
import Ckhf from '@/components/pe/ksxd/ckhf.vue'
import Cjwt from '@/components/pe/ksxd/cjwt.vue'
import Zgxq from '@/components/pe/approval/zgxq.vue'


// pc
import IndexPC from '@/components/pc/main/indexpc.vue'
import LoginPC from '@/components/pc/login/loginpc.vue'
import Jcmb from '@/components/pc/jcmb/jcmb.vue'
import Cjmb from '@/components/pc/jcmb/cjmb.vue'
import Jbxx from "@/components/pc/jcmb/jbxx.vue";
import Mbnr from '@/components/pc/jcmb/mbnr.vue'
import Mdrw from '@/components/pc/mdrw/mdrw.vue'
import Mdbg from '@/components/pc/mdbg/mdbg.vue'
import Qdsj from '@/components/pc/qdsj/qdsj.vue'
import Zgwt from '@/components/pc/zgwt/zgwt.vue'
import Mdgl from '@/components/pc/ddgl/mdgl/mdgl.vue'
import Yhgl from '@/components/pc/ddgl/yhgl/yhgl.vue'
import Jsgl from '@/components/pc/ddgl/jsgl/jsgl.vue'
import Jkgl from '@/components/pc/ddgl/jkgl/jkgl.vue'
import Ywsz from '@/components/pc/ddgl/ywsz/ywsz.vue'
import Ztfx from '@/components/pc/sjfx/ztfx/ztfx.vue'
import Xdfx from '@/components/pc/sjfx/ztfx/xdfx.vue'
import Zjfx from '@/components/pc/sjfx/ztfx/zjfx.vue'
import Dfph from '@/components/pc/sjfx/dfph/dfph.vue'
import Zgph from '@/components/pc/sjfx/zgph/zgph.vue'

//vue.use()函数的作用，就是来安装插件的
Vue.use(VueRouter)


const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

//3.创建路由的实例对象
const router = new VueRouter({
  routes: [
    // 重定向，默认pc
    { path: '', redirect: '/indexpc' },

    // pe
    { path: '/loginpe', component: LoginPE, },
    {
      path: '/indexpe', component: IndexPE, children: [
        { path: '', component: Patrol },
        { path: 'approval', component: Approval },
        { path: 'jcmbpe', component: Jcmbpe },
        { path: 'xzflpe', component: Xzflpe },
        { path: 'bjmbpe', component: Bjmbpe },
        { path: 'bjmbpe2', component: Bjmbpe2 },
        { path: 'kjmd', component: Kjmd },
        { path: 'itemtype', component: Itemtype },
        { path: 'checkitem', component: Checkitem },
        { path: 'djpp', component: Djpp },
        { path: 'resultset', component: Resultset },
        { path: 'mdxq', component: Mdxq },
        { path: 'xdrwpe', component: Xdrwpe },
        { path: 'cjrw', component: Cjrw },
        { path: 'mdfw', component: Mdfw },
        { path: 'zddy1', component: Zddy1 },
        { path: 'zddy2', component: Zddy2 },
        { path: 'shy1', component: Shy1 },
        { path: 'shy2', component: Shy2 },
        { path: 'rwxq', component: Rwxq },
        { path: 'tjbbpe', component: Tjbbpe },
        { path: 'tjxq', component: Tjxq },
        { path: 'wtsjpe', component: Wtsjpe },
        { path: 'wtxq', component: Wtxq },
        { path: 'mdlb', component: Mdlb },
        {
          path: 'ksxd', component: Ksxd, children: [
            { path: '', component: Ygzj },
            { path: 'ysgl', component: Ysgl },
            { path: 'jkgl', component: Jkglpe },
            { path: 'ckhf', component: Ckhf },
            { path: 'cjwt', component: Cjwt },
          ]
        },
        { path: 'zgxq', component: Zgxq },
      ]
    },


    // pc
    { path: '/loginpc', component: LoginPC, },
    {
      path: '/indexpc', component: IndexPC, children: [
        {
          path: '', component: Jcmb, children: [
            { path: '', component: Cjmb },
            { path: 'jbxx', component: Jbxx },
            { path: 'mbnr', component: Mbnr },
          ]
        },
        { path: 'mdrw', component: Mdrw },
        { path: 'mdbg', component: Mdbg },
        { path: 'qdsj', component: Qdsj },
        { path: 'zgwt', component: Zgwt },
        { path: 'mdgl', component: Mdgl },
        { path: 'yhgl', component: Yhgl },
        { path: 'jsgl', component: Jsgl },
        { path: 'jkgl', component: Jkgl },
        { path: 'ywsz', component: Ywsz },
        {
          path: 'ztfx', component: Ztfx, children: [
            { path: '', component: Xdfx },
            { path: 'zjfx', component: Zjfx }
          ]
        },
        { path: 'dfph', component: Dfph },
        { path: 'zgph', component: Zgph },
      ]
    },
  ]
})
// 全局前置守卫
router.beforeEach((to, from, next) => {
  let token = localStorage.getItem('token');

  if (to.path === '' || to.path === '/loginpc' || to.path === '/loginpe') {
    next()
  } else {
    if (token === null) {
      next('/')
    } else {
      next()
    }
  }

  // if (token && (to.path !== '/loginpc' && to.path !== '/loginpe')) {
  //   next()
  // } else if (token && (to.path !== '/loginpc' || to.path !== '/loginpe')) {
  //   next('/')
  // } else if (!token && (to.path !== '/loginpc' && to.path !== '/loginpe')) {
  //   next('/')
  // } else {
  //   next()
  // }
});



//4.向外共享路由的实例对象
export default router