<template lang="html">
  <div class="category">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="grid_block">
            <div class="category__list-box1">
              <h2>Категории</h2>
              <ul class="category__list1">
                <li>
                  <div v-if="skeleton">
                    <b-skeleton animation="wave" width="50%"></b-skeleton>
                  </div>
                  <span
                    @click="
                      $router.push(
                        categoryById?.parent?.parent.id
                          ? `/categories/${categoryById?.parent?.parent.id}`
                          : `/categories/${categoryById?.parent.id}`
                      )
                    "
                    v-else
                    >{{
                      categoryById?.parent?.parent?.name
                        ? categoryById?.parent?.parent?.name
                        : categoryById?.parent?.name
                    }}</span
                  >
                  <ul>
                    <li>
                      <div v-if="skeleton">
                        <b-skeleton animation="wave" width="50%"></b-skeleton>
                      </div>
                      <span
                        v-else
                        @click="
                          $router.push(
                            categoryById?.parent?.parent.id
                              ? `/categoryId/${categoryById?.parent?.id}`
                              : `/categoryId/${categoryById?.parent?.id}`
                          )
                        "
                        :class="{
                          listActive: categoryById?.parent?.parent?.name
                            ? false
                            : true,
                        }"
                        >{{
                          categoryById?.parent?.parent?.name
                            ? categoryById?.parent?.name
                            : categoryById?.name
                        }}</span
                      >
                      <ul>
                        <div v-if="skeleton">
                          <b-skeleton animation="wave" width="50%"></b-skeleton>
                        </div>
                        <li v-else v-if="categoryById?.parent?.parent.name">
                          <span
                            :class="{
                              listActive: categoryById?.parent?.parent.name
                                ? true
                                : false,
                            }"
                            @click="$router.push(`/categoryId/${category.id}`)"
                            >{{ categoryById?.name }}</span
                          >
                        </li>

                        <li v-else v-for="category in categoryById?.children">
                          <span
                            @click="$router.push(`/categoryId/${category.id}`)"
                            >{{ category.name }}</span
                          >
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
              </ul>
              <!-- <h2>Сортировать</h2>
              <ul>
                <b-form-group v-slot="{ ariaDescribedby }">
                  <b-form-radio
                    v-model="selected"
                    :aria-describedby="ariaDescribedby"
                    name="some-radios"
                    value="A"
                    >по популярности
                  </b-form-radio>
                  <b-form-radio
                    v-model="selected"
                    :aria-describedby="ariaDescribedby"
                    name="some-radios"
                    value="B"
                    >добавлено недавно</b-form-radio
                  >
                  <b-form-radio
                    v-model="selected"
                    :aria-describedby="ariaDescribedby"
                    name="some-radios"
                    value="C"
                    >цена</b-form-radio
                  >
                </b-form-group>
                <div class="mt-3">
                  Selected: <strong>{{ selected }}</strong>
                </div>
              </ul> -->
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
              <div v-for="atribut in categoryById.atributs">
                <h2>{{ atribut?.name }}</h2>
                <div class="range-checkbox">
                  <div v-for="option in atribut.options">
                    <input
                      type="checkbox"
                      name=""
                      id=""
                      :checked="
                        Object.keys($route.query).includes(
                          `atribut_${option?.id}`
                        )
                      "
                      @click="optionFilter(option?.id)"
                    /><span>{{ option.name }}</span>
                  </div>
                </div>
              </div>
              <h2>Цвет</h2>
              <div class="category__colors">
                <div v-for="color in colors">
                  <div
                    class="checkbox"
                    :style="{
                      background: color?.hex,
                      border: `1px solid ${color?.hex}`,
                    }"
                    @click="colorFilter(color?.id, color.hex)"
                  >
                    <span
                      v-if="(Object.keys($route.query).includes(`color_${color?.id}`))"
                    ></span>
                  </div>
                </div>
              </div>
            </div>
            <div class="">
              <b-skeleton
                v-if="skeletonCategory"
                animation="wave"
                width="40%"
              ></b-skeleton>
              <BreadCrumb v-else :links="links" :last="categoryById.name" />
             
              <div class="category-title">
                <b-skeleton
                  v-if="skeleton"
                  animation="wave"
                  width="30%"
                  height="40px"
                ></b-skeleton>

                <h1 v-else>{{ categoryById.name }}</h1>
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
                v-if="productsByCategory.length > 0"
                class="category__category-controller"
                :class="{ three: gridControl == 3 }"
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
                  v-for="product in productsByCategory"
                  :product="product"
                />
              </div>
              <emptyBlog v-else />
              <div
                class="category__pagination"
                v-if="productsByCategory.length > 0 && totalPage > 1"
              >
                <el-pagination
                  layout="prev, pager, next"
                  @current-change="handleCurrentChange"
                  :current-page.sync="currentPage1"
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
    <!-- <homeTitliesVue title="Хиты продаж" link="Все товары" />
    <div class="container">
      <div class="row">
        <div class="col-12 category__product-controller">
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
          <CardProduct />
          <CardProduct />
        </div>
      </div>
    </div> -->
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
import emptyBlog from "../../components/emptyBlog.vue";

export default {
  data() {
    return {
      selected: "",
      currentPage1: 1,
      sliderValue: 50,
      barMinValue: 100,
      barMaxValue: 1000,
      checkbox: "",
      gridControl: 5,
      totalPage: 1,
      links: [],
      categoryById: {},
      page_size: 2,
      productsByCategory: {},
      colors: [],
      skeleton: true,
      skeletonCategory: true,
    };
  },
  async created() {
    if (Object.keys(this.$route.query).length == 0) {
      await this.$router.replace({
        path: `/categoryId/${this.$route.params.index}`,
        query: {
          category: this.$route.params.index,
          page: this.currentPage1,
          ...this.$route.query,
        },
      });
    }
    await this.__GET_PRODUCTS();
    await this.__GET_CATEGORIES();
    await this.__GET_COLORS();
    this.currentPage1 = JSON.parse(this.$route.query.page);
  },
  methods: {
    async __GET_PRODUCTS() {
      const productsByCategory = await this.$store.dispatch(
        "fetchProduct/fetchProductByCategory",
        { ...this.$route.query, page_size: this.page_size }
      );
      this.productsByCategory = productsByCategory.results;
      this.totalPage = Math.ceil(productsByCategory.count / this.page_size);
      this.skeleton = await false;
    },
    async __GET_CATEGORIES() {
      this.categoryById = await this.$store.dispatch(
        "fetchCategories/fetchAllCategoryById",
        this.$route.params.index
      );
      const link = (await this.categoryById.parent.parent.name)
        ? [
            {
              name: "Главный",
              to: "/",
            },
            {
              name: this.categoryById.parent.parent.name,
              to: `/categories/${this.categoryById.parent.parent.id}`,
            },
            {
              name: this.categoryById.parent.name,
              to: `/categoryId/${this.categoryById.parent.id}`,
            },
          ]
        : [
            {
              name: "Главный",
              to: "/",
            },
            {
              name: this.categoryById.parent.name,
              to: `/categories/${this.categoryById.parent.id}`,
            },
          ];
          this.links = await link;
          await console.log(this.links);

      this.skeletonCategory = await false;
    },
    async __GET_COLORS() {
      this.colors = await this.$store.dispatch("fetchColors/fetchColors");
    },
    async UpdateValues(e) {
      this.barMinValue = await e.minValue;
      this.barMaxValue = await e.maxValue;
      const priceObj = { ...this.$route.query };
      if (Object.keys(this.$route.query).includes(`price_min`)) {
        if (this.barMinValue == 100 && this.barMaxValue == 1000) {
          if (
            !Object.keys(priceObj).toString().includes("atribut") &&
            !Object.keys(priceObj).toString().includes("color")
          ) {
            await this.$router.replace({
              path: `/categoryId/${this.$route.params.index}`,
              query: {
                category: this.$route.params.index,
                page: 1,
              },
            });
          } else {
            await delete priceObj[`price_max`];
            await delete priceObj[`price_min`];
            await this.$router.replace({
              path: `/categoryId/${this.$route.params.index}`,
              query: {
                ...priceObj,
                category: this.$route.params.index,
                page: 1,
                filter: 1,
              },
            });
          }
        } else {
          priceObj.price_max = this.barMaxValue;
          priceObj.price_min = this.barMinValue;
          await this.$router.replace({
            path: `/categoryId/${this.$route.params.index}`,
            query: {
              ...priceObj,
              filter: 1,
              category: this.$route.params.index,
              page: this.currentPage1,
            },
          });
        }
      } else {
        await this.$router.replace({
          path: `/categoryId/${this.$route.params.index}`,
          query: {
            price_max: this.barMaxValue,
            price_min: this.barMinValue,
            ...this.$route.query,
            filter: 1,
            category: this.$route.params.index,
            page: 1,
          },
        });
      }
      this.skeleton = await true;
      this.currentPage1 = 1;

      await this.__GET_PRODUCTS();
    },
    async optionFilter(id) {
      let colorObj = {};
      console.log(this.$route.query);
      colorObj[`atribut_${id}`] = id;

      colorObj[`atribut_${id}`] = id;
      colorObj = {
        ...colorObj,
        ...this.$route.query,
        page: 1,
        filter: 1,
      };
      if (Object.keys(this.$route.query).includes(`atribut_${id}`)) {
        await delete colorObj[`atribut_${id}`];
        if (
          !Object.keys(colorObj).toString().includes("atribut") &&
          !Object.keys(colorObj).toString().includes("color") &&
          !Object.keys(colorObj).toString().includes("price_min")
        ) {
          await delete colorObj[`filter`];
        }
      }

      await this.$router.replace({
        path: `/categoryId/${this.$route.params.index}`,
        query: {
          ...colorObj,
        },
      });
      this.skeleton = await true;
      this.currentPage1 = 1;
      await this.__GET_PRODUCTS();
    },
    async colorFilter(id) {
      let colorObj = {};
      colorObj[`color_${id}`] = id;
      colorObj = { ...colorObj, ...this.$route.query, filter: 1, page: 1 };
      if (Object.keys(this.$route.query).includes(`color_${id}`)) {
        await delete colorObj[`color_${id}`];
        if (
          !Object.keys(colorObj).toString().includes("atribut") &&
          !Object.keys(colorObj).toString().includes("color") &&
          !Object.keys(colorObj).toString().includes("price_min")
        ) {
          await delete colorObj[`filter`];
        }
      }

      await this.$router.replace({
        path: `/categoryId/${this.$route.params.index}`,
        query: {
          ...colorObj,
        },
      });
      this.skeleton = await true;

      await this.__GET_PRODUCTS();
      this.currentPage1 = 1;
    },
    async handleCurrentChange(val) {
      await this.$router.replace({
        path: `/categoryId/${this.$route.params.index}`,
        query: {
          ...this.$route.query,
          page: val,
        },
      });
      this.skeleton = await true;
      await this.__GET_PRODUCTS();
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
    emptyBlog,
  },
};
</script>
<style lang="scss">
.category {
  .grid_block {
    display: grid;
    grid-template-columns: 2fr 10fr;
    grid-gap: 40px;
  }
  .five {
    grid-template-columns: repeat(5, 1fr);
  }
  .three {
    grid-template-columns: repeat(3, 1fr);
  }
  &__pagination {
    margin-top: 40px;
    .el-pager {
      display: flex;
    }
    .el-pagination {
      white-space: nowrap;
      padding: 2px 5px;
      color: #303133;
      font-weight: 700;
      display: flex;
      align-items: center;
    }
    .el-pager li.active {
      color: #fff;
      cursor: default;
      border-radius: 50%;
      background: #ff6418;
      &:hover {
        color: #fff;
      }
    }
    .el-pager li {
      padding: 0 4px;
      background: #fff;
      font-size: 18px;
      min-width: 55px;
      height: 55px;
      line-height: 28px;
      box-sizing: border-box;
      text-align: center;
      display: flex;
      justify-content: center;
      align-items: center;
      &:hover {
        color: rgba(255, 100, 24, 0.8);
      }
    }
  }
  .range-checkbox {
    span {
      font-family: "Inter";
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 24px;
      color: #020105;
    }
    input[type="checkbox"] {
      margin-bottom: 16px;
      margin-right: 15px;
      accent-color: red;
      border-radius: 3.5px;
      outline: none;
      content: none;
    }
    input[type="checkbox"]:checked:before {
      color: black !important;
    }
  }
  &__colors {
    display: grid;
    grid-gap: 16px;
    grid-template-columns: repeat(5, 1fr);
    margin-bottom: 40px;
    .checkbox {
      width: 32px;
      height: 32px;
      border: 1px solid red;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      background: red;
      align-items: center;
      span {
        width: 100%;
        height: 100%;
        border-radius: 50%;
        // background: red;
        border: 5px solid #fff;
      }
    }
  }
  &__range {
    .range-count {
      display: grid;
      grid-gap: 24px;
      grid-template-columns: repeat(2, 1fr);
      padding-bottom: 40px;
      .range-min,
      .range-max {
        display: flex;
        align-items: center;
        height: 40px;
        padding: 8px 10px;
        background: #f9f9f9;
        border: 1px solid #d9d9d9;
        border-radius: 6px;

        input {
          border: none;
          background: #f9f9f9;
          width: 100%;
          padding-left: 5px;
          font-family: "Inter";
          font-style: normal;
          font-weight: 400;
          font-size: 14px;
          line-height: 20px;
          /* identical to box height, or 143% */

          /* Grey */

          color: #727474;
          &:focus-visible {
            border: none;
            outline: none;
            box-shadow: none;
          }
        }
        span {
          display: flex;
          align-items: center;
          font-family: "Inter";
          font-style: normal;
          font-weight: 400;
          font-size: 14px;
          line-height: 20px;
          /* identical to box height, or 143% */

          /* Qora */

          color: #020105;
        }
      }
    }
    .multi-range-slider {
      border: none;
      border-radius: 10px;
      padding: 20px 10px;
      box-shadow: none;
    }
    .multi-range-slider .bar-left {
      width: 25%;
      background-color: #f0f0f0;
      border-radius: 10px 0px 0px 10px;
      box-shadow: none;
      padding: 2px 0px;
    }
    .multi-range-slider .bar-inner {
      background-color: #ff6418;
      display: flex;
      flex-grow: 1;
      flex-shrink: 1;
      justify-content: space-between;
      position: relative;
      border: none;
      justify-content: space-between;
      box-shadow: none;
    }
    .multi-range-slider .bar-right {
      width: 25%;
      background-color: #f0f0f0;
      border-radius: 0px 10px 10px 0px;
      box-shadow: none;
    }
    .multi-range-slider .thumb::before {
      content: "";
      background-color: white;
      position: absolute;
      width: 20px;
      height: 20px;
      border: solid 1px #ef3f27;
      box-shadow: none;
      border-radius: 50%;
      z-index: 1;
      margin: -8px;
      cursor: pointer;
    }
    .multi-range-slider .thumb .caption * {
      position: absolute;
      min-width: 30px;
      height: 30px;
      font-size: 75%;
      text-align: center;
      line-height: 30px;
      background-color: #ef3f27;
      border-radius: 15px;
      color: white;
      box-shadow: none;
      padding: 0px 5px;
      white-space: nowrap;
    }
  }
  &__category-controller {
    padding-top: 32px;
    display: grid;
    grid-gap: 20px;
    @media (max-width: 1440px) {
      padding-top: 24px;
    }
  }
  &__product-controller {
    padding-top: 32px;
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    grid-gap: 24px;
  }
  &__list-box1 {
    ul {
      padding-left: 0;
      font-family: "Inter";
      font-size: 16px;
      font-weight: 400;
      line-height: 24px;
      letter-spacing: 0em;
      text-align: left;
    }
    h2 {
      font-family: "Inter";
      font-size: 20px;
      font-weight: 600;
      line-height: 28px;
      letter-spacing: 0em;
      text-align: left;
      margin-bottom: 16px;
    }
  }
  .listActive {
    display: block;
    margin-top: 12px;
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #000 !important;
    pointer-events: none;

  }
  &__list1 {
    list-style: none;
    padding-left: 0;

    li {
      span {
        display: block;
        margin-top: 12px;
        font-family: "Inter";
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 24px;
        color: #727474;
        cursor: pointer;
      }
      ul {
        list-style: none;
        padding-left: 16px;
        li {
          color: #000;
        }
      }
    }
  }
}
.category-title {
  padding-top: 8px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  h1 {
    font-family: "Inter";
    font-style: normal;
    font-weight: 500;
    font-size: 40px;
    line-height: 48px;
    color: #020105;
  }

  .category-control {
    span {
      margin-right: 16px;
    }
    .el-dropdown-link {
      i {
        margin-left: 77px;
      }
      font-family: "Inter";
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 20px;
      /* identical to box height, or 143% */

      /* Black */

      color: #020105;
      padding: 10px 12px;
      border: 1px solid #ebebeb;
      border-radius: 4px;
    }
  }
}
@media (max-width: 1440px) {
  .category {
    .grid_block {
      grid-gap: 24px;
    }
    &__list1 {
      li {
        span {
          font-size: 14px;
          line-height: 20px;
        }
      }
    }
    .range-checkbox {
      span {
        font-size: 14px;
        line-height: 22px;
      }
    }
  }
  .category-title {
    h1 {
      font-size: 32px;
      line-height: 48px;
    }
  }
}
</style>
