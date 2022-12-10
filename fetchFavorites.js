export const actions = {
    async fetchFavorites() {
      try {
        const res = await this.$axios.$get(`/like`);
        return res;
      } catch (e) {
        console.log("error", e);
      }
    },
  
    async postProductToFavorites({},payload) {
      try {
        const res = await this.$axios.$post(`/like`,payload);
        return res;
      } catch (e) {
        console.log("error", e);
      }
    },
  };
  