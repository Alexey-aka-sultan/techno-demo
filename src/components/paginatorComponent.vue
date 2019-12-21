<template>
  <nav>
    <ul class="pagination justify-content-center">
      <li class="page-item" :class="{ disabled: currentPage === 1 }" v-if="prev">
        <a
          class="page-link d-flex align-items-center pt-0 pb-0 h-100"
          @click="selectPage(currentPage - 1)"
        >
          <i class="fas fa-arrow-alt-circle-left"></i>
        </a>
      </li>
      <li
        class="page-item"
        :class="{ active: currentPage === i + 1 + offsetPageNumber }"
        v-for="(item, i) in pageButtonsAmount"
        :key="i"
      >
        <a class="page-link" @click="selectPage(i + 1 + offsetPageNumber)">
          {{ i + 1 + offsetPageNumber }}
        </a>
      </li>
      <li class="page-item" :class="{ disabled: currentPage === pagesAmount }" v-if="next">
        <a
          class="page-link d-flex align-items-center pt-0 pb-0 h-100"
          @click="selectPage(currentPage + 1)"
        >
          <i class="fas fa-arrow-alt-circle-right"></i>
        </a>
      </li>
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
      if (val < 1 || val > this.pagesAmount) return;

      this.currentPage = val;
      const midButtonValue = Math.ceil(this.pageButtonsAmount / 2) + this.offsetPageNumber;
      const estimatedOffset = this.currentPage - midButtonValue; /* <0 || ===0 || >0 */

      if (estimatedOffset > 0) {
        this.currentPage + estimatedOffset < this.pagesAmount
          ? (this.offsetPageNumber += estimatedOffset)
          : (this.offsetPageNumber = this.pagesAmount - this.pageButtonsAmount);
      } else {
        this.currentPage + estimatedOffset > 1
          ? (this.offsetPageNumber += estimatedOffset)
          : (this.offsetPageNumber = 0);
      }

      this.$emit("input", this.currentPage);
    }
  },
  created() {
    try {
      this.pagesAmount = Math.ceil(this.itemsAmount / this.itemsOnPage);
      //
      if (this.pagesAmount < this.maxPageButtonsAmount) {
        this.pageButtonsAmount = this.pagesAmount;
      } else {
        this.pageButtonsAmount = this.maxPageButtonsAmount;
      }
      //
      this.currentPage = 1;
      this.$emit("input", this.currentPage);
    } catch (error) {
      console.log(error);
    }
  },
  mounted() {
    // console.log(this.pagesAmount);
  }
};
</script>

<style scoped>
.pagination li {
  cursor: pointer;
  text-align: center;
  min-width: 45px;
}
.pagination li a {
  user-select: none;
}
.pagination li a i {
  font-size: 28px;
}
</style>
