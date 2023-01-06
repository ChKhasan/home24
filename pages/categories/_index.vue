<template lang="html">
  <div class="category">
    <div class="container">
      <div class="row">
        <div class="col-2 category__list-box">
          <h2>Категории</h2>
          <ul class="category__list">
            <div v-if="skeleton">
              <b-skeleton animation="wave" width="45%"></b-skeleton>
              <b-skeleton animation="wave" width="55%"></b-skeleton>
              <b-skeleton animation="wave" width="40%"></b-skeleton>
            </div>
            <li v-for="category in categories" v-else>
              <span @click="$router.push(`/categories/${category.id}`)" :class="{activeCategry: $route.params.index == category.id}">{{
                category.name
              }}</span>
            </li>
          </ul>
        </div>
        <div class="col-10">
          <b-skeleton v-if="skeleton" animation="wave" width="25%"></b-skeleton>
          <BreadCrumb v-else :links="links" :last="categoryById?.name" />
          <div v-if="skeleton">
            <b-skeleton animation="wave" height="40px" width="30%"></b-skeleton>
          </div>
          <TitleCategory v-else :show="false" :title="categoryById?.name" />
          <div class="category__category-controller">
            <div v-if="skeleton">
              <b-skeleton
                animation="wave"
                height="200px"
                width="100%"
              ></b-skeleton>
            </div>
            <CardCategory
              v-else
              v-for="children in categoryById.children"
              :category="children"
            />
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
import CardCategory from "../../components/cards/cardCategory.vue";
import CardProduct from "../../components/cards/cardProduct.vue";
import BreadCrumb from "../../components/category/breadCrumb.vue";
import TitleCategory from "../../components/category/titleCategory.vue";
import homeTitliesVue from "../../components/homeTitlies.vue";

export default {
  data() {
    return {
      links: [
        {
          name: "Главный",
          to: "/",
        },
      ],
      skeleton: true,
    };
  },
  async created() {
    this.$store.commit("reloadStore");
    await this.__GET_CATEGORIES();
    await this.__GET_CATEGORIES_BY_ID();
     this.skeleton = await false;
  },
  methods: {
   async __GET_CATEGORIES() {
    this.categories = await this.$store.dispatch(
      "fetchCategories/fetchAllCategories"
    );
   },
   async __GET_CATEGORIES_BY_ID() {
    this.categoryById = await this.$store.dispatch(
      "fetchCategories/fetchAllCategoryById",
      this.$route.params.index
    );
   }
  },
  components: {
    BreadCrumb,
    TitleCategory,
    CardProduct,
    CardCategory,
    homeTitliesVue,
  },
};
</script>
<style lang="scss">
.category {
  &__category-controller {
    padding-top: 32px;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-gap: 20px;
    
  }
  &__product-controller {
    padding-top: 32px;
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    grid-gap: 24px;
  }
  &__list-box {
    h2 {
      font-family: "Inter";
      font-size: 20px;
      font-weight: 600;
      line-height: 28px;
      letter-spacing: 0em;
      text-align: left;
    }
  }
  &__list {
    list-style: none;
    padding-left: 0;
    .activeCategry {
      margin-left: 10px;
    }
    li {
      span {
        display: block;
        margin-top: 12px;
        font-family: "Inter";
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 24px;
        color: #020105;
        cursor: pointer;
        @media (max-width: 1440px) {
        line-height: 20px;

        }
      }
    }
  }
}
@media (max-width: 1440px) {
  .category {
    &__category-controller {
      grid-gap: 16px !important;
      padding-top: 24px !important; 
    }
  }
}
</style>
