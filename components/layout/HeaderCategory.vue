<template lang="html">
  <div class="position-relative">
    <div class="container header-search">
      <div class="row">
        <div class="col-12 header-search__control">
          <div class="d-flex justify-content-between header-search__logo_btn">
            <img
              @click="$router.push('/')"
              style="cursor: pointer;"
              src="../../assets/images/image 22.png"
              alt=""
            />
            <div>
              <button
                class="header-search__category-btn"
                @click="categoryDrop = !categoryDrop"
              >
                <svg
                  v-if="categoryDrop"
                  width="13"
                  height="14"
                  viewBox="0 0 13 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M12.0208 12.6568C11.6303 13.0473 10.9971 13.0473 10.6066 12.6568L0.707108 2.75731C0.316584 2.36678 0.316584 1.73362 0.707108 1.34309C1.09763 0.952569 1.7308 0.952569 2.12132 1.34309L12.0208 11.2426C12.4113 11.6331 12.4113 12.2663 12.0208 12.6568Z"
                    fill="#FF6418"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M12.0208 1.34311C12.4113 1.73363 12.4113 2.36679 12.0208 2.75732L2.12132 12.6568C1.7308 13.0473 1.09763 13.0473 0.707107 12.6568C0.316582 12.2663 0.316582 11.6331 0.707107 11.2426L10.6066 1.34311C10.9971 0.952581 11.6303 0.952581 12.0208 1.34311Z"
                    fill="#FF6418"
                  />
                </svg>
                <svg
                  v-else
                  width="16"
                  height="14"
                  viewBox="0 0 16 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M16 1C16 1.55228 15.5523 2 15 2H1C0.447715 2 0 1.55228 0 1C0 0.447715 0.447715 0 1 0H15C15.5523 0 16 0.447715 16 1Z"
                    fill="#FF6418"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M16 7C16 7.55228 15.5523 8 15 8H1C0.447715 8 0 7.55228 0 7C0 6.44772 0.447715 6 1 6H15C15.5523 6 16 6.44772 16 7Z"
                    fill="#FF6418"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M16 13C16 13.5523 15.5523 14 15 14H1C0.447715 14 0 13.5523 0 13C0 12.4477 0.447715 12 1 12H15C15.5523 12 16 12.4477 16 13Z"
                    fill="#FF6418"
                  />
                </svg>

                Каталог
              </button>
            </div>
          </div>
          <div class="">
            <div class="header-search__input-block">
              <div
                class="header-search__search_items"
                v-if="
                  (searchProduct.length > 0 || searchCategories.length > 0) &&
                  checkInputFocus
                "
              >
                <div class="search_item" v-for="product in searchProduct">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 21 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      cx="9.76663"
                      cy="9.76659"
                      r="8.98856"
                      stroke="#020105"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M16.0183 16.4851L19.5423 20"
                      stroke="#020105"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  <div
                    class="search_val_text"
                    @click="toSearchProduct(product.id, product.product.name)"
                  >
                    <p class="search_p_value">
                      {{ product.product.name.substring(0, searchVal.length) }}
                    </p>
                    <p class="search_p_name">
                      {{ product.product.name }}
                    </p>
                  </div>
                </div>
                <div
                  v-if="searchCategories.length > 0"
                  class="serach_categories"
                >
                  <p>Категории</p>
                  <span
                    v-for="category in searchCategories"
                    :key="category.id"
                    @click="toSearchCategories(category)"
                    ><svg
                      width="20"
                      height="20"
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
                    {{ category.name }}</span
                  >
                </div>
              </div>
              <input
                type="text"
                class="header-search__input"
                v-model="searchVal"
                ref="input"
                @focusin="checkFocus"
                @input="searchProductInput"
              />
              <button
                class="header-search__search-btn"
                @click="searchProducts"
                :class="{
                  search_active_btn:
                    (searchProduct.length > 0 || searchCategories.length > 0) &&
                    checkInputFocus,
                }"
              >
                <svg
                  width="21"
                  height="21"
                  viewBox="0 0 21 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="9.76663"
                    cy="9.76659"
                    r="8.98856"
                    stroke="#020105"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M16.0183 16.4851L19.5423 20"
                    stroke="#020105"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div
            class="header-search__product-links justify-content-between d-flex align-items-center"
          >
            <nuxt-link to="/comparison">
              <el-badge
                :value="$store.state.comparison.length"
                :max="99"
                class="item"
              >
                <svg
                  width="18"
                  height="20"
                  viewBox="0 0 18 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17.1642 5.16043L3.54639 5.16043"
                    stroke="#200E32"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M13.068 1.08277L17.1647 5.16055L13.068 9.23833"
                    stroke="#200E32"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M0.832886 15.0889L14.4507 15.0889"
                    stroke="#200E32"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M4.92894 19.1665L0.832275 15.0888L4.92894 11.011"
                    stroke="#200E32"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </el-badge>
              Сравнение</nuxt-link
            >
            <nuxt-link to="/favorites">
              <el-badge
                :value="$store.state.like.length"
                :max="99"
                class="item"
              >
                <svg
                  width="22"
                  height="20"
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
              </el-badge>
              Избранное</nuxt-link
            >

            <nuxt-link to="/basket">
              <el-badge
                :value="$store.state.cart.length"
                :max="99"
                class="item"
              >
                <svg
                  width="21"
                  height="22"
                  viewBox="0 0 21 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M14.5137 20.5H6.16592C3.09955 20.5 0.747152 19.3925 1.41534 14.9348L2.19338 8.8936C2.60528 6.66934 4.02404 5.81808 5.26889 5.81808H15.4474C16.7105 5.81808 18.0469 6.73342 18.5229 8.8936L19.3009 14.9348C19.8684 18.889 17.5801 20.5 14.5137 20.5Z"
                    stroke="#020105"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M14.651 5.5984C14.651 3.21233 12.7167 1.27804 10.3306 1.27804V1.27804C9.18162 1.27317 8.078 1.7262 7.26381 2.53695C6.44963 3.34771 5.99193 4.44939 5.99194 5.5984H5.99194"
                    stroke="#020105"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M13.2963 10.1018H13.2506"
                    stroke="#020105"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M7.46566 10.1018H7.41989"
                    stroke="#020105"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </el-badge>
              Корзина</nuxt-link
            >

            <b-button
              v-if="$store.state.auth == false"
              id="show-btn"
              class="profile-btn"
              @click="show('sign-or-create-modal')"
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
              >Войти</b-button
            >
            <b-button
              v-else
              id="show-btn"
              class="profile-btn"
              @click="$router.push('/profile')"
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
              >Кабинет</b-button
            >
          </div>
        </div>
      </div>
    </div>

    <div class="category-dropdown" :class="{ categriesActive: categoryDrop }">
      <div class="container">
        <div class="row">
          <div class="col-12 category-dropdown__controller">
            <div>
              <span
                v-for="(category, index) in categories"
                @click="checkCategories(index)"
                :class="{ activeCategory: categoryIndex == index }"
              >
                <img :src="category.icon" alt="" />{{ category.name }}
              </span>
            </div>
            <div class="category-dropdown__body">
              <h1 @click="$router.push(`/categories/${categoryChilds?.id}`)">
                {{ categoryChilds?.name }}
              </h1>
              <div class="category-dropdown__categories">
                <div
                  class="category"
                  v-for="child1 in categoryChilds?.children"
                >
                  <h5 @click="$router.push(`/categoryId/${child1?.id}`)">
                    {{ child1?.name }}
                  </h5>
                  <span
                    @click="toCategory(child2.id)"
                    v-for="child2 in child1?.children"
                    >-{{ child2?.name }}</span
                  >

                  <el-dropdown
                    v-if="child1.children.length > 4"
                    class="header-category__pot-dropdown"
                    :hide-on-click="false"
                  >
                    <span type="primary">
                      Ещё<i class="el-icon-arrow-down el-icon--right"></i>
                    </span>
                    <el-dropdown-menu slot="dropdown">
                      <el-dropdown-item>Action 1</el-dropdown-item>
                      <el-dropdown-item>Action 2</el-dropdown-item>
                      <el-dropdown-item>Action 3</el-dropdown-item>
                      <el-dropdown-item>Action 4</el-dropdown-item>
                      <el-dropdown-item>Action 5</el-dropdown-item>
                    </el-dropdown-menu>
                  </el-dropdown>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      class="search_resoults_shadow"
      @click="closeSearchResoults"
      :class="{
        searchBackShadowActive:
          (searchProduct.length > 0 || searchCategories.length > 0) &&
          checkInputFocus,
      }"
    >
      <div class="container">
        <div class="row">
          <div class="col-12"></div>
        </div>
      </div>
    </div>
    <modal name="sign-or-create-modal" width="590px" height="auto">
      <div>
        <div class="auth-user-modal">
          <div class="auth-user-modal__m-header">
            <h1 v-if="registrType.type" class="m-header-title">
              Войти или создать профиль
            </h1>
            <h1 v-else class="m-header-title">Создать профиль</h1>
            <span @click="hide('sign-or-create-modal')">
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
            <div class="number-form">
              <label class="number__label">Номер телефона</label>
              <div class="number_mask">
                <span>+998 </span>
                <the-mask
                  type="text"
                  class="number__input"
                  v-model="registrModal.number"
                  v-on:input="__CHECK_NUMBER"
                  placeholder="(__) ___ __ __"
                  :mask="['(##) ### ## ##', '(##) ### ## ##']"
                />
              </div>
              <span class="number-linght-false" v-if="errors.numberLinght"
                >Длина поля номер телефона должна быть 12
              </span>
            </div>
            <div
              class="sms-from mt-4"
              v-if="(!registrType.type && registrType.hide)"
            >
              <label class="sms__label">СМС-код</label>
              <input
                class="sms__input"
                type="text"
                v-model="registrModal.smsCode"
                placeholder="Введите СМС-код"
              />
              <span class="number-linght-false" v-if="errors.smsError"
                >Смс код пользователя неверны
              </span>
              <div
                class="d-flex justify-content-center py-3"
                style="cursor: pointer;"
              >
                <span class="number-linght-false" v-if="errors.smsError"
                  ><svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15.9933 16.714C13.3893 19.318 9.16833 19.318 6.56433 16.714C3.96033 14.11 3.96033 9.88903 6.56433 7.28503C9.16833 4.68103 13.3903 4.68103 15.9933 7.28503L19.3883 10.68M19.3873 5.86103V10.679H14.5693"
                      stroke="#EF3F27"
                      stroke-width="1.5"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  Отправить код еще раз
                </span>
              </div>
            </div>
            <div
              class="password-from mt-4"
              v-if="(registrType.type && registrType.hide)"
            >
              <label class="password__label">Пароль</label>
              <input
                class="password__input"
                type="text"
                v-model="registrModal.password"
                placeholder="Пароль"
              />
            </div>
            <span class="number-linght-false" v-if="errors.passwordError"
              >Парол пользователя неверны
            </span>

            <div class="auth-user-modal__m-btn">
              <div class="show-btn" @click="signOrCreate">
                Войти
              </div>
            </div>
            <div
              class="forgot-your-password"
              v-if="(registrType.type && registrType.hide)"
            >
              <span @click="forgetPassword">Забыли пароль?</span>
            </div>
            <div
              class="forgot-your-password"
              v-if="(!registrType.type && registrType.hide)"
            >
              <span @click="signUpWithPassword">Войти</span>
            </div>
          </div>
        </div>
      </div>
    </modal>
  </div>
</template>
<script>
export default {
  props: ["categories"],
  data() {
    return {
      categoryDrop: false,
      searchVal: "",
      registrType: {
        type: true,
        hide: false,
      },
      registeredUser: false,
      passwordHide: {
        first: "text",
        last: "text",
      },
      errors: {
        numberLinght: false,
        smsLinght: false,
        numberError: false,
        smsError: false,
        passwordError: false,
      },
      registrModal: {
        number: "",
        smsCode: "",
        password: "",
      },
      searchProduct: [],
      searchCategories: [],
      smsCode: null,
      categoryChilds: {},
      categoryIndex: 0,
      checkInputFocus: true,
      itemClick: false,
    };
  },
  async mounted() {
    this.$store.commit("setUser", localStorage.getItem("Auth"));
    const categories = await this.$store.dispatch(
      "fetchCategories/fetchAllCategories"
    );

    this.categoryChilds = categories[0];
  },
  computed: {
    routerName() {
      return this.$route.name;
    },
    routerParams() {
      return this.$route.params.index;
    },
    errorClassObject() {
      return {
        numberErrorClass: this.errors.numberError,
        smsErrorClass: this.errors.smsError,
        passwordErrorClass: this.errors.passwordError,
      };
    },
  },
  methods: {
    categoryTab(id) {
      const categoryChild = this.categories.find(
        (category) => category.id == id
      );
      this.categoryChilds = categoryChild;
    },
    async __CHECK_NUMBER() {
      if (this.registrModal.number.length == "") {
        this.errors.numberLinght = false;
        this.errors.numberError = false;
      } else if (this.registrModal.number.length < 9) {
        this.errors.numberLinght = true;
        this.registrType.hide = false;
      } else {
        this.errors.numberLinght = false;
        this.errors.numberError = false;
        const authNumber = await this.$store.dispatch("fetchAuth/fetchNumber", {
          nbm: `+998${this.registrModal.number}`,
        });
        this.registrType.type = await authNumber.is_user;
        this.registrType.hide = true;
        if (!this.registrType.type) {
          this.__SEND_SMS();
        }
      }
    },
    async __SEND_SMS() {
      const smsCode = await this.$store.dispatch("fetchAuth/fetchSendSms", {
        nbm: `+998${this.registrModal.number}`,
      });
      this.smsCode = smsCode.code;
    },
    async __SMS_CODE_VALIDATE() {
      const smsCodeValidate = await this.$store.dispatch(
        "fetchAuth/fetchSmsCodeValidate",
        {
          code: this.registrModal.smsCode,
          nbm: `+998${this.registrModal.number}`,
        }
      );
      if (smsCodeValidate.correct) {
        if (this.registeredUser) {
          this.__NEW_PASSWORD();
        } else {
          this.__REGISTER_WITH_SMS_CODE();
        }
      } else {
        this.errors.smsError = true;
      }
    },
    async __REGISTER_WITH_SMS_CODE() {
      const registerSms = await this.$store.dispatch(
        "fetchAuth/fetchRegisterWithSmsCode",
        {
          nbm: `+998${this.registrModal.number}`,
        }
      );
      await localStorage.setItem("Auth", registerSms.token.access);
      await localStorage.setItem("Refresh", registerSms.token.refresh);
      await this.$store.commit("setUser");
      if (registerSms.token.access) {
        await this.$modal.hide("sign-or-create-modal");
        await this.$router.push("/profile");
      } else {
        console.log(localStorage.getItem("Auth"));
      }
    },
    async __USER_LOGIN() {
      try {
        const registerSms = await this.$store.dispatch(
          "fetchAuth/fetchUserLogin",
          {
            nbm: `+998${this.registrModal.number}`,
            password: this.registrModal.password,
          }
        );
        await localStorage.setItem("Auth", registerSms.access);
        await localStorage.setItem("Refresh", registerSms.refresh);
        await localStorage.setItem(
          "password_access",
          JSON.stringify(this.registrType.type)
        );
        await this.$store.commit("setUser");
        await this.$modal.hide("sign-or-create-modal");
        await this.$router.push("/profile");
      } catch (e) {
        this.errors.passwordError = true;
      }
    },
    signOrCreate() {
      if (this.registrModal.number.length < 9) {
        this.errors.numberError = true;
      } else {
        if (this.registrType.type) {
          this.__USER_LOGIN();
        } else {
          this.__SMS_CODE_VALIDATE();
        }
      }
    },
    async __NEW_PASSWORD() {
      const registerSms = await this.$store.dispatch(
        "fetchAuth/fetchNewPassword",
        {
          nbm: `+998${this.registrModal.number}`,
        }
      );
      await localStorage.setItem("Auth", registerSms.token.access);
      await localStorage.setItem("Refresh", registerSms.token.refresh);

      await this.$store.commit("setUser");
      if (registerSms.token.access) {
        await this.$modal.hide("sign-or-create-modal");
        await this.$router.push("/profile");
      } else {
        console.log(localStorage.getItem("Auth"));
      }
    },
    forgetPassword() {
      this.registrType.type = false;
      this.errors.passwordError = false;
      this.registeredUser = true;
      this.__SEND_SMS();
    },
    signUpWithPassword() {
      registrType.type = true;
      this.registeredUser = false;
    },
    searchProducts() {
      if (this.searchVal.length > 1) {
        this.$router.replace({
          path: `/search-products/3`,
          query: {
            query: this.searchVal,
            page: 1,
            ...this.$route.query,
          },
        });
      }
    },
    async searchProductInput() {
      if (this.searchVal.length <= 2) {
        this.searchProduct = [];
        this.checkInputFocus = false;
      } else {
        this.checkInputFocus = true;

        const searchProduct = await this.$store.dispatch(
          "fetchSearch/fetchSearchProduct",
          { query: this.searchVal, page_size: 10 }
        );
        const searchCategories = await this.$store.dispatch(
          "fetchSearch/fetchSearchCategory",
          { search: this.searchVal, page_size: 10 }
        );

        this.searchCategories = searchCategories.results;
        console.log(searchCategories.results);
        this.searchProduct = searchProduct.results.filter(
          (item) => item.default == true
        );
      }
    },
    checkFocus() {
      this.checkInputFocus = true;
    },
    closeSearchResoults() {
      this.checkInputFocus = false;
    },
    async toSearchProduct(id, name) {
      await this.$refs.input.focus();
      this.searchVal = await name;
      this.$router.push(`/product/${id}`);
    },
    async toSearchCategories(category) {
      this.searchVal = await category.name;

      category.parent
        ? this.$router.push(`/categoryId/${category.id}`)
        : this.$router.push(`/categories/${category.id}`);
    },
    toCategory(id) {
      this.categoryDrop = false;
      this.$router.push(`/categoryId/${id}`);
    },
    async checkCategories(index) {
      const categories = await this.$store.dispatch(
        "fetchCategories/fetchAllCategories"
      );

      this.categoryChilds = categories[index];
      this.categoryIndex = index;
    },
    show(name) {
      this.$modal.show(name);
    },
    hide(name) {
      this.$modal.hide(name);
    },
  },

  watch: {
    routerName(oldVal, newVal) {
      if (oldVal !== newVal) {
        this.checkInputFocus = false;
        this.categoryDrop = false;
      }
    },
    checkInputFocus(oldVal, newVal) {
      if (this.checkInputFocus == true) {
        document.body.style.overflowY = "hidden";
        document.body.style.height = "100vh";
      } else {
        document.body.style.overflowY = "auto";
        document.body.style.height = "auto";
      }
    },
    routerParams(oldVal, newVal) {
      if (oldVal !== newVal) {
        this.checkInputFocus = false;
        this.categoryDrop = false;
      }
    },
  },
  mount() {
    this.show();
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
  .passwordErrorClass {
    .password__label {
      color: red !important;
    }
    .password__input {
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
    .number-form {
      .number_mask {
        margin-top: 6px;
        border: 1px solid #ebebeb;
        border-radius: 4px;
        span {
          font-family: "Inter";
          padding-left: 16px;
          font-style: normal;
          font-weight: 400;
          font-size: 16px;
          line-height: 24px;
          color: #9a999b;
        }
        input {
          border: none;
          font-family: "Inter";
          padding: 16px;
          padding-left: 0;
        }
      }
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
    }
    input {
      transition: 0.3s;
      border: 1px solid #ebebeb;

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
.search_active_btn {
  background: #ff7e00 !important;
  pointer-events: initial !important;
  cursor: pointer !important;
  &:hover {
    color: red !important;
  }
  svg {
    path,
    circle {
      stroke: #fff;
    }
  }
}
.search_resoults_shadow {
  transition: 0.3s;
  padding-top: 70px;
  position: fixed;
  width: 100%;
  background: rgba(0, 0, 0, 0.8);
  z-index: -1;
  left: 0;
  opacity: 0;
  height: 100vh;
  box-shadow: 10px 5px 5px black;
  box-shadow: 0px 40px 10px #0b0b1e4d, 0px 60px 10px #0b0b1e24,
    0px 80px 10px #0b0b1e00;
}
.category-dropdown {
  transition: 0.3s;
  padding-top: 70px;
  position: absolute;
  width: 100%;
  background: #fff;
  z-index: -1;
  opacity: 0;
  height: 100vh;
  transform: translateY(-5%);
  box-shadow: 10px 5px 5px black;
  box-shadow: 0px 40px 10px #0b0b1e4d, 0px 60px 10px #0b0b1e24,
    0px 80px 10px #0b0b1e00;
  // rgba(11,11,30,0.05)rgba(11,11,30,0)

  &__categories {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 130px;
    .category {
      a,
      span {
        font-family: "Inter";
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 20px;
        color: #27282a;
        margin-bottom: 16px;
        cursor: pointer;
      }
      h5 {
        font-family: "Inter";
        font-style: normal;
        font-weight: 500;
        font-size: 18px;
        line-height: 24px;
        color: #020105;
        margin-bottom: 24px;
        cursor: pointer;
      }
    }
  }
  &__body {
    h1 {
      font-family: "TT Firs Neue";
      font-style: normal;
      font-weight: 500;
      font-size: 32px;
      line-height: 48px;
      color: #ff7e00;
      cursor: pointer;
    }
  }
  &__controller {
    display: grid;
    grid-template-columns: 1fr 5fr;
    a,
    span {
      font-family: "Inter", sans-serif;
      font-size: 18px;
      font-weight: 400;
      line-height: 26px;
      letter-spacing: 0em;
      text-align: left;
      color: #727474;
      display: flex;
      align-items: center;
      margin-bottom: 56px;
      cursor: pointer;
      svg,
      img {
        margin-right: 9px;
      }
    }
  }
}
.activeCategory {
  color: #ff7e00 !important;
}
.searchBackShadowActive {
  opacity: 1;
  z-index: 9;
}
.categriesActive {
  opacity: 1;
  z-index: 1000;
  transform: translateY(0);
}
.header-search {
  position: relative;
  z-index: 10;
  padding: 20px 0;
  background: #fff;

  &__logo_btn {
    svg,
    img {
      height: 44px;
    }
  }
  &__control {
    display: grid;
    grid-template-columns: 3fr 5fr 4fr;
    grid-gap: 24px;
  }
  .profile-btn {
    @media (max-width: 1370px) {
      font-size: 0.875rem;
    }
    &:hover {
      background: rgba(128, 128, 128, 0.06);
      color: #000;
    }
  }
  &__category-btn {
    padding: 0 14px;
    background: rgb(255, 100, 24, 0.08);
    border: none;
    border-radius: 4px;
    font-family: "Inter", sans-serif;
    font-size: 18px;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: 0em;
    text-align: left;
    color: #ff6418;
    svg {
      margin-right: 8px;
    }
  }
  &__search_items {
    position: absolute;
    width: 100%;
    left: 0;
    top: 50px;
    background: #ffffff;
    border: 1px solid #ebebeb;
    border-radius: 4px;
    padding: 18px 0;
    z-index: 1000;
    .serach_categories {
      margin-top: 32px;
      display: flex;
      flex-direction: column;
      p {
        font-family: "Inter";
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        line-height: 24px;
        color: #020105;
        margin-bottom: 14px;
        margin-left: 18px;
      }
      span {
        cursor: pointer;
        svg {
          margin-right: 8px;
        }
        font-family: "Inter";
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 20px;
        color: #020105;
        padding: 5px 18px;
        transition: 0.4s;
        &:hover {
          background: #f4f5f5;
        }
      }
    }
    .search_item {
      display: flex;
      align-items: center;
      padding: 5px 18px;
      transition: 0.4s;
      &:hover {
        background: #f4f5f5;
      }
      p {
        font-family: "Inter";
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 20px;
        margin-left: 10px;

        white-space: nowrap;
      }
      .search_val_text {
        position: relative;
        width: 100%;
        height: 20px;
        .search_p_value {
          color: #020105;
          z-index: 5;
          cursor: pointer;
          position: absolute;
          top: 0;
          left: 0;
        }
        .search_p_name {
          color: #727474;
          cursor: pointer;

          &::first-letter {
            color: green;
          }
        }
        .search_p_name::nth-letter(2) {
          color: red !important;
        }
      }
    }
  }
  &__input-block {
    height: 44px;
    display: flex;
    border: 1px solid #ebebeb;
    border-radius: 4px;
    position: relative;
    input {
      height: 100%;
      width: 100%;
      border: none;
      padding-left: 10px;
      &:focus {
        outline: none !important;
      }
    }
    button {
      height: 100%;
      width: 110px;
      background: #f8f8f8;
      border: none;
      pointer-events: none;
    }
  }
  &__product-links {
    .item {
      .el-badge__content.is-fixed {
        position: absolute;
        top: -3px;
        right: 18px !important;
        transform: translateY(-50%) translateX(100%);
      }
      .el-badge__content {
        font-family: "TT Firs Neue";
        font-style: normal;
        font-weight: 400;
        font-size: 12px;
        line-height: 20px;
        letter-spacing: -0.045em;

        color: #ffffff;
        height: 24px !important;
        width: 24px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
    a {
      font-family: "Inter", sans-serif;
      font-size: 16px;
      font-weight: 400;
      line-height: 24px;
      letter-spacing: 0em;
      text-align: left;
      color: #000;

      svg {
        margin-right: 11px;
      }
    }

    @media (max-width: 1390px) {
      a {
        font-size: 0.875rem;
      }
    }
    .btn-secondary:not(:disabled):not(.disabled):active,
    .btn-secondary:not(:disabled):not(.disabled).active,
    .show > .btn-secondary.dropdown-toggle {
      color: #000;
      background-color: transparent !important;
      border-color: transparent !important;
    }
    button {
      background: transparent;
      border: none !important;
      box-shadow: none !important;
      font-family: "Inter", sans-serif;
      font-size: 16px;
      font-weight: 400;
      line-height: 24px;
      letter-spacing: 0em;
      text-align: left;
      color: #000;
      &:active {
        background: transparent !important;
      }
      svg {
        margin-right: 11px;
      }
    }
  }
}
@media (max-width: 1440px) {
  .category-dropdown {
    padding-top: 30px;
    &__categories {
      .category {
        padding-top: 0;
      }
    }
    &__body {
      h1 {
        font-size: 28px;
        line-height: 38px;
      }
    }

    &__controller {
      a,
      span {
        margin-bottom: 26px;
        font-size: 16px;
        line-height: 20px;
        cursor: pointer;
      }
    }
  }
  .header-search {
    &__logo_btn {
      align-items: center;
      svg,
      img {
        height: 32px;
      }
      div {
        height: 100%;
      }
    }
    &__control {
      grid-template-columns: 2fr 3fr 3fr;
      grid-gap: 22px;
    }
    .profile-btn {
      font-size: 16px;
    }
    &__category-btn {
      height: 100%;
      padding: 0 10px;
      svg {
        margin-right: 8px;
      }
    }
    &__input-block {
      height: 100%;
      svg {
        width: 16px;
        height: 16px;
      }
    }
    &__product-links {
      a {
        font-size: 16px;
      }
    }
  }
}
@media (max-width: 1390px) {
  .header-search {
    &__product-links {
      svg {
        width: 16px;
        margin-right: 8px !important;
      }
      a {
        font-size: 15px;
      }
    }
  }
}
@media (min-width: 1440px) and (max-width: 1600px) {
  .header-search {
    &__product-links {
      svg {
        width: 16px;
        height: 16px;
        margin-right: 8px !important;
      }
      a {
        font-size: 14px;
        line-height: 24px;
      }
    }
    .profile-btn {
      font-size: 14px;
      line-height: 24px;
    }
  }
}
</style>
