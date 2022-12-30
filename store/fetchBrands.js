export const actions = {
  async fetchBrands({}, payload) {
    try {
      const res = await this.$axios.$get(`/brands`, { params: payload });
      return res;
    } catch (e) {
      console.log("error", e);
    }
  },
  async fetchBrandsById({}, payload) {
    try {
      const res = await this.$axios.$get(`/brands/${payload}`);
      return res;
    } catch (e) {
      console.log("error", e);
    }
  },
  async fetchBrandsCategories({}, payload) {
    try {
      const res = await this.$axios.$get(`/brand_ctg/${payload}`);
      return res;
    } catch (e) {
      console.log("error", e);
    }
  },
  async fetchProductByBrand({}, query) {
    try {
      const res = await this.$axios.$get(`/products`,{
        params: query
      });
      return [res.results,res.count];
    } catch (e) {
      console.log("error", e);
    }
  },
};
