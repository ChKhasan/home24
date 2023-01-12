export const actions = {
  async postComparison({}, payload) {
    try {
      const res = await this.$axios.$post(`/matching`, payload);
      return res.products;
    } catch (e) {
      console.log("error", e);
    }
  },
  async fetchComparisonByCategory({}, payload) {
    try {
      const res = await this.$axios.$post(`/matching_categories`, payload);
      return res;
    } catch (e) {
      return e.response;
    }
  },
};
