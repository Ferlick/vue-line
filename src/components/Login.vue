<template>
  <el-form ref="AccountFrom" :model="account" :rules="rules" label-position="left" label-width="0px"
           class="demo-ruleFrom login-container">
    <h3>系统登录</h3>
    <el-form-item prop="username">
      <el-input type="text" v-model="account.email" auto-complete="off" placeholder="用户名"></el-input>
    </el-form-item>
    <el-form-item prop="pwd">
      <el-input type="password" v-model="account.password" auto-complete="off" placeholder="密码"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="handleLogin" :loading="logining">登录</el-button>
      <el-button type="primary" @click="handleLineLogin" :loading="logining">line登录</el-button>
      <el-button type="primary" @click="handleRegister" :loading="logining">注册</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
export default {
  name: '登录',
  data () {
    // 表单校验,默认的用户名，密码
    return {
      logining: false,
      account: {
        email: '',
        password: ''
      },
      rules: {
        email: [{
          required: true, message: '请输入邮箱', trigger: 'blur'
        }],
        password: [{
          required: true, message: '请输入密码', trigger: 'blur'
        }]
      },
      checked: true
    }
  },
  methods: {
    handleLogin () {
      let that = this
      this.$refs.AccountFrom.validate((valid) => {
        if (valid) {
          that.API.login({'email': that.account.email, 'password': that.account.password}).then(
            res => {
              if (res.status === true) {
                localStorage.setItem('token', res.data.token)
                localStorage.setItem('user_role', res.data.user.user_role)
                this.$router.push('/main')
              }
            }
          )
        } else {
          return false
        }
      })
    },
    handleRegister () {
      this.$router.push('/Register')
    },
    handleLineLogin () {
      // this.$router.push('/LineLogin')
    }
  }
}
</script>

<style scoped>
  body {
    background: aquamarine;
  }

  .login-container {
    width: 350px;
    margin-left: 20%;
  }
</style>
