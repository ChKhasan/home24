<template lang="html">
  <div class="order-card">
    <div class="order-card__header">
      <div class="title">
        <h4>ID заказа {{ order.id }}</h4>
        <p>
          Обновлен
          {{
            ` ${new Date(order.date).getDate()} ${
              monthNames[new Date(order.date).getMonth()]
            } ${new Date(order.date).getFullYear()}г., ${new Date(
              order.date
            ).getHours()}:${new Date(order.date).getMinutes()}`
          }}
        </p>
        <!-- const event = new Date(myOrders.date);
      this.month = event.getMonth();
      this.date = event.getDate();
      this.year = event.getFullYear(); -->
      </div>
      <div class="status">
        <!-- <div class="wait"><span>Ожидания</span></div> -->
        <div class="wait-mode" :data-name="order.status">
          <span>{{ order.status }}</span>
        </div>
      </div>
    </div>
    <div class="order-card__body">
      <div class="order-info">
        <span>Дата заказа</span>
        <p>
          {{
            ` ${new Date(order.date).getDate()} ${
              monthNames[new Date(order.date).getMonth()]
            } ${new Date(order.date).getFullYear()}г., ${new Date(
              order.date
            ).getHours()}:${new Date(order.date).getMinutes()}`
          }}
        </p>
      </div>
      <div class="order-info">
        <span>Способ доставки</span>
        <p>{{ order.shipping }}</p>
      </div>
      <div class="order-info">
        <span>Способ оплаты</span>
        <p>{{ order.payment }}</p>
      </div>
      <div class="order-info">
        <span>Сумма заказа</span>
        <p>{{ order.price }} сум</p>
      </div>
    </div>
    <div class="order-card__footer">
      <div class="dropdown">
        <div class="o-dropdown-header" @click="dropdownHide = !dropdownHide">
          <span>{{ order.products.length }} товара</span>
          <svg
            v-if="dropdownHide"
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
        <div class="o-dropdown-body" v-show="dropdownHide">
          <CardInDropdown
            v-for="product in order.products"
            :key="product.id"
            :product="product"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import CardInDropdown from "../cards/cardInDropdown.vue";
export default {
  props: ["order"],
  data() {
    return {
      dropdownHide: false,
      monthNames: [
        "Январь",
        "Февраль",
        "Март",
        "Апреля",
        "Май",
        "Июнь",
        "Июль",
        "Август",
        "Сентябрь",
        "Октябрь",
        "Ноябрь",
        "Декабрь",
      ],
    };
  },
  components: {
    CardInDropdown,
  },
};
</script>
<style lang="scss">
.order-card {
  background: #ffffff;
  box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.08);
  border-radius: 8px;
  padding: 24px;
  margin-left: 4px;
  margin-right: 4px;
  z-index: 1000;
  transition: 0.4s;
  &__header {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    padding-bottom: 16px;
    border-bottom: 1px solid #f2f2f2;
    .status {
      display: flex;
      justify-content: end;
      align-items: flex-start;
      .wait-mode {
        border-radius: 4px;
      }
      [data-name="Ожидание модерации"] {
        background: #fdf7e7;
        border: 1px dashed #e9dec1;
      }
      [data-name="Ожидание"] {
        background: #f8f8f8;
        border: none;
        span {
          color: #727474;
        }
      }
      [data-name="Ожидание сборки"] {
        background: #fff7e4;
        border: none;
        span {
          color: #ff6418;
        }
      }
      [data-name="Отмено"] {
        background: #fde2de;
        border: none;
        span {
          color: #ef3f27;
        }
      }
      [data-name="на доставке"] {
        background: #f0f9ea;
        border: none;
        span {
          color: #727474;
        }
      }
      [data-name="Доставлено"] {
        background: #f0f9ea;
        border: none;
        span {
          color: #009a10;
        }
      }
      span {
        display: block;
        border-radius: 4px;
        padding: 8px 21px;
        font-family: "Inter";
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        color: #727474;
       white-space: nowrap;
        line-height: 24px;
      }
      .wait {
        background: #f8f8f8;
      }
    }
    h4 {
      font-family: "Inter";
      font-style: normal;
      font-weight: 400;
      font-size: 20px;
      line-height: 28px;
      color: #000000;
    }
    p {
      font-family: "Inter";
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 24px;
      color: #727474;
    }
  }
  &__body {
    transition: opacity 1s ease-out;
    padding-top: 16px;
    padding-bottom: 16px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 16px;
    border-bottom: 1px solid #f2f2f2;

    .order-info {
      p {
        font-family: "Inter";
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 28px;
        color: #000000;
      }
      span {
        font-family: "Inter";
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 20px;
        color: #727474;
      }
    }
  }
  &__footer {
    .dropdown {
      .o-dropdown-header {
        display: flex;
        justify-content: space-between;
        padding-top: 16px;
        cursor: pointer;
        span {
          font-family: "Inter";
          font-style: normal;
          font-weight: 400;
          font-size: 16px;
          line-height: 28px;
          color: #020105;
        }
      }
    }
  }
}
@media (max-width: 1440px) {
  .order-card {
    &__header {
      .status {
        span{
          padding: 8px 14px;
        }
      }
    }
  }
}
</style>
