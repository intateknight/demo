import service from '@/api/request.js';

//监控相关
export function getVideo(data) {
  return service.get('http://49.232.216.15:5009/supervision/hls/play/ce185w78uyv4/index.m3u8', data)
}

export function getDeviceList(url, params) {
  return service.get(url, params)
}

export function deviceAdd(url, params) {
  return service.post(url, params)
}

export function deviceDel(url, params) {
  return service.post(url, params)
}

// 数据库相关
export function query(params) {
  return service.post('https://1to2to3.cn/rds2/service/query', params)
}

export function create(params) {
  return service.post('https://1to2to3.cn/rds2/service/create', params)
}


// 用户中心相关
export function login(url, params) {
  return service.post(url, params)
}

export function register(params) {
  return service.post('https://1to2to3.cn/super-login/user/register', params)
}

export function userinfo(params) {
  return service.post('https://1to2to3.cn/super-login/sys/me', params)
}


