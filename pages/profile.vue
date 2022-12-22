<template lang="html">
  <div>
    <nuxt-child :userInfo="userInfo" :fetchUserInfo="fetchUserInfo" :myOrders="my_orders"/>
    <modal name="want-password-modal" width="590px" height="auto">
      <div>
        <div class="auth-user-modal">
          <div class="auth-user-modal__m-header">
            <h1 class="m-header-title">Вы хотите придумать новый пароль ?</h1>
            <span @click="hide('create-profile-modal')">
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
          <div class="auth-user-modal__m-body" :class="errorClassObject">
            <div class="auth-user-modal__m-btn two-btn-control">
              <div class="show-btn" @click="hide('want-password-modal')">
                Нет
              </div>
              <div class="show-btn" @click="wantChangePass">
                ДА
              </div>
            </div>
          </div>
        </div>
      </div>
    </modal>

    <modal name="change-password-modal" width="590px" height="auto">
      <div>
        <div class="auth-user-modal">
          <div class="auth-user-modal__m-header">
            <h1 class="m-header-title">Изменить пароль</h1>
            <span @click="hide('change-password-modal')">
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
          <div class="auth-user-modal__m-body" :class="errorClassObject">
            <label class="sms__label">Пароль</label>
            <div class="password-input">
              <input
                :type="passwordHide.first"
                placeholder="Пароль"
                v-model="registrModal.password"
              />
              <span
                @click="passwordHide.first = 'password'"
                v-if="passwordHide.first == 'text'"
                ><svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.76094 14.3677C9.18594 13.7937 8.83594 13.0137 8.83594 12.1387C8.83594 10.3857 10.2479 8.97266 11.9999 8.97266C12.8669 8.97266 13.6649 9.32366 14.2299 9.89766"
                    stroke="#9A999B"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M15.1054 12.6992C14.8734 13.9892 13.8574 15.0072 12.5684 15.2412"
                    stroke="#9A999B"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M6.655 17.472C5.068 16.226 3.724 14.406 2.75 12.137C3.734 9.85798 5.087 8.02798 6.684 6.77198C8.271 5.51598 10.102 4.83398 12 4.83398C13.909 4.83398 15.739 5.52598 17.336 6.79098"
                    stroke="#9A999B"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M19.4478 8.99023C20.1358 9.90423 20.7408 10.9592 21.2498 12.1362C19.2828 16.6932 15.8068 19.4382 11.9998 19.4382C11.1368 19.4382 10.2858 19.2982 9.46777 19.0252"
                    stroke="#9A999B"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M19.8873 4.25L4.11328 20.024"
                    stroke="#9A999B"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </span>
              <span @click="passwordHide.first = 'text'" v-else>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M15.1619 12.0526C15.1619 13.7986 13.7459 15.2136 11.9999 15.2136C10.2539 15.2136 8.83887 13.7986 8.83887 12.0526C8.83887 10.3056 10.2539 8.89062 11.9999 8.89062C13.7459 8.89062 15.1619 10.3056 15.1619 12.0526Z"
                    stroke="#9A999B"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M11.998 19.354C15.806 19.354 19.289 16.616 21.25 12.052C19.289 7.488 15.806 4.75 11.998 4.75H12.002C8.194 4.75 4.711 7.488 2.75 12.052C4.711 16.616 8.194 19.354 12.002 19.354H11.998Z"
                    stroke="#9A999B"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  /></svg
              ></span>
            </div>
            <label class="sms__label mt-3">Повтирите новый</label>
            <div class="password-input">
              <input
                :type="passwordHide.last"
                placeholder="Повтирите новый"
                v-model="registrModal.password2"
              />
              <span
                @click="passwordHide.last = 'password'"
                v-if="passwordHide.last == 'text'"
                ><svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.76094 14.3677C9.18594 13.7937 8.83594 13.0137 8.83594 12.1387C8.83594 10.3857 10.2479 8.97266 11.9999 8.97266C12.8669 8.97266 13.6649 9.32366 14.2299 9.89766"
                    stroke="#9A999B"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M15.1054 12.6992C14.8734 13.9892 13.8574 15.0072 12.5684 15.2412"
                    stroke="#9A999B"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M6.655 17.472C5.068 16.226 3.724 14.406 2.75 12.137C3.734 9.85798 5.087 8.02798 6.684 6.77198C8.271 5.51598 10.102 4.83398 12 4.83398C13.909 4.83398 15.739 5.52598 17.336 6.79098"
                    stroke="#9A999B"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M19.4478 8.99023C20.1358 9.90423 20.7408 10.9592 21.2498 12.1362C19.2828 16.6932 15.8068 19.4382 11.9998 19.4382C11.1368 19.4382 10.2858 19.2982 9.46777 19.0252"
                    stroke="#9A999B"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M19.8873 4.25L4.11328 20.024"
                    stroke="#9A999B"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </span>
              <span @click="passwordHide.last = 'text'" v-else>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M15.1619 12.0526C15.1619 13.7986 13.7459 15.2136 11.9999 15.2136C10.2539 15.2136 8.83887 13.7986 8.83887 12.0526C8.83887 10.3056 10.2539 8.89062 11.9999 8.89062C13.7459 8.89062 15.1619 10.3056 15.1619 12.0526Z"
                    stroke="#9A999B"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M11.998 19.354C15.806 19.354 19.289 16.616 21.25 12.052C19.289 7.488 15.806 4.75 11.998 4.75H12.002C8.194 4.75 4.711 7.488 2.75 12.052C4.711 16.616 8.194 19.354 12.002 19.354H11.998Z"
                    stroke="#9A999B"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  /></svg
              ></span>
            </div>

            <div class="auth-user-modal__m-btn create-password">
              <span></span>
              <span></span>
              <div class="show-btn">
                Отмена
              </div>
              <div class="show-btn" @click="updatePassword">
                Сохранить
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
  middleware: "auth",
  data() {
    return {
      registrModal: {
        password: "",
        password2: "",
      },
      passwordHide: {
        first: "text",
        last: "text",
      },
      errors: {
        numberLinght: false,
        smsLinght: false,
        numberError: false,
        smsError: false,
      },
      userInfo: {},
      my_orders: {},
      month: '',
      year: '',
      date: ""
    };
  },
  asyncData({ store }) {
    store.commit("setUser");
  },
  computed: {
    errorClassObject() {
      return {
        numberErrorClass: this.errors.numberError,
        smsErrorClass: this.errors.smsError,
      };
    },
  },
  methods: {
    async updatePassword() {
      try {
        const userInfo = await this.$store.dispatch(
          "fetchAuth/fetchUserUpdatePassword",
          { password: this.registrModal, token: localStorage.getItem("Auth") }
        );
        await this.$modal.hide("change-password-modal");
      } catch (e) {}
    },
    wantChangePass() {
      this.$modal.hide("want-password-modal");
      this.$modal.show("change-password-modal");
    },
    show(name) {
      localStorage.setItem("password_access",JSON.stringify(true));
      this.$modal.show(name);
    },
    hide(name) {
      localStorage.setItem("password_access",JSON.stringify(true));
      this.$modal.hide(name);
    },
    async fetchUserInfo() {
      this.$router.push("/profile/orders");
      const userInfo = await this.$store.dispatch(
        "fetchAuth/fetchUserProfile",
        localStorage.getItem("Auth")
      );
      const myOrders = await this.$store.dispatch(
        "fetchOrder/fetchMyOrders",
        localStorage.getItem("Auth")
      );
      this.my_orders = myOrders
   

      this.userInfo = userInfo;
      if (!JSON.parse(localStorage.getItem("password_access"))) {
        this.$modal.show("want-password-modal");
      }
    },
  },
  mounted() {
    this.fetchUserInfo();
  },
};
</script>
<style lang="scss">
.auth-user-modal {
  z-index: 30;
  .numberErrorClass {
    .number__label {
      color: red !important;
    }
    .number__input {
      border: 1px solid red !important;
    }
  }
  .smsErrorClass {
    .sms__label {
      color: red !important;
    }
    .sms__input {
      border: 1px solid red !important;
    }
  }
  &__m-header {
    padding: 6px 6px 6px 40px;
    display: flex;
    justify-content: space-between;
    background: #f7f7f7;
    align-items: center;
    z-index: 30;

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
    padding: 28px 40px 40px 40px;
    z-index: 30;

    display: flex;
    flex-direction: column;
    justify-items: center;
    .number-form,
    .sms-from,
    .password-from {
      display: flex;
      flex-direction: column;
    }
    .number-linght-false {
      font-family: "Inter";
      font-style: italic;
      font-weight: 400;
      font-size: 16px;
      line-height: 20px;
      color: #ef3f27;
      margin-top: 6px;
    }
    .number-linght-true {
      height: 20px;
      margin-top: 6px;
    }
    label {
      font-family: "Inter";
      font-style: normal;
      font-weight: 500;
      font-size: 16px;
      line-height: 24px;
      color: #727474;
      transition: 0.3s;
      // margin-top: 10px;
      // &:first-child {
      //   margin-top: 0px;
      // }
    }
    input {
      transition: 0.3s;
      border: 1px solid #ebebeb;
      margin-top: 6px;
      border-radius: 4px;
      font-family: "Inter";
      padding: 16px;
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 24px;
      color: #9a999b;
      &:focus {
        outline: none;
      }
    }
  }
  &__m-btn {
    width: 100%;
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 24px;

    div {
      margin-top: 24px;
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

    .show-btn {
      background: #ff7e00;
      color: #fff;
      &:hover {
        background: rgba(255, 100, 24, 0.6);
      }
    }
  }
  .create-password {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 16px;
    justify-self: end;
    div {
      &:nth-child(3) {
        background: transparent;
        color: #000;
      }
    }
  }
  .password-input {
    border: 1px solid #ebebeb;
    border-radius: 4px;
    display: flex;
    padding-left: 16px;
    padding-right: 16px;
    align-items: center;
    svg {
      cursor: pointer;
    }
    input {
      border: none !important;
      width: 100%;
      padding-left: 0;
    }
  }
  .two-btn-control {
    display: grid;
    grid-gap: 16px;
    grid-template-columns: 1fr 1fr;
    div {
      &:first-child {
        background: #ebebeb;
        color: #000;
      }
    }
  }
  .forgot-your-password {
    padding-top: 20px;
    span {
      cursor: pointer;
      display: flex;
      justify-content: center;
      font-family: "Inter";
      font-style: normal;
      font-weight: 500;
      font-size: 16px;
      line-height: 20px;
      color: #020105;
    }
  }
}
.profile {
  padding-top: 32px;
  .log-out-modal {
    z-index: 30;

    &__m-header {
      padding: 6px 6px 6px 40px;
      display: flex;
      justify-content: space-between;
      background: #f7f7f7;
      align-items: center;
      z-index: 30;

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

    &__m-btn {
      width: 100%;
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-gap: 24px;
      padding: 54px 41px;
      div {
        // margin-top: 24px;
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

      .show-btn {
        &:last-child {
          background: #ff7e00;
          color: #fff;
          &:hover {
            background: rgba(255, 100, 24, 0.6);
          }
        }
        &:first-child {
          background: #ebebeb;
          color: #000;
        }
      }
    }
    .forgot-your-password {
      padding-top: 20px;
      span {
        cursor: pointer;
        display: flex;
        justify-content: center;
        font-family: "Inter";
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        line-height: 20px;
        color: #020105;
      }
    }
  }
  &__body {
    display: grid;
    grid-template-columns: 1fr 4fr;
    padding-top: 32px;
  }
  &__menu {
    border-right: 1px solid #f2f2fa;
    height: 500px;
    ul {
      text-decoration: none;
      list-style: none;
      padding-left: 0;
      li {
        margin-bottom: 32px;
        a,
        div {
          display: flex;
          align-items: center;
          font-family: "Inter";
          font-style: normal;
          font-weight: 500;
          font-size: 16px;
          line-height: 24px;
          color: #020105;
          cursor: pointer;
          &:hover {
            text-decoration: none;
          }
          span {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 48px;
            height: 48px;
            background: #f2f2fa;
            border-radius: 50%;
            margin-right: 8px;
          }
        }
        .activeMenu {
          color: #ff7e00;
          span {
            background: #ff7e00;
            color: white;
            svg {
              path,
              circle {
                stroke: white;
              }
            }
          }
        }
      }
    }
  }
  &__area {
    padding-left: 24px;
  }
}
</style>
