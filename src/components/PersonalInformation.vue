<template>
  <el-form
    :model="searchData"
    label-position="right"
    label-width="130px"
    class="searchBox"
    size="mini"
    :inline="true"
  >
    <el-form-item label="姓名">
      <el-input v-model="searchData.name" placeholder="请输入"/>
    </el-form-item>
    <el-form-item label="邮箱">
      <el-input v-model="searchData.email" placeholder="请输入"/>
    </el-form-item>
    <el-form-item label="是否绑定line账号">
      <el-link v-if="whetherBind===true">点击绑定</el-link>
      <el-link v-if="whetherBind===false">点击查看</el-link>
    </el-form-item>
  </el-form>
</template>

<script>
export default {
  name: 'PersonalInformation',
  data () {
    return {
      searchData: {
        name: '',
        email: ''
      },
      whetherBind: true
    }
  },
  mounted () {
    this.API.details({}).then(
      res => {
        if (res.status === true) {
          console.log(res.data.name)
          console.log(res.data.email)
          this.searchData.name = res.data.name
          this.searchData.email = res.data.email
          if (res.data.line_id === '') {
            this.whetherBind = false
          } else {
            this.whetherBind = true
          }
        }
      }
    )
  }
}
</script>

<style scoped>

</style>
