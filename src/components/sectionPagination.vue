<template>
  <section id="pagination-section" class="container pt-5 pb-4 bg-white">
    <div class="row justify-content-around pb-4 pr-2 pl-2 pr-lg-0 pl-lg-0">
      <!--  -->
      <div class="card col-12 col-lg-auto mb-2" v-for="user in currentUsers" :key="user.id">
        <div class="card-body p-1 pt-4 pb-4">
          <h5 class="card-title">{{ user.title }}</h5>
          <p class="card-text">
            {{ user.body }}
          </p>
          <a class="card-link">More...</a>
        </div>
      </div>
    </div>
    <paginatorComponent
      :itemsAmount="10"
      :itemsOnPage="itemsOnPage"
      :maxPageButtonsAmount="3"
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
      currentPage: 0,
      itemsOnPage: 3,
      allUsers: [],
      currentUsers: []
    };
  },
  methods: {
    showPage(pageNum) {
      const lastInd = pageNum * this.itemsOnPage;
      const startInd = lastInd - this.itemsOnPage;
      this.currentUsers = this.allUsers.slice(startInd, lastInd);
      console.log(this.currentUsers);
    }
  },
  created() {
    for (let i = 0; i < 10; i++) {
      this.allUsers.push({
        id: i,
        title: `title ${i}`,
        body: "lorem ipsum dolor tricolor"
      });
    }
  },
  watch: {
    currentPage(val) {
      if (val > 0) this.showPage(val)
    }
  },
  components: {
    paginatorComponent
  }
};
</script>

<style></style>
