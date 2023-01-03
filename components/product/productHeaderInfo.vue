<template lang="html">
  <div>
    <div class="product-header-info">
      <span v-if="product.rating">
        <svg
          width="12"
          height="12.67"
          viewBox="0 0 16 17"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M8.47609 2.79389L10.0201 5.89989C10.0974 6.05655 10.2468 6.16589 10.4201 6.19122L13.8768 6.69055C14.0168 6.70922 14.1428 6.78255 14.2288 6.89455C14.3901 7.10455 14.3654 7.40189 14.1721 7.58255L11.6668 10.0052C11.5394 10.1252 11.4828 10.3012 11.5161 10.4726L12.1161 13.8912C12.1581 14.1746 11.9648 14.4399 11.6814 14.4859C11.5641 14.5039 11.4441 14.4852 11.3374 14.4326L8.25876 12.8186C8.10409 12.7346 7.91876 12.7346 7.76409 12.8186L4.66276 14.4412C4.40342 14.5732 4.08609 14.4752 3.94476 14.2212C3.89076 14.1186 3.87209 14.0019 3.89076 13.8879L4.49076 10.4692C4.52076 10.2986 4.46409 10.1232 4.34009 10.0026L1.82142 7.58055C1.61609 7.37655 1.61476 7.04455 1.81942 6.83922C1.82009 6.83855 1.82076 6.83722 1.82142 6.83655C1.90609 6.75989 2.01009 6.70855 2.12276 6.68855L5.58009 6.18922C5.75276 6.16189 5.90142 6.05389 5.98009 5.89722L7.52276 2.79389C7.58476 2.66789 7.69476 2.57122 7.82809 2.52722C7.96209 2.48255 8.10876 2.49322 8.23476 2.55655C8.33809 2.60789 8.42276 2.69122 8.47609 2.79389Z"
            fill="#F6C65C"
          /></svg
        >{{ product.rating }}</span
      >
      <p>
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M5.12963 8.92694C4.69979 8.92694 4.35059 8.57774 4.35059 8.1479C4.35059 7.71932 4.69979 7.37012 5.12963 7.37012C5.55948 7.37012 5.90868 7.71932 5.90868 8.1479C5.90868 8.57774 5.55948 8.92694 5.12963 8.92694ZM8.15821 8.92694C7.72836 8.92694 7.37916 8.57774 7.37916 8.1479C7.37916 7.71932 7.72836 7.37012 8.15821 7.37012C8.58805 7.37012 8.93725 7.71932 8.93725 8.1479C8.93725 8.57774 8.58805 8.92694 8.15821 8.92694ZM10.4078 8.1479C10.4078 8.57774 10.757 8.92694 11.1868 8.92694C11.6167 8.92694 11.9659 8.57774 11.9659 8.1479C11.9659 7.71932 11.6167 7.37012 11.1868 7.37012C10.757 7.37012 10.4078 7.71932 10.4078 8.1479Z"
            fill="#727474"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M8.01301 1.33301C4.13967 1.33301 1.33301 4.49709 1.33301 8.00969C1.33301 9.13137 1.65967 10.2858 2.23301 11.3407C2.33967 11.5149 2.35301 11.7346 2.27967 11.9423L1.83301 13.4378C1.73301 13.7984 2.03967 14.0648 2.37967 13.9579L3.72634 13.558C4.09301 13.4378 4.37967 13.5907 4.71967 13.7984C5.69301 14.3719 6.90634 14.6663 7.99967 14.6663C11.3063 14.6663 14.6663 12.1092 14.6663 7.98966C14.6663 4.437 11.7997 1.33301 8.01301 1.33301Z"
            stroke="#727474"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        {{commentCount ? commentCount:product.comments_count}} Отзывов
      </p>
      <p>Код товара: {{product.id}}</p>
      <p v-if="hide" class="response__hide">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7 17.4795H6C4.343 17.4795 3 16.2575 3 14.7495V10.7685C3 9.26147 4.343 8.03847 6 8.03847H18.667C20.324 8.03847 21.667 9.26047 21.667 10.7685V14.7495C21.667 16.2565 20.324 17.4795 18.667 17.4795H17.667M7 5.41847V3.60547H17.666V5.41847M5.94859 11.0151L5.9504 11.0122M7 14.5645H17.667V20.3935H7V14.5645Z"
            stroke="#FF7E00"
            stroke-width="1.5"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        Печатать
      </p>
    </div>
  </div>
</template>
<script>
export default {
    props: ["hide","product","commentCount"]
};
</script>
<style lang="scss">
.product-header-info {
  p {
    margin-bottom: 0;
  }
  display: flex;
  align-items: center;
  justify-content: space-between;
  span {
    display: flex;
    align-items: center;
    font-family: "Inter";
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: 0em;
    text-align: left;
  }
  p {
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    margin-bottom: 0 !important;
    /* identical to box height, or 150% */

    /* Grey */

    color: #727474;
    svg {
      margin-right: 10px;
    }
  }
}
@media (max-width: 1440px) {
  .product-header-info {
    span,p {
      font-size: 14px !important;
line-height: 22px !important;
    }
    .response__hide {
      display: none;
    }
  }
}
</style>
