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
  methods: {
    async _GET_CATEGORIES() {
      this.categories = await this.$store.dispatch(
        "fetchCategories/fetchAllCategories"
      );
      await this.$store.commit("getCategories", this.categories);
    },
  },
  created() {
    this._GET_CATEGORIES();
    this.$store.commit("reloadStore");
  },
};
</script>
<style lang="css"></style>
