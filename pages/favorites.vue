<template lang="html">
  <div class="container favorites">
    <div class="row">
      <div class="col-12">
        <BreadCrumb :links="links" last="Избранное" />
        <div class="favorites__f-header">
          <TitleBasket title="Избранное" />

          <div class="favorites-select">
            <span @click="deteleLikes">Очистить</span>
            <el-dropdown @command="sorting" v-if="$store.state.like.length > 0">
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
      <div class="col-12 favorites__count">
        <p>
          Товаров: <span>{{ $store.state.like.length }}</span>
        </p>
      </div>
    </div>
    <div class="row">
      <div class="col-12">
        <emptyBlog v-if="$store.state.like.length == 0" />
        <div class="favorites__products" v-else>
          <CardProduct
            v-for="product in likeProducts"
            :product="product"
            :key="product.id"
          />
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
  computed: {
    favorites() {
      return this.$store.state.like.length;
    },
  },
  async created() {
    await this.__GET_COMPARISON_CATEGORIES();
    this.__GET_LIKES();
  },
  methods: {
    async sorting(category) {
      console.log(category);
      await this.$router.replace({
        path: `/favorites`,
        query: {
          category: category.id,
        },
      });
      this.currentCategory = category.name;

      await this.__GET_LIKES();
    },
    async __GET_COMPARISON_CATEGORIES() {
      if(this.$store.state.like.length > 0) {
        this.comparisonCategory = await this.$store.dispatch(
          "fetchComparison/fetchComparisonByCategory",
          { products: JSON.parse(localStorage.getItem("like")) }
        );
        if (this.$route.query.category != this.comparisonCategory[0].id && this.comparisonCategory.lenght > 0) {
          await this.$router.replace({
            path: `/favorites`,
            query: {
              category: this.comparisonCategory[0].id,
            },
          });
        }
        this.currentCategory = this.comparisonCategory[0].name;
      }
    },
    async deteleLikes() {
      localStorage.setItem("like", JSON.stringify([]));
      this.__GET_LIKES();
      this.__GET_COMPARISON_CATEGORIES();
      this.$store.commit("reloadStore");
    },
    async __GET_LIKES() {
      this.likeProducts = await this.$store.dispatch("fetchLike/postLike", {
        products: JSON.parse(localStorage.getItem("like")),
        category: this.$route.query.category,
      });
    },
  },
  components: {
    BreadCrumb,
    TitleCategory,
    TitleBasket,
    CardProduct,
    emptyBlog,
    HomeTitlies,
  },
  watch: {
    async favorites(newFavorites, oldFavorites) {
      if (newFavorites > 0) {
        if (newFavorites != oldFavorites) {
          await this.__GET_COMPARISON_CATEGORIES();
          await this.__GET_LIKES();
        }
      } else {
        this.$router.push('/')
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
.favorites {
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
