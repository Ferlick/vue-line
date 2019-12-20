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
    <el-table-column label="操作">
      <template slot-scope="scope">
        <el-button
          size="mini"
          @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
        <el-button
          size="mini"
          type="danger"
          @click="handleDelete(scope.$index, scope.row)">删除</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
export default {
  name: 'Teacher',
  data () {
    return {
      tableData: []
    }
  },
  methods: {
    handleEdit (index, row) {
      this.API.checkFollow({'t_uid': row.id}).then(
        res => {
          if (res.status === true) {
            alert('关注成功')
          }
        }
      )
    },
    loadData () {
      this.API.getTeacherList({}).then(
        res => {
          if (res.status === true) {
            this.tableData = res.data
          }
        }
      )
    }
  }
}
</script>

<style scoped>

</style>
