<template lang="html">
  <div class="category">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="grid_block">
            <div class="category__list-box1">
              <BreadCrumb :links="links" last="Хыт товары" />
              <h5 class="hit_product_title">Хит товары</h5>
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
              <h2>Цена</h2>
              <div class="category__range">
                <MultiRangeSlider
                  :min="100"
                  :max="1000"
                  :step="100"
                  :ruler="false"
                  :label="false"
                  :minValue="barMinValue"
                  :maxValue="barMaxValue"
                  @input="UpdateValues"
                />
                <div class="range-count">
                  <div class="range-min">
                    <span>от</span>
                    <input disabled v-model="barMinValue" type="text" />
                  </div>
                  <div class="range-max">
                    <span>от</span>
                    <input disabled type="text" v-model="barMaxValue" />
                  </div>
                </div>
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
                <div class="category-control">
                  <div>
                    <span>Сортировка</span>
                    <el-dropdown>
                      <span class="el-dropdown-link">
                        Подешевле<i
                          class="el-icon-arrow-down el-icon--right"
                        ></i>
                      </span>
                      <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item>Action 1</el-dropdown-item>
                        <el-dropdown-item>Action 2</el-dropdown-item>
                        <el-dropdown-item>Action 3</el-dropdown-item>
                        <el-dropdown-item disabled>Action 4</el-dropdown-item>
                        <el-dropdown-item divided>Action 5</el-dropdown-item>
                      </el-dropdown-menu>
                    </el-dropdown>
                    <span @click="gridControl = 5"
                      ><svg
                        width="22"
                        height="20"
                        viewBox="0 0 22 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M9.9473 7.31934H12.0524C12.9233 7.31934 13.6299 8.01941 13.6299 8.88305V10.9682C13.6299 11.8312 12.9233 12.5319 12.0524 12.5319H9.9473C9.07568 12.5319 8.36914 11.8312 8.36914 10.9682V8.88305C8.36914 8.01941 9.07568 7.31934 9.9473 7.31934Z"
                          fill="#FF6418"
                        />
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M18.3184 7.46777H20.4235C21.2944 7.46777 22.001 8.16785 22.001 9.03149V11.1167C22.001 11.9797 21.2944 12.6804 20.4235 12.6804H18.3184C17.4468 12.6804 16.7402 11.9797 16.7402 11.1167V9.03149C16.7402 8.16785 17.4468 7.46777 18.3184 7.46777Z"
                          fill="#FF6418"
                        />
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M1.57816 7.46777H3.68324C4.5542 7.46777 5.26074 8.16785 5.26074 9.03149V11.1167C5.26074 11.9797 4.5542 12.6804 3.68324 12.6804H1.57816C0.706538 12.6804 0 11.9797 0 11.1167V9.03149C0 8.16785 0.706538 7.46777 1.57816 7.46777Z"
                          fill="#FF6418"
                        />
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M9.9473 14.6396H12.0524C12.9233 14.6396 13.6299 15.3397 13.6299 16.204V18.2885C13.6299 19.1522 12.9233 19.8523 12.0524 19.8523H9.9473C9.07568 19.8523 8.36914 19.1522 8.36914 18.2885V16.204C8.36914 15.3397 9.07568 14.6396 9.9473 14.6396Z"
                          fill="#FF6418"
                        />
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M18.3184 14.7871H20.4235C21.2944 14.7871 22.001 15.4872 22.001 16.3515V18.436C22.001 19.2996 21.2944 19.9997 20.4235 19.9997H18.3184C17.4468 19.9997 16.7402 19.2996 16.7402 18.436V16.3515C16.7402 15.4872 17.4468 14.7871 18.3184 14.7871Z"
                          fill="#FF6418"
                        />
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M1.57816 14.7871H3.68324C4.5542 14.7871 5.26074 15.4872 5.26074 16.3515V18.436C5.26074 19.2996 4.5542 19.9997 3.68324 19.9997H1.57816C0.706538 19.9997 0 19.2996 0 18.436V16.3515C0 15.4872 0.706538 14.7871 1.57816 14.7871Z"
                          fill="#FF6418"
                        />
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M9.9473 0H12.0524C12.9233 0 13.6299 0.700075 13.6299 1.56437V3.64889C13.6299 4.51254 12.9233 5.21261 12.0524 5.21261H9.9473C9.07568 5.21261 8.36914 4.51254 8.36914 3.64889V1.56437C8.36914 0.700075 9.07568 0 9.9473 0Z"
                          fill="#FF6418"
                        />
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M18.3184 0.148438H20.4235C21.2944 0.148438 22.001 0.848512 22.001 1.71281V3.79733C22.001 4.66097 21.2944 5.36105 20.4235 5.36105H18.3184C17.4468 5.36105 16.7402 4.66097 16.7402 3.79733V1.71281C16.7402 0.848512 17.4468 0.148438 18.3184 0.148438Z"
                          fill="#FF6418"
                        />
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M1.57816 0.148438H3.68324C4.5542 0.148438 5.26074 0.848512 5.26074 1.71281V3.79733C5.26074 4.66097 4.5542 5.36105 3.68324 5.36105H1.57816C0.706538 5.36105 0 4.66097 0 3.79733V1.71281C0 0.848512 0.706538 0.148438 1.57816 0.148438Z"
                          fill="#FF6418"
                        />
                      </svg>
                    </span>
                    <span @click="gridControl = 3"
                      ><svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M16.2858 2.6H19.5524C20.5675 2.6 21.4003 3.4322 21.4003 4.47018V7.7641C21.4003 8.80121 20.5674 9.63429 19.5524 9.63429H16.2858C15.2697 9.63429 14.4369 8.80105 14.4369 7.7641V4.47018C14.4369 3.43237 15.2695 2.6 16.2858 2.6Z"
                          stroke="#020105"
                          stroke-width="1.2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M4.44892 2.6H7.71449C8.73078 2.6 9.56341 3.43237 9.56341 4.47018V7.7641C9.56341 8.80105 8.73062 9.63429 7.71449 9.63429H4.44892C3.43279 9.63429 2.6 8.80105 2.6 7.7641V4.47018C2.6 3.43237 3.43263 2.6 4.44892 2.6Z"
                          stroke="#020105"
                          stroke-width="1.2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M4.44892 14.3656H7.71449C8.73062 14.3656 9.56341 15.1978 9.56341 16.2368V19.5297C9.56341 20.5675 8.73078 21.3999 7.71449 21.3999H4.44892C3.43263 21.3999 2.6 20.5675 2.6 19.5297V16.2368C2.6 15.1978 3.43279 14.3656 4.44892 14.3656Z"
                          stroke="#020105"
                          stroke-width="1.2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M16.2858 14.3656H19.5524C20.5674 14.3656 21.4003 15.1977 21.4003 16.2368V19.5297C21.4003 20.5677 20.5675 21.3999 19.5524 21.3999H16.2858C15.2695 21.3999 14.4369 20.5675 14.4369 19.5297V16.2368C14.4369 15.1978 15.2697 14.3656 16.2858 14.3656Z"
                          stroke="#020105"
                          stroke-width="1.2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </span>
                  </div>
                </div>
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
      this.__GET_HIT_PRODUCTS();
      await this.$router.replace({
        path: `/hit_products`,
        query: {
          page: 1,
        },
      });
      this.currentPage = await JSON.parse(this.$route.query.page);
    },
    async __GET_HIT_PRODUCTS() {
      const hit_products = await this.$store.dispatch(
        "fetchProduct/fetchHitProduct",
        { ...this.$route.query, page_size: this.page_size }
      );
      this.hitProducts = hit_products.results;
      this.totalPage = Math.ceil(hit_products.count / this.page_size);
      this.skeleton = await false;
    },
    async _GET_HIT_PRODUCT_CATEGORIES() {
      this.hit_categies = await this.$store.dispatch(
        "fetchHitProducts/fetchHitProductsCategories",this.$route.category
      );
    },
    async hitCategories(id) {
      await this.$router.replace({
        path: `/hit_products`,
        query: {
          ...this.$route.query,
          category: id,
          page: 1,
        },
      });
      this.skeleton = await true;
      await this.__GET_HIT_PRODUCTS();
    },
    async UpdateValues(e) {
      this.barMinValue = await e.minValue;
      this.barMaxValue = await e.maxValue;
      if (this.barMinValue == 100 && this.barMaxValue == 1000) {
        await this.$router.replace({
          path: `/hit_products`,
          query: {
            page: 1,
          },
        });
      } else {
        await this.$router.replace({
          path: `/hit_products`,
          query: {
            price_min: JSON.stringify(this.barMinValue),
            price_max: this.barMaxValue,
            filter: 1,
            page: 1,
          },
        });
      }
      this.currentPage = 1;

      this.__GET_HIT_PRODUCTS();
    },
    async handleCurrentChange(val) {
      await this.$router.replace({
        path: `/hit_products`,
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
