export const actions = {
    async postComparison({}, payload) {
      try {
        const res = await this.$axios.$post(`/get_list`, { products: payload });
        return res;
      } catch (e) {
        console.log("error", e);
      }
    },
  };
  