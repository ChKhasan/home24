<template lang="html">
  <div class="container comparison">
    <div class="row">
      <div class="col-12">
        <BreadCrumb :links="links" last="Сравнение" />
        <div class="comparison__c-header">
          <TitleBasket title="Сравнение" />

          <div class="comparison-select">
            <span @click="deteleComparison">Очистить</span>
            <el-select v-model="value" placeholder="Техника">
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
      <div class="col-12 comparison__count">
        <p>Товаров: <span>6</span></p>
      </div>
    </div>
    <div class="row">
      <div class="col-12 comparison__card-control">
        <EmptyBlog v-if="comparisonProducts.length == 0" />

        <VueSlickCarousel
          v-bind="slickOptions"
          v-if="comparisonProducts.length != 0"
        >
          <CardComparison
            v-for="product in comparisonProducts"
            :product="product"
            :key="product.id"
            :deleteProductFromComparison="deleteProductFromComparison"
          />
        </VueSlickCarousel>
      </div>
    </div>
  </div>
</template>
<script>
import TitleBasket from "../components/basket/titleBasket.vue";
import BreadCrumb from "../components/category/breadCrumb.vue";
import CardComparison from "../components/comparison/cardComparison.vue";
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
import EmptyBlog from "../components/emptyBlog.vue";

export default {
  data() {
    return {
      slickOptions: {
        dots: false,
        awrrows: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
      },
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
      value: "Техника",
      links: [
        {
          name: "Главная",
          to: "/",
        },
      ],
      comparisonProducts: [],
    };
  },
  components: {
    BreadCrumb,
    TitleBasket,
    CardComparison,
    VueSlickCarousel,
    EmptyBlog,
  },
  async created() {
    const comparison = await this.$store.dispatch(
      "fetchComparison/postComparison",
      JSON.parse(localStorage.getItem("comparison"))
    );
    this.comparisonProducts = comparison;
  },
  methods: {
    async deteleComparison() {
      localStorage.setItem("comparison", JSON.stringify([]));
      const comparison = await this.$store.dispatch(
        "fetchComparison/postComparison",
        JSON.parse(localStorage.getItem("comparison"))
      );
      this.comparisonProducts = comparison;
      this.$store.commit("reloadStore");
    },
    async deleteProductFromComparison(id) {
      console.log(id);
      let comparison = await JSON.parse(localStorage.getItem("comparison"));
      const index = await comparison.indexOf(id);
      if (index > -1) {
        await comparison.splice(index, 1);
        await localStorage.setItem("comparison", JSON.stringify(comparison));
      }
      const cart = await this.$store.dispatch(
        "fetchComparison/postComparison",
        JSON.parse(localStorage.getItem("comparison"))
      );
      this.comparisonProducts = cart;
      this.$store.commit("reloadStore");
    },
  },
};
</script>
<style lang="scss">
.comparison {
  padding-top: 32px;
  &__c-header {
    padding-top: 17px;
    display: flex;
    justify-content: space-between;
    .comparison-select {
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
  &__card-control {
    padding-top: 22px;
    .slick-list {
      border-right: 1px solid #ebebeb;
    }
    .slick-prev,
    .slick-next {
      content: "←";
      display: block;
      position: absolute;
      background: #ffffff;
      top: 210px;
      opacity: 0.48;
      width: 40px;
      height: 40px;
      z-index: 100;
      border-radius: 50%;
    }
    .slick-prev {
      left: -20px;
    }
    .slick-next {
      right: -20px;
    }
    .slick-prev:before,
    .slick-next:before {
      // content: "←";
      width: 100%;
      height: 100%;
      /* font-family: 'slick'; */
      font-size: 40px;
      /* line-height: 1; */
      /* opacity: 0.75; */
      color: black;
      /* -webkit-font-smoothing: antialiased; */
      -moz-osx-font-smoothing: grayscale;
    }
    // display: grid;
    // grid-template-columns: repeat(5, 1fr);
  }
}
</style>
