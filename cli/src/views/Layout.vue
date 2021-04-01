<template>
  <div class="layout">
    <el-row>
      <el-col :span="24">24</el-col>
    </el-row>

    <el-row>
      <el-col :span="18">18</el-col>
    </el-row>

    <el-row>
      <el-col :span="6">6</el-col>
      <el-col :span="6">6</el-col>
      <el-col :span="6">6</el-col>
      <el-col :span="6">6</el-col>
    </el-row>

    <el-row :gutter="10">
      <el-col :span="6">
        <div style="background-color: sienna">6</div>
      </el-col>
      <el-col :span="6">6</el-col>
      <el-col :span="6">6</el-col>
      <el-col :span="6">6</el-col>
    </el-row>


    <el-row type="flex" justify="center">
      <el-col :span="4">4</el-col>
      <el-col :span="4">4</el-col>
      <el-col :span="4">4</el-col>
    </el-row>

    <el-row type="flex" justify="center">
      <el-col :span="4" :offset="1">4</el-col>
      <el-col :span="4" :offset="1">4</el-col>
      <el-col :span="4" :offset="1">4</el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "Layout"
}
</script>

<style scoped>
.el-row {
  background-color: #42b983;
  margin: 20px 0;
}

.el-col {
  background-color: #2c3e50;
  color: white;
  padding: 10px 0;
  box-sizing: border-box;
  border-right: 1px solid white;
}
</style>