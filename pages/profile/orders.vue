<template lang="html">
  <div class="container profile">
    <div class="row">
      <div class="col-12">
        <BreadCrumb :links="links" last="Мои заказы" />
        <TitleCategory title="Мои заказы" :show="false" />
      </div>
    </div>
    <div class="row">
      <div class="col-12 profile__body">
        <div class="profile__menu">
          <ul>
            <li>
              <nuxt-link
                to="/profile/orders"
                :class="{ activeMenu: $route.path == '/profile/orders' }"
                ><span
                  ><svg
                    width="19"
                    height="19"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M11.0518 13.2135C10.7705 13.2135 10.5418 13.4422 10.5418 13.7235C10.5418 14.0048 10.7705 14.2328 11.0518 14.2328C11.3332 14.2328 11.5612 14.0048 11.5612 13.7235C11.5612 13.4422 11.3332 13.2135 11.0518 13.2135Z"
                      stroke="black"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M3.55024 13.2135C3.26891 13.2135 3.04024 13.4422 3.04024 13.7235C3.04024 14.0048 3.26891 14.2328 3.55024 14.2328C3.83157 14.2328 4.06024 14.0048 4.06024 13.7235C4.06024 13.4422 3.83157 13.2135 3.55024 13.2135Z"
                      stroke="black"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M14.1667 2.16663L12.7801 2.40663L12.1381 10.0553C12.0861 10.6786 11.5654 11.1573 10.9401 11.1573H3.66541C3.06808 11.1573 2.56141 10.7186 2.47541 10.1266L1.84275 5.75463C1.76475 5.21529 2.18275 4.73263 2.72741 4.73263H12.5574"
                      stroke="black"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M6.58307 7.19661H4.7344"
                      stroke="black"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    /></svg
                ></span>
                Мои заказы
              </nuxt-link>
            </li>
            <li>
              <nuxt-link
                to="/profile/personal"
                :class="{ activeMenu: $route.path == '/profile/personal' }"
                ><span
                  ><svg
                    width="17"
                    height="22"
                    viewBox="0 0 17 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      cx="8.57894"
                      cy="6.27803"
                      r="4.77803"
                      stroke="#020105"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M1.00002 17.7014C0.998732 17.3655 1.07385 17.0337 1.2197 16.7311C1.67736 15.8158 2.96798 15.3307 4.03892 15.111C4.81128 14.9462 5.59431 14.836 6.38217 14.7815C7.84084 14.6533 9.30793 14.6533 10.7666 14.7815C11.5544 14.8367 12.3374 14.9468 13.1099 15.111C14.1808 15.3307 15.4714 15.77 15.9291 16.7311C16.2224 17.3479 16.2224 18.064 15.9291 18.6808C15.4714 19.6419 14.1808 20.0812 13.1099 20.2918C12.3384 20.4634 11.5551 20.5766 10.7666 20.6304C9.57937 20.7311 8.38659 20.7494 7.19681 20.6854C6.92221 20.6854 6.65677 20.6854 6.38217 20.6304C5.59663 20.5773 4.81632 20.4641 4.04807 20.2918C2.96798 20.0812 1.68652 19.6419 1.2197 18.6808C1.0746 18.3747 0.999552 18.0401 1.00002 17.7014Z"
                      stroke="#020105"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    /></svg
                ></span>
                Профиль
              </nuxt-link>
            </li>
            <li>
              <div @click="show('log-out-modal')">
                <span
                  ><svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12.4131 6.31159V5.56519C12.4131 3.93719 11.0931 2.61719 9.46512 2.61719H5.56512C3.93792 2.61719 2.61792 3.93719 2.61792 5.56519V14.4692C2.61792 16.0972 3.93792 17.4172 5.56512 17.4172H9.47312C11.0963 17.4172 12.4131 16.1012 12.4131 14.478V13.7236"
                      stroke="#200E32"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M17.8479 10.0172H8.21509"
                      stroke="#200E32"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M15.5054 7.68555L17.8478 10.0175L15.5054 12.3503"
                      stroke="#200E32"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </span>
                Выйти
              </div>
            </li>
          </ul>
        </div>
        <div class="profile__area">
          <div class="order-wait-select">
            <el-select
              v-model="value"
              placeholder="Select"
              @change="statusFilter"
            >
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              >
              </el-option>
            </el-select>
          </div>
          <el-tabs v-model="activeName">
            <el-tab-pane label="Все заказы" name="first">
              <!-- <div class="empty-order">
                <img
                  src="../../assets/images/undraw_empty_cart_co35 2.png"
                  alt=""
                />
                <h1>Ещё не успели заказать?</h1>
                <p>
                  У вас отсутствуют активные заказы! Воспользуйтесь поиском,
                  чтобы найти всё что нужно.
                </p>
                <div class="btn" @click="$router.push('/')">На главную</div>
              </div> -->
              <div class="orders" v-if="orders.length > 0">
                <div v-for="order in orders">
                  <CardOrder :order="order" />
                </div>
              </div>
              <EmptyBlog v-else />
            </el-tab-pane>
            <el-tab-pane label="Неоплаченные" name="second">
              <div>
                <div>1</div>
                <div>2</div>
                <div>3</div>
              </div>
            </el-tab-pane>
          </el-tabs>
        </div>
      </div>
    </div>
    <modal name="log-out-modal" width="590px" height="auto">
      <div>
        <div class="log-out-modal">
          <div class="log-out-modal__m-header">
            <h1 class="m-header-title">Хотите выйти из аккаунта?</h1>
            <span @click="hide('log-out-modal')">
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

          <div class="log-out-modal__m-btn">
            <div class="show-btn" @click="hide('log-out-modal')">
              Нет
            </div>
            <div class="show-btn" @click="logout">
              ДА
            </div>
          </div>
        </div>
      </div>
    </modal>
  </div>
</template>
<script>
import BreadCrumb from "../../components/category/breadCrumb.vue";
import TitleCategory from "../../components/category/titleCategory.vue";
import HomeTitlies from "../../components/homeTitlies.vue";
import CardOrder from "../../components/cards/cardOrder.vue";
import EmptyBlog from "../../components/emptyBlog.vue";
export default {
  props: ["myOrders"],
  middleware: "auth",

  data() {
    return {
      activeName: "first",
      options: [
        {
          value: "Все",
          label: "Все",
        },
        {
          value: "Ожидание",
          label: "Ожидание",
        },
        {
          value: "Ожидание модерации",
          label: "Ожидание модерации",
        },
        {
          value: "На доставке",
          label: "На доставке",
        },
        {
          value: "Ожидание сборки",
          label: "Ожидание сборки",
        },
        {
          value: "Отмено",
          label: "Отмено",
        },
        {
          value: "Доставлено",
          label: "Доставлено",
        },
      ],
      value: "Все",
      orders: [],
      links: [
        {
          name: "Главная",
          to: "/",
        },
        {
          name: "Личный кабинет",
          to: "/profile/personal",
        },
      ],
    };
  },
  components: {
    BreadCrumb,
    TitleCategory,
    HomeTitlies,
    CardOrder,
    EmptyBlog,
  },
  created() {
    this.fetchOrders();
  },
  methods: {
    async fetchOrders() {
      const myOrders = await this.$store.dispatch("fetchOrder/fetchMyOrders", {
        token: localStorage.getItem("Auth"),
      });
      this.orders = myOrders;
      if (myOrders.status == 401) {
        this.__UPDATE_TOKEN();
      }
    },
    async __UPDATE_TOKEN() {
      const newToken = await this.$store.dispatch(
        "fetchAuth/fetchUpdateToken",
        localStorage.getItem("Refresh")
      );
      if (newToken.status == 401) {
        localStorage.removeItem("Auth");
        localStorage.removeItem("Refresh");
        localStorage.removeItem("password_access");
        this.$store.commit("setUser");
        this.$router.push("/");
      } else {
        await localStorage.setItem("Auth", newToken.access);
        await localStorage.setItem("Refresh", newToken.refresh);
        const myOrders = await this.$store.dispatch(
          "fetchOrder/fetchMyOrders",
          {
            token: newToken.access,
          }
        );
        this.orders = myOrders;
      }
    },
    async statusFilter() {
      if (this.value == "Все") {
        const myOrders = await this.$store.dispatch(
          "fetchOrder/fetchMyOrders",
          {
            token: localStorage.getItem("Auth"),
          }
        );
        this.orders = myOrders;
      } else {
        const myOrders = await this.$store.dispatch(
          "fetchOrder/fetchMyOrders",
          {
            status: { params: { status: this.value } },
            token: localStorage.getItem("Auth"),
          }
        );
        this.orders = myOrders;
      }
    },
    async logout() {
      const response = await this.$store.dispatch("fetchAuth/fetchLogOut", {
        refresh_token: localStorage.getItem("Refresh"),
        token: localStorage.getItem("Auth"),
      });
      if (response.success) {
        localStorage.removeItem("Auth");
        localStorage.removeItem("Refresh");
        localStorage.removeItem("password_access");
        this.$store.commit("setUser");
        this.$router.push("/");
      }
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
.profile {
  .el-tabs__item {
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 28px;
    color: #727474;
  }
  padding-top: 32px;
  .el-tabs__active-bar {
    position: absolute;
    bottom: 0;
    left: 0;
    height: 2px;
    background-color: #ff7e00;
    z-index: 1;
    transition: transform 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
    list-style: none;
  }
  .el-tabs__item.is-active {
    color: #ff7e00 !important;
    font-weight: 500 !important;
  }
  .el-tabs__content {
    overflow: visible !important;
  }
  .el-tabs__nav-wrap::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 2px;
    background-color: transparent !important;
    z-index: 1;
  }
  &__area {
    position: relative;
    .order-wait-select {
      position: absolute;
      right: 0;
      z-index: 10;
      .el-input--suffix .el-input__inner {
        padding-right: 30px;
        background: #f8f8f8;
        font-family: "TT Firs Neue";
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 24px;
        // text-transform: uppercase;
        color: #020105 !important;
      }
    }
    .empty-order {
      min-height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      padding-top: 32px;
      .btn {
        font-family: "Inter";
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        line-height: 20px;
        /* identical to box height, or 125% */

        /* New orange */
        margin-top: 32px;
        color: #ff7e00;
        padding: 16px 126px;
        border: 1px solid #ff6418;
        border-radius: 6px;
      }
      p {
        font-family: "Inter";
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 20px;
        text-align: center;
        color: #727474;
        width: 33%;
        margin-top: 8px;
      }
      img {
        height: 360px;
        object-fit: contain;
      }
      h1 {
        font-family: "TT Firs Neue";
        font-style: normal;
        font-weight: 500;
        font-size: 32px;
        line-height: 48px;
        /* identical to box height, or 150% */
        text-align: center;
        color: #000000;
        margin-bottom: 0 !important;
        margin-top: 32px;
      }
    }
    .orders {
      padding-top: 32px;
      padding-bottom: 32px;
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-gap: 24px;
    }
  }
}
@media (max-width: 1440px) {
  .profile {
    &__area {
      padding-left: 16px !important;
      .orders {
        grid-gap: 16px;
      }
    }
  }
}
</style>
