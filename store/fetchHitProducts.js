export const actions = {
    async fetchHitProductsCategories({}, payload) {
      try {
        const res = await this.$axios.$get(`/hitproduct_categories`, { products: payload });
        return res;
      } catch (e) {
        console.log("error", e);
      }
    },
  };
  