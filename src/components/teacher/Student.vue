<template>
  <el-table
    :data="tableData"
    style="width: 100%">
    <el-table-column
      label="姓名"
      width="180">
      <template slot-scope="scope">
        <el-popover trigger="hover" placement="top">
          <p>姓名: {{ scope.row.name }}</p>
          <div slot="reference" class="name-wrapper">
            <el-tag size="medium">{{ scope.row.name }}</el-tag>
          </div>
        </el-popover>
      </template>
    </el-table-column>
    <el-table-column
      label="邮箱"
      width="180">
      <template slot-scope="scope">
        <el-popover trigger="hover" placement="top">
          <p>邮箱: {{ scope.row.address }}</p>
          <div slot="reference" class="name-wrapper">
            <el-tag size="medium">{{ scope.row.email }}</el-tag>
          </div>
        </el-popover>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
export default {
  name: 'Student',
  data () {
    return {
      tableData: []
    }
  },
  methods: {
    loadData () {
      this.API.getStudentsList({}).then(
        res => {
          if (res.status === true) {
            this.tableData = res.data
          }
        }
      )
    }
  },
  mounted () {
    this.loadData()
  }
}
</script>

<style scoped>

</style>
