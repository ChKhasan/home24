<template lang="html">
  <div class="product-day">
    <div class="product-day__title d-flex justify-content-between">
      <h2>товар дня</h2>
      <span
        @click="$store.commit('addToStore', { id: product.id, name: 'like' })"
        :class="{ disabledLike: includes($store.state.like, product.id) }"
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
    </div>
    <div class="product-day__body d-flex">
      <div
        class="product-day__img"
        @click="$router.push(`/product/${product.id}`)"
      >
        <img :src="product.images[0].image" alt="" />
      </div>
      <div class="product-day__info">
        <div class="product-day__aksiya d-flex justify-content-between">
          <div class="product-day__aksiya-text">Cкидка</div>
          <div class="product-day__aksiya-number">-90%</div>
        </div>

        <div class="product-day__price d-flex align-items-center">
          <h5>{{ product.price }}</h5>
          <span>сум</span>
        </div>
        <div class="product-day__last-price">
          <span>{{ product.price }}</span>
        </div>
        <div class="product-day__reviews">
          <p>
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.05977 5.37561L9.06043 5.37571L12.085 5.81263L12.085 5.81265L12.0893 5.81323C12.1061 5.81546 12.1216 5.82409 12.1329 5.83884L12.133 5.83892C12.1486 5.85917 12.1463 5.88741 12.1275 5.90498L12.1275 5.90494L12.1226 5.90969L9.93193 8.02804C9.72337 8.22598 9.62969 8.5157 9.68317 8.79818L10.2063 11.7788C10.2093 11.8091 10.1885 11.8369 10.1587 11.8426C10.1391 11.8452 10.1189 11.8422 10.1002 11.8336L7.41435 10.4256C7.1616 10.2896 6.8586 10.2896 6.60583 10.4255L3.89739 11.8426C3.86502 11.8584 3.82422 11.8476 3.80373 11.8157C3.79888 11.8047 3.7972 11.7927 3.799 11.7803L4.32341 8.79232C4.32342 8.79228 4.32342 8.79225 4.32343 8.79221C4.37254 8.51263 4.27997 8.22599 4.07658 8.02807L4.07487 8.02641L1.87449 5.91048C1.85385 5.88876 1.85315 5.85554 1.87173 5.83316C1.88728 5.82143 1.90473 5.81355 1.92317 5.80964L4.93979 5.37396L4.9398 5.374L4.94516 5.37315C5.22279 5.3292 5.46307 5.155 5.59009 4.90206L5.5908 4.90062L6.94064 2.18521L6.94135 2.18375C6.94885 2.16851 6.96169 2.15805 6.97497 2.15367L6.97611 2.15329C6.99235 2.14788 7.01052 2.14919 7.02581 2.15688L7.02581 2.15688L7.02749 2.15772C7.04101 2.16443 7.05287 2.17561 7.06068 2.18974L8.40893 4.90195C8.40904 4.90216 8.40914 4.90237 8.40924 4.90258C8.53482 5.15647 8.77732 5.33433 9.05977 5.37561Z"
                stroke="#5D5D5F"
                stroke-width="0.8"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            Нет отзывов
          </p>
        </div>
        <div class="product-day__name">
          <span> {{ product.product.name }} LTE (синий)</span>
        </div>
        <div class="product-day__btn">
          <button
            @click="
            $store.commit('addToStoreCart', {
              id: product.id,
              name: 'cart',
              count: 1,
            })
            "
            :class="{ disabled: includes($store.state.cart, product.id) }"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M11.0092 14.3334H5.44398C3.39974 14.3334 1.83148 13.595 2.27694 10.6232L2.79562 6.59575C3.07022 5.11292 4.01607 4.54541 4.84597 4.54541H11.6316C12.4737 4.54541 13.3647 5.15563 13.682 6.59575L14.2007 10.6232C14.579 13.2594 13.0534 14.3334 11.0092 14.3334Z"
                stroke="white"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M11.1007 4.39895C11.1007 2.80823 9.81117 1.5187 8.22045 1.5187V1.5187C7.45445 1.51546 6.71871 1.81748 6.17592 2.35798C5.63312 2.89848 5.328 3.63294 5.328 4.39895H5.328"
                stroke="white"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M10.1976 7.40124H10.1671"
                stroke="white"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M6.31048 7.40124H6.27997"
                stroke="white"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              /></svg
            >в карзину
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["product"],
  data() {
    return {
      likeP: [],
      cartP: [],
    };
  },
  mounted() {
    this.likeP = JSON.parse(localStorage.getItem("like"));
  },
  methods: {
    includes(array, id) {
      if (array) {
        return array.find((item) => item === id) ? true : false;
      } else {
        true;
      }
    },
  },
};
</script>
<style lang="scss">
.product-day {
  border-radius: 24px;
  background: #fff;
  padding: 30px 32px;
  height: 432px;
  &__btn {
    padding-top: 24px;
    button {
      background: #ff6418;
      border-radius: 4px;
      padding: 10px 30px;
      border: none;

      font-family: "Inter", sans-serif;
      font-size: 12px;
      font-weight: 300;
      line-height: 15px;
      letter-spacing: 0em;
      text-align: left;
      color: #fff;
      svg {
        color: #fff;
        margin-right: 13px;
      }
    }
  }
  &__name {
    span {
      font-family: "Inter", sans-serif;
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 18px;

      color: #020105;
      @media (max-width: 1370px) {
        font-size: 12px;
        line-height: 13px;
        padding-right: 0;
      }
    }
  }
  &__reviews {
    padding-top: 16px;
    p {
      font-family: "Inter", sans-serif;
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 18px;
      /* identical to box height */

      /* Grey */

      color: #727474;
    }
  }
  &__last-price {
    padding-top: 4px;
    span {
      font-family: "TT Firs Neue";
      font-style: normal;
      //   font-weight: 400;
      font-size: 14px;
      line-height: 18px;
      /* identical to box height */

      text-decoration-line: line-through;
      text-transform: uppercase;

      color: #949498;
    }
  }
  &__price {
    padding-top: 24px;
    h5 {
      font-family: "TT Firs Neue";
      font-size: 18px;
      font-weight: 500;
      line-height: 23px;
      letter-spacing: 0em;
      text-align: left;
      margin-bottom: 0 !important;
    }
    span {
      font-family: "TT Firs Neue";
      margin-left: 4px;
      font-size: 10px;
      font-weight: 400;
      line-height: 13px;
      letter-spacing: 0em;
      text-align: left;
    }
  }
  &__info {
    width: 50%;
  }
  &__aksiya {
    background: #f4f5f5;
    width: 144px;
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
  }
  &__aksiya-text {
    border-radius: 8px;
    padding: 10px 14px;
    font-family: "Inter", sans-serif;
    font-size: 16px;
    font-weight: 400;
    line-height: 19px;
    letter-spacing: 0em;
    text-align: left;

    @media (max-width: 1370px) {
      font-size: 14px;
      line-height: 17px;
      padding-right: 0;
    }
  }
  &__body {
    padding-top: 34px;
  }
  &__img {
    width: 50%;
    height: 246px;
    cursor: pointer;
    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }
  &__title {
    h2 {
      font-family: "TT Firs Neue";
      font-size: 24px;
      font-weight: 400;
      line-height: 31px;
      letter-spacing: 0em;
      text-align: left;
    }
    .disabledLike {
      background: #ff6418 !important;
      svg {
        path {
          stroke: #fff;
        }
      }
    }
    span {
      width: 30px;
      height: 30px;
      display: flex;
      justify-content: center;
      align-items: center;
      background: #f4f5f5;
      border-radius: 50%;
      cursor: pointer;
      svg {
        width: 12.67px;
      }
    }
  }
  &__aksiya-number {
    clip-path: polygon(37% 0, 100% 1%, 100% 100%, 0% 100%);
    height: 100%;
    background: linear-gradient(
      106.92deg,
      #ff7e00 1.58%,
      rgba(255, 126, 0, 0) 266.03%
    );
    border-top-right-radius: 8px;
    border-bottom-right-radius: 8px;
    padding-top: 10px;
    padding-bottom: 10px;
    padding-left: 18px;
    padding-right: 12px;

    font-family: "Inter", sans-serif;
    color: #ffffff;

    font-size: 14px;
    font-weight: 700;
    line-height: 17px;
    letter-spacing: 0em;
    text-align: left;

    @media (max-width: 1370px) {
      font-size: 12px;
      line-height: 16px;
    }
  }
}
@media (max-width: 1440px) {
  .product-day {
    height: 342px;
    padding: 16px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    &__btn {
      padding-top: 14px;
      button {
        white-space: nowrap;
        padding: 10px 28px;
      }
    }
    &__info {
      width: 66%;
      padding-left: 10px;
    }
    &__aksiya-text {
      font-size: 16px;
      line-height: 19px;
      padding-right: 0;
    }
    &__body {
      padding-top: 0;
    }
    &__img {
      width: 44%;
    }
    &__title {
      h2 {
        font-weight: 500;
        font-size: 20px;
        line-height: 26px;
      }
    }
    &__aksiya-number {
      font-size: 14px;
      line-height: 17px;
    }
  }
}
</style>
