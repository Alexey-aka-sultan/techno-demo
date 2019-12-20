<template>
  <section id="pagination-section" class="pt-5 pb-5 bg-white">
    <paginatorComponent
      :itemsAmount="19"
      :itemsOnPage="2"
      :prev="true"
      :next="true"
      v-model="currentPage"
    ></paginatorComponent>
  </section>
</template>

<script>
import paginatorComponent from "./paginatorComponent";
export default {
  data() {
    return {
      currentPage: 0
    };
  },
  watch: {
    currentPage(val) {
      console.log('current page is: ' + this.currentPage);
    }
  },
  components: {
    paginatorComponent
  }
};
</script>

<style></style>
