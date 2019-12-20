<template>
  <div>
    <el-form ref="AccountFrom" :model="account" :rules="rules" label-position="left" label-width="100px"
             class="demo-ruleFrom login-container">
      <h3>系统登录</h3>
      <el-form-item prop="email" label="邮箱">
        <el-input type="text" v-model="account.email" auto-complete="off" placeholder="用户名"></el-input>
      </el-form-item>
      <el-form-item prop="name" label="姓名">
        <el-input type="text" v-model="account.name" auto-complete="off" placeholder="密码"></el-input>
      </el-form-item>
      <el-form-item prop="password" label="密码">
        <el-input type="password" v-model="account.password" auto-complete="off" placeholder="密码"></el-input>
      </el-form-item>
      <el-form-item prop="c_password" label="确认密码">
        <el-input type="password" v-model="account.c_password" auto-complete="off" placeholder="密码"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="handleRegister" :loading="logining">注册</el-button>
        <el-button type="primary" @click="handleBack">返回</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'Register',
  data () {
    // 表单校验,默认的用户名，密码
    return {
      logining: false,
      account: {
        name: '',
        password: '',
        c_password: '',
        email: ''
      },
      /* 判断：如果用户没有输入用户名，提示“请输入账号”
          判断：如果用户没有输入密码，提示“请输入密码”用于表单验证 */
      rules: {
        name: [{
          required: true, message: '请输入账号', trigger: 'blur'
        }],
        password: [{
          required: true, message: '请输入密码', trigger: 'blur'
        }]
      },
      checked: true
    }
  },
  methods: {
    handleRegister () {
      this.API.register({'email': this.account.email, 'password': this.account.password, 'name': this.account.name, 'c_password': this.account.c_password}).then(
        res => {
          if (res.status === true) {
            localStorage.setItem('token', res.data.token)
            localStorage.setItem('user_role', res.data.user.user_role)
            this.$router.push('/main')
          }
        }
      )
    },
    handleBack () {
      this.$router.push('/')
    }
  }
}
</script>

<style scoped>

</style>
