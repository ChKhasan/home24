<template lang="html">
  <div class="category">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="grid_block">
            <div class="category__list-box1">
              <h2>Категории</h2>
              <ul class="category__list1">
                <li>
                  <span>Мебель</span>
                  <ul>
                    <li>
                      <span class="category__list-active">Офисная мебель</span>
                      <ul>
                        <li>
                          <span @click="$router.push(`/category/products/last`)"
                            >Геймерские кресла</span
                          >
                        </li>
                        <li>
                          <span>Геймерские кресла</span>
                        </li>
                        <li>
                          <span>Геймерские кресла</span>
                        </li>
                        <li>
                          <span>Геймерские кресла</span>
                        </li>
                        <li>
                          <span>Геймерские кресла</span>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
              </ul>
              <h2>Сортировать</h2>
              <ul>
                <b-form-group v-slot="{ ariaDescribedby }">
                  <b-form-radio
                    v-model="selected"
                    :aria-describedby="ariaDescribedby"
                    name="some-radios"
                    value="A"
                    >по популярности
                  </b-form-radio>
                  <b-form-radio
                    v-model="selected"
                    :aria-describedby="ariaDescribedby"
                    name="some-radios"
                    value="B"
                    >добавлено недавно</b-form-radio
                  >
                  <b-form-radio
                    v-model="selected"
                    :aria-describedby="ariaDescribedby"
                    name="some-radios"
                    value="C"
                    >цена</b-form-radio
                  >
                </b-form-group>
                <div class="mt-3">
                  Selected: <strong>{{ selected }}</strong>
                </div>
              </ul>
              <h2>Цена</h2>
              <div class="category__range">
                <MultiRangeSlider
                  :min="100000"
                  :max="1000000"
                  :step="100000"
                  :ruler="false"
                  :label="false"
                  :minValue="barMinValue"
                  :maxValue="barMaxValue"
                  @input="UpdateValues"
                />
                <div class="range-count">
                  <div class="range-min">
                    <span>от</span>
                    <input disabled v-model="barMinValue" type="text" />
                  </div>
                  <div class="range-max">
                    <span>от</span>
                    <input disabled type="text" v-model="barMaxValue" />
                  </div>
                </div>
              </div>
              <h2>Материал корпуса</h2>
              <div class="range-checkbox">
                <div>
                  <input type="checkbox" name="" id="" /><span>ДСП</span>
                </div>
                <div>
                  <input type="checkbox" name="" id="" /><span>МДФ</span>
                </div>
                <div>
                  <input type="checkbox" name="" id="" /><span>Шпон</span>
                </div>
              </div>
              <h2>Цвет</h2>
              <div class="category__colors">
                <div class="checkbox" @click="checkbox = 'red'">
                  <span v-if="checkbox == 'red'"></span>
                </div>
                <div class="checkbox" @click="checkbox = 'green'">
                  <span v-if="checkbox == 'green'"></span>
                </div>
                <div class="checkbox" @click="checkbox = 'black'">
                  <span v-if="checkbox == 'black'"></span>
                </div>
                <div class="checkbox" @click="checkbox = 'blue'">
                  <span v-if="checkbox == 'blue'"></span>
                </div>
                <div class="checkbox" @click="checkbox = 'red'">
                  <span v-if="checkbox == 'red'"></span>
                </div>
                <div class="checkbox" @click="checkbox = 'green'">
                  <span v-if="checkbox == 'green'"></span>
                </div>
                <div class="checkbox" @click="checkbox = 'black'">
                  <span v-if="checkbox == 'black'"></span>
                </div>
                <div class="checkbox" @click="checkbox = 'blue'">
                  <span v-if="checkbox == 'blue'"></span>
                </div>
                <div class="checkbox" @click="checkbox = 'red'">
                  <span v-if="checkbox == 'red'"></span>
                </div>
                <div class="checkbox" @click="checkbox = 'green'">
                  <span v-if="checkbox == 'green'"></span>
                </div>
                <div class="checkbox" @click="checkbox = 'black'">
                  <span v-if="checkbox == 'black'"></span>
                </div>
                <div class="checkbox" @click="checkbox = 'blue'">
                  <span v-if="checkbox == 'blue'"></span>
                </div>
                <div class="checkbox" @click="checkbox = 'red'">
                  <span v-if="checkbox == 'red'"></span>
                </div>
                <div class="checkbox" @click="checkbox = 'green'">
                  <span v-if="checkbox == 'green'"></span>
                </div>
                <div class="checkbox" @click="checkbox = 'black'">
                  <span v-if="checkbox == 'black'"></span>
                </div>
                <div class="checkbox" @click="checkbox = 'blue'">
                  <span v-if="checkbox == 'blue'"></span>
                </div>
                <div class="checkbox" @click="checkbox = 'red'">
                  <span v-if="checkbox == 'red'"></span>
                </div>
                <div class="checkbox" @click="checkbox = 'green'">
                  <span v-if="checkbox == 'green'"></span>
                </div>
                <div class="checkbox" @click="checkbox = 'black'">
                  <span v-if="checkbox == 'black'"></span>
                </div>
                <div class="checkbox" @click="checkbox = 'blue'">
                  <span v-if="checkbox == 'blue'"></span>
                </div>
              </div>
              <h2>Обслуживаемая площадь</h2>
              <div class="range-checkbox">
                <div>
                  <input type="checkbox" name="" id="" /><span>до 25 м2</span>
                </div>
                <div>
                  <input type="checkbox" name="" id="" /><span>до 25 м2</span>
                </div>
              </div>
            </div>
            <div class="">
              <BreadCrumb :links="links" last="Офисная мебель" />
              <div class="category-title">
                <h1>Офисная мебель</h1>
                <div class="category-control">
                  <div>
                    <span>Сортировка</span>
                    <el-dropdown>
                      <span class="el-dropdown-link">
                        Подешевле<i
                          class="el-icon-arrow-down el-icon--right"
                        ></i>
                      </span>
                      <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item>Action 1</el-dropdown-item>
                        <el-dropdown-item>Action 2</el-dropdown-item>
                        <el-dropdown-item>Action 3</el-dropdown-item>
                        <el-dropdown-item disabled>Action 4</el-dropdown-item>
                        <el-dropdown-item divided>Action 5</el-dropdown-item>
                      </el-dropdown-menu>
                    </el-dropdown>
                    <span @click="gridControl = 5"
                      ><svg
                        width="22"
                        height="20"
                        viewBox="0 0 22 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M9.9473 7.31934H12.0524C12.9233 7.31934 13.6299 8.01941 13.6299 8.88305V10.9682C13.6299 11.8312 12.9233 12.5319 12.0524 12.5319H9.9473C9.07568 12.5319 8.36914 11.8312 8.36914 10.9682V8.88305C8.36914 8.01941 9.07568 7.31934 9.9473 7.31934Z"
                          fill="#FF6418"
                        />
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M18.3184 7.46777H20.4235C21.2944 7.46777 22.001 8.16785 22.001 9.03149V11.1167C22.001 11.9797 21.2944 12.6804 20.4235 12.6804H18.3184C17.4468 12.6804 16.7402 11.9797 16.7402 11.1167V9.03149C16.7402 8.16785 17.4468 7.46777 18.3184 7.46777Z"
                          fill="#FF6418"
                        />
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M1.57816 7.46777H3.68324C4.5542 7.46777 5.26074 8.16785 5.26074 9.03149V11.1167C5.26074 11.9797 4.5542 12.6804 3.68324 12.6804H1.57816C0.706538 12.6804 0 11.9797 0 11.1167V9.03149C0 8.16785 0.706538 7.46777 1.57816 7.46777Z"
                          fill="#FF6418"
                        />
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M9.9473 14.6396H12.0524C12.9233 14.6396 13.6299 15.3397 13.6299 16.204V18.2885C13.6299 19.1522 12.9233 19.8523 12.0524 19.8523H9.9473C9.07568 19.8523 8.36914 19.1522 8.36914 18.2885V16.204C8.36914 15.3397 9.07568 14.6396 9.9473 14.6396Z"
                          fill="#FF6418"
                        />
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M18.3184 14.7871H20.4235C21.2944 14.7871 22.001 15.4872 22.001 16.3515V18.436C22.001 19.2996 21.2944 19.9997 20.4235 19.9997H18.3184C17.4468 19.9997 16.7402 19.2996 16.7402 18.436V16.3515C16.7402 15.4872 17.4468 14.7871 18.3184 14.7871Z"
                          fill="#FF6418"
                        />
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M1.57816 14.7871H3.68324C4.5542 14.7871 5.26074 15.4872 5.26074 16.3515V18.436C5.26074 19.2996 4.5542 19.9997 3.68324 19.9997H1.57816C0.706538 19.9997 0 19.2996 0 18.436V16.3515C0 15.4872 0.706538 14.7871 1.57816 14.7871Z"
                          fill="#FF6418"
                        />
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M9.9473 0H12.0524C12.9233 0 13.6299 0.700075 13.6299 1.56437V3.64889C13.6299 4.51254 12.9233 5.21261 12.0524 5.21261H9.9473C9.07568 5.21261 8.36914 4.51254 8.36914 3.64889V1.56437C8.36914 0.700075 9.07568 0 9.9473 0Z"
                          fill="#FF6418"
                        />
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M18.3184 0.148438H20.4235C21.2944 0.148438 22.001 0.848512 22.001 1.71281V3.79733C22.001 4.66097 21.2944 5.36105 20.4235 5.36105H18.3184C17.4468 5.36105 16.7402 4.66097 16.7402 3.79733V1.71281C16.7402 0.848512 17.4468 0.148438 18.3184 0.148438Z"
                          fill="#FF6418"
                        />
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M1.57816 0.148438H3.68324C4.5542 0.148438 5.26074 0.848512 5.26074 1.71281V3.79733C5.26074 4.66097 4.5542 5.36105 3.68324 5.36105H1.57816C0.706538 5.36105 0 4.66097 0 3.79733V1.71281C0 0.848512 0.706538 0.148438 1.57816 0.148438Z"
                          fill="#FF6418"
                        />
                      </svg>
                    </span>
                    <span @click="gridControl = 3"
                      ><svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M16.2858 2.6H19.5524C20.5675 2.6 21.4003 3.4322 21.4003 4.47018V7.7641C21.4003 8.80121 20.5674 9.63429 19.5524 9.63429H16.2858C15.2697 9.63429 14.4369 8.80105 14.4369 7.7641V4.47018C14.4369 3.43237 15.2695 2.6 16.2858 2.6Z"
                          stroke="#020105"
                          stroke-width="1.2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M4.44892 2.6H7.71449C8.73078 2.6 9.56341 3.43237 9.56341 4.47018V7.7641C9.56341 8.80105 8.73062 9.63429 7.71449 9.63429H4.44892C3.43279 9.63429 2.6 8.80105 2.6 7.7641V4.47018C2.6 3.43237 3.43263 2.6 4.44892 2.6Z"
                          stroke="#020105"
                          stroke-width="1.2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M4.44892 14.3656H7.71449C8.73062 14.3656 9.56341 15.1978 9.56341 16.2368V19.5297C9.56341 20.5675 8.73078 21.3999 7.71449 21.3999H4.44892C3.43263 21.3999 2.6 20.5675 2.6 19.5297V16.2368C2.6 15.1978 3.43279 14.3656 4.44892 14.3656Z"
                          stroke="#020105"
                          stroke-width="1.2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M16.2858 14.3656H19.5524C20.5674 14.3656 21.4003 15.1977 21.4003 16.2368V19.5297C21.4003 20.5677 20.5675 21.3999 19.5524 21.3999H16.2858C15.2695 21.3999 14.4369 20.5675 14.4369 19.5297V16.2368C14.4369 15.1978 15.2697 14.3656 16.2858 14.3656Z"
                          stroke="#020105"
                          stroke-width="1.2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
              <div
                class="category__category-controller"
                :class="{ three: gridControl == 3 }"
              >
                <CardProduct modal="id1"/>
                <CardProduct />
                <CardProduct />
                <CardProduct />
                <CardProduct />
                <CardProduct />
                <CardProduct />
                <CardProduct />
                <CardProduct />
                <CardProduct />
                <CardProduct />
                <CardProduct />
              </div>
              <div class="category__pagination">
                <el-pagination layout="prev, pager, next" :total="100">
                </el-pagination>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="row"></div>
    </div>
    <homeTitliesVue title="Хиты продаж" link="Все товары" />
    <div class="container">
      <div class="row">
        <div class="col-12 category__product-controller">
          <CardProduct />
          <CardProduct />
          <CardProduct />
          <CardProduct />
          <CardProduct />
          <CardProduct />
          <CardProduct />
          <CardProduct />
          <CardProduct />
          <CardProduct />
          <CardProduct />
          <CardProduct />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import CardCategory from "@/components/cards/cardCategory.vue";
import CardProduct from "@/components/cards/cardProduct.vue";
import BreadCrumb from "@/components/category/breadCrumb.vue";
import TitleCategory from "@/components/category/titleCategory.vue";
import homeTitliesVue from "@/components/homeTitlies.vue";
import RangeSlider from "vue-range-slider";
import "vue-range-slider/dist/vue-range-slider.css";
import MultiRangeSlider from "multi-range-slider-vue";

export default {
  data() {
    return {
      selected: "",
      sliderValue: 50,
      barMinValue: 100000,
      barMaxValue: 1000000,
      checkbox: "",
      gridControl: 5,
      links: [
        {
          name: "Главный",
          to: "/",
        },
        {
          name: "Мебель",
          to: "/category",
        },
      ],
    };
  },
  methods: {
    UpdateValues(e) {
      this.barMinValue = e.minValue;
      this.barMaxValue = e.maxValue;
    },
  },
  components: {
    BreadCrumb,
    TitleCategory,
    CardProduct,
    CardCategory,
    homeTitliesVue,
    RangeSlider,
    MultiRangeSlider,
  },
};
</script>
<style lang="scss">
.category {
  .grid_block {
    display: grid;
    grid-template-columns: 2fr 10fr;
    grid-gap: 40px;
  }
  padding-top: 32px;
  .five {
    grid-template-columns: repeat(5, 1fr);
  }
  .three {
    grid-template-columns: repeat(3, 1fr);
  }
  &__pagination {
    margin-top: 40px;
    .el-pager {
      display: flex;
    }
    .el-pagination {
      white-space: nowrap;
      padding: 2px 5px;
      color: #303133;
      font-weight: 700;
      display: flex;
      align-items: center;
    }
    .el-pager li.active {
      color: #fff;
      cursor: default;
      border-radius: 50%;
      background: #ff6418;
      &:hover {
        color: #fff;
      }
    }
    .el-pager li {
      padding: 0 4px;
      background: #fff;
      font-size: 18px;
      min-width: 55px;
      height: 55px;
      line-height: 28px;
      box-sizing: border-box;
      text-align: center;
      display: flex;
      justify-content: center;
      align-items: center;
      &:hover {
        color: rgba(255, 100, 24, 0.8);
      }
    }
  }
  .range-checkbox {
    span {
      font-family: "Inter";
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 24px;
      /* identical to box height, or 150% */

      /* Qora */

      color: #020105;
    }
    input[type="checkbox"] {
      margin-bottom: 16px;
      margin-right: 15px;
      accent-color: red;
      border-radius: 3.5px;
      outline: none;
      content: none;
    }
    input[type="checkbox"]:checked:before {
      color: black !important;
    }
  }
  &__colors {
    display: grid;
    grid-gap: 16px;
    grid-template-columns: repeat(5, 1fr);
    margin-bottom: 40px;
    .checkbox {
      width: 32px;
      height: 32px;
      border: 1px solid red;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      background: red;
      align-items: center;
      span {
        width: 100%;
        height: 100%;
        border-radius: 50%;
        // background: red;
        border: 5px solid #fff;
      }
    }
  }
  &__range {
    .range-count {
      display: grid;
      grid-gap: 24px;
      grid-template-columns: repeat(2, 1fr);
      padding-bottom: 40px;
      .range-min,
      .range-max {
        display: flex;
        align-items: center;
        height: 40px;
        padding: 8px 10px;
        background: #f9f9f9;
        border: 1px solid #d9d9d9;
        border-radius: 6px;

        input {
          border: none;
          background: #f9f9f9;
          width: 100%;
          padding-left: 5px;
          font-family: "Inter";
          font-style: normal;
          font-weight: 400;
          font-size: 14px;
          line-height: 20px;
          /* identical to box height, or 143% */

          /* Grey */

          color: #727474;
          &:focus-visible {
            border: none;
            outline: none;
            box-shadow: none;
          }
        }
        span {
          display: flex;
          align-items: center;
          font-family: "Inter";
          font-style: normal;
          font-weight: 400;
          font-size: 14px;
          line-height: 20px;
          /* identical to box height, or 143% */

          /* Qora */

          color: #020105;
        }
      }
    }
    .multi-range-slider {
      border: none;
      border-radius: 10px;
      padding: 20px 10px;
      box-shadow: none;
    }
    .multi-range-slider .bar-left {
      width: 25%;
      background-color: #f0f0f0;
      border-radius: 10px 0px 0px 10px;
      box-shadow: none;
      padding: 2px 0px;
    }
    .multi-range-slider .bar-inner {
      background-color: #ff6418;
      display: flex;
      flex-grow: 1;
      flex-shrink: 1;
      justify-content: space-between;
      position: relative;
      border: none;
      justify-content: space-between;
      box-shadow: none;
    }
    .multi-range-slider .bar-right {
      width: 25%;
      background-color: #f0f0f0;
      border-radius: 0px 10px 10px 0px;
      box-shadow: none;
    }
    .multi-range-slider .thumb::before {
      content: "";
      background-color: white;
      position: absolute;
      width: 20px;
      height: 20px;
      border: solid 1px #ef3f27;
      box-shadow: none;
      border-radius: 50%;
      z-index: 1;
      margin: -8px;
      cursor: pointer;
    }
    .multi-range-slider .thumb .caption * {
      position: absolute;
      min-width: 30px;
      height: 30px;
      font-size: 75%;
      text-align: center;
      line-height: 30px;
      background-color: #ef3f27;
      border-radius: 15px;
      color: white;
      box-shadow: none;
      padding: 0px 5px;
      white-space: nowrap;
    }
  }
  &__category-controller {
    padding-top: 32px;
    display: grid;
    grid-gap: 20px;
    @media (max-width: 1440px) {
      padding-top: 24px; 
    }
  }
  &__product-controller {
    padding-top: 32px;
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    grid-gap: 24px;
  }
  &__list-box1 {
    ul {
      padding-left: 0;
      font-family: "Inter";
      font-size: 16px;
      font-weight: 400;
      line-height: 24px;
      letter-spacing: 0em;
      text-align: left;
    }
    h2 {
      font-family: "Inter";
      font-size: 20px;
      font-weight: 600;
      line-height: 28px;
      letter-spacing: 0em;
      text-align: left;
      margin-bottom: 16px;
    }
  }
  &__list-active {
    display: block;
    margin-top: 12px;
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #000 !important;
    cursor: pointer;
  }
  &__list1 {
    list-style: none;
    padding-left: 0;

    li {
      span {
        display: block;
        margin-top: 12px;
        font-family: "Inter";
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 24px;
        color: #727474;
        cursor: pointer;
      }
      ul {
        list-style: none;
        padding-left: 16px;
        li {
          color: #000;
        }
      }
    }
  }
}
.category-title {
  padding-top: 8px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  h1 {
    font-family: "Inter";
    font-style: normal;
    font-weight: 500;
    font-size: 40px;
    line-height: 48px;
    color: #020105;
  }
  .category-control {
    span {
      margin-right: 16px;
    }
    .el-dropdown-link {
      i {
        margin-left: 77px;
      }
      font-family: "Inter";
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 20px;
      /* identical to box height, or 143% */

      /* Black */

      color: #020105;
      padding: 10px 12px;
      border: 1px solid #ebebeb;
      border-radius: 4px;
    }
  }
}
</style>
