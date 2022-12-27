<template lang="html">
  <div class="banner-carousel">
    <VueSlickCarousel v-bind="{ ...slickOptions, arrows: theArrow }">
      <slot></slot>
    </VueSlickCarousel>
  </div>
</template>
<script>
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
export default {
  props: ["theArrow"],
  data() {
    return {
      slickOptions: {
        dots: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
       
      },
    };
  },
  components: {
    VueSlickCarousel,
  },
};
</script>
<style lang="scss">
.mxw-100 {
  padding-right: 15px;
  padding-left: 15px;
}
.banner-carousel {
  position: relative;
  height: 400px;

  .slick-prev,
  .slick-next {
    content: "←";
    display: block;
    position: absolute;
    background: #ffffff;
    opacity: 0.48;
    width: 48px;
    height: 48px;
    z-index: 9;
    border-radius: 50%;
  }
  .slick-prev {
    left: 16px;
  }
  .slick-next {
    right: 16px;
  }
  .slick-prev:before,
  .slick-next:before {
    
    width: 100%;
    height: 100%;
    /* font-family: 'slick'; */
    font-size: 20px;
    /* line-height: 1; */
    /* opacity: 0.75; */
    color: black;
    /* -webkit-font-smoothing: antialiased; */
    -moz-osx-font-smoothing: grayscale;
  }
  .slick-dots li button:before {
    font-family: "slick";
    font-size: 6px;
    line-height: 20px;
    position: absolute;
    top: 0;
    left: 0;
    width: 8px;
    height: 8px;
    font-size: 8px;
    content: "•";
    text-align: center;
    /* opacity: 0.25; */
    color: #ffa854;

    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  .slick-dots li.slick-active button:before {
    color: #ff7e00;
    font-size: 12px;
    width: 12px;
    height: 12px;
  }
  .slick-slider {
    @media (max-width: 1440px) {
      height: 342px;
    }
    border-radius: 24px;
    height: 432px;
    /* overflow: hidden; */
  }
}
</style>
