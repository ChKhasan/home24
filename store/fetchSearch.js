export const actions = {
  async fetchSearchProduct({}, query) {
    const res = await this.$axios.$get(`/products`, { params: query });
    return res;
  },
  async fetchSearchCategories({}, query) {
    const res = await this.$axios.$get(`/get_search_category`, { params: query });
    return res;
  },
  async fetchSearchCategory({}, query) {
    const res = await this.$axios.$get(`/search_categories`, { params: query });
    return res;
  },
};
