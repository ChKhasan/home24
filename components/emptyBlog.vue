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
import CardProduct from './cards/cardProduct.vue';
import HomeTitlies from './homeTitlies.vue';

export default { components: { HomeTitlies, CardProduct } };
</script>
<style lang="scss">
.empty-blog {
  padding-top: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  &__info {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 388px;
    h2 {
      font-family: "TT Firs Neue";
      font-style: normal;
      font-weight: 500;
      font-size: 32px;
      line-height: 48px;
      text-align: center;
      color: #000000;
      margin-top: 8px;
    }
    p {
      font-family: "TT Firs Neue";
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 24px;
      text-align: center;
      color: #727474;
    }
    img {
      width: 388px;
      height: 320px;
    }
  }
  &__btn {
    margin-top: 24px;
    padding: 16px 126px;
    font-family: "Inter";
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
    color: #ff7e00;
    border: 1px solid #ff6418;
    border-radius: 6px;
    cursor: pointer;
  }
}
</style>
