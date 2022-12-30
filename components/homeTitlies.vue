<template lang="html">
  <div class="container">
    <div class="row">
      <div class="col-12 d-flex flex-row home-title align-items-end">
        <div class="home-title__title">
          <h1>{{ title }}</h1>
        </div>
        <div v-if="link" class="home-title__link">
          <nuxt-link :to="to ?? `/${to}`">{{ link }}</nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["title", "link", "to"],
};
</script>
<style lang="scss">
.home-title {
  padding-top: 120px;

  &__title {
    h1 {
      font-family: "TT Firs Neue";
      font-style: normal;
      font-weight: 500;
      font-size: 32px;
      line-height: 48px;
      /* identical to box height, or 150% */
      text-align: center;
      color: #000000;
      margin-bottom: 0 !important;
      margin-right: 24px;
    }
  }
  &__link {
    a {
      font-family: "TT Firs Neue";
      font-style: normal;
      font-weight: 400;
      font-size: 20px;
      line-height: 43px;
      text-decoration-line: underline;
      color: #ff6418;
    }
  }
}
@media (max-width: 1440px) {
  .home-title {
    padding-top: 56px;
  }
}
</style>
