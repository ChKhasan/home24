<template>
  <div class="homepage">
    <div
      class="container-fluid homepage__banner-carousel"
      @click="hide = !hide"
    >
    <!-- <logo/> -->
      <div class="container">
        <div class="row homepage__carousel-control">
          <div class="col-9">
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
          <div class="col-3">
            <!-- <UniversalCarousel2 propsClass="swiper1">
              <div class="swiper-slide">
                <img src="../assets/images/BannerImg.png" alt="" />
              </div>
              <div class="swiper-slide">
                <img src="../assets/images/BannerImg.png" alt="" />
              </div>
              <div class="swiper-slide">
                <img src="../assets/images/BannerImg.png" alt="" />
              </div>
            </UniversalCarousel2> -->
            <b-card v-if="showProduct" style="height: 100%,boder-radius: 18px">
              <b-skeleton animation width="100%" height="50%"></b-skeleton>
              <b-skeleton animation width="100%" height="50%"></b-skeleton>
            </b-card>
            <BannerCarousel :theArrow="false" v-else>
              <div v-for="product in productOfDay">
                <CardProductTheDay :product="product" />
              </div>
            </BannerCarousel>
          </div>
        </div>
      </div>
    </div>
    <homeTitlies title="Популярные категории" link="Все товары" />

    <div class="container">
      <div class="row">
        <div class="col-12 homepage__grid-category">
          <CardCategory />
          <CardCategory />
          <CardCategory />
          <CardCategory />
          <CardCategory />
          <CardCategory />
          <CardCategory />
          <CardCategory />
          <CardCategory />
          <CardCategory />
          <CardCategory />
          <CardCategory />
        </div>
      </div>
    </div>
    <homeTitlies title="Хиты продаж" link="Все товары" />
    <div class="container">
      <div class="row">
        <div class="col-12 homepage__grid-product">
          <CardProduct modal="id1" />
          <CardProduct modal="id2" />
          <CardProduct modal="id3" />
          <CardProduct modal="id4" />
          <CardProduct modal="id5" />
          <CardProduct modal="id6" />
        </div>
      </div>
    </div>
    <div class="container homepage__carousel-aksiya">
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
    </div>
    <homeTitlies title="Популярные товары" link="Все товары" />
    <div class="container">
      <div class="row">
        <div class="col-12 homepage__grid-product">
          <CardProduct modal="id6" />
          <CardProduct />
          <CardProduct />
          <CardProduct />
          <CardProduct />
          <CardProduct />
        </div>
      </div>
      <div class="row">
        <div class="col-12 homepage__grid-top-product">
          <cardTopProduct />
          <cardTopProduct />
          <cardTopProduct />
          <cardTopProduct />
        </div>
      </div>
      <div class="row">
        <div class="col-12 homepage__grid-product">
          <CardProduct />
          <CardProduct />
          <CardProduct />
          <CardProduct />
          <CardProduct />
          <CardProduct />
        </div>
      </div>
    </div>
    <homeTitlies title="Популярные бренды" link="Все товары" />
    <div class="container">
      <div class="row">
        <div class="col-12 homepage__grid-product">
          <CardBrand img="../assets/images/Frame 8.png" />
          <CardBrand img="../../assets/images/Frame 8.png" />
          <CardBrand img="./assets/images/Frame 8.png" />
          <CardBrand img="./images/Frame 8.png" />
          <CardBrand img="../images/Frame 8.png" />
          <CardBrand img="./Frame 8.png" />
          <CardBrand img="./Frame 8.png" />
          <CardBrand img="./Frame 8.png" />
          <CardBrand img="./Frame 8.png" />
          <CardBrand img="./Frame 8.png" />
          <CardBrand img="./Frame 8.png" />
          <CardBrand img="./Frame 8.png" />
        </div>
      </div>
    </div>
    <homeTitlies title="Фото довольных клиентов" />
    <div class="container">
      <div class="row">
        <div class="col-12 homepage__grid-top-product">
          <CardClient />
          <CardClient />
          <CardClient />
          <CardClient />
        </div>
      </div>
    </div>
    <homeTitlies title="Телевизоры" link="Все товары" />
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
    </div>
    <homeTitlies title="Блог" link="Все товары" />
    <div class="container">
      <div class="row">
        <div class="col-12 homepage__grid-top-product">
          <CardBlog />
          <CardBlog />
          <CardBlog />
          <CardBlog />
        </div>
      </div>
    </div>
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
      showProduct: true,
      productOfDay: [],
    };
  },
  async created() {
    // const data = await this.$axios.$get("home");
    // const categories = await this.$store.dispatch(
    //   "fetchCategories/fetchAllCategories"
    // );
    // const productOfDay = await this.$store.dispatch(
    //   "fetchProduct/fetchProductOfDay"
    // );
    // console.log(data);
    // this.productOfDay = await productOfDay;
    // this.showProduct = await false;
    // console.log(productOfDay);
  },
  mounted() {
    this.$store.commit("setUser", localStorage.getItem("Auth"));
  },
  async asyncData({ store, $axios }) {},
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
</style>
