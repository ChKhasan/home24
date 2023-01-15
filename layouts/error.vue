<template lang="html">
  <div class="empty-blog">
    <div class="empty-blog__info">
      <img src="../assets/images/404-eror.png" alt="" />
      <h2>Страница не найдена!</h2>
      <p>
        Не переживайте и продолжайте покупку
      </p>
      <div @click="$router.push('/')" class="empty-blog__btn">На главную</div>
    </div>
  </div>
</template>
<script>
import CardProduct from "../components/cards/cardProduct.vue";
import HomeTitlies from "../components/homeTitlies.vue";

export default { components: { HomeTitlies, CardProduct } };
</script>
<style lang="scss">
@import "@/assets/fonts/stylesheet.css";
@import "@/assets/css/error.scss";
@import "@/assets/css/main.css";
    

</style>
