export const actions = {
  async fetchHomeProducts() {
    try {
      const res = await this.$axios.$get(`home`);
      console.log(res);
    } catch (e) {
      console.log("error", e);
    }
  },
};
