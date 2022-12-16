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
    const categories = await this.$store.dispatch(
      "fetchCategories/fetchAllCategories"
    );
    this.categories = categories;
    this.$store.commit("reloadStore");
  
  },
};
</script>
<style lang="css"></style>
