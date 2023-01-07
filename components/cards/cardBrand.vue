<template lang="html">
  <div class="brand_card">
    <div class="brand-card" @click="$router.push(`/brand_categories/${brand.id}`)">
      <img :src="brand.image" alt="" />
    </div>
    <p>{{ brand.name }}</p>
  </div>
</template>
<script>
export default {
  props: ["img", "brand"],
};
</script>
<style lang="scss">
.brand_card {
  display: flex;
  flex-direction: column;
  align-items: center;
  p {
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 26px;
cursor: pointer;
    margin-top: 8px;
    color: #000000;
  }
}
.brand-card {
  border: 1px solid #eeeeee;
  border-radius: 8px;
  width: 100%;
  display: flex;
  justify-content: center;
  img {
    height: 146px;
    width: 146px;
    object-fit: contain;
  }
}
</style>
