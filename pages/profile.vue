<template lang="html">
  <nuxt-child />
</template>
<script>
export default {
  middleware: "auth",
  mounted() {
    this.$router.push("/profile/orders");
  },
};
</script>
<style lang="scss">
.profile {
  padding-top: 32px;
  .log-out-modal {
  z-index: 30;
 
  &__m-header {
    padding: 6px 6px 6px 40px;
    display: flex;
    justify-content: space-between;
    background: #f7f7f7;
    align-items: center;
    z-index: 30;

    span {
      cursor: pointer;
    }
    h1 {
      font-family: "TT Firs Neue" !important;
      font-style: normal !important;
      font-weight: 500 !important;
      font-size: 24px !important;
      line-height: 32px !important;
      color: #020105 !important;
      margin-bottom: 0 !important;
    }
  }

  &__m-btn {
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 24px;
padding: 54px 41px;
    div {
      // margin-top: 24px;
      border-radius: 6px;
      padding-top: 16px;
      padding-bottom: 16px;
      font-family: "Inter";
      font-style: normal;
      font-weight: 500;
      font-size: 16px;
      line-height: 20px;
      width: 100%;
      text-align: center;
      cursor: pointer;
      transition: 0.4s;
    }
    
    .show-btn {
      
      &:last-child {
        background: #ff7e00;
      color: #fff;
      &:hover {
        background: rgba(255, 100, 24, 0.6);
      }
      }
      &:first-child {
        background: #EBEBEB;
        color: #000;
      }
    }
  }
  .forgot-your-password {
    padding-top: 20px;
    span {
cursor: pointer;
      display: flex;
      justify-content: center;
      font-family: 'Inter';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  color: #020105;
    }
  }
}
  &__body {
    display: grid;
    grid-template-columns: 1fr 4fr;
    padding-top: 32px;
  }
  &__menu {
    border-right: 1px solid #f2f2fa;
    height: 500px;
    ul {
      text-decoration: none;
      list-style: none;
      padding-left: 0;
      li {
        margin-bottom: 32px;
        a,div {
          display: flex;
          align-items: center;
          font-family: "Inter";
          font-style: normal;
          font-weight: 500;
          font-size: 16px;
          line-height: 24px;
          color: #020105;
          cursor: pointer;
          &:hover {
            text-decoration: none;
          }
          span {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 48px;
            height: 48px;
            background: #f2f2fa;
            border-radius: 50%;
            margin-right: 8px;
          }
        }
        .activeMenu {
          color: #ff7e00;
          span {
            background: #ff7e00;
            color: white;
            svg {
              path,
              circle {
                stroke: white;
              }
            }
          }
        }
      }
    }
  }
  &__area {
    padding-left: 24px;
  }
}
</style>
