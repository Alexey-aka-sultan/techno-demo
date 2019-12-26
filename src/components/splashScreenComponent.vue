<template>
  <div ref="splash-screen" class="splash-screen d-flex justify-content-center align-items-center">
    <div class="spinner-border text-info" role="status"></div>
  </div>
</template>

<script>
export default {
  props: {
    height: {
      type: Number,
      default: 300
    }
  },
  mounted() {
    this.$refs["splash-screen"].style.height = this.height + "px";
  }
};
</script>

<style scoped>
.splash-screen {
  width: 100%;
  background: rgba(118, 118, 119, 0.5);
}
.spinner-border {
    width: 100px;
    height: 100px;
}
</style>
