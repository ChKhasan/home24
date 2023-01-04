<template lang="html">
  <modal :name="modal ?? 'dhds'" width="590px" height="auto">
    <div>
      <div class="send-order-modal">
        <div class="send-order-modal__m-header">
          <h1 class="m-header-title">Заказ принят</h1>
          <span @click="hide">
            <svg
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
          </span>
        </div>
        <div class="send-order-modal__m-body">
          <svg
            width="80"
            height="80"
            viewBox="0 0 80 80"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="40" cy="40" r="40" fill="#D0F4E4" />
            <path
              d="M38.147 46.5858C37.366 47.3668 36.0996 47.3668 35.3186 46.5858L30.0828 41.35C29.5581 40.8253 29.5581 39.9747 30.0828 39.45C30.6075 38.9253 31.4581 38.9253 31.9828 39.45L35.3186 42.7858C36.0996 43.5668 37.366 43.5668 38.147 42.7858L48.0161 32.9167C48.5408 32.392 49.3915 32.392 49.9161 32.9167C50.4408 33.4413 50.4408 34.292 49.9161 34.8167L38.147 46.5858Z"
              fill="#009A10"
            />
          </svg>
          <h5>Заказ №32839 оформлен. Мы свяжемся с вами в ближайшее время</h5>
          <div class="send-order-modal__m-btn" v-if="auth">
            <div class="proceed-btn" >Продолжить покупку</div>
            <div class="show-btn" @click="$router.push('/profile/orders')">
              Перейти к просмотру
            </div>
          </div>
          <div class="send-order-modal__m-btn auth_grid" v-else>
            <div class="proceed-btn" @click="$router.push('/')">Продолжить покупку</div>
          </div>
        </div>
      </div>
    </div>
  </modal>
</template>
<script>
export default {
  props: ["modal", "hide","auth"],
  methods: {
    hideModal() {
      this.$router.push("/");
    },
  },
};
</script>
<style lang="scss">
.send-order-modal {
  &__m-header {
    padding: 6px 6px 6px 40px;
    display: flex;
    justify-content: space-between;
    background: #f7f7f7;
    align-items: center;
    span {
      cursor: pointer;
    }
    h1 {
      font-family: "TT Firs Neue" !important;
      font-style: normal !important;
      font-weight: 500 !important;
      font-size: 24px !important;
      line-height: 32px !important;
      color: #020105 !important;
      margin-bottom: 0 !important;
    }
  }
  &__m-body {
    padding: 40px;
    display: grid;
    grid-template-columns: 1fr;
    justify-items: center;
    grid-gap: 24px;
    h5 {
      font-family: "Inter";
      font-style: normal;
      font-weight: 500;
      font-size: 18px;
      line-height: 24px;
      text-align: center;
    }
  }
  &__m-btn {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 24px;
    div {
      padding-top: 16px;
      border-radius: 6px;
      padding-top: 16px;
      padding-bottom: 16px;
      font-family: "Inter";
      font-style: normal;
      font-weight: 500;
      font-size: 16px;
      line-height: 20px;
      width: 100%;
      text-align: center;
      cursor: pointer;
      transition: 0.4s;
    }
    .proceed-btn {
      color: #000000;
      background: #f9f9f9;
      &:hover {
        background: rgba(0, 0, 0, 0.1);
      }
    }
    .show-btn {
      background: #ff6418;
      color: #fff;
      &:hover {
        background: rgba(255, 100, 24, 0.6);
      }
    }
  }
  .auth_grid {
    grid-template-columns: 1fr;
  }
}
</style>
