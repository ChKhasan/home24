export const actions = {
  async fetchNumber({}, number) {
    try {
      const res = await this.$axios.$post(`/account/check_number`, number);
      return res;
    } catch (e) {
      console.log("error", e);
    }
  },
  async fetchSendSms({}, number) {
    try {
      const res = await this.$axios.$post(`/account/send_sms`, number);
      return res;
    } catch (e) {
      console.log("error", e);
    }
  },
  async fetchRegisterWithSmsCode({}, number) {
    try {
      const res = await this.$axios.$post(`/account/sing-up`, number);
      return res;
    } catch (e) {
      console.log("error", e);
    }
  },
  async fetchSmsCodeValidate({}, number) {
    try {
      const res = await this.$axios.$post(`/account/code_validate`, number);
      return res;
    } catch (e) {
      console.log("error", e);
    }
  },
  async fetchUserProfile({}, token) {
    try {
      const res = await this.$axios.$get(`/account/profile`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return res;
    } catch (e) {
      console.log("error", e);
    }
  },
  async fetchUserUpdateProfile({}, payload) {
    try {
      
      const res = await this.$axios.$patch(
        `/account/update_profile`,payload.info,
        {
          headers: {
            Authorization: `Bearer ${payload.token}`,
          },
        }
      );
      return res;
    } catch (e) {
      return e.response
    }
  },
  async fetchUserUpdatePassword({}, payload) {
    try {
      const res = await this.$axios.$patch(
        `/account/update_password`,
        payload.password,
        {
          headers: {
            Authorization: `Bearer ${payload.token}`,
          },
        }
      );
      return res;
    } catch (e) {
      console.log("error", e);
    }
  },
  async fetchUserLogin({}, payload) {
    try {
      const res = await this.$axios.$post(`/account/login`, payload);
      return res;
    } catch (e) {
      console.log("error", e);
    }
  },
  async fetchNewPassword({}, payload) {
    try {
      const res = await this.$axios.$post(`/account/new_password`, payload);
      return res;
    } catch (e) {
      console.log("error", e);
    }
  },
  async fetchLogOut({}, payload) {
    try {
      const res = await this.$axios.$post(
        `/account/logout`,
        { refresh_token: payload.refresh_token },
        {
          headers: {
            Authorization: `Bearer ${payload.token}`,
          },
        }
      );
      return res;
    } catch (e) {
      console.log("error", e);
    }
  },
  async fetchUpdateToken({}, payload) {
    try {
      const res = await this.$axios.$post(
        `/account/logout`,
        { refresh_token: payload.refresh_token },
        {
          headers: {
            Authorization: `Bearer ${payload.token}`,
          },
        }
      );
      return res;
    } catch (e) {
      console.log("error", e);
    }
  },
};
