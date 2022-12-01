<template lang="html">
  <div class="dropdown-card">
    <div class="dropdown-card__img">
      <img src="../../assets/images/image 34.png" alt="" />
    </div>
    <div class="dropdown-card__body">
      <div class="d-card-header">
        <h6>
          ОФИСНОЕ КРЕСЛО 6206A-2 ОФИСНОЕ КРЕСЛО 6206A-2 ОФИСНОЕ КРЕСЛО 6206A-2
        </h6>
        <span>ОСТАВИТЬ ОТЗЫВ</span>
      </div>
      <div class="d-card-footer">
        <p>1 x 1 000 000 сум</p>
        <span>1 000 000 сум</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss">
.dropdown-card {
  padding-top: 16px;
  padding-bottom: 16px;
  border-bottom: 1px solid #f2f2f2;
  display: grid;
  grid-template-columns: 1fr 8fr;
  grid-gap: 24px;
  
  &__body {
    .d-card-header {
      display: grid;
      grid-template-columns: 8fr 1fr;
      grid-gap: 24px;
      span {
        font-family: "Inter";
        font-style: normal;
        font-weight: 500;
        font-size: 12px;
        line-height: 20px;
        white-space: nowrap;
        color: #ff6418;
      }
      h6 {
        // width: 80%;
        font-family: "Inter";
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 20px;
        color: #020105;
      }
    }
    .d-card-footer {
      display: flex;
      justify-content: space-between;
      p,
      span {
        font-family: "Inter";
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 20px;
        /* identical to box height, or 143% */

        /* Black */

        color: #020105;
      }
    }
  }
  &__img {
    display: inline;
    border: 1px solid #f2f2fa;
    border-radius: 4px;
    display: flex;
    height: 81px;

    transform: matrix(-1, 0, 0, 1, 0, 0);
    img {
      height: 81px;
      width: 81px;
      object-fit: contain;
    }
  }
}
</style>
