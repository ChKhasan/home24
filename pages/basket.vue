<template lang="html">
  <div class="basket-fluid">
    <div class="container basket">
      <div class="row">
        <div class="col-12">
          <BreadCrumb :links="links" last="Корзина" />
          <div class="favorites__f-header">
            <TitleBasket title="Корзина" />
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-12 basket__count">
          <p>Товаров: <span>6</span></p>
        </div>
      </div>
      <div class="row">
        <div class="col-12 basket__orders-control">
          <!-- <EmptyBlog /> -->
          <SelectToOrder />
          <div>
            <div class="basket__order-info">
              <h1>Ваш заказ</h1>
              <div class="order-info-text">
                <p>Товары, 2 шт</p>
                <p>4 000 000 сум</p>
              </div>
              <div class="order-info-text">
                <span>Доставка:</span>
                <span>бесплатно</span>
              </div>
              <div class="order-info-text">
                <p>Товары, 2 шт</p>
                <p>4 000 000 сум</p>
              </div>
              <div
                @click="$router.push('/send-order')"
                class="basket__order-btn"
              >
                Перейти к оформлению
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import SelectToOrder from "../components/basket/selectToOrder.vue";
import TitleBasket from "../components/basket/titleBasket.vue";
import BreadCrumb from "../components/category/breadCrumb.vue";
import EmptyBlog from "../components/emptyBlog.vue";

export default {
  data() {
    return {
      options: [
        {
          value: "Option1",
          label: "Option1",
        },
        {
          value: "Option2",
          label: "Option2",
        },
        {
          value: "Option3",
          label: "Option3",
        },
        {
          value: "Option4",
          label: "Option4",
        },
        {
          value: "Option5",
          label: "Option5",
        },
      ],
      value: "Option1",
      links: [
        {
          name: "Главная",
          to: "/",
        },
      ],
    };
  },
  components: { TitleBasket, BreadCrumb, EmptyBlog, SelectToOrder },
  async created() {
    const basket = await this.$store.dispatch(
      "fetchBasket/postProductToCart",
     {id: 1, count: 3}
    );
    
    console.log(basket);
  },
  async mounted(){
    const getBasket = await this.$store.dispatch(
      "fetchBasket/fetchBasket",

    );
    console.log(getBasket);
  }
};
</script>
<style lang="scss">
.basket-fluid {
  background: #f4f5f5;
}
.basket {
  padding-top: 32px;
  padding-bottom: 73px;
  &__count {
    p {
      font-family: "TT Firs Neue";
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 20px;
      display: flex;
      align-items: center;
      color: #020105;
      span {
        margin-left: 5px;
      }
    }
  }
  &__orders-control {
    padding-top: 32px;
    display: grid;
    grid-template-columns: 2fr 1fr;
    grid-gap: 24px;
  }
  &__order-info {
    padding: 24px;
    background: #ffffff;
    border-radius: 8px;
    h1 {
      font-family: "Inter";
      font-style: normal;
      font-weight: 600;
      font-size: 22px;
      line-height: 28px;
      color: #000000;
      margin-bottom: 30px;
    }
    .order-info-text {
      display: flex;
      justify-content: space-between;
      span {
        font-family: "Inter";
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 24px;
        color: #727474;
        margin-top: 17.5px;
        margin-bottom: 33px;
      }
      p {
        font-family: "Inter";
        font-style: normal;
        font-weight: 500;
        font-size: 18px;
        line-height: 24px;
        color: #020105;
      }
    }
  }
  &__order-btn {
    font-family: "Inter";
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 30px;
    color: #ffffff;
    background: #ff6418;
    border-radius: 6px;
    padding-top: 18px;
    padding-bottom: 18px;
    display: flex;
    justify-content: center;
    margin-top: 32px;
    cursor: pointer;
  }
}
</style>
