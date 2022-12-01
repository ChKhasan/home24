<template lang="html">
  <div class="brand-card">
    <img src="../../assets/images/1646038495 1.png" alt="" />
  </div>
</template>
<script>
export default {
    props: ["img"]
};
</script>
<style lang="scss">
.brand-card {
  border: 1px solid #eeeeee;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  img {
    height: 160px;
    object-fit: contain;
  }
}
</style>
