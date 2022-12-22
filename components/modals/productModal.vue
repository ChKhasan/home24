<template lang="html">
  <modal :name="modal ?? 'dhds'" width="984px" height="auto">
    <div class="product-modal">
      <div
        class="product-modal__m-header d-flex align-items-center justify-content-between"
      >
        <h5>{{ product.product.name }}</h5>
        <svg
          @click="hide"
          width="64"
          height="64"
          viewBox="0 0 64 64"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M42.3806 21.5771L21.6152 42.3425"
            stroke="#EF3F27"
            stroke-width="3"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M42.3862 42.3554L21.6035 21.5684"
            stroke="#EF3F27"
            stroke-width="3"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
      <div class="product-modal__m-body">
        <div>
          <div class="product-modal__carousel">
            <div class="carousel-banner">
              <img
        v-if="product.images.length == 0"
        src="../../assets/images/image 107.png"
        alt=""
      />
              <img v-else :src="product.images[0].image" alt="" />
            </div>
            <div class="carousel-items">
              <div
                class="carousel-img activeImg"
                v-for="image in product.images"
              >
              <img
        v-if="product.images.length == 0"
        src="../../assets/images/image 107.png"
        alt=""
      />
                <img
                v-else
                  :src="image.image"
                  @click="carouselChange = product.images[0].image"
                  alt=""
                />
              </div>
              <!-- <div class="carousel-img">
                <img
                  src="../../assets/images/image 34.png"
                  @click="carouselChange = '../../assets/images/image 40.png'"
                  alt=""
                />
              </div>
              <div class="carousel-img">
                <img src="../../assets/images/image 24.png" alt="" />
              </div>
              <div class="carousel-img">
                <img src="../../assets/images/image 40.png" alt="" />
              </div>
              <div class="carousel-img">
                <img src="../../assets/images/image 24.png" alt="" />
              </div>
              <div class="carousel-img">
                <img src="../../assets/images/image 34.png" alt="" />
              </div>
              <div class="carousel-img">
                <img src="../../assets/images/image 40.png" alt="" />
              </div> -->
            </div>
          </div>
        </div>
        <div class="product-modal__m-left">
          <ProductHeaderInfo :hide="false" :product="product" />
          <CardProductPrice :product="product" />
          <div>
            <ProductCharactertable />
            <ProductCharactertable />
            <ProductCharactertable />
            <ProductCharactertable />
            <ProductCharactertable />
          </div>
        </div>
      </div>
    </div>
  </modal>
</template>
<script>
import CardProductPrice from "../cards/cardProductPrice.vue";
import ProductCharactertable from "../product/productCharactertable.vue";
import ProductHeaderInfo from "../product/productHeaderInfo.vue";

export default {
  props: ["modal", "hide", "product"],
  components: { CardProductPrice, ProductCharactertable, ProductHeaderInfo },
};
</script>
<style lang="scss">
.product-modal {
  &__m-header {
    padding: 6px 32px;
    background: #f7f7f7;
    h5 {
      font-family: "TT Firs Neue";
      font-style: normal;
      font-weight: 500;
      font-size: 24px;
      line-height: 32px;
      color: #000000;
      margin-bottom: 0;
    }
  }
  &__m-body {
    padding: 32px;
    display: grid;
    grid-template-columns: 4fr 3fr;
    grid-gap: 32px;
  }
  &__m-left {
    display: grid;
    grid-gap: 33px;
  }
  &__carousel {
    display: grid;
    grid-gap: 20px;
    overflow: hidden;

    .carousel-items {
      display: grid;
      grid-auto-flow: column;

      overflow-x: scroll;
      height: 80px;

      &::-webkit-scrollbar {
        display: none; /* for Chrome, Safari, and Opera */
      }
      cursor: pointer;
    }
    .carousel-img {
      width: 80px;
      height: 80px;
      border: 1px solid #f2f2fa;
      margin-right: 25px;
      border-radius: 4px;
      img {
        width: 100%;
        height: 100%;
        object-fit: contain;
      }
    }
    .carousel-banner {
      border: 1px solid #f3f3fa;
      border-radius: 16px;
      height: 99%;
      img {
        width: 100%;
        height: 488px;
        object-fit: contain;
      }
    }
    .activeImg {
      border: 1px solid #ff6418;
      border-radius: 4px;
    }
  }
}
</style>
