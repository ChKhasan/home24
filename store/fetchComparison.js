export const actions = {
    async postComparison({}, payload) {
      try {
        const res = await this.$axios.$post(`/matching`, { products: payload });
        return res.products;
      } catch (e) {
        console.log("error", e);
      }
    },
  };
  