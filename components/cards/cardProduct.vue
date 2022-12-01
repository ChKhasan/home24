<template lang="html">
  <div class="product-card">
    <div class="product-card__img" id="show-btn" @click="show">
      <img src="../../assets/images/Rectangle 8.png" alt="" />
      <!-- <div class="product-card__hover-link abs-block"> -->
      <span class="product-card__heart to-favorites"
        ><svg
          width="16"
          height="16"
          viewBox="0 0 22 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M10.761 18.8538C8.5904 17.5179 6.57111 15.9456 4.73929 14.1652C3.45144 12.8829 2.47101 11.3198 1.8731 9.59539C0.797144 6.25031 2.05393 2.42083 5.57112 1.28752C7.41961 0.692435 9.43845 1.03255 10.9961 2.20148C12.5543 1.03398 14.5725 0.693978 16.4211 1.28752C19.9383 2.42083 21.2041 6.25031 20.1281 9.59539C19.5302 11.3198 18.5498 12.8829 17.2619 14.1652C15.4301 15.9456 13.4108 17.5179 11.2402 18.8538L11.0051 19L10.761 18.8538Z"
            stroke="#020105"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M14.7394 5.05302C15.8047 5.39332 16.5616 6.34973 16.6562 7.47501"
            stroke="#020105"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </span>
      <span class="product-card__buy to-comparison">
        <svg
          width="16"
          height="16"
          viewBox="0 0 18 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M17.1642 5.16043L3.54639 5.16043"
            stroke="#200E32"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M13.068 1.08277L17.1647 5.16055L13.068 9.23833"
            stroke="#200E32"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M0.832886 15.0889L14.4507 15.0889"
            stroke="#200E32"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M4.92894 19.1665L0.832275 15.0888L4.92894 11.011"
            stroke="#200E32"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </span>
      <!-- </div> -->
    </div>

    <ProductModal :modal="modal" :hide="hide" />
    <div class="product-card__body" @click="$router.push('/product/name')">
      <div class="product-card__price d-flex justify-content-between">
        <span> 3 512 750 сум </span>
        <nuxt-link to="/"
          ><svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M11.0518 13.2135C10.7705 13.2135 10.5418 13.4422 10.5418 13.7235C10.5418 14.0048 10.7705 14.2328 11.0518 14.2328C11.3332 14.2328 11.5612 14.0048 11.5612 13.7235C11.5612 13.4422 11.3332 13.2135 11.0518 13.2135Z"
              stroke="white"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M3.55024 13.2135C3.26891 13.2135 3.04024 13.4422 3.04024 13.7235C3.04024 14.0048 3.26891 14.2328 3.55024 14.2328C3.83157 14.2328 4.06024 14.0048 4.06024 13.7235C4.06024 13.4422 3.83157 13.2135 3.55024 13.2135Z"
              stroke="white"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M14.1667 2.16663L12.7801 2.40663L12.1381 10.0553C12.0861 10.6786 11.5654 11.1573 10.9401 11.1573H3.66541C3.06808 11.1573 2.56141 10.7186 2.47541 10.1266L1.84275 5.75463C1.76475 5.21529 2.18275 4.73263 2.72741 4.73263H12.5574"
              stroke="white"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M6.58307 7.19661H4.7344"
              stroke="white"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </nuxt-link>
      </div>
      <div class="product-card__last-price">
        <p>3 512 750 сум</p>
      </div>
      <div class="product-card__reviews">
        <svg
          width="16"
          height="17"
          viewBox="0 0 16 17"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M8.47609 2.79389L10.0201 5.89989C10.0974 6.05655 10.2468 6.16589 10.4201 6.19122L13.8768 6.69055C14.0168 6.70922 14.1428 6.78255 14.2288 6.89455C14.3901 7.10455 14.3654 7.40189 14.1721 7.58255L11.6668 10.0052C11.5394 10.1252 11.4828 10.3012 11.5161 10.4726L12.1161 13.8912C12.1581 14.1746 11.9648 14.4399 11.6814 14.4859C11.5641 14.5039 11.4441 14.4852 11.3374 14.4326L8.25876 12.8186C8.10409 12.7346 7.91876 12.7346 7.76409 12.8186L4.66276 14.4412C4.40342 14.5732 4.08609 14.4752 3.94476 14.2212C3.89076 14.1186 3.87209 14.0019 3.89076 13.8879L4.49076 10.4692C4.52076 10.2986 4.46409 10.1232 4.34009 10.0026L1.82142 7.58055C1.61609 7.37655 1.61476 7.04455 1.81942 6.83922C1.82009 6.83855 1.82076 6.83722 1.82142 6.83655C1.90609 6.75989 2.01009 6.70855 2.12276 6.68855L5.58009 6.18922C5.75276 6.16189 5.90142 6.05389 5.98009 5.89722L7.52276 2.79389C7.58476 2.66789 7.69476 2.57122 7.82809 2.52722C7.96209 2.48255 8.10876 2.49322 8.23476 2.55655C8.33809 2.60789 8.42276 2.69122 8.47609 2.79389Z"
            fill="#F6C65C"
          />
        </svg>
        <span>5.0</span>
      </div>
      <div class="product-card__name">
        <p>Руководительское кресло Metta Комплект 5.1 (Чёрный)</p>
      </div>
    </div>
  </div>
</template>
<script>
import ProductModal from "../modals/productModal.vue";

export default {
  props: ["modal"],
  components: { ProductModal },
  methods: {
    show() {
      this.$modal.show(this.modal);
    },
    hide() {
      this.$modal.hide(this.modal);
    },
  },
  mount() {
    this.show();
  },
};
</script>
<style lang="scss">
.product-card {
  &__body {
    padding: 12px 16px;
    background: #f9f9f9;
    margin-top: 8px;
    border-radius: 16px;
    cursor: pointer;
  }
  &__price {
    span {
      font-family: "TT Firs Neue";
      font-size: 16px;
      font-weight: 400;
      line-height: 24px;
      letter-spacing: 0em;
      text-align: left;
      display: flex;
      align-items: center;
    }
    a {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 32px;
      width: 32px;
      border-radius: 50%;
      background: #ff6418;
    }
  }
  &__last-price {
    p {
      font-family: "TT Firs Neue";
      font-size: 14px;
      font-weight: 400;
      line-height: 20px;
      letter-spacing: 0em;
      text-align: left;
      text-decoration-line: line-through;

      /* Grey 40% */

      color: #9a999b;
      margin-bottom: 0 !important;
    }
  }
  &__reviews {
    padding-top: 7px;
    span {
      font-family: "Inter";
      font-size: 13px;
      font-weight: 400;
      line-height: 12px;
      letter-spacing: 0em;
      text-align: left;
    }
  }
  &__name {
    padding-top: 9px;
    font-family: "Inter";
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
    /* or 143% */

    /* Black */

    color: #020105;
  }
  &__hover-link {
    position: absolute;
    top: 10px;
    right: -100%;
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 24px;
    transition: 0.5s;
  }
  &__img {
    border-radius: 16px;
    border: 1px solid #f3f3fa;
    border-radius: 16px;
    overflow: hidden;
    position: relative;
    &:hover {
      img {
        transform: scale(1.1);
      }

      .to-comparison,
      .to-favorites {
        right: 12px;
      }
    }
    img {
      height: 300px;
      transition: 0.5s;
      object-fit: contain;
      width: 100%;
    }
  }
  &__heart {
    position: absolute;
    top: 12px;
    right: -100%;
    transition: 0.5s;

    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 32px;
    height: 32px;
    background: #f8f8fa;
    border-radius: 50%;
  }
  &__buy {
    position: absolute;
    top: 58px;
    right: -100%;
    transition: 0.5s;
    transition-delay: 0.1s;

    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 32px;
    height: 32px;
    background: #f8f8fa;
    border-radius: 50%;

    svg {
      transition: 0.3s;
    }
    &:hover {
      background: #ff6418;
      svg {
        path {
          stroke: #fff;
        }
      }
    }
  }
}
</style>
