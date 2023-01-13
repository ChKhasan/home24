<template lang="html">
  <div class="category">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="grid_block">
            <div class="category__list-box1">
              <BreadCrumb :links="links" last="Акции" />
              <h5 class="hit_product_title">Акции</h5>
              <div class="brand_categories">
                <span
                  v-for="category in hit_categies"
                  :key="category?.id"
                  :class="{
                    activeCategory: $route.query.category == category.id,
                  }"
                  @click="hitCategories(category.id)"
                  >{{ category?.name }}</span
                >
              </div>
          
            </div>
            <div class="">
              <div class="category-title">
                <b-skeleton
                  v-if="skeleton"
                  animation="wave"
                  width="30%"
                  height="40px"
                ></b-skeleton>

                <h1 v-else>{{ brand?.name }}</h1>
             
              </div>
              <div
                class="category__category-controller"
                :class="{ three: gridControl == 3 }"
                v-if="hitProducts.length > 0"
              >
                <b-skeleton
                  v-if="skeleton"
                  animation="wave"
                  height="400px"
                ></b-skeleton>
                <b-skeleton
                  v-if="skeleton"
                  animation="wave"
                  height="400px"
                ></b-skeleton>
                <b-skeleton
                  v-if="skeleton"
                  animation="wave"
                  height="400px"
                ></b-skeleton>
                <b-skeleton
                  v-if="skeleton"
                  animation="wave"
                  height="400px"
                ></b-skeleton>
                <b-skeleton
                  v-if="skeleton"
                  animation="wave"
                  height="400px"
                ></b-skeleton>

                <CardProduct
                  v-else
                  modal="id1"
                  v-for="product in hitProducts"
                  :product="product"
                />
              </div>
              <EmptyBlog v-else />
              <div
                class="category__pagination"
                v-if="hitProducts.length > 0 && totalPage > 1"
              >
                <el-pagination
                  layout="prev, pager, next"
                  @current-change="handleCurrentChange"
                  :current-page.sync="currentPage"
                  :total="totalPage * 10"
                >
                </el-pagination>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="row"></div>
    </div>
  </div>
</template>
<script>
import CardCategory from "@/components/cards/cardCategory.vue";
import CardProduct from "@/components/cards/cardProduct.vue";
import BreadCrumb from "@/components/category/breadCrumb.vue";
import TitleCategory from "@/components/category/titleCategory.vue";
import homeTitliesVue from "@/components/homeTitlies.vue";
import RangeSlider from "vue-range-slider";
import "vue-range-slider/dist/vue-range-slider.css";
import MultiRangeSlider from "multi-range-slider-vue";
import CardBrand from "../components/cards/cardBrand.vue";
import EmptyBlog from "../components/emptyBlog.vue";

export default {
  data() {
    return {
      selected: "",
      currentPage: 1,
      sliderValue: 50,
      barMinValue: 100,
      barMaxValue: 1000,
      checkbox: "",
      gridControl: 5,
      totalPage: 5,
      hit_categies: [],
      hitProducts: [],
      links: [
        {
          name: "Главный",
          to: "/",
        },
      ],
      brand: {},
      skeleton: true,
      page_size: 1,
    };
  },
  async created() {
    this.toAllBrand();
    this.__GET_HIT_PRODUCTS();
    this._GET_HIT_PRODUCT_CATEGORIES();
  },
  methods: {
    async toAllBrand() {
      console.log(this.$route.query);
      if(!this.$route.query.page) {
        await this.$router.replace({
          query: {
            page: 1,
          },
        });
      }
      this.currentPage = await JSON.parse(this.$route.query.page);
    },
    async __GET_HIT_PRODUCTS() {
      const hit_products = await this.$store.dispatch(
        "fetchPromotion/fetchPromotionProducts",
        { ...this.$route.query, page_size: this.page_size }
      );
      this.hitProducts = hit_products.results;
      this.totalPage = Math.ceil(hit_products.count / this.page_size);
      this.skeleton = await false;
    },

    async _GET_HIT_PRODUCT_CATEGORIES() {
      this.hit_categies = await this.$store.dispatch(
        "fetchPromotion/fetchPromotionsCategories"
      );
    },

    async hitCategories(id) {
      await this.$router.replace({
        path: `/promotion`,
        query: {
          ...this.$route.query,
          category: id,
          page: 1,
        },
      });
      this.skeleton = await true;
      await this.__GET_HIT_PRODUCTS();
    },
 
    async handleCurrentChange(val) {
      await this.$router.replace({
        path: `/promotion`,
        query: {
          page: val,
        },
      });
      this.__GET_HIT_PRODUCTS();
    },
  },

  components: {
    BreadCrumb,
    TitleCategory,
    CardProduct,
    CardCategory,
    homeTitliesVue,
    RangeSlider,
    MultiRangeSlider,
    CardBrand,
    EmptyBlog,
  },
};
</script>
<style lang="scss">
@import "../assets/css/products.scss";
</style>
