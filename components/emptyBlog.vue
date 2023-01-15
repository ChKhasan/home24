<template lang="html">
  <div class="empty-blog">
    <div class="empty-blog__info">
      <img src="../assets/images/undraw_empty_cart_co35 2.png" alt="" />
      <h2>Сравнивать пока нечего</h2>
      <p>
        Добавляйте товары к сравнению характеристики выбирайте самый подходящий
        вам товар
      </p>
      <div @click="$router.push('/')" class="empty-blog__btn">На главную</div>
    </div>
  </div>
</template>
<script>
import CardProduct from "./cards/cardProduct.vue";
import HomeTitlies from "./homeTitlies.vue";

export default { components: { HomeTitlies, CardProduct } };
</script>
<style lang="scss">
@import "@/assets/css/error.scss";
</style>
