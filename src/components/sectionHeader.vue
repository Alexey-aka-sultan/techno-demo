<template>
  <div class="jumbotron jumbotron-fluid mb-0">
    <div class="container">
      <transition name="title">
        <h1 v-if="titleVisibility" class="d-flex">
          <div class="letter-outer" v-for="(letter, i) in title" :key="i">
            <span class="d-block display-1 animated infinite pulse" :style="getStyleForLetter()">
              {{ letter }}
            </span>
          </div>
        </h1>
      </transition>
      <!--  -->
      <button @click="testFunc">test</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: [],
      titleVisibility: true
    };
  },
  methods: {
    getStyleForLetter() {
      const r = Math.round(Math.random() * 255);
      const g = r >= 128 ? Math.floor(r / 2) : Math.floor(r * 2);
      const b =
        r + g < 255 ? Math.round(Math.random() * 128 + 127) : Math.round(Math.random() * 128);

      const sr = r + 32 > 255 ? 255 : r + 32;
      const sg = g + 32 > 255 ? 255 : g + 32;
      const sb = b + 32 > 255 ? 255 : b + 32;

      return {
        "animation-delay": `${Math.round(Math.random() * 1500)}ms`,
        color: `rgb(${r},${g},${b})`,
        "text-shadow": `0 0 10px rgb(${sr},${sg},${sb})`
      };
      // `rgb(${Math.round(Math.random() * 255)},${Math.round(Math.random() * 255)},${Math.round(Math.random() * 255)})`
    },
    async testFunc() {
      const thisObj = this;
      this.titleVisibility = false;

      await new Promise(resolve => {
        setTimeout(() => {
          thisObj.title = "Pachkuchka".split("");
          resolve();
        }, 1000);
      });

      this.titleVisibility = true;
    }
  },
  created() {
    this.title = this.$store.state.mainTitle.split("");
  }
};
</script>

<style>
h1 .letter-outer {
  cursor: pointer;
  transition: transform 666ms;
}
h1 .letter-outer:hover {
  transform: translateY(-10px);
}

.title-enter {
  opacity: 0;
}
.title-enter-active {
  transition: all 1000ms;
}
.title-leave-active {
  transition: all 1000ms;
}
.title-leave-to {
  opacity: 0;
}
</style>
