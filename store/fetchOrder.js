export const actions = {
  async fetchPlaceOrder({}, payload) {
    const res = await this.$axios.$post(`/order/orders`, payload.order, {
      headers: {
        Authorization: `Bearer ${payload.token}`,
      },
    });
    return res;
  },
  async fetchPlaceOrderNoToken({}, payload) {
    const res = await this.$axios.$post(`/order/orders`, payload.order);
    return res;
  },
  async fetchStates() {
    try {
      const res = await this.$axios.$get(`/order/get_states`);
      return res;
    } catch (e) {
      console.log("error", e);
    }
  },
  async fetchCities() {
    try {
      const res = await this.$axios.$get(`/order/get_cities`);
      return res;
    } catch (e) {
      console.log("error", e);
    }
  },
  async fetchPaymentTypes() {
    try {
      const res = await this.$axios.$get(`/order/payments`);
      return res.results;
    } catch (e) {
      console.log("error", e);
    }
  },
  async fetchMyOrders({}, payload) {
    console.log(payload.token);
    try {
      const res = await this.$axios.$get(
        `/order/my_orders`,
        { ...payload.status,
          headers: {
            Authorization: `Bearer ${payload.token}`,
          },
       },
      );
      return res.results;
    } catch (e) {
      console.log("error", e);
    }
  },
  async fetchSendAplication({}, payload) {
    try {
      const res = await this.$axios.$post(`/order/add_aplication`, payload);
      return res;
    } catch (e) {
      console.log("error", e);
    }
  },
};
