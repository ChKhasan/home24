<template lang="html">
  <div class="bread-crumb">
    <div class="d-flex align-items-center" v-for="link in links">
      <nuxt-link v-if="link.to" class="bread-crumb__link" :to="link?.to">{{
        link?.name
      }}</nuxt-link
      ><svg
        width="6"
        height="12"
        viewBox="0 0 6 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0.666748 1.33366L5.33341 6.00033L0.666748 10.667"
          stroke="#727474"
          stroke-width="1.2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </div>

    <span>{{ last }}</span>
  </div>
</template>
<script>
export default {
  props: ["links", "last"],
};
</script>
<style lang="scss">
.bread-crumb {
  display: flex;
  align-items: center;
  &__link {
    font-size: 16px;
    font-weight: 600;
    line-height: 24px;
    letter-spacing: 0em;
    text-align: left;
    color: #ff6418;
    &:hover {
      text-decoration-line: none;
      color: rgba(255, 100, 24, 0.8);
    }
  }
  span {
    font-size: 16px;
    font-weight: 600;
    line-height: 24px;
    letter-spacing: 0em;
    text-align: left;
    color: #727474;
  }
  svg {
    margin: 0 13.67px;
  }
}
</style>
