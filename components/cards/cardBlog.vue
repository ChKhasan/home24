<template lang="html">
  <div class="blog-card">
    <div class="blog-card__shadow"></div>
    <p>Поздравляем с ”8 марта” любимых женщин</p>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss">
.blog-card {
  background-image: url("../../assets/images/Rectangle 122335.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  padding: 24px;
  height: 277px;
  border-radius: 18px;
  overflow: hidden;
  display: flex;
  align-items: flex-end;
  position: relative;
  &__shadow {
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    border-radius: 18px;

    background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0.64) 100%
    );
  }

  p {
    font-family: "Inter";
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 28px;
    /* or 140% */
    z-index: 100;

    color: #ffffff;
  }
}
</style>
