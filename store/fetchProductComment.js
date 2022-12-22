export const actions = {
  async fetchSendComment({}, payload) {
    const res = await this.$axios.$post(`/add_comment`, payload.comment, {
      headers: {
        Authorization: `Bearer ${payload.token}`,
      },
    });
    return res;
  },
  async fetchComment({},payload) {
    const res = await this.$axios.$get(`/comments`,{ params: { id: payload } },);
    return res.results;
  },
};
