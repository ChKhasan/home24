<template lang="html">
  <div class="brands-fluid">
    <div class="container brands">
      <div class="row">
        <div class="col-12">
          <BreadCrumb :links="links" last="Популярные бренды" />
          <div class="favorites__f-header">
            <TitleBasket title="Популярные бренды" />
          </div>
        </div>
      </div>
      <div class="row brands__header">
        <div class="col-12 d-flex justify-content-between">
          <div class="d-flex">
            <span
              class="all_brands"
              @click="showAll"
              :class="{ activeLetter: Object.keys($route.query).length == 1 }"
              >Все бренды</span
            >
            <div class="letters_box">
              <span
                class="filter_letter"
                v-for="letter in letters[letter_type]"
                :class="{ activeLetter: $route.query.search == letter }"
                @click="filterLetter(letter)"
                >{{ letter }}</span
              >
              <div class="letter_types">
                <span v-if="letter_type != 'eng'" @click="letter_type = 'eng'"
                  >A - Z</span
                >
                <span v-if="letter_type != 'ru'" @click="letter_type = 'ru'"
                  >A - Я</span
                >
                <span v-if="letter_type != 'num'" @click="letter_type = 'num'"
                  >123</span
                >
              </div>
            </div>
          </div>
          <div class="brands__search">
            <input type="text" placeholder="Искать" v-model="searchValue" />
            <div class="brand_search_btn" @click="brandSearch">
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
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-12 brands__cards">
          <CardBrand
            img="../assets/images/Frame 8.png"
            v-for="brand in brands"
            :key="brand.id"
            :brand="brand"
          />
        </div>
      </div>
      <div class="brands__pagination">
        <el-pagination
          layout="prev, pager, next"
          @current-change="handleCurrentChange"
          :current-page.sync="currentPage"
          :total="totalPage * 10"
        >
        </el-pagination>
      </div>
    </div>
  </div>
</template>
<script>
import TitleBasket from "../components/basket/titleBasket.vue";
import BreadCrumb from "../components/category/breadCrumb.vue";
import CardBrand from "../components/cards/cardBrand.vue";

export default {
  data() {
    return {
      currentPage: 1,
      totalPage: 5,
      searchValue: "",
      params: {
        page: 1,
        page_size: 1,
      },
      brands: [],
      letter_type: "eng",
      links: [
        {
          name: "Главная",
          to: "/",
        },
      ],
      letters: {
        eng: [
          "A",
          "B",
          "C",
          "D",
          "E",
          "F",
          "G",
          "H",
          "I",
          "J",
          "K",
          "L",
          "M",
          "N",
          "O",
          "P",
          "Q",
          "R",
          "S",
          "T",
          "U",
          "V",
          "W",
          "X",
          "Y",
          "Z",
        ],
        ru: [
          "A",
          "Я",
          "C",
          "D",
          "E",
          "F",
          "G",
          "H",
          "I",
          "J",
          "K",
          "L",
          "M",
          "N",
          "O",
          "P",
          "Q",
          "R",
          "S",
          "T",
          "U",
          "V",
          "W",
          "X",
          "Y",
          "Z",
        ],
        num: ["1", "2", "3", "4", "5", "6", "7", "8", "9"],
      },
    };
  },
  components: { BreadCrumb, TitleBasket, CardBrand },
  created() {
    this._GET_BRANDS();
  },
  methods: {
    async _GET_BRANDS() {
      if (this.$route.query.page != this.params.page) {
        await this.$router.replace({
          path: `/brands`,
          query: { page: this.params.page },
        });
      }
      const brands = await this.$store.dispatch("fetchBrands/fetchBrands", {
        ...this.params,
        ...this.$route.query,
      });
      this.brands = brands.results;
      this.totalPage = brands.count;
    },
    async handleCurrentChange(val) {
      this.params.page = val;
      await this.$router.replace({
        path: `/brands`,
        query: { page: this.params.page },
      });
      this.currentPage = await JSON.parse(this.$route.query.page);
      const brands = await this.$store.dispatch(
        "fetchBrands/fetchBrands",
        this.params
      );
      this.brands = brands.results;
    },
    async filterLetter(letter) {
      await this.$router.replace({
        path: `/brands`,
        query: { page: 1, search: letter },
      });
      this.currentPage = await JSON.parse(this.$route.query.page);
      const brands = await this.$store.dispatch("fetchBrands/fetchBrands", {
        ...this.params,
        ...this.$route.query,
      });
      this.brands = await brands.results;
      this.totalPage = await brands.count;
    },
    async showAll() {
      await this.$router.replace({
        path: `/brands`,
        query: { page: this.$route.query.page },
      });
      this.currentPage = await JSON.parse(this.$route.query.page);
      const brands = await this.$store.dispatch("fetchBrands/fetchBrands", {
        ...this.params,
        ...this.$route.query,
      });
      this.brands = await brands.results;
      this.totalPage = await brands.count;
    },
    async brandSearch() {
      await this.$router.replace({
        path: `/brands`,
        query: { page: 1, search: this.searchValue },
      });
      this.currentPage = await JSON.parse(this.$route.query.page);
      const brands = await this.$store.dispatch("fetchBrands/fetchBrands", {
        ...this.params,
        ...this.$route.query,
      });
      this.brands = await brands.results;
      this.totalPage = await brands.count;
    },
  },
};
</script>
<style lang="scss">
.brands-fluid {
  padding-top: 32px;
  .activeLetter {
    pointer-events: none;
    color: #ff6418;
  }
  .all_brands {
    font-family: "TT Firs Neue";
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 28px;
    margin-right: 24px;
    text-decoration-line: underline;
    cursor: pointer;
    color: #ff6418;
  }
  .brands {
    &__header {
      margin-top: 16px;
    }
    &__cards {
      padding-top: 32px;
      display: grid;
      grid-template-columns: repeat(6, 1fr);
      grid-gap: 24px;
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
    &__search {
      display: flex;
      border: 1px solid #ebebeb;
      border-radius: 4px;
      div {
        height: 100%;
        padding-left: 36px;
        padding-right: 36px;
        background: #f8f8f8;
        border-radius: 0px 4px 4px 0px;
        display: flex;
        align-items: center;
        cursor: pointer;
      }
      input {
        padding: 10px 16px;
        height: 100%;
        border: none;
        font-family: "Inter";
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 28px;
        /* identical to box height, or 175% */

        /* Grey 40% */

        color: #9a999b;
        &:focus {
          outline: none;
        }
      }
    }
  }
  .letters_box {
    display: flex;
    .letter_types {
      span {
        margin-left: 24px;
        cursor: pointer;
      }
    }
    .filter_letter {
      margin-right: 8px;
      font-family: "Inter";
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      cursor: pointer;
      line-height: 24px;
    }
  }
}
</style>
