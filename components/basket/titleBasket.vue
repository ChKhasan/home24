<template lang="html">
  <div class="basket-title">
    <h1>{{ title }}</h1>
  </div>
</template>
<script>
export default {
  props: ["title"],
};
</script>
<style lang="scss">
.basket-title {
  h1 {
    font-family: "TT Firs Neue";
    font-style: normal;
    font-weight: 500;
    font-size: 40px;
    line-height: 48px;
    /* identical to box height, or 120% */

    /* Black */

    color: #020105;
  }
}
</style>
