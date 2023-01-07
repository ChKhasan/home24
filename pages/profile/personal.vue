<template lang="html">
  <div class="container profile">
    <div class="row">
      <div class="col-12">
        <BreadCrumb :links="links" last="Личный кабинет" />
        <TitleCategory title="Личный кабинет" :show="false" />
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
          <div class="profile__personal-data-controller" v-if="changeInfo">
            <div class="personal-data">
              <div class="personal-data__p-header">
                <h3>Персональные данные</h3>
                <div class="change-info-btn" @click="changeInfo = false">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11.4165 16.5807H16.7307"
                      stroke="#FF7E00"
                      stroke-width="1.2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M10.7126 4.12902C11.3268 3.34652 12.3193 3.38735 13.1026 4.00152L14.2609 4.90985C15.0443 5.52402 15.3218 6.47652 14.7076 7.26069L7.80009 16.0732C7.56925 16.3682 7.21676 16.5424 6.84176 16.5465L4.17759 16.5807L3.57426 13.9849C3.48926 13.6207 3.57426 13.2374 3.80509 12.9415L10.7126 4.12902Z"
                      stroke="#FF7E00"
                      stroke-width="1.2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M9.41895 5.7793L13.4139 8.91096"
                      stroke="#FF7E00"
                      stroke-width="1.2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  Изменить
                </div>
              </div>
              <div class="personal-data__p-body">
                <p>
                  Имя:
                  <span>{{
                    userInfo.username ? userInfo.username : `Пусто`
                  }}</span>
                </p>
                <p>
                  E-mail:
                  <span>{{ userInfo.email ? userInfo.email : `Пусто` }}</span>
                </p>
                <p>Пароль: <span>************</span></p>
                <p>
                  Телефон:
                  <span>{{ userInfo.nbm ? userInfo.nbm : `Пусто` }}</span>
                </p>
                <p>
                  Адресс:
                  <span>{{ userInfo.adres ? userInfo.adres : `Пусто` }}</span>
                </p>
              </div>
            </div>
            <div class="personal-data">
              <div class="personal-data__p-header">
                <h3>Уведомления или новости</h3>
                <span>.</span>
              </div>
              <div class="personal-data__p2-body">
                <p>Получайте информацию об акциях и скидках</p>
                <div class="switch-sms">
                  <el-switch
                    v-model="value2"
                    active-color="#FF7E00"
                    inactive-color="#EAEAEB"
                  >
                  </el-switch>
                  <span>через СМС</span>
                </div>
              </div>
            </div>
          </div>
          <div class="profile__personal-data-change" v-else>
            <div class="info-change-header">
              <div class="back-btn" @click="show('save-leave-modal')">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15.5 19L8.5 12L15.5 5"
                    stroke="#FF7E00"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  /></svg
                >Назад
              </div>
            </div>
            <div class="info-change-body">
              <form>
                <h4>Личные данные</h4>
                <div class="form-controller">
                  <div class="d-flex flex-column">
                    <label for="">Ф.И.О</label>
                    <input
                      type="text"
                      @input="userName"
                      v-model="userNameVal"
                      placeholder="Ф.И.О"
                    />
                  </div>
                  <div class="d-flex flex-column">
                    <label for="">Телефон</label>
                    <input
                      type="text"
                      :value="userInfo.nbm"
                      disabled
                      placeholder="+998 (--)--- -- --"
                    />
                  </div>
                  <div class="d-flex flex-column">
                    <label for="">E-mail</label>
                    <input
                      type="text"
                      v-model="user_info.email"
                      placeholder="E-mail"
                      value="adssa"
                    />
                  </div>
                </div>
                <h4>Адрес</h4>
                <div class="form-controller">
                  <div class="d-flex flex-column">
                    <label for="">Область </label>
                    <el-select v-model="user_info.state">
                      <el-option
                        v-for="item in regions"
                        :key="item.id"
                        :label="item.name"
                        :value="item.id"
                      >
                      </el-option>
                    </el-select>
                  </div>
                  <div class="d-flex flex-column">
                    <label for="">Город / Район</label>
                    <el-select v-model="user_info.city">
                      <el-option
                        v-for="item in city"
                        :key="item.id"
                        :label="item.name"
                        :value="item.id"
                      >
                      </el-option>
                    </el-select>
                  </div>
                  <div class="d-flex flex-column">
                    <label for="">Адрес </label>
                    <input
                      type="text"
                      v-model="user_info.adres"
                      placeholder="Адрес "
                    />
                  </div>
                  <div class="d-flex flex-column">
                    <label for="">Индекс почты </label>
                    <input
                      type="text"
                      v-model="user_info.post_ind"
                      placeholder="Индекс почты"
                    />
                  </div>
                </div>
                <!-- <h4>Пароль</h4>
                <div class="form-control-end">
                  <div class="d-flex flex-column">
                    <label for="">Пароль</label>
                    <div class="password-input">
                      <input
                        :type="passwordHide"
                        placeholder="Пароль"
                        v-modal="password"
                      />
                      <span
                        @click="passwordHide = 'password'"
                        v-if="passwordHide == 'text'"
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
                      <span @click="passwordHide = 'text'" v-else>
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
                  </div>
                  <div class="d-flex flex-column">
                    <label for="">Подтвердите пароль</label>
                    <div class="password-input">
                      <input
                        :type="passwordHide2"
                        placeholder="Подтвердите пароль"
                        v-modal="password2"
                      />
                      <span
                        @click="passwordHide2 = 'password'"
                        v-if="passwordHide2 == 'text'"
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
                      <span @click="passwordHide2 = 'text'" v-else>
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
                  </div>
                </div> -->
                <div class="form-control-btn">
                  <div class="info-cancel" @click="changeInfo = true">
                    Отменить
                  </div>
                  <div class="info-save" @click="leaveSave">
                    Сохранить
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    <modal name="save-leave-modal" width="590px" height="auto">
      <div>
        <div class="log-out-modal">
          <div class="log-out-modal__m-header">
            <h1 class="m-header-title">Сохранить перед выходом ?</h1>
            <span @click="hide('save-leave-modal')">
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
            <div class="show-btn" @click="hide('save-leave-modal')">
              Отменить
            </div>
            <div class="show-btn" @click="leaveSave">
              Сохранить
            </div>
          </div>
        </div>
      </div>
    </modal>
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
export default {
  props: ["fetchUserInfo"],
  data() {
    return {
      value2: true,
      changeInfo: true,
      userNameVal: "",
      user_info: {
        first_name: "",
        last_name: "",
        username: "",
        adres: "",
        email: "",
        city: "",
        state: "",
        post_ind: "",
      },
      regions: [],
      regionVal: "Option1",
      changeInfo: true,
      city: [],
      cityVal: "Option1",
      links: [
        {
          name: "Главная",
          to: "/",
        },
      ],
      passwordHide: "text",
      passwordHide2: "text",
      password: "",
      password2: "",
      userInfo: {},
    };
  },
  components: {
    BreadCrumb,
    TitleCategory,
  },
  async created() {
    await this.__GET_STATE_CITY();
    await this.__GET_USER_INFO();
    await this.lastInfo();
  },
  methods: {
    logout() {
      localStorage.removeItem("Auth");
      localStorage.removeItem("password_access");
      this.$store.commit("setUser");
      this.$router.push("/");
    },
    async leaveSave() {
      const userInfo = await this.$store.dispatch(
        "fetchAuth/fetchUserUpdateProfile",
        {
          info: { ...this.user_info, nbm: this.userInfo.nbm },
          token: localStorage.getItem("Auth"),
        }
      );
      if (userInfo.status == 400) {
        this.$toast.open({
          message: userInfo.data,
          type: "error",
          duration: 2000,
          dismissible: true,
          position: "top-right",
        });
      } else {
        this.$toast.open({
          message: "Successfully",
          type: "success",
          duration: 2000,
          dismissible: true,
          position: "top-right",
        });
        this.__GET_USER_INFO();
        this.fetchUserInfo();
        this.changeInfo = true;
      }
    },
    lastInfo() {
      this.user_info.first_name = this.userInfo.first_name;
      this.user_info.last_name = this.userInfo.last_name;
      this.user_info.username = this.userInfo.username;
      this.user_info.adres = this.userInfo.adres;
      this.user_info.email = this.userInfo.email;
      this.user_info.post_ind = this.userInfo.post_ind;
      this.userNameVal = this.userInfo.username;
    },
    async __GET_STATE_CITY() {
      const orderStates = await this.$store.dispatch("fetchOrder/fetchStates");
      const orderCIties = await this.$store.dispatch("fetchOrder/fetchCities");
      this.city = orderCIties.results;
      this.regions = orderStates.results;
      this.user_info.city = orderCIties.results[0].id;
      this.user_info.state = orderStates.results[0].id;
    },
    async __GET_USER_INFO() {
      this.userInfo = await this.$store.dispatch(
        "fetchAuth/fetchUserProfile",
        localStorage.getItem("Auth")
      );
    },
    userName() {
      const array = this.userNameVal.split(" ");
      this.user_info.username = array[0];
      this.user_info.first_name = array[1];
      this.user_info.last_name = array[2];
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
  &__area {
    padding-left: 24px;
  }
  &__personal-data-controller {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 24px;
    .personal-data {
      border: 1px solid #f2f2fa;
      border-radius: 8px;
      &__p-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 10px 12px;
        border-bottom: 1px solid #f2f2fa;
        h3 {
          font-family: "Inter";
          font-style: normal;
          font-weight: 600;
          font-size: 16px;
          line-height: 24px;
          color: #020105;
          margin-bottom: 0;
        }
        span {
          display: block;
          border: 1px solid transparent;
          border-radius: 4px;
          padding: 14px 20px;
          font-family: "Inter";
          font-style: normal;
          font-weight: 600;
          font-size: 14px;
          line-height: 18px;
          text-transform: uppercase;
          color: transparent;
          display: flex;
          align-items: center;
          svg {
            margin-right: 17px;
          }
        }
        .change-info-btn {
          border: 1px solid #ff7e00;
          border-radius: 4px;
          padding: 14px 20px;
          font-family: "Inter";
          font-style: normal;
          font-weight: 600;
          font-size: 14px;
          line-height: 18px;
          text-transform: uppercase;
          color: #ff7e00;
          display: flex;
          align-items: center;
          cursor: pointer;
          svg {
            margin-right: 17px;
          }
        }
      }
      &__p-body {
        padding: 16px;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 40px;
        p,
        span {
          font-family: "Inter";
          font-style: normal;
          font-weight: 400;
          font-size: 14px;
          line-height: 24px;
        }
        p {
          color: #727474;
        }
        span {
          color: #020105;
          margin-left: 8px;
        }
      }
      &__p2-body {
        padding: 16px;
        .switch-sms {
          padding-top: 28px;
          span {
            font-family: "Inter";
            font-style: normal;
            font-weight: 400;
            font-size: 14px;
            line-height: 24px;
            letter-spacing: -0.01em;
            margin-left: 22px;
            color: #000000;
          }
        }
        p,
        span {
          font-family: "Inter";
          font-style: normal;
          font-weight: 400;
          font-size: 14px;
          line-height: 24px;
        }
        p {
          color: #727474;
        }
        span {
          color: #020105;
          margin-left: 8px;
        }
      }
    }
  }
  &__personal-data-change {
    .info-change-header {
      display: flex;
      .back-btn {
        padding: 11px 22px;
        border-radius: 4px;
        display: flex;
        align-items: center;
        background: rgba(255, 100, 24, 0.1);
        font-family: "Inter";
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        line-height: 20px;
        color: #ff7e00;
        cursor: pointer;
        svg {
          margin-right: 17px;
        }
      }
    }
    .info-change-body {
      padding-top: 30px;
      h4 {
        font-family: "TT Firs Neue";
        font-style: normal;
        font-weight: 500;
        font-size: 24px;
        line-height: 32px;
        color: #020105;
      }
      label {
        font-family: "Inter";
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        line-height: 24px;
        color: #727474;
      }
      input {
        border: 1px solid #ebebeb;
        border-radius: 4px;
        height: 56px;
        font-family: "Inter";
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 24px;
        padding-left: 16px;
        color: #020105;
        &:focus {
          box-shadow: none;
          outline: none;
        }
      }
      .form-controller {
        padding-top: 24px;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 24px;
        padding-bottom: 24px;
        margin-bottom: 24px;
        border-bottom: 1px solid #f2f2fa;
      }
      .form-control-end {
        padding-top: 24px;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 24px;
        padding-bottom: 24px;
        margin-bottom: 24px;
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
      }
      .form-control-btn {
        display: flex;
        .info-cancel,
        .info-save {
          padding: 16px 67.5px;
          font-family: "Inter";
          font-style: normal;
          font-weight: 500;
          font-size: 16px;
          line-height: 24px;
          border-radius: 6px;
          cursor: pointer;
          transition: 0.3s;
        }
        .info-cancel {
          background: #f8f8f8;
          color: #020105;
          margin-right: 32px;
          &:hover {
            // background: rgba(248, 248, 248);
          }
        }
        .info-save {
          color: #ffffff;
          background: #ff6418;
          &:hover {
            background: rgba(255, 100, 24, 0.6);
          }
        }
      }
    }
  }
}
@media (max-width: 1440px) {
  .profile {
    &__personal-data-controller {
      .personal-data {
        &__p-header {
          .change-info-btn {
            font-size: 12px;
            line-height: 15px;
            padding: 10px 20px;
          }
        }
      }
    }
    &__personal-data-change {
      .info-change-body {
        .form-controller {
          grid-gap: 21px;
        }
      }
    }
  }
}
</style>
