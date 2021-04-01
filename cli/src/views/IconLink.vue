<template>
   <div class="iconlink">
      <i class="el-icon-edit"></i>
      <el-button type="primary" class="el-icon-search">搜素</el-button

      <br>
      <br>
      <el-link type="primary">链接</el-link>
     <el-link type="success">链接</el-link>
     <el-link type="danger" class="el-icon-edit">链接</el-link>
     <el-link  href="http://www.baidu.com" disabled type="warning">链接</el-link>
     <el-link type="info" :underline="false">链接</el-link>
   </div>
</template>

<script>
export default {
  name: "IconLink"
}
</script>

<style scoped>
  .el-icon-edit,.el-icon-search{
    font-size: 30px;
    color: #42b983;
  }
</style>