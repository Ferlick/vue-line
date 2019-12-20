<template>
  <div>
    <el-input v-model="searchData.name" placeholder="请输入"/>
    <el-link>绑定line</el-link>
  </div>
</template>

<script>
export default {
  name: 'LineBind',
  data () {
    return {
      searchData: {},
      whetherBind: true
    }
  }
}
</script>

<style scoped>

</style>
