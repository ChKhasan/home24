<template lang="html">
  <div class="container product">
    <div class="row">
      <div class="col-12">
        <b-skeleton v-if="skeleton" animation="wave" width="100%"></b-skeleton>
        <BreadCrumb v-else :links="links" :last="product.product?.name" />
      </div>
    </div>
    <div class="row">
      <div class="col-12 product__body-control">
        <div class="product__img-carousel">
          <div class="carousel-items">
            <div
              v-if="product.images?.length > 0"
              v-for="img in product.images"
              class="product_carousel-img"
              :class="{ activeImg: carouselChange == img.image }"
            >
              <img
                :src="img.image"
                @click="carouselChange = img.image"
                alt=""
              />
            </div>
            <div v-else class="product_carousel-img activeImg">
              <img src="../../assets/images/image 34.png" alt="" />
            </div>
          </div>
          <div class="carousel-banner">
            <img
              v-if="product.images?.length > 0"
              :src="carouselChange"
              alt=""
            />
            <img v-else src="../../assets/images/image 34.png" alt="" />
          </div>
        </div>
        <div class="product__types">
          <b-skeleton
            v-if="skeleton"
            animation="wave"
            width="100%"
          ></b-skeleton>
          <ProductHeaderInfo
            v-else
            :hide="true"
            :product="product"
            :commentCount="comments.length"
          />
          <div class="product__types-title">
            <b-skeleton
              v-if="skeleton"
              animation="wave"
              height="40px"
              width="100%"
            ></b-skeleton>

            <h1 v-else>{{ product.product?.name }}</h1>
          </div>
          <p v-if="product.product?.brand">
            Производитель:
            <b-skeleton
              v-if="skeleton"
              animation="wave"
              width="25%"
            ></b-skeleton
            ><span v-else>{{ product.product?.brand }}</span>
          </p>
          <p>
            Модель:
            <b-skeleton
              v-if="skeleton"
              animation="wave"
              width="25%"
            ></b-skeleton>
            <span v-else>{{ product.product?.model }}</span>
          </p>
          <div class="product__types-colors">
            <p>Цвет:</p>
            <div class="product__types-color">
              <b-skeleton
                v-if="skeleton"
                animation="wave"
                height="70px"
                width="25%"
              ></b-skeleton>
              <div
                v-else
                class="colors"
                v-for="color in product.colors"
                @click="fetchProductByOption(color?.variant)"
                :class="{
                  activeColor: color?.id == product.color.id,
                  disabledOption: color?.variant == null,
                }"
              >
                <div
                  v-if="color?.variant == null"
                  :class="{
                    nullClassColor: color?.variant == null,
                  }"
                ></div>
                <span :style="{ background: color.hex }"> </span>
              </div>
            </div>
          </div>
          <b-skeleton v-if="skeleton" animation="wave" width="25%"></b-skeleton>
          <b-skeleton
            v-if="skeleton"
            animation="wave"
            height="70px"
            width="45%"
          ></b-skeleton>
          <div
            v-else
            class="product__types-sizies"
            v-for="attrebut in product?.atributs"
          >
            <p>{{ attrebut?.name }}:</p>
            <div class="product__types-size">
              <div
                class="options_style"
                v-for="elements in attrebut.options"
                @click="fetchProductByOption(elements?.variant)"
                :class="{
                  activeSize: product?.options.includes(elements.id),
                  disabledOption: elements?.variant == null,
                }"
              >
                {{ elements?.name }}
                <div
                  :class="{
                    nullClass: elements?.variant == null,
                  }"
                ></div>
              </div>
            </div>
          </div>
          <div
            class="product_count"
            v-if="$store.state.cart.find((item) => item.id == product.id)"
          >
            <p>Количество:</p>
            <b-skeleton
              v-if="skeleton"
              animation="wave"
              height="70px"
              width="45%"
            ></b-skeleton>
            <div class="sc-count" v-else>
              <div class="sc-count-btn">
                <span @click="updateCount(false, product)"
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
                <p>
                  {{ checkCart.count }}
                </p>
                <span @click="updateCount(true, product)"
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
              <span>Осталось всего {{ product.qty }}</span>
            </div>
          </div>
        </div>
        <div class="product__price-box">
          <CardProductPrice :product="product" />
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
            <el-tab-pane label="Описание товара" name="first">
              <div class="product__desc">
                <p class="" v-html="product.matching"></p>
              </div>
            </el-tab-pane>
            <el-tab-pane :label="`Отзывы (${comments.length})`" name="second"
              ><div class="product__comment-block">
                <div class="comments_blog">
                  <CardComment
                    v-for="comment in comments"
                    :key="comment.id"
                    :comment="comment"
                  />
                </div>
                <div class="comments_reyting">
                  <div class="comments_reyting__c-header">
                    <el-rate
                      v-model="value"
                      disabled
                      :texts="[
                        '1 оценок',
                        '2 оценок',
                        '3 оценок',
                        '4 оценок',
                        '5 оценок',
                      ]"
                      show-text
                    >
                    </el-rate>
                    <p>5/<span>5</span></p>
                  </div>
                  <div class="comments_reyting__c-body">
                    <div class="reyting_card">
                      <el-rate v-model="rate.rate1" disabled></el-rate>
                      <div class="progress">
                        <span
                          :style="{ width: `${(rate.rate1 * 100) / 5}%` }"
                        ></span>
                      </div>
                      <p>{{ rate.rate1 }}</p>
                    </div>
                    <div class="reyting_card">
                      <el-rate v-model="rate.rate2" disabled></el-rate>
                      <div class="progress">
                        <span :style="{ width: `${(rate.rate2 * 100) / 5}%` }">
                        </span>
                      </div>
                      <p>{{ rate.rate2 }}</p>
                    </div>
                    <div class="reyting_card">
                      <el-rate v-model="rate.rate3" disabled></el-rate>
                      <div class="progress">
                        <span
                          :style="{ width: `${(rate.rate3 * 100) / 5}%` }"
                        ></span>
                      </div>
                      <p>{{ rate.rate3 }}</p>
                    </div>
                    <div class="reyting_card">
                      <el-rate v-model="rate.rate4" disabled></el-rate>
                      <div class="progress">
                        <span
                          :style="{ width: `${(rate.rate4 * 100) / 5}%` }"
                        ></span>
                      </div>
                      <p>{{ rate.rate4 }}</p>
                    </div>
                    <div class="reyting_card">
                      <el-rate v-model="rate.rate5" disabled></el-rate>
                      <div class="progress">
                        <span
                          :style="{ width: `${(rate.rate5 * 100) / 5}%` }"
                        ></span>
                      </div>
                      <p>{{ rate.rate5 }}</p>
                    </div>
                  </div>
                  <div class="comments_reyting__c-btn" v-if="checkAuth">
                    <div @click="show('new-review-modal')">
                      Оставить первый отзыв
                    </div>
                  </div>
                </div>
              </div></el-tab-pane
            >
            <el-tab-pane label="Характеристики" name="third">
              <div>
                <div class="product__character-card" v-for="productInner in product.specification">
                  <div><h2>{{productInner.name}}</h2></div>
                  <div class="ch-card_control">
                      <div class="p-character-card" v-for="item in productInner.items">
                        <div class="body">
                          <p>{{item.specification}}</p>
                          <span></span>
                          <p>{{item.value}}</p>
                        </div>
                      </div>
                      <div class="p-character-card">
                        <div class="body">
                          <p>Бренд</p>
                          <span></span>
                          <p>Xiaomi</p>
                        </div>
                      </div>
                      <div class="p-character-card">
                        <div class="body">
                          <p>Бренд</p>
                          <span></span>
                          <p>Xiaomi</p>
                        </div>
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
    <modal name="new-review-modal" width="590px" height="auto">
      <div>
        <div class="send-review-modal">
          <div class="send-review-modal__m-header">
            <h1 class="m-header-title">Новый отзыв</h1>
            <span @click="hide('new-review-modal')">
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
    <modal name="review-accepted-modal" width="590px" height="auto">
      <div>
        <div class="send-review-modal">
          <div class="send-review-modal__m-header">
            <h1 class="m-header-title">Отзыв принят</h1>
            <span @click="hide('review-accepted-modal')">
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
              <div class="show-btn" @click="hide('review-accepted-modal')">
                Хорошо
              </div>
            </div>
          </div>
        </div>
      </div>
    </modal>
    <div class="product_scroll_info" ref="navScroll">
      <div class="container">
        <div class="row">
          <div class="col-12 product_scroll_info__container">
            <div class="product_carousel-img">
              <b-skeleton
                v-if="skeleton"
                animation="wave"
                width="80px"
                height="80px"
              ></b-skeleton>
              <img v-else :src="product.images[0].image" alt="" />
            </div>
            <div class="product_scroll_info__body">
              <div class="d-flex flex-column product_scroll_info__title">
                <h4>
                  {{ product.product?.name }}
                </h4>
                <b-skeleton
                  v-if="skeleton"
                  animation="wave"
                  width="100%"
                ></b-skeleton>
                <div>
                  <div class="product-header-info">
                    <span v-if="product.rating">
                      <svg
                        width="12"
                        height="12.67"
                        viewBox="0 0 16 17"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M8.47609 2.79389L10.0201 5.89989C10.0974 6.05655 10.2468 6.16589 10.4201 6.19122L13.8768 6.69055C14.0168 6.70922 14.1428 6.78255 14.2288 6.89455C14.3901 7.10455 14.3654 7.40189 14.1721 7.58255L11.6668 10.0052C11.5394 10.1252 11.4828 10.3012 11.5161 10.4726L12.1161 13.8912C12.1581 14.1746 11.9648 14.4399 11.6814 14.4859C11.5641 14.5039 11.4441 14.4852 11.3374 14.4326L8.25876 12.8186C8.10409 12.7346 7.91876 12.7346 7.76409 12.8186L4.66276 14.4412C4.40342 14.5732 4.08609 14.4752 3.94476 14.2212C3.89076 14.1186 3.87209 14.0019 3.89076 13.8879L4.49076 10.4692C4.52076 10.2986 4.46409 10.1232 4.34009 10.0026L1.82142 7.58055C1.61609 7.37655 1.61476 7.04455 1.81942 6.83922C1.82009 6.83855 1.82076 6.83722 1.82142 6.83655C1.90609 6.75989 2.01009 6.70855 2.12276 6.68855L5.58009 6.18922C5.75276 6.16189 5.90142 6.05389 5.98009 5.89722L7.52276 2.79389C7.58476 2.66789 7.69476 2.57122 7.82809 2.52722C7.96209 2.48255 8.10876 2.49322 8.23476 2.55655C8.33809 2.60789 8.42276 2.69122 8.47609 2.79389Z"
                          fill="#F6C65C"
                        /></svg
                      >{{ product.rating }}</span
                    >
                    <p>
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M5.12963 8.92694C4.69979 8.92694 4.35059 8.57774 4.35059 8.1479C4.35059 7.71932 4.69979 7.37012 5.12963 7.37012C5.55948 7.37012 5.90868 7.71932 5.90868 8.1479C5.90868 8.57774 5.55948 8.92694 5.12963 8.92694ZM8.15821 8.92694C7.72836 8.92694 7.37916 8.57774 7.37916 8.1479C7.37916 7.71932 7.72836 7.37012 8.15821 7.37012C8.58805 7.37012 8.93725 7.71932 8.93725 8.1479C8.93725 8.57774 8.58805 8.92694 8.15821 8.92694ZM10.4078 8.1479C10.4078 8.57774 10.757 8.92694 11.1868 8.92694C11.6167 8.92694 11.9659 8.57774 11.9659 8.1479C11.9659 7.71932 11.6167 7.37012 11.1868 7.37012C10.757 7.37012 10.4078 7.71932 10.4078 8.1479Z"
                          fill="#727474"
                        />
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M8.01301 1.33301C4.13967 1.33301 1.33301 4.49709 1.33301 8.00969C1.33301 9.13137 1.65967 10.2858 2.23301 11.3407C2.33967 11.5149 2.35301 11.7346 2.27967 11.9423L1.83301 13.4378C1.73301 13.7984 2.03967 14.0648 2.37967 13.9579L3.72634 13.558C4.09301 13.4378 4.37967 13.5907 4.71967 13.7984C5.69301 14.3719 6.90634 14.6663 7.99967 14.6663C11.3063 14.6663 14.6663 12.1092 14.6663 7.98966C14.6663 4.437 11.7997 1.33301 8.01301 1.33301Z"
                          stroke="#727474"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                      {{
                        comments.length
                          ? comments.length
                          : product.comments_count
                      }}
                      Отзывов
                    </p>
                    <p>Код товара: {{ product.id }}</p>
                  </div>
                </div>
              </div>
              <div class="product_scroll_info__price">
                <h5>{{ product.price }} СУМ</h5>
                <p>{{ product.total }} СУМ</p>
              </div>
              <div class="d-flex">
              <div class="product_scroll_info__btns">
                <div class="buy_now_btn" @click="showModal">Купить сейчас</div>
                <div class="to_cart_btn"  @click="
            $store.commit('addToStoreCart', {
              id: product.id,
              name: 'cart',
              count: 1,
            })
          "
          :class="{ disabledDiv: includesCart($store.state.cart, product.id) }">В корзину</div>
              </div>
              <div class="d-flex align-items-center">
                <span
                style="cursor: pointer"
            @click="
              $store.commit('addToStore', {
                id: product.id,
                name: 'like',
              })
            "
            :class="{ activeSvg: includes($store.state.like, product.id) }"
          >
            <svg
              width="28"
              height="28"
              viewBox="0 0 22 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M10.761 18.8538C8.5904 17.5179 6.57111 15.9456 4.73929 14.1652C3.45144 12.8829 2.47101 11.3198 1.8731 9.59539C0.797144 6.25031 2.05393 2.42083 5.57112 1.28752C7.41961 0.692435 9.43845 1.03255 10.9961 2.20148C12.5543 1.03398 14.5725 0.693978 16.4211 1.28752C19.9383 2.42083 21.2041 6.25031 20.1281 9.59539C19.5302 11.3198 18.5498 12.8829 17.2619 14.1652C15.4301 15.9456 13.4108 17.5179 11.2402 18.8538L11.0051 19L10.761 18.8538Z"
                stroke="#020105"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M14.7394 5.05302C15.8047 5.39332 16.5616 6.34973 16.6562 7.47501"
                stroke="#020105"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </span>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <BuyOneClick :modal="`buyOneClickModal${product.id}`" :hide="hideModal" :product="product" />
  </div>
</template>
<script>
import BreadCrumb from "../../components/category/breadCrumb.vue";
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
import "vue-inner-image-zoom/lib/vue-inner-image-zoom.css";
import CardComment from "../../components/cards/cardComment.vue";
import CardProductPrice from "../../components/cards/cardProductPrice.vue";
import ProductCharactertable from "../../components/product/productCharactertable.vue";
import ProductHeaderInfo from "../../components/product/productHeaderInfo.vue";
import BuyOneClick from "../../components/modals/buyOneClick.vue";
export default {
  data() {
    return {
      userRate: null,
     
      count: 1,
      rate: {
        rate1: 5,
        rate2: 4,
        rate3: 3,
        rate4: 2,
        rate5: 1,
      },
      comment: "",
      value: 5,
      checkAuth: false,
      product: {},
      optionId: null,
      skeleton: true,
      product_parametrs: {
        productColor: "red",
        productSize: 32,
        productSizeRam: 4,
        productSim: "sim",
      },
      comments: [],
      carouselChange: null,
      commentBox: {
        body: "",
        rating: 0,
      },
      activeName: "first",
      cartProducts: [],
      checkCart: null,
      reytingStars: {},
      links: [
        {
          name: "Главный",
          to: "/",
        },
      ],
    };
  },
  components: {
    BreadCrumb,
    VueSlickCarousel,
    CardComment,
    CardProductPrice,
    ProductCharactertable,
    ProductHeaderInfo,
    BuyOneClick
},
  computed: {
    classActive(elements) {
      return {
        activeSize:
          this.$route.params.index ==
          (elements?.variant != null ?? elements?.variant),
        nullClass: true,
      };
    },
  },
  mounted() {
    console.log(this.$refs);
    var header = this.$refs.navScroll;
    window.addEventListener("scroll", () => {
        let scrollTop =
          window.pageYOffset || document.documentElement.scrollTop;
          console.log(scrollTop);
        if (scrollTop > 300) {
          header.style.top = "0px";
          header.style.background = "#fff";
          header.style.marginTop = "0";
          this.navStyle = true;
        } else {
          header.style.top = "-100px";
          header.style.background = "transparent";
          header.style.marginTop = "0";
          this.navStyle = true;
        } 
        this.lastScrollTop = scrollTop;
      });
  },
  async created() {
    this.checkAuth = localStorage.getItem("Auth");
    this.GET_PRODUCT();
    this.GET_COMMITS();
    console.log(this.checkCart);
  },
  methods: {
    includes(array, id) {
      if (array) {
        return array.find((item) => item === id) ? true : false;
      } else {
        true;
      }
    },
    includesCart(array, id) {
      if (array) {
        return array.find((item) => item.id === id) ? true : false;
      } else {
        true;
      }
    },
    updateCount(type, product) {
      if (type) {
        let cart = JSON.parse(localStorage.getItem("cart"));
        let newCart = cart.map((item) => {
          if (item.id == product.id) {
            item.count++;
            this.count = item.count;
            return item;
          } else {
            return item;
          }
        });
        localStorage.setItem("cart", JSON.stringify(newCart));
        this.cartProducts = JSON.parse(localStorage.getItem("cart"));
        this.checkCart = this.cartProducts.find(
          (item) => item.id == product.id
        );
      } else {
        let cart = JSON.parse(localStorage.getItem("cart"));
        let newCart = cart.map((item) => {
          if (item.id == product.id) {
            if (item.count > 1) {
              item.count--;
              this.count = item.count;
            } else {
              item.count;
            }
            return item;
          } else {
            return item;
          }
        });

        localStorage.setItem("cart", JSON.stringify(newCart));
        this.cartProducts = JSON.parse(localStorage.getItem("cart"));
        this.checkCart = this.cartProducts.find(
          (item) => item.id == product.id
        );
      }
    },
    async GET_PRODUCT() {
      const product = await this.$store.dispatch(
        "fetchProduct/fetchProductByOption",
        this.$route.params.index
      );
      this.product = await product;
      this.cartProducts = await JSON.parse(localStorage.getItem("cart"));
      this.checkCart = this.cartProducts.find(
        (item) => item.id == this.$route.params.index
      ) ?? { count: 1 };
      this.carouselChange = product.images[0]?.image
        ? product.images[0]?.image
        : "../../assets/images/image 34.png";
      const link = [
        {
          name: "Главный",
          to: "/",
        },
        {
          name: this.product.product.category.name,
          to: `/categories/${this.product.product.category.id}`,
        },
        {
          name: this.product.product.category.children.name,
          to: `/categoryId/${this.product.product.category.children.id}`,
        },
        {
          name: this.product.product.category.children.children.name,
          to: `/categoryId/${this.product.product.category.children.children.id}`,
        },
      ];

      this.links = await link;
      this.skeleton = await false;
    },
    async GET_COMMITS() {
      const comments = await this.$store.dispatch(
        "fetchProductComment/fetchComment",
        { id: this.$route.params.index, page_size: 10 }
      );
      this.comments = comments;
    },
    handleClick(tab, event) {
      console.log(tab, event);
    },
    async sendComment() {
      const postComment = await this.$store.dispatch(
        "fetchProductComment/fetchSendComment",
        {
          comment: { ...this.commentBox, product: this.$route.params.index },
          token: localStorage.getItem("Auth"),
        }
      );
      await this.$modal.hide("new-review-modal");
      await this.$modal.show("review-accepted-modal");
    },
    show(name) {
      this.$modal.show(name);
    },
    hideModal() {
      this.$modal.hide(`buyOneClickModal${this.product.id}`);
    },
    showModal() {
      this.$modal.show(`buyOneClickModal${this.product.id}`);
    },
    hide(name) {
      this.$modal.hide(name);
    },
    async fetchProductByOption(optionId) {
      const product = await this.$store.dispatch(
        "fetchProduct/fetchProductByOption",
        this.$route.params.index
      );
      await this.$router.replace({
        path: `/product/${optionId}`,
      });
    },
  },
};
</script>
<style lang="scss">
.product {
  .disabledDiv {
      background: #e87a43 !important;
      pointer-events: none;
    }
  .activeSvg {
    svg {
      path {
        stroke: #e87a43;
      }
    }
  }
  .product_carousel-img {
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
  .product_scroll_info {
    box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.16);
    .container {
      padding-left: 0 !important;
      padding-right: 0 !important;
    }
    &__container {
      background: #fff;
      padding: 10px 0;
      display: grid;
      grid-template-columns: 80px auto;
    }
    &__title {
      .product-header-info {
        p {
          margin-left: 24px;
        }
      }
      h4 {
        font-weight: 500;
        font-size: 24px;
        line-height: 32px;
        font-family: "TT Firs Neue";
        font-style: normal;
        color: #020105;
        margin-bottom: 8px;
      }
      height: 100%;
      justify-content: space-between;
      margin-left: 24px;
    }
    &__body {
      display: flex;
      padding-top: 8px;
      padding-bottom: 8px;
      justify-content: space-between;
    }
    &__price {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      padding-left: 12px;
      border-left: 1px solid #f2f2fa;
      h5 {
        margin-bottom: 8px;
        font-family: "Inter";
        font-style: normal;
        font-weight: 500;
        font-size: 18px;
        line-height: 24px;
        color: #020105;
      }
      p {
        margin-bottom: 0;
      }
    }
    &__btns {
      display: flex;
    align-items: center;
    margin-right: 40px;
      div {
        width: 174px;
        padding-top: 14px;
        padding-bottom: 14px;
        border-radius: 6px;
        font-family: "Inter";
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        line-height: 20px;
        display: flex;
        justify-content: center;
        cursor: pointer;
      }
      .buy_now_btn {
        color: #FF6418;
        border: 1px solid #FF6418;
        margin-right: 16px;
      }
      .to_cart_btn {
        color: #FFFFFF;
        background: #FF6418;
      }
    }
    background: #fff;

    transition: all 0.3s !important;
    height: auto;
    width: 100%;
    position: fixed;
    left: 0;
    z-index: 1000 !important;
    top: -100px;
  }
  .disabledOption {
    pointer-events: none !important;
  }
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
    width: 100%;
    display: grid;
    grid-template-columns: 11.5fr 4fr;
    .comments_blog {
      padding-top: 32px;
      width: 90%;
    }
    .comments_reyting {
      padding-top: 32px;
      width: 100%;
      padding-left: 24px;
      &__c-header {
        display: flex;
        justify-content: space-between;
        .el-rate__icon {
          font-size: 22px;
          margin-right: 7px;
          color: #c0c4cc;
          transition: 0.3s;
        }
        .el-rate__text {
          font-family: "Inter";
          font-style: normal;
          font-weight: 400;
          font-size: 14px;
          line-height: 20px;
          align-items: center;
          color: #727474 !important;
          margin-left: 12px;
        }
        p {
          font-family: "Inter";
          font-style: normal;
          font-weight: 500;
          font-size: 16px;
          line-height: 24px;
          color: #000000;
          span {
            color: #727474;
          }
        }
      }
      &__c-body {
        padding-top: 30px;
        width: 100%;
        .reyting_card {
          display: grid;
          grid-template-columns: 6fr 10fr 1fr;
          grid-gap: 17px;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 24px;
          P {
            font-family: "Inter";
            font-style: normal;
            font-weight: 400;
            font-size: 14px;
            line-height: 20px;
            display: flex;
            align-items: center;
            color: #727474;
          }
          .progress {
            height: 4px;

            overflow: hidden;
            border-radius: 100px;
            span {
              display: block;
              height: 100%;

              background: #f6c65c;
            }
          }
        }
      }
      &__c-btn {
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
          border: 1px solid #f6c65c;
          color: #f6c65c;
        }
      }
    }
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
    width: 942px;
    .ch-card_control {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-column-gap: 100px;
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
    grid-template-columns: 11fr;
    // grid-gap: 24px;
  }
  &__desc {
    margin-top: 30px;
    width: 70%;
    p {
      font-family: "Inter";
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 28px;
      color: #727474;
    }
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
    .options_style {
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
      position: relative;
      overflow: hidden;
      div {
        position: absolute;
        width: 110%;
        left: 0;
        height: 1px;
        background: transparent;
        top: 50%;
        transform: rotate(45deg);
      }
      span {
        border-radius: 4px;
        display: block;
        width: 100%;
        height: 100%;
      }
    }
    .activeSize {
      border: 1px solid #ff6418;
      pointer-events: none;
    }
    .nullClass {
      width: 110%;
      left: 0;
      height: 1px;
      background: red !important;
      top: 50%;
      transform: rotate(45deg);
      pointer-events: none !important;
    }
  }

  &__types-sizies {
    padding-top: 25px;
  }
  &__types-color {
    width: inherit;
    display: flex;
    .nullClassColor {
      position: absolute;
      width: 150%;
      left: -10px;
      height: 1px;
      background: red !important;
      top: 50%;
      transform: rotate(45deg);
      pointer-events: none !important;
    }
    .colors {
      width: 46px;
      height: 54px;
      border: 1px solid #f2f2fa;
      margin-right: 15px;
      border-radius: 4px;
      padding: 3px;
      cursor: pointer;
      transition: 0.3s;
      position: relative;
      overflow: hidden;
      span {
        border-radius: 4px;
        display: block;
        width: 100%;
        height: 100%;
      }
    }
    .activeColor {
      border: 1px solid #ff6418;
      pointer-events: none;
    }
  }
  &__types-colors {
    padding-top: 8px;
  }
  &__types {
    .product_count {
      margin-top: 32px;
    }
    .sc-count {
      display: flex;
      align-items: center;
      span {
        font-family: "Inter";
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 20px;
        color: #5d5d5f;
        margin-left: 16px;
      }
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
          margin-bottom: 0;
        }
      }
    }
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
      display: flex;
      flex-direction: column;
      grid-template-columns: 1fr;
      grid-gap: 20px;
      overflow-y: scroll;
      &::-webkit-scrollbar {
        display: none; /* for Chrome, Safari, and Opera */
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
@media (max-width: 1440px) {
  .product {
    &__img-carousel {
      grid-gap: 16px;
    }
    &__body-control {
      grid-template-columns: 8fr 4fr 4fr;
      grid-gap: 16px;
    }
    &__types-title {
      h1 {
        font-size: 24px;
        line-height: 32px;
      }
    }
    &__types {
      p {
        font-size: 14px;
        line-height: 22px;
        span {
          font-size: 14px;
          line-height: 22px;
        }
      }
    }
    &__types-color {
      div {
        width: 40px;
        height: 48px;
      }
    }
    .sc-count-btn {
      p {
        font-family: "TT Firs Neue";
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        line-height: 24px;
      }
    }
    &__comment-block {
      grid-template-columns: 8.5fr 4fr;
    }
    .reyting_card {
      .el-rate__icon {
        font-size: 16px !important;
      }
    }
    &__order-card,
    &__order-card2 {
      padding: 18.55px;
      .body {
        .title {
          h4 {
            font-size: 14px;
            line-height: 25px;
          }
        }
        p {
          font-size: 12px;
          line-height: 18px;
        }
      }
    }
  }
}
@media (max-width: 1370px) {
  .product {
    .product_carousel-img {
      width: 70px;
      height: 70px;
    }
    &__img-carousel {
      .carousel-banner {
        img {
          height: 400px;
        }
      }
    }
    &__body-control {
      grid-template-columns: 8fr 5fr 5fr;
      grid-gap: 16px;
    }
  }
}
</style>
