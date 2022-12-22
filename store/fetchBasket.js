export const actions = {
  async fetchBasket() {
    try {
      const res = await this.$axios.$get(`/test`);
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
  async postCart({}, payload) {
    try {
      const res = await this.$axios.$post(`/get_list`, { products: payload });
      return res;
    } catch (e) {
      console.log("error", e);
    }
  },
  async fetchPlaceOrder({}, payload) {
    try {
      const res = await this.$axios.$post(
        `/order/orders`,
        payload.info,
        {
          headers: {
            Authorization: `Bearer ${payload.token}`,
          },
        }
      );
      return res;
    } catch (e) {
      console.log("error", e);
    }
  },
};
