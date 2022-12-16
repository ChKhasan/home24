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
        <div
          class="col-12 basket__orders-control"
          :class="{ order_grid: basketProducts.length > 0 }"
        >
          <EmptyBlog v-if="basketProducts.length == 0" />
          <SelectToOrder
            v-else
            :basketProducts="basketProducts"
            :deleteProductFromCart="deleteProductFromCart"
            :takeCheckedProducts="takeCheckedProducts"
          />
          <div v-if="basketProducts.length != 0">
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
                @click="saveSelectedProducts"
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
      basketProducts: [],
      selectedProducts: []
    };
  },
  components: { TitleBasket, BreadCrumb, EmptyBlog, SelectToOrder },
  methods: {
    async deleteProductFromCart(id) {
      console.log(id);
      let basket = await JSON.parse(localStorage.getItem("cart"));
      const index = await basket.indexOf(id);
      if (index > -1) {
        await basket.splice(index, 1);
        await localStorage.setItem("cart", JSON.stringify(basket));
      }
      const cart = await this.$store.dispatch(
        "fetchBasket/postCart",
        JSON.parse(localStorage.getItem("cart"))
      );
      this.basketProducts = cart;
      this.$store.commit("reloadStore");
    },
    saveSelectedProducts() {
      // this.takeCheckedProducts()
      localStorage.setItem("selectedProducts", JSON.stringify(this.selectedProducts));
      console.log(this.selectedProducts);
      this.$router.push('/send-order')
    },
    takeCheckedProducts(products) {
      this.selectedProducts = products
      console.log(this.selectedProducts);
      
    },
  },
  async created() {
    const basket = await this.$store.dispatch(
      "fetchBasket/postCart",
      JSON.parse(localStorage.getItem("cart"))
    );
    this.basketProducts = basket;
    console.log(basket);
  },
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
  }
  .order_grid {
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
