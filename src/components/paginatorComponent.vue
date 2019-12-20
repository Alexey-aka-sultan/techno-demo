<template>
  <nav>
    <ul class="pagination">
      <li class="page-item" v-if="prev"><a class="page-link" href="#">Previous</a></li>
      <li
        class="page-item"
        :class="{ active: currentPage === i + 1 + offsetPageNumber }"
        v-for="(item, i) in pageButtonsAmount"
        :key="i"
      >
        <a class="page-link" @click="selectPage(i)">{{ i + 1 + offsetPageNumber }}</a>
      </li>
      <li class="page-item" v-if="next"><a class="page-link" href="#">Next</a></li>
    </ul>
  </nav>
</template>

<script>
export default {
  props: {
    prev: {
      type: Boolean,
      default: false
    },
    next: {
      type: Boolean,
      default: false
    },
    itemsAmount: {
      type: Number,
      default: 0
    },
    itemsOnPage: {
      type: Number,
      default: 0
    },
    maxPageButtonsAmount: {
      type: Number,
      default: 5
    }
  },
  data() {
    return {
      pageButtonsAmount: 0,
      pagesAmount: 0,
      currentPage: 0,
      offsetPageNumber: 0
    };
  },
  methods: {
    selectPage(val) {
      this.currentPage = val + 1 + this.offsetPageNumber;
      console.log(this.currentPage);
    }
  },
  created() {
    try {
      //
      this.pagesAmount = Math.floor(this.itemsAmount / this.itemsOnPage);
      //
      if (this.pagesAmount < this.maxPageButtonsAmount) {
        this.pageButtonsAmount = this.pagesAmount;
      } else {
        this.pageButtonsAmount = this.maxPageButtonsAmount;
      }
      //
      this.currentPage = 1;
      //
    } catch (error) {
      console.log(error);
    }
  },
  mounted() {
    console.log(this.pagesAmount);
    console.log(this.pageButtonsAmount);
  }
};
</script>

<style></style>
