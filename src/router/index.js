import Vue from 'vue'
import Router from 'vue-router'

import Main from '@/components/Main.vue'
import Login from '@/components/Login.vue'
import Register from '@/components/Register.vue'
import LineLogin from '@/components/LineLogin.vue'
import PersonalInformation from '@/components/PersonalInformation.vue'
import FollowTeacher from '@/components/student/FollowTeacher.vue'
import Teacher from '@/components/student/Teacher.vue'
import FollowedStudent from '@/components/teacher/FollowedStudent.vue'
import Student from '@/components/teacher/Student.vue'
/* 懒加载方式，当路由被访问的时候才加载对应的组件 */
/* const Login = resolve => require(['@/components/Login'], resolve) */

Vue.use(Router)// 注册vue-router

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/main',
      name: 'Main',
      component: Main,
      children: [
        {
          path: '/personalInformation',
          name: 'PersonalInformation',
          component: PersonalInformation
        },
        {
          path: '/followTeacher',
          name: 'FollowTeacher',
          component: FollowTeacher
        },
        {
          path: '/teacher',
          name: 'Teacher',
          component: Teacher
        },
        {
          path: '/followedStudent',
          name: 'FollowedStudent',
          component: FollowedStudent
        },
        {
          path: '/student',
          name: 'Student',
          component: Student
        },
      ]
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/LineLogin',
      name: 'LineLogin',
      component: LineLogin
    }
  ]
})
