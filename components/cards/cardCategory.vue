<template lang="html">
  <div class="card-category">
    <div class="card-category__img">
      <img :src="category.image" alt="" />
    </div>
    <div class="card-category__title">
      <nuxt-link v-if="parent" :to="`/categories/${category.id}`">{{
        category.name
      }}</nuxt-link>
      <nuxt-link v-else :to="`/categoryId/${category.id}`">{{
        category.name
      }}</nuxt-link>
    </div>
  </div>
</template>
<script>
export default {
  props: ["category", "parent"],
};
</script>
<style lang="scss">
.card-category {
  border-radius: 8px;
  background: #f9f9f9;
  padding: 24px;
  @media (max-width: 1370px) {
    padding: 18px;
      }
  &__img {
    width: 100%;
    img {
      height: 147px;
      width: 100%;
      object-fit: contain;
      @media (max-width: 1440px) {
        height: 114px;
      }
    }
  }
  &:hover {
    a {
      color: #ff6418 !important;
      text-decoration-line: none;
    }
  }
  &__title {
    width: 100%;
    display: flex;
    justify-content: center;
    padding-top: 21px;
  
    a {
      font-family: "Inter";
      font-size: 20px;
      font-weight: 400;
      line-height: 28px;
      letter-spacing: 0em;
      text-align: center;
      color: #020105;
      transition: 0.4s;

      &:hover {
      }
    }
    @media (max-width: 1440px) {
      padding-top: 16px;
      a {
        font-size: 16px;
        line-height: 24px;
      }
    }
  
  }
}
</style>
