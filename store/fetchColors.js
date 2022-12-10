export const actions = {
  async fetchColors() {
    try {
      const res = await this.$axios.$get(`/colors`);
      return res.results;
    } catch (e) {
      console.log("error", e);
    }
  },
};
