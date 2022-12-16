export const state = () => ({
  auth: false,
  cart: [],
  like: [],
  comparison: [],
});

export const mutations = {
  setUser(state) {
    if (localStorage.getItem("Auth")) {
      console.log("true");
      state.auth = true;
    } else {
      console.log("false");
      state.auth = false;
    }
  },
  addToStore(state, payload) {
    let cart = JSON.parse(localStorage.getItem(payload.name));
    if (cart.includes(payload.id)) {
      cart.splice(cart.indexOf(payload.id), 1);
    } else {
      cart.push(payload.id);
    }
    localStorage.setItem(payload.name, JSON.stringify(cart));
    state[payload.name] = cart;
  },
  reloadStore(state) {
    if (localStorage.getItem("cart")) {
      const cart = JSON.parse(localStorage.getItem("cart"));
      state.cart = cart;
    } else {
      localStorage.setItem("cart", JSON.stringify([]));
    }
    if (localStorage.getItem("like")) {
      const like = JSON.parse(localStorage.getItem("like"));
      state.like = like;
    } else {
      localStorage.setItem("like", JSON.stringify([]));
    }
    if (localStorage.getItem("comparison")) {
      const comparison = JSON.parse(localStorage.getItem("comparison"));

      state.comparison = comparison;
    } else {
      localStorage.setItem("comparison", JSON.stringify([]));
    }
  },
};
