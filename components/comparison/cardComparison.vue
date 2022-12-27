<template lang="html">
  <div class="comparison-card">
    <span class="comparison-card__delete">
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        @click="deleteProductFromComparison(product.id)"
      >
        <path
          d="M3.21995 4.28097C3.15022 4.21124 3.0949 4.12846 3.05716 4.03735C3.01942 3.94624 3 3.84859 3 3.74997C3 3.65135 3.01942 3.5537 3.05716 3.4626C3.0949 3.37149 3.15022 3.2887 3.21995 3.21897C3.28968 3.14924 3.37246 3.09392 3.46357 3.05619C3.55468 3.01845 3.65233 2.99902 3.75095 2.99902C3.84956 2.99902 3.94721 3.01845 4.03832 3.05619C4.12943 3.09392 4.21222 3.14924 4.28195 3.21897L12.0009 10.9395L19.7199 3.21897C19.7897 3.14924 19.8725 3.09392 19.9636 3.05619C20.0547 3.01845 20.1523 2.99902 20.2509 2.99902C20.3496 2.99902 20.4472 3.01845 20.5383 3.05619C20.6294 3.09392 20.7122 3.14924 20.7819 3.21897C20.8517 3.2887 20.907 3.37149 20.9447 3.4626C20.9825 3.5537 21.0019 3.65135 21.0019 3.74997C21.0019 3.84859 20.9825 3.94624 20.9447 4.03735C20.907 4.12846 20.8517 4.21124 20.7819 4.28097L13.0614 12L20.7819 19.719C20.8517 19.7887 20.907 19.8715 20.9447 19.9626C20.9825 20.0537 21.0019 20.1514 21.0019 20.25C21.0019 20.3486 20.9825 20.4462 20.9447 20.5373C20.907 20.6285 20.8517 20.7112 20.7819 20.781C20.7122 20.8507 20.6294 20.906 20.5383 20.9438C20.4472 20.9815 20.3496 21.0009 20.2509 21.0009C20.1523 21.0009 20.0547 20.9815 19.9636 20.9438C19.8725 20.906 19.7897 20.8507 19.7199 20.781L12.0009 13.0605L4.28195 20.781C4.21222 20.8507 4.12943 20.906 4.03832 20.9438C3.94721 20.9815 3.84956 21.0009 3.75095 21.0009C3.65233 21.0009 3.55468 20.9815 3.46357 20.9438C3.37246 20.906 3.28968 20.8507 3.21995 20.781C3.15022 20.7112 3.0949 20.6285 3.05716 20.5373C3.01942 20.4462 3 20.3486 3 20.25C3 20.1514 3.01942 20.0537 3.05716 19.9626C3.0949 19.8715 3.15022 19.7887 3.21995 19.719L10.9404 12L3.21995 4.28097Z"
          fill="#020105"
        /></svg
    ></span>
    <div class="comparison-card__head">
      <div class="comparison-card__img">
        <img src="../../assets/images/image 107.png" alt="" />
      </div>
      <div class="comparison-card__title">
        <h6>Холодильник Samsung RB 29 FERNDSA/WT</h6>
        <h5>7 300 000 сум</h5>
      </div>
      <div class="comparison-card__reviews d-flex justify-content-between">
        <div>
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
        <div class="d-flex">
          <span
            class="comparison-card__heart"
            @click="$store.commit('addToStore', { id: product.id, name: 'like' })"
        :class="{ disabledClass: includes($store.state.like, product.id) }"
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
          <span
            class="comparison-card__buy"
            @click="
            $store.commit('addToStore', { id: product.id, name: 'cart' })
          "
          :class="{ disabledClass: includes($store.state.cart, product.id) }"
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
                d="M11.0517 13.2136C10.7704 13.2136 10.5417 13.4422 10.5417 13.7236C10.5417 14.0049 10.7704 14.2329 11.0517 14.2329C11.333 14.2329 11.561 14.0049 11.561 13.7236C11.561 13.4422 11.333 13.2136 11.0517 13.2136Z"
                stroke="#FF6418"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M3.5503 13.2136C3.26897 13.2136 3.0403 13.4422 3.0403 13.7236C3.0403 14.0049 3.26897 14.2329 3.5503 14.2329C3.83164 14.2329 4.0603 14.0049 4.0603 13.7236C4.0603 13.4422 3.83164 13.2136 3.5503 13.2136Z"
                stroke="#FF6418"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M14.1667 2.16669L12.7801 2.40669L12.1381 10.0554C12.0861 10.6787 11.5654 11.1574 10.9401 11.1574H3.66541C3.06808 11.1574 2.56141 10.7187 2.47541 10.1267L1.84275 5.75469C1.76475 5.21535 2.18275 4.73269 2.72741 4.73269H12.5574"
                stroke="#FF6418"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M6.58301 7.19668H4.73434"
                stroke="#FF6418"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </span>
        </div>
      </div>
    </div>
    <div class="comparison-card__body">
      <div class="body-info">
        <span>Фронтальная камера</span>
        <p>20MP</p>
      </div>
      <div class="body-info">
        <span>Фронтальная камера</span>
        <p>20MP</p>
      </div>
      <div class="body-info">
        <span>Фронтальная камера</span>
        <p>20MP</p>
      </div>
      <div class="body-info">
        <span>Фронтальная камера</span>
        <p>20MP</p>
      </div>
      <div class="body-info">
        <span>Фронтальная камера</span>
        <p>20MP</p>
      </div>
      <div class="body-info">
        <span>Фронтальная камера</span>
        <p>20MP</p>
      </div>
      <div class="body-info">
        <span>Фронтальная камера</span>
        <p>20MP</p>
      </div>
      <div class="body-info">
        <span>Фронтальная камера</span>
        <p>20MP</p>
      </div>
      <div class="body-info">
        <span>Фронтальная камера</span>
        <p>20MP</p>
      </div>
      <div class="body-info">
        <span>Фронтальная камера</span>
        <p>20MP</p>
      </div>
      <div class="body-info">
        <span>Фронтальная камера</span>
        <p>20MP</p>
      </div>
      <div class="body-info">
        <span>Фронтальная камера</span>
        <p>20MP</p>
      </div>
      <div class="body-info">
        <span>Фронтальная камера</span>
        <p>20MP</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["product", "deleteProductFromComparison"],
  data() {
    return {
     
    };
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
.comparison-card {
  border: 1px solid #ebebeb;
  border-right: none !important;
  position: relative;
  &:last-child {
    border-right: 1px solid #ebebeb !important;
  }
  &__delete {
    position: absolute;
    top: 16px;
    right: 16px;
    cursor: pointer;
  }
  &__head {
    padding: 32px 18px 11px 18px;
  }
  &__img {
    display: flex;
    justify-content: center;
    img {
      width: 130px;
      height: 130px;
    }
  }
  &__title {
    padding-top: 16px;
    h6 {
      font-family: "Inter";
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 24px;
      text-align: center;
      color: #020105;
    }
    h5 {
      font-family: "Inter";
      font-style: normal;
      font-weight: 500;
      font-size: 18px;
      line-height: 24px;
      text-align: center;
      color: #020105;
      margin-bottom: 0;
    }
  }
  &__reviews {
    padding-top: 26px;
  }
  .disabledClass {
      background: white;
      svg {
        path {
          stroke: #ff6418;
        }
      }
    }
  .disabledLike {
    pointer-events: none !important;
    background: #ff6418 !important;
    svg {
      path {
        stroke: #fff;
      }
    }
  }
  &__heart {
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 32px;
    height: 32px;
    background: #f8f8fa;
    border-radius: 50%;
    background: #ff6418;
    border: 1px solid #ff6418;
    

    svg {
        path {
          stroke: #fff;
        }
      }
  }
  &__buy {
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 32px;
    height: 32px;
    border: 1px solid #ff6418;
    border-radius: 50%;
    transition: 0.3s;
    margin-left: 16px;
    background: #ff6418;
    svg {
        path {
          stroke: #fff;
        }
      }
    svg {
      transition: 0.3s;
    }
    // &:hover {
    //   background: #ff6418;
    //   svg {
    //     path {
    //       stroke: #fff;
    //     }
    //   }
    // }
  }
  &__body {
    border-top: 1px solid #ebebeb;
    padding: 0px 16px;
    .body-info {
      padding: 16px 0;
      border-bottom: 1px solid #ebebeb;
      span {
        font-family: "TT Firs Neue";
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 20px;
        display: flex;
        align-items: center;
        color: #727474;
      }
      p {
        margin-top: 4px;
        font-family: "Inter";
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 20px;
        display: flex;
        align-items: center;
        color: #020105;
      }
    }
  }
}
</style>
