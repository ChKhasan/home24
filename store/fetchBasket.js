export const actions = {
  async fetchBasket() {
    try {
      const res = await this.$axios.$get(`/cart`);
      return res;
    } catch (e) {
      console.log("error", e);
    }
  },

  async postProductToCart({}, payload) {
    try {
      const res = await this.$axios.$post(`/cart`, payload);
      return res;
    } catch (e) {
      console.log("error", e);
    }
  },
};
