<template lang="html">
  <div class="category-title">
    <h1>{{ title }}</h1>
    <div class="category-control">
      <div v-if="show">
        <span>Сортировка</span>
        <el-dropdown>
          <span class="el-dropdown-link">
            Подешевле<i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>Action 1</el-dropdown-item>
            <el-dropdown-item>Action 2</el-dropdown-item>
            <el-dropdown-item>Action 3</el-dropdown-item>
            <el-dropdown-item disabled>Action 4</el-dropdown-item>
            <el-dropdown-item divided>Action 5</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["show", "title"],
};
</script>
<style lang="scss">
.category-title {
  padding-top: 8px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  h1 {
    font-family: "Inter";
    font-style: normal;
    font-weight: 500;
    font-size: 40px;
    line-height: 48px;
    color: #020105;
  }
  .category-control {
    span {
      margin-right: 16px;
    }
    .el-dropdown-link {
      i {
        margin-left: 77px;
      }
      font-family: "Inter";
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 20px;
      /* identical to box height, or 143% */

      /* Black */

      color: #020105;
      padding: 10px 12px;
      border: 1px solid #ebebeb;
      border-radius: 4px;
    }
  }
}
</style>
