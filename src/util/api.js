import axios from 'axios'
import {post} from './http'
import {webURL} from './apiProjectPrefix'

axios.defaults.timeout = 300000 // 设置请求时间
axios.defaults.withCredentials = true

const payRecordApi = {
  login (param) {
    return post(webURL + '/api/login', param)
  },
  details (param) {
    return post(webURL + '/api/get-details', param)
  },
  register (param) {
    return post(webURL + '/api/register', param)
  },
  follow (param) {
    return post(webURL + '/api/my-follow', param)
  },
  checkFollow (param) {
    return post(webURL + '/api/check-follow', param)
  },
  getTeacherList (param) {
    return post(webURL + '/api/get-teacher-list', param)
  },
  getStudentsList (param) {
    return post(webURL + '/api/get-students-list', param)
  }
}
const API = {
  baseUrl: webURL,
  ...payRecordApi
}
export default API
