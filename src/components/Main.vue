<template>
  <div>
    <el-container style="height: 500px; border: 1px solid #eee">
      <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
        <el-menu :default-active="this.$route.path" router @select="handleSelect">
          <el-submenu index="1">
            <template slot="title"><i class="el-icon-message"></i>导航一</template>
            <el-menu-item-group>
              <template slot="title">分组一</template>
              <el-menu-item index="/personalInformation">个人信息</el-menu-item>
              <el-menu-item index="/followTeacher" v-show="user_role==='1'">所关注的老师</el-menu-item>
              <el-menu-item index="/followedStudent" v-show="user_role==='2'">所关注的学生</el-menu-item>
              <el-menu-item index="/teacher" v-show="user_role==='1'">老师列表</el-menu-item>
              <el-menu-item index="/student" v-show="user_role==='2'">学生列表</el-menu-item>
<!--              <el-menu-item index="1-6">绑定的line账号</el-menu-item>-->
            </el-menu-item-group>
          </el-submenu>
      </el-menu>
      </el-aside>

      <el-container>
        <el-header style="text-align: right; font-size: 12px">
        </el-header>

        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  name: 'main',
  data () {
    return {
      searchData: {},
      componentName: ['PersonalInformation'],
      user_role: ''
    }
  },
  methods: {
    handleSelect () {

    },
    login () {
      this.$router.replace('/login')
    },
    logout () {
      this.$store.dispatch('logout').then(() => {
        this.$router.replace('/login')
      })
    }
  },
  computed: {
    account () {
      return this.$store.state.account
    }
  },
  mounted () {
    this.user_role = localStorage.getItem('user_role')
  }
}
// 跳转到登录界面
</script>

<style scoped>
  .el-header {
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
  }

  .el-aside {
    color: #333;
  }
</style>
