<template>
  <div class="container">
    <el-container>
        <el-header>header</el-header>
        <el-container>
          <el-aside>aside</el-aside>
          <el-main>main</el-main>
        </el-container>
        <el-footer>footer</el-footer>
    </el-container>
  </div>
</template>

<script>
export default {
  name: "Container"
}
</script>

<style scoped>
  .el-container {
    background-color: #eee;
  }
  .el-header{
    background-color: #2c3e50;
  }
  .el-footer{
    background-color: #42b983;
  }
  .el-aside {
    background-color: sienna;
    max-width: 200px;
    min-height: 350px;
  }
  .el-main {
    background-color: purple;
    min-height: 350px;
  }
</style>