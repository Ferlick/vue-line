<template>
  <div>
    <el-form ref="AccountFrom" :model="account" :rules="rules" label-position="left" label-width="100px"
             class="demo-ruleFrom login-container">
      <h3>系统登录</h3>
      <el-form-item prop="username" label="邮箱">
        <el-input type="text" v-model="account.username" auto-complete="off" placeholder="用户名"></el-input>
      </el-form-item>
      <el-form-item prop="pwd" label="密码">
        <el-input type="password" v-model="account.pwd" auto-complete="off" placeholder="密码"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="handleLogin" :loading="logining">登录</el-button>
        <el-button type="primary">
          <router-link to="/">返回</router-link>
        </el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'LineLogin',
  data () {
    // 表单校验,默认的用户名，密码
    return {
      logining: false,
      account: {
        username: 'admin',
        pwd: '123456'
      },
      /* 判断：如果用户没有输入用户名，提示“请输入账号”
            判断：如果用户没有输入密码，提示“请输入密码”用于表单验证 */
      rules: {
        username: [{
          required: true, message: '请输入账号', trigger: 'blur'
        }],
        pwd: [{
          required: true, message: '请输入密码', trigger: 'blur'
        }]
      },
      checked: true
    }
  }
}
</script>

<style scoped>

</style>
