export const actions = {
  async fetchProduct() {
    try {
      const res = await this.$axios.$get(`/product/1`);
      return res;
    } catch (e) {
      console.log("error", e);
    }
  },
  async fetchProductByOption({}, id) {
    try {
      console.log(id);
      const res = await this.$axios.$get(`/product/${id}`);
      return res;
    } catch (e) {
      console.log("error", e);
    }
  },
  async fetchProductOfDay() {
    try {
      const res = await this.$axios.$get(`/product_of_day`);
      return res.results;
    } catch (e) {
      console.log("error", e);
    }
  },
  async fetchProductByCategory({}, query) {
    try {
      const res = await this.$axios.$get(`/products`,{
        params: query
      });
      return res;
    } catch (e) {
      console.log("error", e);
    }
  },
  async fetchProductByFilter({}, query) {
    try {
      const res = await this.$axios.$get(`/filter`, {
        params: query,
      });
      console.log(res);
      return res;
    } catch (e) {
      console.log("error", e);
    }
  },
  async fetchPopularProduct() {
    try {
      const res = await this.$axios.$get(`/popular_products`);
      return res.results;
    } catch (e) {
      console.log("error", e);
    }
  },
  async fetchHitProduct({},query) {
    try {
      const res = await this.$axios.$get(`/hit_products`,{
        params: query
      });
      return res;
    } catch (e) {
      console.log("error", e);
    }
  },
};
