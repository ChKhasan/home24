<template lang="html">
  <div class="select-order">
    <div class="select-order__s-header">
      <el-checkbox
        :indeterminate="isIndeterminate"
        v-model="checkAll"
        @change="handleCheckAllChange"
      ></el-checkbox
      ><span class="check-all">Выбрать для заказа</span>
    </div>
    <el-checkbox-group
      v-model="checkedCities"
      @change="handleCheckedCitiesChange"
    >
      <div class="select-order__card d-flex" v-for="city in cartItems">
        <div class="d-flex align-items-center">
          <el-checkbox :key="city.title" :label="(city.title)"></el-checkbox>
        </div>
        <div class="select-order__card-img">
          <div><img src="../../assets/images/Rectangle 8.png" alt="" /></div>
        </div>
        <div class="select-order__card-body d-flex justify-content-between">
          <div class="sc-title">
            <h6>ОФИСНОЕ КРЕСЛО 6206A-2</h6>
            <p>Размер: <span>M</span></p>
            <p>Цвет: <span>Сине-чёрное</span></p>
          </div>

          <div class="sc-count">
            <div class="sc-count-btn">
              <span
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
              <p>1</p>
              <span
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
          <div class="sc-price">
            <div class="sc-price-svg">
              <svg
                width="22"
                height="22"
                viewBox="0 0 22 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M10.7813 19.116C8.79152 17.8914 6.94051 16.4502 5.26134 14.8181C4.08081 13.6427 3.18208 12.2098 2.634 10.6291C1.64771 7.56278 2.79976 4.05242 6.02385 3.01356C7.7183 2.46807 9.5689 2.77984 10.9967 3.85135C12.4251 2.78114 14.2751 2.46948 15.9696 3.01356C19.1937 4.05242 20.3541 7.56278 19.3678 10.6291C18.8197 12.2098 17.921 13.6427 16.7404 14.8181C15.0613 16.4502 13.2103 17.8914 11.2205 19.116L11.005 19.25L10.7813 19.116Z"
                  fill="#FF7E00"
                />
                <path
                  d="M14.4277 6.46527C15.4043 6.77721 16.0981 7.65391 16.1848 8.68542"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>

              <svg
                width="22"
                height="22"
                viewBox="0 0 22 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17.7145 8.6792C17.7145 8.6792 17.2167 14.8529 16.928 17.4535C16.7905 18.6956 16.0232 19.4234 14.7665 19.4464C12.3749 19.4894 9.98055 19.4922 7.58989 19.4418C6.3808 19.417 5.62639 18.68 5.49164 17.4599C5.20105 14.8364 4.70605 8.6792 4.70605 8.6792"
                  stroke="#EF3F27"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M18.9823 5.71975H3.4375"
                  stroke="#EF3F27"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M15.987 5.71973C15.2675 5.71973 14.6478 5.21098 14.5066 4.50607L14.2839 3.3914C14.1464 2.87715 13.6807 2.52148 13.15 2.52148H9.2697C8.73895 2.52148 8.27328 2.87715 8.13578 3.3914L7.91303 4.50607C7.77187 5.21098 7.1522 5.71973 6.43262 5.71973"
                  stroke="#EF3F27"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            <div class="sc-last-price">2 000 000 сум</div>
            <span class="sc-first-price">2 200 000 сум</span>
          </div>
        </div>
      </div>
    </el-checkbox-group>
  </div>
</template>
<script>
const cityOptions = ["Shanghai", "Beijing", "Guangzhou", "Shenzhen"];
export default {
  data() {
    return {
      checkAll: false,
      checkedCities: ["Shanghai", "Beijing"],
      cities: cityOptions,
      isIndeterminate: true,
      cartItems: [
        {
          title: "test1",
          count: 1,
          price: 200000,
        },
        {
          title: "test2",
          count: 1,
          price: 200000,
        },
        {
          title: "test3",
          count: 1,
          price: 200000,
        },
      ],
    };
  },
  methods: {
    handleCheckAllChange(val) {
      this.checkedCities = val ? this.cartItems.map((item) => item.title) : [];
      this.isIndeterminate = false;
    },
    handleCheckedCitiesChange(value) {
      console.log(value);
      let checkedCount = value.length;
      this.checkAll = checkedCount === this.cartItems.length;
      this.isIndeterminate =
        checkedCount > 0 && checkedCount < this.cartItems.length;
    },
  },
};
</script>
<style lang="scss">
.select-order {
  padding: 41px 53px;
  background: #ffffff;
  border-radius: 8px;
  .el-checkbox-group {
    font-size: 1rem !important;
  }
  .el-checkbox__label {
    display: none;
  }
  .el-checkbox__input.is-checked .el-checkbox__inner,
  .el-checkbox__input.is-indeterminate .el-checkbox__inner {
    background-color: #ff6418;
    border-color: #ff6418;
  }
  .el-checkbox__inner {
    border: 1px solid #eaeaeb !important;
    border-radius: 3.5px !important;
    width: 18px !important;
    height: 18px !important;
    background-color: #fff;
    z-index: 1;
    transition: border-color 0.25s cubic-bezier(0.71, -0.46, 0.29, 1.46),
      background-color 0.25s cubic-bezier(0.71, -0.46, 0.29, 1.46);
  }
  .el-checkbox__inner::after {
    box-sizing: content-box;
    content: "";
    border: 1px solid #fff;
    border-left: 0;
    border-top: 0;
    height: 9px !important;
    left: 6.5px !important;
    position: absolute;
    top: 1px;
    transform: rotate(45deg) scaleY(0);
    width: 3px;
    transition: transform 0.15s ease-in 0.05s;
    transform-origin: center;
  }
  &__s-header {
    padding-bottom: 18px;
    border-bottom: 1px solid #dddddd;
    .check-all {
      font-family: "Inter";
      font-style: normal;
      font-weight: 400;
      font-size: 16px !important;
      line-height: 24px !important;
      color: #000;
      margin-left: 19px;
    }
  }
  &__card {
    padding: 24px 0;
    border-bottom: 1px solid #dddddd;
    &:last-child {
      border-bottom: none;
    }
  }
  &__card-img {
    margin-left: 19px;
    width: 123px;
    height: 115px;
    border: 1px solid #f4f5f5;
    border-radius: 12px;
    div {
      height: 100%;
      img {
        width: 100%;
        height: 100%;
        object-fit: contain;
      }
    }
  }
  &__card-body {
    width: 100%;
    .sc-title {
      padding: 9px 0;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      margin-left: 33px;
      h6 {
        font-family: "Inter";
        font-style: normal;
        font-weight: 500;
        font-size: 14px;
        line-height: 20px;
        color: #020105;
        margin-bottom: 0;
      }
      p {
        font-family: "Inter";
        font-style: normal;
        font-weight: 500;
        font-size: 14px;
        line-height: 20px;
        color: #727474;
        span {
          color: #000;
        }
      }
    }
    .sc-count {
      display: flex;
      align-items: center;
      .sc-count-btn {
        border: 1px solid #f2f2fa;
        border-radius: 4px;
        padding: 12px 16px;
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
    .sc-price {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      .sc-price-svg {
        display: flex;
        justify-content: flex-end;
        svg {
          margin-left: 24px;
          cursor: pointer;
        }
      }
      .sc-last-price {
        font-family: "TT Firs Neue";
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        line-height: 24px;
        color: #020105;
      }
      .sc-first-price {
        font-family: "TT Firs Neue";
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 20px;
        text-decoration-line: line-through;
        color: #9a999b;
      }
    }
  }
}
</style>
