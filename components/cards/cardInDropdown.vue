<template lang="html">
  <div class="dropdown-card">
    <div class="dropdown-card__img">
      <img :src="product.product.images[0].image" alt="" />
    </div>
    <div class="dropdown-card__body">
      <div class="d-card-header">
        <h6>
          {{ product.product.product.name }}
        </h6>
        <span @click="show('order-comment-modal')">ОСТАВИТЬ ОТЗЫВ</span>
      </div>
      <div class="d-card-footer">
        <p>{{ product.qty }} x {{ product.product.price }} сум</p>
        <span>{{ product.qty * product.product.price }} сум</span>
      </div>
    </div>
    <modal name="order-comment-modal" width="590px" height="auto">
      <div>
        <div class="send-review-modal">
          <div class="send-review-modal__m-header">
            <h1 class="m-header-title">Новый отзыв</h1>
            <span @click="hide('order-comment-modal')">
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
          <div class="send-review-modal__m-body">
            <div class="send-review-modal__m-rate">
              <p>Ваша оценка:</p>
              <el-rate v-model="commentBox.rating"></el-rate>
            </div>
            <div class="send-review-modal__m-comment">
              <p>Отзыв</p>
              <textarea
                id="w3review"
                name="w3review"
                rows="4"
                cols="50"
                v-model="commentBox.body"
                placeholder="Опишите общее впечателение: срок использования, критерии при выборе"
              />
            </div>

            <div class="send-review-modal__m-btn">
              <div class="show-btn" @click="sendComment">
                Оставить отзыв
              </div>
            </div>
          </div>
        </div>
      </div>
    </modal>
    <modal name="order_comment-accepted-modal" width="590px" height="auto">
      <div>
        <div class="send-review-modal">
          <div class="send-review-modal__m-header">
            <h1 class="m-header-title">Отзыв принят</h1>
            <span @click="hide('order_comment-accepted-modal')">
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
          <div class="send-review-modal__m-body">
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
            <h5>Заказ оформлен. Мы свяжемся с вами в ближайшее время</h5>
            <div class="send-review-modal__m-btn">
              <div
                class="show-btn"
                @click="hide('order_comment-accepted-modal')"
              >
                Хорошо
              </div>
            </div>
          </div>
        </div>
      </div>
    </modal>
  </div>
</template>
<script>
export default {
  data() {
    return {
      orderCommentRate: null,
      commentBox: {
        body: "",
        rating: 0,
      },

    }
  },
  props: ["product"],
  methods: {
    async sendComment() {
      const postComment = await this.$store.dispatch(
        "fetchProductComment/fetchSendComment",
        {
          comment: { ...this.commentBox, product: this.product.product.id },
          token: localStorage.getItem("Auth"),
        }
      );
      await this.$modal.hide("order-comment-modal");
      await this.$modal.show("order_comment-accepted-modal");
    },
    show(name) {
      this.$modal.show(name);
    },
    hide(name) {
      this.$modal.hide(name);
    },
  },
};
</script>
<style lang="scss">
.dropdown-card {
  padding-top: 16px;
  padding-bottom: 16px;
  border-bottom: 1px solid #f2f2f2;
  display: grid;
  grid-template-columns: 1fr 8fr;
  grid-gap: 24px;
  .send-review-modal {
    &__m-comment {
      width: 100%;
      display: flex;
      flex-direction: column;
      textarea {
        border: 1px solid #ebebeb;
        border-radius: 4px;
        padding: 16px;
        &:focus {
          outline: none;
        }
      }
      p {
        margin-bottom: 8px;
        font-family: "Inter";
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        line-height: 24px;
        color: #727474;
      }
    }
    &__m-rate {
      width: 100%;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      p {
        font-family: "Inter";
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        line-height: 24px;
        display: flex;
        align-items: center;
        color: #020105;
        margin-right: 18px;
      }
    }
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
      grid-template-columns: 1fr;
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
  }
  &__body {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .d-card-header {
      display: grid;
      grid-template-columns: 8fr 1fr;
      grid-gap: 24px;
      span {
        font-family: "Inter";
        font-style: normal;
        font-weight: 500;
        font-size: 12px;
        line-height: 20px;
        white-space: nowrap;
        color: #ff6418;
        cursor: pointer;
      }
      h6 {
        // width: 80%;
        font-family: "Inter";
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 20px;
        color: #020105;
      }
    }
    .d-card-footer {
      display: flex;
      justify-content: space-between;
      p,
      span {
        font-family: "Inter";
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 20px;
        color: #020105;
      }
    }
  }
  &__img {
    display: inline;
    border: 1px solid #f2f2fa;
    border-radius: 4px;
    display: flex;
    height: 81px;

    transform: matrix(-1, 0, 0, 1, 0, 0);
    img {
      height: 81px;
      width: 81px;
      object-fit: contain;
    }
  }
}
@media (max-width: 1440px) {
  .dropdown-card {
    &__body {
      .d-card-header {
        h6 {
          font-size: 12px;
line-height: 16px;
        }
        span {
          display: none;
        }
      } 
    }
  }
}
</style>
