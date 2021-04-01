<template>
  <div class="button">
    <el-row>
      <el-button disabled>默认按钮</el-button>
      <el-button type="primary" disabled>主要按钮</el-button>
      <el-button type="success" disabled>成功按钮</el-button>
      <el-button type="info" disabled>信息按钮</el-button>
      <el-button type="warning" disabled>警告按钮</el-button>
      <el-button type="danger" disabled>危险按钮</el-button>
    </el-row>

    <el-row>
      <el-button plain disabled>朴素按钮</el-button>
      <el-button type="primary" plain disabled>主要按钮</el-button>
      <el-button type="success" plain disabled>成功按钮</el-button>
      <el-button type="info" plain disabled>信息按钮</el-button>
      <el-button type="warning" plain disabled>警告按钮</el-button>
      <el-button type="danger" plain disabled>危险按钮</el-button>
      <el-button type="text">按钮</el-button>
    </el-row>


    <br>
    <br>


    <el-row>
      <el-button-group>
        <el-button type="primary">上一页</el-button>
        <el-button type="primary">下一页</el-button>
      </el-button-group>
    </el-row>

    <el-row>
      <el-button type="primary" :loading="true">加载中</el-button>
      <el-button type="primary" size="mini"></el-button>
    </el-row>
  </div>

</template>

<script>
export default {
name: "Button"
}
</script>

<style scoped>

</style>