<template>
  <div ref="a" class="bubble animated infinite shake slow position-absolute">
    <i class="fas fa-circle"></i>
  </div>
</template>

<script>
export default {
  props: {
    lifeTime: {
      type: Number,
      default: 2000
    },
    maxDelay: {
      type: Number,
      default: 2000
    }
  },
  methods: {
    async init() {
      await new Promise(resolve => {
        setTimeout(() => {resolve()}, Math.round(Math.random() * this.maxDelay));
      });

      const thisObj = this;
      const bubbleParentRect = this.$parent.$el.getBoundingClientRect();
      const bubbleRect = this.$el.getBoundingClientRect();
      const newLeft = Math.random() * (bubbleParentRect.width - bubbleRect.width);

      thisObj.$refs["a"].style = "";
      thisObj.$refs["a"].style.top = `${bubbleParentRect.bottom}px`;
      thisObj.$refs["a"].style.left = `${newLeft}px`;
      thisObj.$refs["a"].style.opacity = "0";

      await new Promise(resolve => {
        setTimeout(() => {
          thisObj.$refs["a"].style.top = `${-bubbleRect.height}px`;
          thisObj.$refs["a"].style.opacity = "0.5";
          thisObj.$refs["a"].style.transition = `opacity 1000ms, top linear ${this.lifeTime}ms`;
          resolve();
        }, 100);
      });

      setTimeout(() => {
        thisObj.init();
      }, thisObj.lifeTime);
    }
  },
  mounted() {
    this.init();
  }
};
</script>

<style scoped>
.bubble {
  opacity: 0;
}
.bubble i {
  color: blueviolet;
}
</style>
