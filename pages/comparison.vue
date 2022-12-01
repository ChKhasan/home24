<template lang="html">
  <div class="container comparison">
    <div class="row">
      <div class="col-12">
        <BreadCrumb :links="links" last="Сравнение" />
        <div class="favorites__f-header">
          <TitleBasket title="Сравнение" />

          <div class="favorites-select">
            <nuxt-link to="/">Очистить</nuxt-link>
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
      <div class="col-12 favorites__count">
        <p>Товаров: <span>6</span></p>
      </div>
    </div>
    <div class="row">
      <div class="col-12 comparison__card-control">
        <VueSlickCarousel v-bind="slickOptions">
          <CardComparison />
          <CardComparison />
          <CardComparison />
          <CardComparison />
          <CardComparison />
          <CardComparison />
          <CardComparison />
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
    };
  },
  components: { BreadCrumb, TitleBasket, CardComparison, VueSlickCarousel },
};
</script>
<style lang="scss">
.comparison {
  padding-top: 32px;
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
