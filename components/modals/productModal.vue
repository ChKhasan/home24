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
              <img v-else :src="carouselChange" alt="" />
            </div>
            <div class="carousel-items">
              <div
                class="carousel-img"
                v-for="image in product.images"
                :class="{ activeImg: carouselChange == image.image }"
              >
                <img
                  v-if="product.images.length == 0"
                  src="../../assets/images/image 107.png"
                  alt=""
                />
                <img
                  v-else
                  :src="image.image"
                  @click="carouselChange = image.image"
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
            <span
              class="more_info"
              @click="$router.push(`/product/${product.id}`)"
              >Подробнее о товаре
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19.75 11.7256L4.75 11.7256"
                  stroke="#FF7E00"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M13.7002 5.70124L19.7502 11.7252L13.7002 17.7502"
                  stroke="#FF7E00"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </span>
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
  data() {
    return {
      carouselChange: null,
    };
  },
  components: { CardProductPrice, ProductCharactertable, ProductHeaderInfo },
  created() {
    this.carouselChange = this.product.images[0]?.image;
  },
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
    .more_info {
      font-family: "Inter";
      font-style: normal;
      font-weight: 400;
      font-size: 18px;
      line-height: 26px;
      color: #ff7e00;
      cursor: pointer;
    }
  }
  &__carousel {
    display: grid;
    grid-gap: 20px;
    overflow: hidden;

    .carousel-items {
      display: flex;
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
@media (max-width: 1440px) {
  .product-modal {
    &__m-header {
      padding: 6px 24px;
      svg {
        width: 40px;
        height: 40px;
      }
      h5 {
        font-size: 18px;
        line-height: 24px;
      }
    }
    &__carousel {
      grid-gap: 16px;
      .carousel-img {
        width: 70px;
        height: 70px;
      }
      .carousel-banner {
        img {
          height: 400px;
        }
      }
    }
    &__m-left {
      grid-gap: 32px;
    }
    .p-character-card {
      .body {
        padding-bottom: 16px;
        p {
          font-size: 12px;
          font-weight: 18px;
        }
      }
    }
  }
}
</style>
