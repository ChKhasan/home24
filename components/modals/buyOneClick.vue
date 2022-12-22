<template lang="html">
  <modal :name="modal ?? 'dhds'" width="590px" height="auto">
    <div>
      <div class="buy-one-click">
        <div class="buy-one-click__m-header">
          <h1 class="m-header-title">Купить в один клик</h1>
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
        <div class="buy-one-click__m-body">
          <div class="buy-one-click__card">
            <div>
              <div class="b-card-img">
                <img src="../../assets/images/image 24.png" alt="" />
              </div>
            </div>
            <div class="b-card-body">
              <p>
                {{ product.product?.name }}
              </p>
              <div class="c-card-footer">
                <h6>{{ product.price }} сум</h6>
                <div class="sc-count">
                  <div class="sc-count-btn">
                    <span
                      @click="
                        product.quantity > 1
                          ? product.quantity--
                          : product.quantity
                      "
                      ><svg
                        width="17"
                        height="2"
                        viewBox="0 0 17 1"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M0 0.5C0 0.223858 0.152223 0 0.34 0H16.66C16.8478 0 17 0.223858 17 0.5C17 0.776142 16.8478 1 16.66 1H0.34C0.152223 1 0 0.776142 0 0.5Z"
                          fill="#9A999B"
                        />
                      </svg>
                    </span>
                    <p>{{ product?.quantity }}</p>
                    <span @click="product.quantity++"
                      ><svg
                        width="17"
                        height="17"
                        viewBox="0 0 17 17"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <line
                          x1="0.5"
                          y1="8.5"
                          x2="16.5"
                          y2="8.5"
                          stroke="black"
                          stroke-linecap="round"
                        />
                        <line
                          x1="8.5"
                          y1="0.5"
                          x2="8.5"
                          y2="16.5"
                          stroke="black"
                          stroke-linecap="round"
                        />
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <form class="buy-one-click__form drop-form">
            <label for="">Ф.И.О<span>*</span></label>
            <input
              type="text"
              @input="userName"
              v-model="user_name"
              placeholder="Ф.И.О"
            />
            <label for="">Телефон<span>*</span></label>
            <input
              type="text"
              v-model="order.nbm"
              placeholder="+998 (--)--- -- --"
            />
          </form>
          <div class="buy-one-click__m-btn">
            <div class="show-btn" @click="sendAplication">Оформить</div>
          </div>
        </div>
      </div>
    </div>
  </modal>
</template>
<script>
export default {
  props: ["modal", "hide", "product"],
  data() {
   return {
    user_name: "",
    errors: {
      userNameError: false
    },
      order: {
        nbm: "",
        patronymic: "",
        last_name: "",
        name: ""
      }
    }
  },
  methods: {
    hideModal() {
      this.$router.push("/");
    },
    async sendAplication() {
      const hitProducts = await this.$store.dispatch(
      "fetchOrder/fetchSendAplication",{...this.order,count: this.product.quantity,product: this.product.id}
    );
    console.log(hitProducts);
    this.hide()
    },
    userName() {
      const array = this.user_name.split(" ");
      (this.order.name = array[0]),
        (this.order.last_name = array[1]),
        (this.order.patronymic = array[2]);
      if (array.length >= 3) {
        this.errors.userNameError = false;
      }
    },
  },
};
</script>
<style lang="scss">
.buy-one-click {
  &__form {
    display: flex;
    flex-direction: column;
    padding-bottom: 24px;
    width: 100%;
    border-top: 1px solid #ebebeb;
    input,
    textarea {
      border: 1px solid #ebebeb;
      border-radius: 4px;
      padding: 16px;
      &:focus {
        box-shadow: none;
        outline: none;
      }
    }
    label {
      font-family: "Inter";
      font-style: normal;
      font-weight: 500;
      font-size: 16px;
      line-height: 24px;
      color: #020105;
      padding-top: 24px;
      span {
        color: #727474;
      }
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
  &__card {
    padding: 24px;
    background: #ffffff;
    border-radius: 8px;
    display: flex;
    width: 100%;
    .b-card-img {
      width: 82px;
      height: 82px;
      border: 1px solid #f4f5f5;
      border-radius: 8px;
      img {
        width: 100%;
        height: 100%;
        object-fit: contain;
      }
    }
    .b-card-body {
      padding-left: 12px;
      width: 100%;
      p {
        font-family: "Inter";
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 20px;
        color: #020105;
      }
      .c-card-footer {
        display: flex;
        justify-content: space-between;
        align-items: end;
        margin-top: 6px;
        h6 {
          margin-bottom: 0;
          font-family: "Inter";
          font-style: normal;
          font-weight: 400;
          font-size: 14px;
          line-height: 20px;
          color: #020105;
        }
        .sc-count {
          display: flex;
          align-items: center;
          .sc-count-btn {
            border: 1px solid #f2f2fa;
            border-radius: 4px;
            padding: 6px 16px;
            display: flex;
            svg {
              cursor: pointer;
              height: 100%;
            }
            p {
              padding: 0 27px;
            }
          }
        }
      }
    }
  }
}
</style>
