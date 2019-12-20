<template>
  <section id="pagination-section" class="pt-5 pb-5 bg-white">
    <paginatorComponent :itemsAmount="9" :itemsOnPage="2"></paginatorComponent>
  </section>
</template>

<script>
import paginatorComponent from "./paginatorComponent";
export default {
  data() {
    return {
      //
    };
  },
  components: {
    paginatorComponent
  }
};
</script>

<style></style>
