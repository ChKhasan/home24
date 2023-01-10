<template lang="html">
  <div class="header">
  <div class="header-top">
    <div class="container ">
      <div class="">
        <div class="row justify-content-between">
          <div class="col-5 d-flex align-items-center">
            <span class="header-top__city d-flex align-items-center"
              ><svg
                width="14"
                height="18"
                viewBox="0 0 14 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M0.532608 7.65942C0.544614 4.1256 3.41908 1.2706 6.9529 1.28261C10.4867 1.29461 13.3417 4.16908 13.3297 7.7029V7.77536C13.2862 10.0725 12.0036 12.1957 10.4312 13.8551C9.53187 14.7889 8.52761 15.6157 7.43841 16.3188C7.14716 16.5708 6.71516 16.5708 6.42391 16.3188C4.80016 15.262 3.37505 13.9276 2.21377 12.3768C1.17873 11.0245 0.591079 9.38311 0.532608 7.68116L0.532608 7.65942Z"
                  stroke="#727474"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <circle
                  cx="6.93116"
                  cy="7.78261"
                  r="2.05072"
                  stroke="#727474"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                /></svg
              >&nbsp;Город:</span
            >
            <a class="header-top__link-city" href="#">Ташкент</a>
          </div>
          <div class="col-7 col-xl-6 d-flex justify-content-between">
            <a class="header-top__links" href="#">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.00418 3.80389L12.9956 3.80389C12.9957 3.80389 12.9958 3.80389 12.9958 3.80389C14.7634 3.80404 16.1961 5.23664 16.1961 7.00417V12.9956C16.1961 14.7632 14.7632 16.1961 12.9956 16.1961H7.00446C5.23678 16.1961 3.80391 14.7634 3.80391 12.9958L3.80391 7.00417C3.80391 5.23678 5.23655 3.80389 7.00418 3.80389Z"
                  stroke="#020105"
                  stroke-width="0.6"
                />
                <path
                  d="M12.9958 3.50389L7.00418 3.50389C5.07085 3.50389 3.50391 5.07111 3.50391 7.00417L3.50391 12.9958C3.50391 14.9292 5.07113 16.4961 7.00446 16.4961H12.9956C14.9289 16.4961 16.4961 14.9289 16.4961 12.9956V7.00417C16.4961 5.07083 14.9289 3.50389 12.9956 3.50389H12.9958Z"
                  stroke="#020105"
                  stroke-width="0.2"
                  stroke-miterlimit="10"
                />
                <path
                  d="M10 13.1361C11.732 13.1361 13.1361 11.732 13.1361 10C13.1361 8.26797 11.732 6.86389 10 6.86389C8.26798 6.86389 6.86389 8.26797 6.86389 10C6.86389 11.732 8.26798 13.1361 10 13.1361Z"
                  stroke="#020105"
                  stroke-width="0.6"
                  stroke-miterlimit="10"
                />
                <path
                  d="M13.8081 6.86389C14.1792 6.86389 14.48 6.56305 14.48 6.19194C14.48 5.82084 14.1792 5.52 13.8081 5.52C13.4369 5.52 13.1361 5.82084 13.1361 6.19194C13.1361 6.56305 13.4369 6.86389 13.8081 6.86389Z"
                  fill="#020105"
                />
              </svg>
              &nbsp;home24.uz</a
            >
            <a class="header-top__links" href="#"
              ><svg
                width="18"
                height="14"
                viewBox="0 0 18 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16.0125 0.533334C16.4875 0.533334 16.8458 0.950001 16.6541 1.725L14.3291 12.6833C14.1666 13.4625 13.6958 13.65 13.0458 13.2875L7.49996 9.19167C7.47845 9.17624 7.46093 9.15591 7.44884 9.13236C7.43675 9.10881 7.43045 9.08272 7.43045 9.05625C7.43045 9.02978 7.43675 9.00369 7.44884 8.98014C7.46093 8.9566 7.47845 8.93626 7.49996 8.92083L13.9041 3.1375C14.1958 2.87917 13.8416 2.75417 13.4583 2.9875L5.42079 8.05833C5.39641 8.07423 5.36874 8.08437 5.33986 8.08798C5.31098 8.09159 5.28166 8.08858 5.25412 8.07917L1.84162 7C1.08329 6.77917 1.08329 6.25833 2.01246 5.8875L15.6666 0.620834C15.7749 0.568884 15.8925 0.539133 16.0125 0.533334V0.533334Z"
                  stroke="#020105"
                  stroke-width="0.6"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                /></svg
              >&nbsp; t.me/home24uz</a
            >

            <a href="#" class="header-top__phone-number">+998 71 200 7 002</a>
            <div class="position-relative">
              <div>
                <el-dropdown :hide-on-click="false">
                  <span type="primary">
                    Рус<i class="el-icon-arrow-down el-icon--right"></i>
                  </span>
                  <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item>ru</el-dropdown-item>
                    <el-dropdown-item>uz</el-dropdown-item>
                  </el-dropdown-menu>
                </el-dropdown>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

    <HeaderCategory :user="user" :categories="categories" />

    <div class=" container">
      <div class=" header-category">
        <div class="row">
          <div class="col-12 header-category__category-links">
            <nuxt-link
              v-for="category in categories"
              :to="`/categories/${category.id}`"
            >
              <img :src="category.icon" alt="" /> {{ category?.name }}
            </nuxt-link>

            <div v-if="categories.length > 7">
              <el-dropdown
                class="header-category__dropdown"
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
</template>
<script>
import HeaderCategory from "./HeaderCategory.vue";

export default {
  props: ["categories"],
  data() {
    return {
      color: "#f4f5f5",
      options: [
        {
          value: "Option1",
          label: "Option1",
        },
        {
          value: "Option2",
          label: "Option2",
        },
        {
          value: "Option3",
          label: "Option3",
        },
        {
          value: "Option4",
          label: "Option4",
        },
        {
          value: "Option5",
          label: "Option5",
        },
      ],
      value: "Рус",
      user: {
        username: "",
      },
      categoryDrop: false,
    };
  },

  methods: {
    async userLogin() {
      try {
        let response = await this.$auth.loginWith("local", {
          data: this.user.username,
        });
        console.log(response);
      } catch (err) {
        console.log(err);
      }
    },
    handleClick() {
      alert("button click");
    },
  },
  components: { HeaderCategory },
};
</script>
<style lang="scss">
@media (min-width: 576px) {
  .header {
  }
  .modal-dialog {
    max-width: 590px !important;
    margin: 1.75rem auto;
  }
}
.modal-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 1rem;
  border-bottom: 1px solid #dee2e6;
  border-top-left-radius: calc(0.3rem - 1px);
  border-top-right-radius: calc(0.3rem - 1px);
  padding-left: 40px !important;
  background: #f7f7f7 !important;
  border-radius: 4px 4px 0px 0px !important;
  .modal-title {
    font-family: "Inter";
    font-style: normal;
    font-weight: 500 !important;
    font-size: 24px !important;
    line-height: 32px !important;
    color: #000000;
  }
  .close {
    padding: 1rem 1rem;
    margin: -1rem -1rem -1rem auto;
    color: #ff6418 !important;
    font-size: 40px !important;
  }
}
.modal-body {
  position: relative;
  flex: 1 1 auto;
  padding: 28px 40px 40px 40px !important;
  label {
    font-family: "Inter";
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    color: #727474;
  }
  button {
    background: #ff7e00 !important;
    border-radius: 6px !important;
    padding-top: 16px;
    padding-bottom: 16px;
    border: none !important;
    margin-top: 28px !important;
  }
  input {
    width: 100%;
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    padding: 16px;
    border: 1px solid #ebebeb;
    border-radius: 4px;
  }
}
.header {
  .header-top {
    z-index: 100;
    position: relative;
    background: #f4f5f5;
    padding: 10px 0;

    .header-top {
      &__city {
        font-family: "Inter", sans-serif;
        font-size: 14px;
        font-weight: 400;
        line-height: 20px;
        letter-spacing: 0em;
        text-align: left;
        color: #727474;
        margin-right: 9px;
      }
      &__link-city {
        font-family: "Inter", sans-serif;
        text-decoration-line: underline;
        color: #000;
        font-size: 14px;
        font-weight: 400;
        line-height: 20px;
        letter-spacing: 0em;
        text-align: left;
      }
      &__links {
        font-family: "Inter", sans-serif;
        font-size: 14px;
        font-weight: 400;
        line-height: 20px;
        letter-spacing: 0em;
        text-align: left;
        color: #727474;
        display: flex;
        align-items: center;
        svg {
          color: #000;
        }
      }
      &__phone-number {
        font-family: "TT Firs Neue";
        font-size: 16px;
        font-weight: 600;
        line-height: 24px;
        letter-spacing: 0em;
        text-align: left;
        color: #ff6418;
        display: flex;
        align-items: center;
      }
    }
  }

  .header-category {
    z-index: 1;
    position: relative;
    padding: 0 0 22px 0;
    &__category-links {
      display: flex;
      justify-content: space-between;
      a {
        font-family: "Inter", sans-serif;
        font-size: 18px;
        font-weight: 400;
        line-height: 26px;
        letter-spacing: 0em;
        text-align: left;
        color: #727474;
        display: flex;
        align-items: center;
        svg {
          margin-right: 9px;
        }
        img {
          margin-right: 9px;
        }
      }
    }
    &__dropdown {
      //styleName: Inter regular 18;
      font-family: "Inter", sans-serif;
      font-size: 18px;
      font-weight: 400;
      line-height: 26px;
      letter-spacing: 0em;
      text-align: left;
      color: #ff6418;
    }
  }
  .header-fluid {
    border-bottom: 1px solid #f4f5f5;
  }
}
.el-dropdown-link {
  cursor: pointer;
  color: #409eff;
}
.el-icon-arrow-down {
  font-size: 12px;
}
@media (max-width: 1440px) {
  .header {
    .header-top {
      padding: 8px 0;
    }
    .header-fluid {
      border-bottom: none;
    }
  }
}
</style>
