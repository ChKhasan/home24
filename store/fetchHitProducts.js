export const actions = {
    async fetchHitProductsCategories() {
      try {
        const res = await this.$axios.$get(`/hitproduct_categories`);
        return res;
      } catch (e) {
        return e.response
      }
    },
  };
  