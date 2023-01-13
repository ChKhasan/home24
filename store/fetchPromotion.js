export const actions = {
  async fetchPromotionProducts({},query) {
    try {
      const res = await this.$axios.$get(`/promotion_products`, {
        params: query,  
      });
      return res;
    } catch (e) {
      return e.respone;
    }
  },
  async fetchPromotionsCategories() {
    try {
      const res = await this.$axios.$get(`/prodmotion_category`);
      return res;
    } catch (e) {
      return e.respone;
    }
  },
};
