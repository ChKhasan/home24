<template lang="html">
  <div class="container comparison">
    <div class="row">
      <div class="col-12">
        <BreadCrumb :links="links" last="Сравнение" />
        <div class="comparison__c-header">
          <TitleBasket title="Сравнение" />

          <div class="comparison-select">
            <span @click="deteleComparison">Очистить</span>

            <el-dropdown
              @command="sorting"
              v-if="$store.state.comparison.length > 0"
            >
              <span class="el-dropdown-link">
                {{ currentCategory
                }}<i class="el-icon-arrow-down el-icon--right"></i>
              </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item
                  v-for="category in comparisonCategory"
                  :class="{
                    activeSorting: $route.query.category == category.id,
                  }"
                  :command="category"
                  >{{ category.name }}</el-dropdown-item
                >
              </el-dropdown-menu>
            </el-dropdown>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-12 comparison__count">
        <p>
          Товаров: <span>{{ $store.state.comparison.length }}</span>
        </p>
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
      links: [
        {
          name: "Главная",
          to: "/",
        },
      ],
      comparisonProducts: [],
      comparisonCategory: [],
      currentCategory: "",
    };
  },
  components: {
    BreadCrumb,
    TitleBasket,
    CardComparison,
    VueSlickCarousel,
    EmptyBlog,
  },
  computed: {
    favorites() {
      return this.$store.state.comparison.length;
    },
  },
  async created() {
    await this.__GET_COMPARISON_CATEGORIES();
    await this.__GET_COMPARISON();
  },
  methods: {
    async __GET_COMPARISON() {
      this.comparisonProducts = await this.$store.dispatch(
        "fetchComparison/postComparison",
        {
          products: JSON.parse(localStorage.getItem("comparison")),
          category: this.$route.query.category,
        }
      );
    },
    async sorting(category) {
      await this.$router.replace({
        path: `/comparison`,
        query: {
          category: category.id,
        },
      });
      this.currentCategory = category.name;

      await this.__GET_COMPARISON();
    },
    async deteleComparison() {
      localStorage.setItem("comparison", JSON.stringify([]));
      const comparison = await this.$store.dispatch(
        "fetchComparison/postComparison",
        JSON.parse(localStorage.getItem("comparison"))
      );
      this.comparisonProducts = comparison;
      this.$store.commit("reloadStore");
    },
    async __GET_COMPARISON_CATEGORIES() {
      if (this.$store.state.comparison.length > 0) {
        this.comparisonCategory = await this.$store.dispatch(
          "fetchComparison/fetchComparisonByCategory",
          { products: JSON.parse(localStorage.getItem("comparison")) }
        );
        if (this.$route.query.category != this.comparisonCategory[0].id) {
          await this.$router.replace({
            path: `/comparison`,
            query: {
              category: this.comparisonCategory[0].id,
            },
          });
        }
        this.currentCategory = this.comparisonCategory[0].name;
      }
    },
    async deleteProductFromComparison(id) {
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
  watch: {
    async favorites(newFavorites, oldFavorites) {
      if (newFavorites > 0) {
        if (newFavorites != oldFavorites) {
          await this.__GET_COMPARISON_CATEGORIES();
          await this.__GET_COMPARISON();
        }
      } else {
        this.$router.push("/");
      }
    },
  },
};
</script>
<style lang="scss">
.activeSorting {
  pointer-events: none !important;
  color: #ff6418 !important;
}
.comparison {
  .el-dropdown-link {
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    width: 194px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #020105 !important;
    padding: 10px 12px;
    text-decoration: none !important;
    background: #f8f8f8;
    border: 1px solid #f2f2fa;
    border-radius: 4px;
  }
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
