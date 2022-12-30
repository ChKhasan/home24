<template lang="html">
  <div class="selected_products">
    <div
      class="selected_products__head d-flex justify-content-between"
      @click="dorpForm = !dorpForm"
    >
      <h2>Товары в заказе</h2>
      <svg
        v-if="dorpForm"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M5 15.5L12 8.5L19 15.5"
          stroke="#200E32"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
      <svg
        v-else
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M19 8.5L12 15.5L5 8.5"
          stroke="#200E32"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </div>
    <div v-if="dorpForm">
    <div class="s-card" v-for="product in products">
      <div class="s-card__img">
        <img src="../../assets/images/image 34.png" alt="" />
      </div>
      <div class="s-card__body">
        <div class="title">
          <h5>
            {{product.product.name}}
          </h5>
        </div>
        <div class="count">
          <p>Количество:</p>
          <span>{{product.quantity}}</span>
        </div>
      </div>
    </div>
    <!-- <div class="s-card">
      <div class="s-card__img">
        <img src="../../assets/images/image 34.png" alt="" />
      </div>
      <div class="s-card__body">
        <div class="title">
          <h5>
            ОФИСНОЕ КРЕСЛО 6206A-2 ОФИСНОЕ КРЕСЛО 6206A-2 ОФИСНОЕ КРЕСЛО 6206A-2
          </h5>
        </div>
        <div class="count">
          <p>Количество:</p>
          <span>1</span>
        </div>
      </div>
    </div>
    <div class="s-card">
      <div class="s-card__img">
        <img src="../../assets/images/image 34.png" alt="" />
      </div>
      <div class="s-card__body">
        <div class="title">
          <h5>
            ОФИСНОЕ КРЕСЛО 6206A-2 ОФИСНОЕ КРЕСЛО 6206A-2 ОФИСНОЕ КРЕСЛО 6206A-2
          </h5>
        </div>
        <div class="count">
          <p>Количество:</p>
          <span>1</span>
        </div>
      </div>
    </div> -->
    </div>
  </div>
</template>
<script>
export default {
  props: ["products"],
  data() {
    return {
      dorpForm: true
    }
  }
};
</script>
<style lang="scss">
.selected_products {
  margin-top: 24px;
  background: #ffffff;
  border: 1px solid #ebebeb;
  border-radius: 8px;
  padding: 24px;
  &__head {
    h2 {
      font-family: 'TT Firs Neue';
font-style: normal;
font-weight: 500;
font-size: 24px;
line-height: 32px;
/* identical to box height, or 133% */


/* Black */

color: #020105;
    }
  }
  .s-card {
    margin-top: 24px;
    display: flex;
    &__img {
      border: 1px solid #f4f5f5;
      border-radius: 8px;
      width: 20%;
      height: 82px;
      img {
        width: 100%;
        object-fit: contain;
      }
    }
    &__body {
      width: 80%;
      padding-left: 12px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      .title {
        h5 {
          font-family: "Inter";
          font-style: normal;
          font-weight: 400;
          font-size: 14px;
          line-height: 20px;
          /* or 143% */

          /* Black */

          color: #020105;
        }
      }
      .count {
        display: flex;
        p {
          font-family: "Inter";
          font-style: normal;
          font-weight: 400;
          font-size: 14px;
          line-height: 20px;
          color: #727474;
        }
        span {
          margin-left: 41px;
        }
      }
    }
  }
}
@media (max-width: 1440px) {
  .selected_products {
    &__head {
      h2 {
        font-size: 20px;
      }
    }
    .s-card {
      &__body {
        .title {
          h5 {

            font-size: 12px;
  line-height: 16px;
          }
        }
        .count {
          p {
            font-size: 12px;
line-height: 16px;
          }
          span {
            font-size: 12px;
line-height: 16px;
          }
        }
      }
      &__img {
        width: 67px;
      height: 67px;
      }
    }
  }
}
</style>
