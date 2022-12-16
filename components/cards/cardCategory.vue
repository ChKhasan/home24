<template lang="html">
  <div class="card-category">
    <div class="card-category__img">
      <img :src="category.image" alt="" />
    </div>
    <div class="card-category__title">
      <nuxt-link :to="`/categoryId/${category.id}`">{{category.name}}</nuxt-link>
    </div>
  </div>
</template>
<script>
export default {
props: ["category"]

};
</script>
<style lang="scss">
.card-category {
  border-radius: 8px;
  background: #f9f9f9;
  padding: 24px;
  &__img {
    width: 100%;
    img {
      height: 147px;
      width: 100%;
      object-fit: contain;
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
  }
}
</style>
