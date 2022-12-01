<template lang="html">
  <div class="p-character-card">
    <div class="body">
      <p>Бренд</p>
      <span></span>
      <p>Xiaomi</p>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss">
.p-character-card {
  h2 {
    font-family: "Inter", sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 24px;
    /* identical to box height, or 133% */

    display: flex;
    align-items: center;

    color: #000000;
  }
  .body {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 24px;
    span {
      display: block;
      border-bottom: 1px dashed #c2c2c3;
      width: 100%;
    }
    p {
      font-family: "Inter";
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 20px;
      display: flex;
      align-items: center;
      color: #727474;
      display: inline;
      white-space: nowrap;
    }
    p:first-child {
      color: #727474;
      margin-right: 8px;
    }
    p:last-child {
      color: #000;
      margin-left: 8px;
    }
  }
}
</style>
