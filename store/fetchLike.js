export const actions = {
  async postLike({}, payload) {
    try {
      const res = await this.$axios.$post(`/get_list`, { products: payload });
      return res;
    } catch (e) {
      console.log("error", e);
    }
  },
};
