<template lang="html">
  <div class="container send-order">
    <div class="row">
      <div class="col-12">
        <BreadCrumb :links="links" last="Избранное" />
        <div class="favorites__f-header">
          <TitleBasket title="Оформление заказа" />
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-12 send-order__body">
        <div>
          <div class="send-order__register-blog">
            <div class="send-order__width">
              <p>Способ получения</p>
              <div class="pickup">
                <div class="d-flex">
                  <div class="pickup__checkbox" @click="orderType(true)">
                    <span v-if="pickupCheck"></span>
                  </div>
                  <h1>Самовывоз Home24.uz</h1>
                </div>
                <div class="pickup__text">
                  <p>г.Ташкент, р.Яшнабадский, ул.Паркент,180</p>
                </div>
                <div class="pickup__show-card" @click="showMap = !showMap">
                  <div>Показать на карте</div>
                </div>
              </div>
              <form
                class="send-order__form"
                :class="errorClassObject"
                v-if="pickupCheck"
              >
                <label class="label_username">Ф.И.О<span>*</span></label>
                <input
                  type="text"
                  class="input_username"
                  v-model="user_name"
                  @change="userName"
                  required="true"
                  placeholder="Ф.И.О"
                />
                <p v-if="errors.userNameError" class="error_place">
                  This field may not be blank.
                </p>
                <label for="" class="label_number">Телефон<span>*</span></label>
                <input
                  type="text"
                  class="input_number"
                  v-model="orderContainer.tel"
                  placeholder="+998 (--)--- -- --"
                />
              </form>
              <div class="pickup">
                <div class="d-flex">
                  <div class="pickup__checkbox" @click="orderType(false)">
                    <span v-if="!pickupCheck"></span>
                  </div>
                  <h1>Курьером до двери</h1>
                </div>
                <div class="pickup__text border-b-none">
                  <p>Доставим 8 ноября, 30 000 сум</p>
                </div>
              </div>

              <form
                class="send-order__form"
                v-if="!pickupCheck"
                :class="errorClassObject"
              >
                <label class="label_username">Ф.И.О<span>*</span></label>
                <input
                  type="text"
                  class="input_username"
                  v-model="user_name"
                  @change="userName"
                  required="true"
                  placeholder="Ф.И.О"
                />
                <p v-if="errors.userNameError" class="error_place">
                  This field may not be blank.
                </p>
                <label for="">Телефон<span>*</span></label>
                <input
                  type="text"
                  v-model="orderContainer.tel"
                  placeholder="+998 (--)--- -- --"
                />
                <label for="">Область </label>
                <el-select v-model="orderContainer.state">
                  <el-option
                    v-for="item in regions"
                    :key="item?.id"
                    :label="item?.name"
                    :value="item?.id"
                  >
                  </el-option>
                </el-select>
                <label for="">Город / Район<span>*</span></label>

                <el-select v-model="orderContainer.city">
                  <el-option
                    v-for="item in city"
                    :key="item?.id"
                    :label="item?.name"
                    :value="item?.id"
                  >
                  </el-option>
                </el-select>

                <label for="">Адрес <span>*</span></label>
                <input
                  type="text"
                  v-model="orderContainer.adres"
                  placeholder="Адрес "
                />
              </form>
            </div>
            <div
              class="send-order__map d-flex flex-column justify-content-center"
            >
              <iframe
                v-if="showMap"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2997.4303916765066!2d69.2378847149243!3d41.29949980940271!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8bb7d1f219bd%3A0x3cce192383d2f08b!2sOybek%20metro!5e0!3m2!1sru!2s!4v1669892296650!5m2!1sru!2s"
                width="496"
                height="309"
                style="border: 0;"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
          <div class="send-order__info-form">
            <div
              class="send-order__drop-head d-flex justify-content-between"
              @click="dorpForm = !dorpForm"
            >
              <h2>Дополнительная информация</h2>
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
            <div
              class="send-order__drop-body"
              :class="{ orderDropActive: dorpForm }"
            >
              <form class="send-order__form drop-form">
                <label for="">Индекс почты</label>
                <input
                  type="text"
                  v-model="orderContainer.post_ind"
                  placeholder="Индекс почты"
                />
                <label for="">E-mail</label>
                <input
                  type="text"
                  v-model="orderContainer.email"
                  placeholder="E-mail:"
                />
                <h2>Оставьте комментарии</h2>
                <p>Комментарий</p>
                <textarea
                  v-model="orderContainer.comment"
                  id="w3review"
                  name="w3review"
                  rows="4"
                  cols="50"
                  placeholder="Комментарий"
                />
              </form>
            </div>
          </div>
          <div class="payment-types">
            <p class="pay_title">Способ оплаты</p>
            <div class="payment-types__container">
              <div
                class="payment-types__box"
                :class="{ paymet_active: payment.type == payments.id }"
                v-for="payments in paymentTypes"
              >
                <div class="payment-types__p-header">
                  <div
                    class="pickup__checkbox"
                    @click="payment.type = payments.id"
                  >
                    <span v-if="payment.type == payments.id"></span>
                  </div>
                  <p class="payment-types__title">{{ payments?.name }}</p>
                </div>
                <div class="payment-types__body">
                  <div class="payment-types__card-control">
                    <div
                      class="payment-types__card"
                      v-for="types in payments.children"
                      @click="checkPayment(payments, types)"
                      :class="{
                        payActiveCard: orderContainer.payment == types.id,
                      }"
                    >
                      <img src="../assets/images/image 268.png" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div class="send-order__send-blog">
            <div class="b-title">
              <h1>Ваш заказ</h1>
              <nuxt-link to="/">Перейти в корзину</nuxt-link>
            </div>
            <div class="order-info-text">
              <p>Товары, 2 шт</p>
              <p>{{ orderContainer.price }} сум</p>
            </div>
            <div class="order-info-text">
              <span>Доставка:</span>
              <span>бесплатно</span>
            </div>
            <div class="order-info-text">
              <p>Итого</p>
              <p>{{ orderContainer.price }} сум</p>
            </div>
            <div class="send-order__promo-code">
              <div class="d-flex">
                <svg
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
                <p>Есть промокод?</p>
              </div>
              <input
                type="text"
                placeholder="Введите промокод"
                class="input-promo-code"
              />
            </div>
            <div @click="sendOrder" class="basket__order-btn">
              Оформит заказ
            </div>
          </div>
          <SelectedProducts :products="products" />
        </div>
      </div>
    </div>
    <SendOrderModal :modal="modal" :hide="hide" :auth="auth_modal"/>
  </div>
</template>
<script>
import SelectedProducts from "../components/basket/SelectedProducts.vue";
import TitleBasket from "../components/basket/titleBasket.vue";
import BreadCrumb from "../components/category/breadCrumb.vue";
import SendOrderModal from "../components/modals/sendOrderModal.vue";

export default {
  data() {
    return {
      pickupCheck: true,
      dorpForm: false,
      showMap: false,
      modal: "orderModal",
      user_name: "",
      city: [],
      regions: [],
      paymentImg: [
        {
          name: "Payme",
          img: "../assets/images/image 268.png",
        },
        {
          name: "Click",
          img: "../assets/images/image 270.png",
        },
        {
          name: "Apelsin",
          img: "../assets/images/image 269.png",
        },
        {
          name: "Картой",
          img: "../assets/images/image 271.png",
        },
        {
          name: "Наличными",
          img: "../assets/images/image 272.png",
        },
      ],
      products: [],
      links: [
        {
          name: "Главная",
          to: "/",
        },
        {
          name: "Корзина",
          to: "/basket",
        },
      ],
      errors: {
        userNameError: false,
        numberError: false
      },
      payment: {
        type: 1,
        activeCard: 1,
      },
      paymentTypes: [],
      auth_modal: null,
      orderContainer: {
        price: 0,
        payment: 1,
        first_name: "",
        last_name: "",
        patronymic: "",
        adres: "",
        state: null,
        promocode: "",
        email: "",
        post_ind: "",
        comment: "",
        shipping: "",
        products: [],
        tel: "",
        city: null,
      },
    };
  },
  computed: {
    errorClassObject() {
      return {
        formErrorClass: this.errors.userNameError,
        formNumberError: this.errors.numberError,
      };
    },
  },
  components: { BreadCrumb, TitleBasket, SendOrderModal, SelectedProducts },
  async created() {
    this.auth_modal = localStorage.getItem("Auth")

    this.orderContainer.shipping = this.pickupCheck
      ? "Самовывоз"
      : "Курьером до двери";
    this.products = JSON.parse(localStorage.getItem("selectedProducts"));
    this.orderContainer.products = this.products.map((item) => {
      return {
        id: item.id,
        count: item.quantity,
      };
    });
    this.orderContainer.price = JSON.parse(
      localStorage.getItem("selectedProducts")
    ).reduce((sum, item) => sum + item.price * item.quantity, 0);

    this.orderItems();
  },
  methods: {
    async orderItems() {
      const orderStates = await this.$store.dispatch("fetchOrder/fetchStates");
      const orderCIties = await this.$store.dispatch("fetchOrder/fetchCities");
      const paymentTypes = await this.$store.dispatch(
        "fetchOrder/fetchPaymentTypes"
      );
      this.paymentTypes = paymentTypes;

      this.city = orderCIties.results;
      this.regions = orderStates.results;
      this.orderContainer.city = orderCIties.results[0].id;
      this.orderContainer.state = orderStates.results[0].id;
    },
    orderType(type) {
      this.pickupCheck = type;
      this.orderContainer.shipping = type ? "Самовывоз" : "Курьером до двери";
    },
    userName() {
      const array = this.user_name.split(" ");
      (this.orderContainer.first_name = array[0]),
        (this.orderContainer.last_name = array[1]),
        (this.orderContainer.patronymic = array[2]);
      if (array.length >= 3) {
        this.errors.userNameError = false;
      }
    },
    async sendOrder() {
      if (localStorage.getItem("Auth")) {
        try {
          const userInfo = await this.$store.dispatch(
            "fetchOrder/fetchPlaceOrder",
            { order: this.orderContainer, token: localStorage.getItem("Auth") }
          );
          this.show("orderModal");
        } catch ({ response }) {
          console.log(Object.keys(response.data));
          if (
            Object.keys(response.data).includes("first_name") ||
            Object.keys(response.data).includes("last_name") ||
            Object.keys(response.data).includes("patronymic")
          ) {
            this.errors.userNameError = true;
          }
          if(Object.keys(response.data).includes("tel")) {
            this.errors.numberError = true;
            console.log("tel error");
          }
        }
      } else {
        try {
          const userInfo = await this.$store.dispatch(
            "fetchOrder/fetchPlaceOrderNoToken",
            { order: this.orderContainer }
          );
          this.show("orderModal");
        } catch ({ response }) {
          console.log(Object.keys(response.data));
          if (
            Object.keys(response.data).includes("first_name") ||
            Object.keys(response.data).includes("last_name") ||
            Object.keys(response.data).includes("patronymic")
          ) {
            this.errors.userNameError = true;
          }
        }
      }
    },
    checkPayment(payments, types) {
      this.orderContainer.payment = types.id;
      if (payments.children.find((item) => item.id == types.id)) {
        console.log();
      }
    },
    async show() {
      await this.$modal.show(this.modal);
    },
    hide() {
      this.$modal.hide(this.modal);
    },
  },
  mount() {
    this.show();
  },
  watch: {
    user_name(oldVal, newVal) {
      const array = newVal.split(" ");
      (this.orderContainer.first_name = array[0]),
        (this.orderContainer.last_name = array[1]),
        (this.orderContainer.patronymic = array[2]);
      if (array.length >= 3) {
        this.errors.userNameError = false;
      }
    },
  },
};
</script>
<style lang="scss">
.send-order {
  padding-top: 32px;
  .error_place {
    margin-top: 5px;
    color: red;
  }
  .formErrorClass {
    .label_username {
      color: red !important;
      span {
        color: red !important;
      }
    }
    .input_username {
      border: 1px solid red !important;
    }
   

  }
  .formNumberError {
    .label_number {
      color: red !important;
      span {
        color: red !important;
      }
    }
    .input_number {
      border: 1px solid red !important;
    }
  }
  .payment-types {
    margin-top: 32px;
    &__p-header {
      display: flex;
    }
    &__body {
      padding-left: 29px;
    }
    &__card-control {
      padding-top: 16px;
      display: flex;
    }
    &__card {
      width: 85px;
      padding: 8px;
      height: 60px;
      border: 1px solid #ebebeb;
      border-radius: 4px;
      margin-right: 10px;
      cursor: pointer;
    }
    .pay_title {
      font-family: "Inter";
      font-style: normal;
      font-weight: 500;
      font-size: 16px;
      line-height: 24px;
      color: #727474;
      margin-bottom: 12px;
    }
    &__sub_title {
      font-family: "Inter";
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 20px;
      /* identical to box height, or 143% */

      /* Grey */

      color: #727474;
    }
    &__title {
      font-family: "Inter";
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 24px;
      color: #020105;
    }

    &__container {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-gap: 24px;
    }
    .paymet_active {
      border: 1px solid #ff7e00 !important;
    }
    .payActiveCard {
      border: 1px solid #ff7e00 !important;
    }
    &__box {
      border: 1px solid #ebebeb;
      border-radius: 8px;
      padding: 19px;
      display: flex;
      align-items: flex-start;
      flex-direction: column;
      justify-content: space-between;
    }
  }
  &__form {
    display: flex;
    flex-direction: column;
    padding-bottom: 24px;
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
  &__width {
  }
  &__body {
    padding-top: 32px;
    display: grid;
    grid-template-columns: 2fr 1fr;
    grid-gap: 24px;
  }
  .pickup {
    margin-top: 12px;
    padding: 23px;
    background: #f8f8f8;
    &__show-card {
      padding-top: 16px;
      display: flex;
      justify-content: center;
      div {
        font-family: "Inter";
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        line-height: 20px;
        color: #ff6418;
        padding: 16px 53px;
        cursor: pointer;
        transition: 0.3s;
        border-radius: 6px;
        &:hover {
          background: rgba(255, 100, 24, 0.1);
        }
      }
    }
    &__text {
      padding-left: 33px;
      border-bottom: 1px solid #ebebeb;
      padding-bottom: 20px;

      p {
        font-family: "Inter";
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 20px;
        color: #727474;
        margin-top: 13px;
      }
    }
    .border-b-none {
      border-bottom: none !important;
    }
    h1 {
      font-family: "Inter";
      font-style: normal;
      font-weight: 500;
      font-size: 16px;
      line-height: 24px;
      color: #020105;
      margin-bottom: 0;
    }
    &__checkbox {
      margin-right: 11px;
      width: 18px;
      height: 18px;
      border: 1px solid #ff6418;
      background: #fff;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      span {
        display: block;
        width: 10px;
        height: 10px;
        background: #ff6418;
        border-radius: 50%;
      }
    }
  }
  &__register-blog {
    padding: 32px;
    border: 1px solid #ebebeb;
    border-radius: 8px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 24px;
    .el-input__inner {
      height: 58px;
    }
    .pickup {
      margin-top: 12px;
      padding: 23px;
      background: #f8f8f8;
      &__show-card {
        padding-top: 16px;
        display: flex;
        justify-content: center;
        div {
          font-family: "Inter";
          font-style: normal;
          font-weight: 500;
          font-size: 16px;
          line-height: 20px;
          color: #ff6418;
          padding: 16px 53px;
          cursor: pointer;
          transition: 0.3s;
          border-radius: 6px;
          &:hover {
            background: rgba(255, 100, 24, 0.1);
          }
        }
      }
      &__text {
        padding-left: 33px;
        border-bottom: 1px solid #ebebeb;
        padding-bottom: 20px;

        p {
          font-family: "Inter";
          font-style: normal;
          font-weight: 400;
          font-size: 14px;
          line-height: 20px;
          color: #727474;
          margin-top: 13px;
        }
      }
      .border-b-none {
        border-bottom: none !important;
      }
      h1 {
        font-family: "Inter";
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        line-height: 24px;
        color: #020105;
        margin-bottom: 0;
      }
      &__checkbox {
        margin-right: 11px;
        width: 18px;
        height: 18px;
        border: 1px solid #ff6418;
        background: #fff;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        span {
          display: block;
          width: 10px;
          height: 10px;
          background: #ff6418;
          border-radius: 50%;
        }
      }
    }
    p {
      font-family: "Inter";
      font-style: normal;
      font-weight: 500;
      font-size: 16px;
      line-height: 24px;
      color: #727474;
    }
  }
  &__info-form {
    border: 1px solid #ebebeb;
    border-radius: 8px;
    position: relative;
    overflow: hidden;
    z-index: 10;
    margin-top: 32px;
    .orderDropActive {
      opacity: 1;
      transform: translateY(0%);
      height: initial;
      z-index: 1;
      position: relative;
      background: #fff;
    }
    .drop-form {
      width: 50%;
      label:first-child {
        padding-top: 0 !important;
      }
      h2 {
        margin-top: 40px;
        margin-bottom: 24px;
      }
      p {
        font-family: "Inter";
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        line-height: 24px;
        color: #727474;
      }
    }
    h2 {
      font-family: "Inter";
      font-style: normal;
      font-weight: 600;
      font-size: 20px;
      line-height: 26px;
      color: #020105;
      margin-bottom: 0;
    }
  }
  &__drop-head {
    padding: 32px;
    z-index: 10;
    position: relative;
    background: #fff;
  }
  &__drop-body {
    padding: 0 32px;
    transition: 0.3s;
    opacity: 0;
    transform: translateY(-100%);
    // position: absolute;
    z-index: -1;
    height: 0;
  }
  &__send-blog {
    padding: 24px;
    background: #ffffff;
    border: 1px solid #ebebeb;
    border-radius: 8px;
    .b-title {
      display: flex;
      justify-content: space-between;
    }
    a {
      font-family: "Inter";
      font-style: normal;
      font-weight: 500;
      font-size: 16px;
      line-height: 24px;
      color: #ff7e00;
    }
    h1 {
      font-family: "Inter";
      font-style: normal;
      font-weight: 600;
      font-size: 22px;
      line-height: 28px;
      color: #000000;
      margin-bottom: 30px;
    }
    .order-info-text {
      display: flex;
      justify-content: space-between;
      span {
        font-family: "Inter";
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 24px;
        color: #727474;
        margin-top: 17.5px;
        margin-bottom: 41px;
      }
      p {
        font-family: "Inter";
        font-style: normal;
        font-weight: 500;
        font-size: 18px;
        line-height: 24px;
        color: #020105;
      }
    }
  }
  &__promo-code {
    margin-top: 16px;
    input {
      margin-top: 16px;
      border: 1px solid #ebebeb;
      border-radius: 4px;
      padding: 16px;
      width: 100%;
      &:focus {
        box-shadow: none;
        outline: none;
      }
    }
    p {
      margin-left: 9px;
      font-family: "Inter";
      font-style: normal;
      font-weight: 400;
      font-size: 18px;
      line-height: 26px;
      color: #020105;
    }
    padding: 16px 24px;
    background: #f9f9f9;
    border-radius: 4px;
  }
}
</style>
