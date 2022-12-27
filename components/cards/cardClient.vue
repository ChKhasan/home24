<template lang="html">
  <div class="client-card">
    <div class="client-card__profile d-flex align-items-center">
      <div class="client-card__avatar">
        <img src="../../assets/images/Ellipse 39.png" alt="" />
      </div>
      <p class="client-card__name">Samsung Узбекистан</p>
    </div>
    <div class="client-card__body">
      <div class="client-card__img">
        <img src="../../assets/images/Frame 55634.png" alt="" />
      </div>
      <div class="client-card__desc">
        <p>
          Большое спасибо за всю мебель. Очень качественно и по доступным ценам.
          Мы очень рады совместной работе с вами!
        </p>
      </div>
      <nuxt-link class="client-card__link" to="/">Читать...</nuxt-link>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss">
.client-card {
  &__profile {
    p {
      margin-bottom: 0 !important;
      font-family: "TT Firs Neue";
      font-style: normal;
      font-weight: 500;
      font-size: 14px;
      line-height: 20px;

      color: #020105;
    }
  }
  &__avatar {
    width: 56px;
    border-radius: 50%;
    overflow: hidden;
    height: 56px;
    position: relative;
    margin-right: 8px;

    img {
      width: 100%;
      object-fit: cover;
      height: 100%;
    }
  }
  &__body {
    padding-top: 12px;
  }
  &__img {
    border-radius: 16px;
    overflow: hidden;
    img {
      height: 280px;
      width: 100%;
      object-fit: cover;
    }
    @media (max-width: 1440px) {
      height: 220px;

    }
  }
  &__desc {
    margin-top: 12px;
   
    p {
      font-family: "Inter";
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 24px;

      /* or 150% */

      /* Grey 80% */

      overflow: hidden;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
      display: -webkit-box;
      text-overflow: ellipsis;
      flex-grow: 1;
    }
    @media (max-width: 1440px) {
      p {
        font-size: 12px;
        line-height: 20px;
      }
    }
  }
  &__link {
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #ff7e00;
    transition: 0.4s;
    &:hover {
      text-decoration-line: none;
      color: rgba(255, 126, 0, 0.4);
    }
  }
}
</style>
