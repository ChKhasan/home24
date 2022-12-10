export const state = () => ({
  auth: false,
});

export const mutations = {
  setUser(state, payload) {
    localStorage.setItem("Auth", payload);
    state.auth = JSON.parse(localStorage.getItem("Auth"));
  },
};
