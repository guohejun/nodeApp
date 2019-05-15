import Vue from 'vue'
import { router, store } from '@/main.ts'
import Config from '@/Config'
import axios from 'axios'

const api = {
  request (apiName, params, method) {
    if (typeof (Config.api[apiName]) === 'undefined') {
      this.alertError('接口' + apiName + '未定义')
      return false
    }
    let apiUrl = process.env.NODE_ENV === 'production'
      ? Config.apiHost + Config.api[apiName]
      : Config.testHost + Config.api[apiName]
    params = params || {}
    if (!method) {
      method = 'get'
    }
    method = method.toLowerCase()
    switch (method) {
      case 'post':
        return new Promise((resolve, reject) => {
          axios.post(apiUrl, params)
            .then(res => {
              console.log('api then res data', res.data)
              resolve(res.data)
            })
            .catch(res => {
              reject(res)
            })
            .finally(res => {
              resolve(res)
            })
        })
      default:
        return new Promise((resolve, reject) => {
          axios.get(apiUrl, { params })
            .then(res => {
              resolve(res.data)
            })
            .catch(res => {
              reject(res)
            })
            .finally(res => {
              resolve(res)
            })
        })
    }
  },
  sign (params) {
    params.token = sessionStorage.getItem('token')
    return params
  },
  getStorage (name, val) { // val: name对应的值不存在，默认返回val
    let v = sessionStorage.getItem(name)
    let w
    if (v == null) {
      return val
    }
    try {
      w = JSON.parse(v)
      return w
    } catch (e) {
      return v
    }
  },
  setStorage (name, data, source) {
    sessionStorage.setItem(name, JSON.stringify(data))
    return data
  },
  alertError (msg, fb) {
    console.log('alertError')
    if (msg === '未登录或登录已过期') {
      if (['', '/login', '/register'].indexOf(store.state.route.path) === -1) {
        this.setStorage('login_jump', store.state.route.path)
      }
      router.replace('/login')
      return false
    }
    let alert = {
      show: true,
      title: '错误',
      content: msg,
      onShow: () => {
      },
      onHide: () => {
        if (msg === '未登录或登录已过期') {
          if (['', '/login', '/register'].indexOf(store.state.route.path) === -1) {
            this.setStorage('login_jump', store.state.route.path)
          }
          router.replace('/login')
          return false
        }
        fb && fb()
      }
    }
    // store.dispatch('global/hideLoading')
    store.commit('global/updateAlert', alert)
  }
}

// 响应拦截器
axios.interceptors.response.use(function (response) {
  // console.log(response.data)
  switch (response.data.status) {
    case 400:
      api.alertError(response.data.message)
      return Promise.reject(response)
    case 401:
      api.alertError('登录信息未认证')
      return Promise.reject(response)
    case 403:
      api.alertError('您没有权限进行此操作')
      return Promise.reject(response)
    case 404:
      api.alertError('未找到接口数据')
      return Promise.reject(response)
    case 302:
      window.location = '/login'
      return Promise.reject(response)
    case 500:
      api.alertError(response.data.message)
      return Promise.reject(response)
    default:
      return response
  }
}, function (error) {
  // console.log(error)
  if (error && error.response) {
    switch (error.response.status) {
      case 400:
        api.alertError(error.response.data.errorMessage)
        return Promise.reject(error)
      case 401:
        api.alertError('登录信息未认证')
        return Promise.reject(error)
      case 403:
        api.alertError('您没有权限进行此操作')
        return Promise.reject(error)
      case 404:
        api.alertError('未找到接口数据')
        return Promise.reject(error)
      case 302:
        window.location = '/login'
        return Promise.reject(error)
      case 500:
        api.alertError('服务器错误')
        return Promise.reject(error)
      default:
        api.alertError(`未知错误 ${error.response.status}`)
        return Promise.reject(error)
    }
  } else {
    api.alertError('连接服务失败！')
    return false
  }
})

export default api
