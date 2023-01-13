export const mutations = {
    SET_RESPONSE(_,res) {
      if(res.success) {
        localStorage.removeItem("Auth");
        localStorage.removeItem("Refresh");
        localStorage.removeItem("password_access");
        this.$router.push("/");
      }
    }
}
export const actions = {
    async logOut({commit}) {
        const response = await this.$axios.$post(
            `/account/logout`,
            { refresh_token: localStorage.getItem("Refresh") },
            {
              headers: {
                Authorization: `Bearer ${localStorage.getItem("Auth")}`,
              },
            }
          );
          commit("SET_RESPONSE",response)
    }
}