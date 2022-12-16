export const actions = {
  async fetchAllCategories() {
    try {
      const res = await this.$axios.$get(`/categories`);
      return res.results;
    } catch (e) {
      console.log("error", e);
    }
  },

  async fetchAllCategoryById({}, id) {
    try {
      const res = await this.$axios.$get(`/category/${id}`);
      return res;
    } catch (e) {
      console.log("error", e);
    }
  },
  async fetchPopularCategories() {
    try {
      const res = await this.$axios.$get(`/populat_ctg`);
      return res.results;
    } catch (e) {
      console.log("error", e);
    }
  },
};
