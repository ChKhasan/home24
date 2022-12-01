<template lang="html">
  <div class="category">
    <div class="container">
      <div class="row">
        <div class="col-2 category__list-box1">
          <h2>Категории</h2>
          <ul class="category__list">
            <li>
              <span @click="$router.push(`/category`)">Мебель</span>
              <ul>
                <li>
                  <span @click="$router.push(`/category/products`)"
                    >Офисная мебель</span
                  >
                  <ul>
                    <li>
                      <span class="category__list-active"
                        >Геймерские кресла</span
                      >
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div class="col-10">
          <BreadCrumb :links="links" last="Геймерские кресла " />
          <TitleCategory :show="true" title="Офисная мебель" />
          <div class="category__category-controller">
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

export default {
  data() {
    return {
      links: [
        {
          name: "Главный",
          to: "/",
        },
        {
          name: "Мебель",
          to: "/category/",
        },
        {
          name: "Офисная мебель",
          to: "/category/products",
        },
      ],
    };
  },
  components: {
    BreadCrumb,
    TitleCategory,
    CardProduct,
    CardCategory,
    homeTitliesVue,
  },
};
</script>
<style lang="scss">
.category {
  padding-top: 32px;
  &__category-controller {
    padding-top: 32px;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-gap: 20px;
  }
  &__product-controller {
    padding-top: 32px;
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    grid-gap: 24px;
  }
  &__list-box1 {
    h2 {
      font-family: "Inter";
      font-size: 20px;
      font-weight: 600;
      line-height: 28px;
      letter-spacing: 0em;
      text-align: left;
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
  &__list {
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
</style>
