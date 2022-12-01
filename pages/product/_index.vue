<template lang="html">
  <div class="container product">
    <div class="row">
      <div class="col-12">
        <BreadCrumb :links="links" last="Геймерское кресло Audi" />
      </div>
    </div>
    <div class="row">
      <div class="col-12 product__body-control">
        <div class="product__img-carousel">
          <div class="carousel-items">
            <div class="carousel-img activeImg">
              <img
                src="../../assets/images/image 24.png"
                @click="carouselChange = '../../assets/images/image 24.png'"
                alt=""
              />
            </div>
            <div class="carousel-img">
              <img
                src="../../assets/images/image 24.png"
                @click="carouselChange = '../../assets/images/image 34.png'"
                alt=""
              />
            </div>
            <div class="carousel-img">
              <img
                src="../../assets/images/image 34.png"
                @click="carouselChange = '../../assets/images/image 40.png'"
                alt=""
              />
            </div>
            <div class="carousel-img">
              <img src="../../assets/images/image 24.png" alt="" />
            </div>
            <div class="carousel-img">
              <img src="../../assets/images/image 40.png" alt="" />
            </div>
            <div class="carousel-img">
              <img src="../../assets/images/image 24.png" alt="" />
            </div>
            <div class="carousel-img">
              <img src="../../assets/images/image 34.png" alt="" />
            </div>
            <div class="carousel-img">
              <img src="../../assets/images/image 40.png" alt="" />
            </div>
          </div>
          <div class="carousel-banner">
            <img src="../../assets/images/image 40.png" alt="" />
          </div>
        </div>
        <div class="product__types">
          <ProductHeaderInfo :hide="true" />
          <div class="product__types-title">
            <h1>ОФИСНОЕ КРЕСЛО 6206A-2</h1>
          </div>
          <p>Производитель: <span>Cougar</span></p>
          <p>Модель: <span>6206A-2 </span></p>
          <div class="product__types-colors">
            <p>Цвет:</p>
            <div class="product__types-color">
              <div
                @click="productColor = 'red'"
                :class="{ activeColor: productColor == 'red' }"
              >
                <span style="background: red"></span>
              </div>
              <div
                @click="productColor = '#781ecd'"
                :class="{ activeColor: productColor == '#781ecd' }"
              >
                <span style="background: #781ecd"></span>
              </div>
              <div
                @click="productColor = '#00cd69'"
                :class="{ activeColor: productColor == '#00cd69' }"
              >
                <span style="background: #00cd69"></span>
              </div>
            </div>
          </div>
          <div class="product__types-sizies">
            <p>Размер:</p>
            <div class="product__types-size">
              <div
                @click="productSize = 32"
                :class="{ activeSize: productSize == 32 }"
              >
                32 gb
              </div>
              <div
                @click="productSize = 64"
                :class="{ activeSize: productSize == 64 }"
              >
                64 gb
              </div>
              <div
                @click="productSize = 128"
                :class="{ activeSize: productSize == 128 }"
              >
                128 gb
              </div>
              <div
                @click="productSize = 256"
                :class="{ activeSize: productSize == 256 }"
              >
                256 gb
              </div>
              <div
                @click="productSize = 512"
                :class="{ activeSize: productSize == 512 }"
              >
                512 gb
              </div>
            </div>
          </div>
          <div class="product__types-sizies">
            <p>Размер RAM:</p>
            <div class="product__types-size">
              <div
                @click="productSizeRam = 4"
                :class="{ activeSize: productSizeRam == 4 }"
              >
                4 gb
              </div>
              <div
                @click="productSizeRam = 8"
                :class="{ activeSize: productSizeRam == 8 }"
              >
                8 gb
              </div>
              <div
                @click="productSizeRam = 16"
                :class="{ activeSize: productSizeRam == 16 }"
              >
                16 gb
              </div>

              <div
                @click="productSizeRam = 512"
                :class="{ activeSize: productSizeRam == 512 }"
              >
                512 gb
              </div>
            </div>
          </div>
          <div class="product__types-sizies">
            <p>SIM:</p>
            <div class="product__types-size">
              <div
                @click="productSim = 'sim'"
                :class="{ activeSize: productSim == 'sim' }"
              >
                SIM
              </div>
              <div
                @click="productSim = 'e-sim'"
                :class="{ activeSize: productSim == 'e-sim' }"
              >
                E-SIM
              </div>
            </div>
          </div>
          <div class="product__types-sizies">
            <p>Количество:</p>
            <div class="product__types-count">
              <div>
                <span>-</span>
                <p>1</p>
                <span>+</span>
              </div>
              <p class="count">Осталось всего 4</p>
            </div>
          </div>
        </div>
        <div class="product__price-box">
          <CardProductPrice />
          <div class="product__order-card">
            <div class="body">
              <div class="title">
                <h4>Доставка</h4>
              </div>
              <span> <p>Доставка к курьером на дом</p></span>
            </div>
            <img src="../../assets/images/image 87.png" alt="" />
          </div>
          <div class="product__order-card2">
            <img src="../../assets/images/image 89.png" alt="" />
            <div class="body">
              <div class="title">
                <h4>ОБРАТИТЕСЬ К СПЕЦИАЛИСТУ!</h4>
              </div>
              <div class="d-flex">
                <span> <p>Служба поддержки: (998-71) 200-7-002</p></span>

                <nuxt-link to="/">ЕСТЬ ВОПРОСЫ?</nuxt-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-12 product__desc-control">
        <div>
          <el-tabs v-model="activeName" @tab-click="handleClick">
            <el-tab-pane label="Описание товара" name="first"
              ><p class="product__desc">
                Геймерские <Svg /> кресла 6206A-2 выполнено в сочетание
                фиолетового и черного. Модель выглядит элегантно и лаконично,
                поэтому она подойдет как в современный офис, так и в более
                консервативные заведения. Полозья выполнены из крепкого металла,
                при этом они разбираются, что очень удобно при сборке. Для более
                удобного долгого сидения сделаны широкие подлокотники из
                прочного пластика. Геймерские кресла 6206A-2 соответствует
                американскому стандарту Cougar, который создан компетентным
                техническим комитетом. Обивка выполнена из нескольких материалов
                - сидение сделано из дышащей ткани черного цвета для комфортного
                нахождения в кресле, а спинка из воздухопроницаемой сетки того
                же оттенка. Нагрузка на модель не может превышать 120 кг.
              </p></el-tab-pane
            >
            <el-tab-pane label="Отзывы (1)" name="second"
              ><div class="product__comment-block">
                <CardComment />
                <CardComment />
                <CardComment />
                <CardComment />
                <CardComment />

                <CardComment /></div
            ></el-tab-pane>
            <el-tab-pane label="Характеристики" name="third">
              <div>
                <div class="product__character-card">
                  <div><h2>Основные характеристики</h2></div>
                  <div class="ch-card_control">
                    <div>
                      <ProductCharactertable />
                      <ProductCharactertable />
                      <ProductCharactertable />
                      <ProductCharactertable />
                    </div>
                  </div>
                </div>
              </div>
            </el-tab-pane>
          </el-tabs>
        </div>
        <div></div>
      </div>
    </div>
  </div>
</template>
<script>
import BreadCrumb from "../../components/category/breadCrumb.vue";
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
import "vue-inner-image-zoom/lib/vue-inner-image-zoom.css";
import CardComment from "../../components/cards/cardComment.vue";
import Svg from "../../assets/svg/Bag.svg";
import CardProductPrice from "../../components/cards/cardProductPrice.vue";
import ProductCharactertable from "../../components/product/productCharactertable.vue";
import ProductHeaderInfo from "../../components/product/productHeaderInfo.vue";
export default {
  data() {
    return {
      productColor: "red",
      productSize: 32,
      productSizeRam: 4,
      productSim: "sim",
      carouselChange: "/assets/images/image 40.png",
      activeName: "first",
      links: [
        {
          name: "Главный",
          to: "/",
        },
        {
          name: "Офисная мебель",
          to: "/category",
        },
      ],
    };
  },
  components: {
    BreadCrumb,
    VueSlickCarousel,
    CardComment,
    Svg,
    CardProductPrice,
    ProductCharactertable,
    ProductHeaderInfo,
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    },
  },
};
</script>
<style lang="scss">
.product {
  .el-tabs__item {
    font-family: "Inter";
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 26px;

    color: #5d5d5f;
  }
  padding-top: 32px;
  .el-tabs__active-bar {
    position: absolute;
    bottom: 0;
    left: 0;
    height: 3px;
    background-color: #000;
    z-index: 1;
    transition: transform 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
    list-style: none;
  }
  .el-tabs__item.is-active {
    color: #020105 !important;
    font-weight: 500;
  }
  &__comment-block {
    padding-top: 32px;
    width: 80%;
  }
  &__comment-card {
    padding-bottom: 32px;
    margin-bottom: 32px;
    border-bottom: 1px solid #f2f2fa;
    .title {
      h3 {
        font-family: "Inter";
        font-style: normal;
        font-weight: 600;
        font-size: 16px;
        line-height: 24px;
        /* identical to box height, or 150% */

        color: #000000;
      }
      padding-bottom: 8px;
    }
    .reyting {
      display: flex;
      .stars {
        display: flex;
        align-items: center;
      }
      .date {
        padding-left: 30px;
        p {
          font-family: "Inter";
          font-style: normal;
          font-weight: 400;
          font-size: 14px;
          line-height: 20px;
          display: flex;
          align-items: center;
          color: #727474;
        }
      }
    }
    .comment {
      padding-top: 16px;
      p {
        font-family: "Inter";
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 24px;
        display: flex;
        align-items: center;
        color: #727474;
      }
    }
  }
  &__character-card {
    padding-top: 32px;
    .ch-card_control {
      display: grid;

      grid-template-columns: repeat(2, 1fr);
      grid-gap: 100px;
    }
    h2 {
      font-family: "Inter", sans-serif;
      font-style: normal;
      font-weight: 600;
      font-size: 18px;
      line-height: 24px;
      margin-bottom: 32px;
      /* identical to box height, or 133% */

      display: flex;
      align-items: center;

      color: #000000;
    }
    .body {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding-bottom: 24px;
      span {
        display: block;
        border-bottom: 1px dashed #c2c2c3;
        width: 100%;
      }
      p {
        font-family: "Inter";
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 20px;
        display: flex;
        align-items: center;
        color: #727474;
        display: inline;
        white-space: nowrap;
      }
      p:first-child {
        color: #727474;
        margin-right: 8px;
      }
      p:last-child {
        color: #000;
        margin-left: 8px;
      }
    }
  }
  &__desc-control {
    padding-top: 32px;
    display: grid;
    grid-template-columns: 11.5fr 4fr;
    grid-gap: 24px;
  }
  &__desc {
    margin-top: 30px;
    width: 90%;
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 28px;
    color: #727474;
  }
  &__order-card2 {
    margin-top: 32px;
    padding: 24px;
    border: 1px solid #f2f2fa;
    border-radius: 8px;
    display: grid;
    grid-template-columns: 5fr 2fr;
    position: relative;
    img {
      position: absolute;
      width: 30%;
      right: 0;
      top: 0;
      height: 100%;
      object-fit: contain;
    }
    .title {
      h4 {
        display: inline;
        font-family: "Inter";
        font-style: normal;
        font-weight: 600;
        font-size: 15px;
        line-height: 32px;
        border-bottom: 1px dashed #000;
        color: #020105;
        padding-bottom: 4px;
      }
    }
    .body {
      display: flex;
      justify-content: center;
      flex-direction: column;
      width: 110%;
      a {
        font-family: "TT Firs Neue";
        font-style: normal;
        font-weight: 500;
        font-size: 10px;
        line-height: 24px;
        /* identical to box height, or 171% */

        letter-spacing: -0.01em;
        text-transform: uppercase;
        margin-top: 20px;

        color: #ff6418;
      }
      span {
        width: 60%;
      }
      p {
        display: block;
        margin-top: 20px;
        font-family: "Inter";
        font-style: normal;
        font-weight: 400;
        font-size: 15px;
        line-height: 24px;
        letter-spacing: -0.01em;
        color: #727474;
      }
    }
  }
  &__order-card {
    margin-top: 32px;
    padding: 24px;
    border: 1px solid #f2f2fa;
    border-radius: 8px;
    position: relative;
    img {
      bottom: 0;
      right: 0;
      position: absolute;
      width: 45%;
      height: 100%;
      object-fit: contain;
    }
    .title {
      h4 {
        display: inline;
        font-family: "Inter";
        font-style: normal;
        font-weight: 600;
        font-size: 20px;
        line-height: 32px;
        padding-bottom: 4px;
        border-bottom: 1px dashed #000;
        color: #020105;
      }
    }
    .body {
      display: flex;
      justify-content: center;
      width: 60%;
      flex-direction: column;

      p {
        display: block;
        margin-top: 20px;
        font-family: "Inter";
        font-style: normal;
        font-weight: 400;
        font-size: 15px;
        line-height: 24px;
        letter-spacing: -0.01em;
        color: #727474;
      }
    }
  }
  &__types-count {
    display: flex;
    align-items: center;
    .count {
      margin-bottom: 0 !important;
      margin-left: 16px;
    }
    div {
      display: flex;
      justify-content: center;
      padding: 12px 16px;
      border: 1px solid #f2f2fa;
      border-radius: 4px;
      p {
        padding-left: 27px;
        padding-right: 27px;
        margin-bottom: 0;
        font-family: "Inter";
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        line-height: 24px;
        /* identical to box height, or 120% */

        /* Black */

        color: #020105;
      }
      span {
        font-family: "Inter";
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        line-height: 24px;
        color: #020105;
        cursor: pointer;
      }
    }
  }

  &__types-size {
    width: inherit;
    display: flex;
    div {
      border: 1px solid #f2f2fa;
      margin-right: 15px;
      border-radius: 4px;
      padding: 10px 13px;
      font-family: "Inter";
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 24px;
      cursor: pointer;
      color: #020105;
      transition: 0.3s;

      span {
        border-radius: 4px;
        display: block;
        width: 100%;
        height: 100%;
      }
    }
    .activeSize {
      border: 1px solid #ff6418;
    }
  }
  &__types-sizies {
    padding-top: 25px;
  }
  &__types-color {
    width: inherit;
    display: flex;

    div {
      width: 46px;
      height: 54px;
      border: 1px solid #f2f2fa;
      margin-right: 15px;
      border-radius: 4px;
      padding: 3px;
      cursor: pointer;
      transition: 0.3s;
      span {
        border-radius: 4px;
        display: block;
        width: 100%;
        height: 100%;
      }
    }
    .activeColor {
      border: 1px solid #ff6418;
    }
  }
  &__types-colors {
    padding-top: 8px;
  }
  &__types {
    p {
      font-family: "Inter", sans-serif;
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 24px;
      margin-bottom: 16px;
      color: #5d5d5f;
      span {
        font-family: "Inter";
        font-style: normal;
        font-weight: 600;
        font-size: 16px;
        line-height: 24px;

        color: #020105;
        margin-left: 8px;
      }
    }
  }
  &__body-control {
    padding-top: 32px;
    display: grid;
    grid-template-columns: 6fr 5.5fr 4fr;
    grid-gap: 24px;
  }
  &__img-carousel {
    display: grid;
    grid-template-columns: 1fr 6fr;
    grid-gap: 20px;
    height: 530px;
    overflow: hidden;
    .carousel-items {
      display: grid;
      grid-template-columns: 1fr;
      grid-gap: 20px;
      overflow-y: scroll;
      &::-webkit-scrollbar {
        display: none; /* for Chrome, Safari, and Opera */
      }
    }
    .carousel-img {
      width: 80px;
      height: 80px;
      border: 1px solid #f2f2fa;
      border-radius: 4px;
      transform: matrix(-1, 0, 0, 1, 0, 0);
      img {
        width: 100%;
        height: 100%;
        object-fit: contain;
      }
    }
    .carousel-banner {
      border: 1px solid #f3f3fa;
      border-radius: 16px;
      height: 99%;
      img {
        width: 100%;
        height: 529px;
        object-fit: contain;
      }
    }
    .activeImg {
      border: 1px solid #ff6418;
      border-radius: 4px;
    }
  }

  &__types-title {
    padding-top: 16px;
    padding-bottom: 24px;
    h1 {
      font-family: "TT Firs Neue";
      font-style: normal;
      font-weight: 500;
      font-size: 28px;
      line-height: 36px;
      color: #020105;
      margin-bottom: 0;
    }
  }
}
</style>
