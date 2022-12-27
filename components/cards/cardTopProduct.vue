<template lang="html">
  <div
    class="top-product"
    :style="{
      'background-image': `url(../../assets/images/Rectangle 433.png)`,
    }"
  >
    <div class="top-product__title">
      <h2>На страже твоего ухода</h2>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss">
.top-product {
  padding: 32px;
  height: 300px;
  background-image: url("../../assets/images/Rectangle 433.png");
  //   background: linear-gradient(0deg, #c8d1ec, #c8d1ec),
  //     linear-gradient(0deg, #f2f2fa, #f2f2fa);
  border-radius: 24px;
  background-position: center;
  background-size: cover;
  @media (max-width: 1440px) {
    padding: 26px;
  height: 242px;
     }
  &__title {
    h2 {
      width: 70%;
      font-family: "TT Firs Neue";
      font-style: normal;
      font-weight: 500;
      font-size: 32px;
      line-height: 40px;
     @media (max-width: 1440px) {
      font-size: 24px;
line-height: 30px;
     }
      color: #020105;
    }
  }
}
</style>
