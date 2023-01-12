<template>
  <div class="homepage">
    <div
      class="container-fluid homepage__banner-carousel"
      @click="hide = !hide"
    >
      <div class="container">
        <div class="row homepage__carousel-control">
          <div class="col-9 news_carousel">
            <UniversalCarousel propsClass="swiper">
              <div class="swiper-slide">
                <img src="../assets/images/BannerImg.png" alt="" />
              </div>
              <div class="swiper-slide">
                <img src="../assets/images/BannerImg.png" alt="" />
              </div>
              <div class="swiper-slide">
                <img src="../assets/images/BannerImg.png" alt="" />
              </div>
            </UniversalCarousel>
          </div>
          <div class="col-3 day_product_carousel">
            <b-skeleton
              v-if="skeleton"
              style="height: 100%,boder-radius: 18px"
              animation="wave"
              height="100%"
              width="100%"
            ></b-skeleton>

            <BannerCarousel :theArrow="false" v-else>
              <div v-for="product in productOfDay">
                <CardProductTheDay :product="product" />
              </div>
            </BannerCarousel>
          </div>
        </div>
      </div>
    </div>
    <homeTitlies
      title="Категории"
      link="Все товары"
      :to="`/categories/${popularCategories[0]?.id}`"
    />

    <div class="container">
      <div class="row">
        <div class="col-12 homepage__grid-category">
          <div v-if="skeleton">
            <b-skeleton
              animation="wave"
              height="200px"
              width="100%"
            ></b-skeleton>
          </div>
          <div v-if="skeleton">
            <b-skeleton
              animation="wave"
              height="200px"
              width="100%"
            ></b-skeleton>
          </div>
          <div v-if="skeleton">
            <b-skeleton
              animation="wave"
              height="200px"
              width="100%"
            ></b-skeleton>
          </div>
          <div v-if="skeleton">
            <b-skeleton
              animation="wave"
              height="200px"
              width="100%"
            ></b-skeleton>
          </div>
          <div v-if="skeleton">
            <b-skeleton
              animation="wave"
              height="200px"
              width="100%"
            ></b-skeleton>
          </div>
          <div v-if="skeleton">
            <b-skeleton
              animation="wave"
              height="200px"
              width="100%"
            ></b-skeleton>
          </div>
          <CardCategory
            v-else
            v-for="category in popularCategories"
            :category="category"
            :key="category.id"
            :parent="true"
          />
        </div>
      </div>
    </div>
    <homeTitlies title="Хиты продаж" link="Все товары" to="/hit_products" />
    <div class="container">
      <div class="row">
        <div class="col-12 homepage__grid-product">
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
          <b-skeleton
            v-if="skeleton"
            animation="wave"
            height="400px"
          ></b-skeleton>
          <CardProduct
            modal="id1"
            v-else
            :id="1"
            v-for="product in hitProducts"
            :product="product"
            :key="product.id"
          />

          <!-- <CardProduct modal="id2" :cartProducts="cartProducts" :id="2" />
          <CardProduct modal="id3" :cartProducts="cartProducts" :id="3" />
          <CardProduct modal="id4" :cartProducts="cartProducts" :id="4" />
          <CardProduct modal="id5" :cartProducts="cartProducts" :id="5" />
          <CardProduct modal="id6" :cartProducts="cartProducts" :id="6" /> -->
        </div>
      </div>
    </div>
    <!-- <div class="container homepage__carousel-aksiya">
      <div class="row">
        <div class="col-12">
          <BannerCarousel :theArrow="true">
            <div class="carousel-item">
              <img src="../assets/images/Frame 55634.png" alt="" />
            </div>
            <div class="carousel-item">
              <img src="../assets/images/Frame 55634.png" alt="" />
            </div>
            <div class="carousel-item">
              <img src="../assets/images/Frame 55634.png" alt="" />
            </div>
          </BannerCarousel>
        </div>
      </div>
    </div> -->
    <!-- <homeTitlies title="Популярные товары" link="Все товары" />
    <div class="container">
      <div class="row">
        <div class="col-12 homepage__grid-top-product">
          <cardTopProduct />
          <cardTopProduct />
          <cardTopProduct />
          <cardTopProduct />
        </div>
      </div>
    </div> -->
    <homeTitlies title="Популярные бренды" link="Все бренды" to="brands" />
    <div class="container">
      <div class="row">
        <div class="col-12 homepage__grid-product">
          <CardBrand :brand="brand" :key="brand.id" v-for="brand in brands" />
        </div>
      </div>
    </div>
    <!-- <homeTitlies title="Фото довольных клиентов" />
    <div class="container">
      <div class="row">
        <div class="col-12 homepage__grid-top-product">
          <CardClient />
          <CardClient />
          <CardClient />
          <CardClient />
        </div>
      </div>
    </div> -->
    <!-- <homeTitlies title="Телевизоры" link="Все товары" />
    <div class="container">
      <div class="row">
        <div class="col-12 homepage__grid-product">
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
    <!-- <homeTitlies title="Блог" link="Все товары" />
    <div class="container">
      <div class="row">
        <div class="col-12 homepage__grid-top-product">
          <CardBlog />
          <CardBlog />
          <CardBlog />
          <CardBlog />
        </div>
      </div>
    </div> -->
  </div>
</template>

<script>
import CardCategory from "../components/cards/cardCategory.vue";
import CardProduct from "../components/cards/cardProduct.vue";
import CardTopProduct from "../components/cards/cardTopProduct.vue";
import CardProductTheDay from "../components/cards/cardProductTheDay.vue";
import BannerCarousel from "../components/carousels/bannerCarousel.vue";
import homeTitlies from "../components/homeTitlies.vue";
import CardBrand from "../components/cards/cardBrand.vue";
import CardClient from "../components/cards/cardClient.vue";
import CardBlog from "../components/cards/cardBlog.vue";
import UniversalCarousel from "../components/carousels/UniversalCarousel.vue";
import UniversalCarousel2 from "../components/carousels/UniversalCarousel2.vue";
export default {
  name: "IndexPage",
  data() {
    return {
      hide: false,
      skeleton: true,
      productOfDay: [],
      cartProducts: [],
      hitProducts: [],
      popularCategories: [],
      skeleton: true,
      brands: [],
      page_size: 6,
    };
  },
  async created() {
    await this.__GET_POPULAR_CATEGORIES();
    await this.__GET_HIT_PRODUCTS();
    await this.__GET_PRODUCT_OF_DAY();
    await this.__GET_BRANDS();
    this.$store.commit("reloadStore");
    this.$store.commit("setUser");
    this.skeleton = await false;
    console.log(process.env);
  },
  methods: {
    async __GET_POPULAR_CATEGORIES() {
      this.popularCategories = await this.$store.dispatch(
        "fetchCategories/fetchPopularCategories"
      );
    },
    async __GET_HIT_PRODUCTS() {
      const hit_products = await this.$store.dispatch(
        "fetchProduct/fetchHitProduct",
        { page_size: this.page_size }
      );
      this.hitProducts = hit_products.results;
    },
    async __GET_PRODUCT_OF_DAY() {
      this.productOfDay = await this.$store.dispatch(
        "fetchProduct/fetchProductOfDay"
      );
    },
    async __GET_BRANDS() {
      const brands = await this.$store.dispatch("fetchBrands/fetchBrands", {
        page_size: 6,
        ...this.$route.query,
      });
      this.brands = brands.results;
    },
  },
  components: {
    BannerCarousel,
    CardProductTheDay,
    CardCategory,
    CardProduct,
    CardTopProduct,
    CardBrand,
    CardClient,
    CardBlog,
    UniversalCarousel,
    UniversalCarousel2,
  },
};
</script>
<style lang="scss">
@import "@/assets/css/main.css";
@import "@/assets/fonts/stylesheet.css";
.vm--overlay {
  background: rgba(0, 0, 0, 0.8);
}
.container,.container-sm, .container-md, .container-lg, .container-xl {
    width: 100%;
    padding-right: 15px !important;
    padding-left: 15px !important;
    margin-right: auto;
    margin-left: auto;
}
@media (min-width: 576px) {
  .container-sm,
  .container {
    max-width: 540px;
  }
}
@media (min-width: 768px) {
  .container-md,
  .container-sm,
  .container {
    max-width: 720px;
  }
}
@media (min-width: 992px) {
  .container-lg,
  .container-md,
  .container-sm,
  .container {
    max-width: 960px;
  }
}
@media (min-width: 1200px) {
  .container-xl,
  .container-lg,
  .container-md,
  .container-sm,
  .container {
    max-width: 1140px;
  }
}
@media (max-width: 1360px) {
  .container-xl,
  .container-lg,
  .container-md,
  .container-sm,
  .container {
    max-width: 1240px !important ;
  }
}
@media (min-width: 1360px) {
  .container-xxl,
  .container-xl,
  .container-lg,
  .container-md,
  .container-sm,
  .container {
    max-width: 95% !important;
  }
}
@media (max-width: 1632px) and (min-width: 1330px) {
  .container-xxl,
  .container-xl,
  .container-lg,
  .container-md,
  .container-sm,
  .container {
    max-width: 1328px !important;
  }
}
@media (min-width: 1632px) {
  .container-xxl,
  .container-xl,
  .container-lg,
  .container-md,
  .container-sm,
  .container {
    max-width: 1632px !important;
  }
}
.homepage {
  transition: 1s;
  &__carousel-aksiya {
    margin-top: 132px;
    .carousel-item {
      border-radius: 24px;
      overflow: hidden;
    }
  }
  &__grid-category {
    padding-top: 24px;
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    grid-gap: 24px;
  }
  &__grid-product {
    padding-top: 24px;
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    grid-gap: 24px;
  }
  &__grid-top-product {
    padding-top: 24px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 24px;
  }
  &__banner-carousel {
    padding-top: 40px;
    padding-bottom: 57px;
    background: #f4f5f5;
  }
  &__carousel-control {
    height: 432px;
    object-fit: cover;
    .news_carousel {
      height: 100%;
      margin-left: -15px;
    }
    .day_product_carousel {
      margin-right: -15px;
    }
    .carousel-item {
      border-radius: 24px;
      overflow: hidden;
      img {
        width: 100%;
        height: 432px;
        object-fit: cover;
      }
    }
  }
}
@media (max-width: 1440px) {
  .homepage {
    &__carousel-aksiya {
      margin-top: 55px;
    }
    &__grid-category {
      grid-gap: 16px;
    }
    &__grid-product {
      grid-gap: 16px;
    }
    &__grid-top-product {
      grid-gap: 16px;
    }
    &__banner-carousel {
      padding-top: 24px;
      padding-bottom: 34px;
    }
    &__carousel-control {
      height: 342px;
      .carousel-item {
        img {
          height: 342px;
        }
      }
    }
  }
}
</style>
