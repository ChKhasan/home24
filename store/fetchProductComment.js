export const actions = {
  async fetchSendComment({}, payload) {
    try {
      const res = await this.$axios.$post(`/add_comment`, payload.comment, {
        headers: {
          Authorization: `Bearer ${payload.token}`,
        },
      });
      return res;
    } catch (e) {
      return e.response;
    }
  },
  async fetchComment({}, payload) {
    const res = await this.$axios.$get(`/comments`, {
      params: { id: payload.id, page_size: payload.page_size },
    });
    return res.results;
  },
};
