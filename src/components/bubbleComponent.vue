<template>
  <div ref="a" class="bubble animated infinite shake slow position-absolute">
    <i class="fas fa-circle"></i>
  </div>
</template>

<script>
export default {
  mounted() {
    const thisObj = this;

    setTimeout(() => {
      thisObj.$refs["a"].style.bottom = `${250}px`;
      thisObj.$refs["a"].style.opacity = '1';
    }, 100);
  }
};
</script>

<style scoped>
.bubble {
  opacity: 0;
  bottom: 0;
  transition: opacity 1000ms, bottom 5000ms;
}
</style>
