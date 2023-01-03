<template lang="html">
  <div class="container favorites">
    <div class="row">
      <div class="col-12">
        <BreadCrumb :links="links" last="Избранное" />
        <div class="favorites__f-header">
          <TitleBasket title="Избранное" />

          <div class="favorites-select">
            <span @click="deteleLikes">Очистить</span>
            <el-select v-model="value" placeholder="Select">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              >
              </el-option>
            </el-select>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-12 favorites__count">
        <p>Товаров: <span>{{ $store.state.like.length }}</span></p>
      </div>
    </div>
    <div class="row">
      <div class="col-12">
        <emptyBlog v-if="likeProducts.length == 0"/>
        <div class="favorites__products" v-else>
          <CardProduct
            v-for="product in likeProducts"
            :product="product"
            :key="product.id"
          />
        </div>
      </div>
    </div>
    <HomeTitlies title="Хиты продаж" link="Все товары" />
    <div class="container">
      <div class="row">
        <div class="col-12 category__product-controller">
          <!-- <CardProduct />
          <CardProduct />
          <CardProduct />
          <CardProduct />
          <CardProduct />
          <CardProduct />
          <CardProduct />
          <CardProduct />
          <CardProduct />
          <CardProduct />
          <CardProduct />
          <CardProduct /> -->
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import BreadCrumb from "../components/category/breadCrumb.vue";
import TitleCategory from "../components/category/titleCategory.vue";
import TitleBasket from "../components/basket/titleBasket.vue";
import CardProduct from "../components/cards/cardProduct.vue";
import emptyBlog from "../components/emptyBlog.vue";
import HomeTitlies from "../components/homeTitlies.vue";

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
      likeProducts: [],
      value: "Option1",
      links: [
        {
          name: "Главная",
          to: "/",
        },
      ],
    };
  },
  async created() {
    const like = await this.$store.dispatch(
      "fetchLike/postLike",
      JSON.parse(localStorage.getItem("like"))
    );
    this.likeProducts = like;

  },
  methods: {
   async deteleLikes() {
      localStorage.setItem("like",JSON.stringify([]));
      const like = await this.$store.dispatch(
      "fetchLike/postLike",
      JSON.parse(localStorage.getItem("like"))
    );
    this.likeProducts = like;
    this.$store.commit("reloadStore");
    }
  },
  components: {
    BreadCrumb,
    TitleCategory,
    TitleBasket,
    CardProduct,
    emptyBlog,
    HomeTitlies,
  },
};
</script>
<style lang="scss">
.favorites {
  padding-top: 32px;
  &__f-header {
    padding-top: 17px;
    display: flex;
    justify-content: space-between;
    .favorites-select {
      span {
        font-family: "Inter";
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        line-height: 24px;
        text-decoration-line: underline;
        margin-right: 40px;
        color: #ff7e00;
        cursor: pointer;
      }
      .el-input--suffix .el-input__inner {
        padding-right: 30px;
        background: #f8f8f8;
        font-family: "TT Firs Neue";
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 24px;
        // text-transform: uppercase;
        color: #020105 !important;
        border: none !important;
      }
    }
  }
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
  &__products {
    padding-top: 32px;
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    grid-gap: 24px;
  }
}
@media (max-width: 1440px) {
  .favorites {
    &__products {
      grid-gap: 16px;
    }
  }
}
</style>
