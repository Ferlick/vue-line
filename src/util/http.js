import axios from 'axios'
import { Message } from 'element-ui'

let qs = require('qs')

axios.defaults.baseURL = ''
axios.defaults.withCredentials = true

function http (config) {
  return new Promise((resolve, reject) => {
    let token = localStorage.getItem('token')
    if (localStorage.key('token') && localStorage.getItem('token') != null &&
     localStorage.getItem('token') !== '') {
      config.headers.Authorization = 'Bearer ' + token
    }
    axios(config).then(response => {
      resolve(response.data)
    }).catch(err => {
      Message({message: '网络请求发生错误！', showClose: true})
      reject(err)
    })
  })
}

/**
 * 封装get方法
 * @param url 要请求的url地址
 * @param params 请求的参数
 * @returns {Promise}
 */
export function fetch (url, params = {}) {
  return http({
    method: 'GET',
    url: url,
    params: params,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'platform': 'PC'
    }
  })
}

/**
* 封装post请求
* @param url 要请求的url地址
* @param data 请求的参数
* @returns {Promise}
*/
export function post (url, data = {}) {
  return http({
    method: 'POST',
    url: url,
    data: qs.stringify(data),
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'},
    withCredentials: false
  })
}

export function postBlob (url, data = {}) {
  return http({
    method: 'POST',
    url: url,
    responseType: 'blob',
    data: qs.stringify(data),
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  })
}
export function jsonPost (url, data = {}) {
  return http({
    method: 'POST',
    url: url,
    data: data,
    headers: {
      'Content-Type': 'application/json'
    }
  })
}
export function filePost (url, data = {}) {
  return http({
    method: 'POST',
    url: url,
    data: data,
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  })
}
/**
* 封装patch请求
* @param url 要请求的url地址
* @param data 请求的参数
* @returns {Promise}
*/

export function patch (url, data = {}) {
  return http({
    method: 'PATCH',
    url: url,
    data: data,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'platform': 'PC'
    }
  })
}

/**
* 封装put请求
* @param url 要请求的url地址
* @param data 请求的参数
* @returns {Promise}
*/

export function put (url, data = {}) {
  return http({
    method: 'PUT',
    url: url,
    data: data,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'platform': 'PC'
    }
  })
}
