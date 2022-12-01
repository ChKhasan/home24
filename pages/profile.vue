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
