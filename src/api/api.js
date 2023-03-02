<<<<<<< HEAD
import service from '@/api/request.js';

export function getVideo(data) {
  return service.get('stream/play/demo/index.m3u8', data)
}

export function getDeviceList(data) {
  return service.get('/device/map', data)
}

export function deviceAdd(params) {
  return service.post('/device/add', params)
}

export function deviceDel(params) {
  return service.post('/device/del', params)
}

export function query(params) {
  return service.post('https://1to2to3.cn/rds2/service/query', params)
}

=======
import service from '@/api/request.js';

export function getVideo(data) {
  return service.get('stream/play/demo/index.m3u8', data)
}

export function getDeviceList(data) {
  return service.get('/device/map', data)
}

export function deviceAdd(params) {
  return service.post('/device/add', params)
}

export function deviceDel(params) {
  return service.post('/device/del', params)
}

export function query(params) {
  return service.post('https://1to2to3.cn/rds2/service/query', params)
}

export function login(params) {
  return service.post('https://1to2to3.cn/super-login/oauth/token', params)
}

export function register(params) {
  return service.post('https://1to2to3.cn/super-login/user/register', params)
}


>>>>>>> e90c7b4 (暂存)
