<template lang="html">
  <div>
    <Header :categories="categories" />
    <Nuxt />
    <Footer />
  </div>
</template>
<script>
import Header from "@/components/layout/Header.vue";
import Footer from "@/components/layout/Footer.vue";
export default {
  data() {
    return {
      categories: [],
    };
  },
  components: {
    Header,
    Footer,
  },
  async created() {
    // const data = await this.$axios.$get("home");
    const categories = await this.$store.dispatch(
      "fetchCategories/fetchAllCategories"
    );
    // console.log(data);
    this.categories = categories;
  },
};
</script>
<style lang="css"></style>
