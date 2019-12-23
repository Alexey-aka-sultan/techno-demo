<template>
  <div class="jumbotron jumbotron-fluid mb-0">
    <div class="container">
      <transition
        name="title"
        @before-enter="titleBeforeEnter"
        @after-leave="titleAfterLeave"
        @before-leave="titleBeforeLeave"
      >
        <h1 v-if="titleVisibility" class="d-flex">
          <div class="letter-outer display-1" v-for="(letter, i) in title" :key="i">
            <span class="d-block animated infinite pulse" :style="getStyleForLetter()">
              {{ letter }}
            </span>
          </div>
        </h1>
      </transition>
      <!--  -->
      <form @submit.prevent="updateTitle">
        <div class="input-group mb-3">
          <input
            ref="new-title-input"
            type="text"
            class="form-control"
            placeholder="Введите новый заголовок"
            required
            maxlength="15"
          />
          <div class="input-group-append">
            <button class="input-group-text">Поменять</button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: [],
      newTitle: "",
      titleVisibility: true,
      delay1: 1000
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
    },
    updateTitle() {
      this.titleVisibility = false;
      this.newTitle = this.$refs['new-title-input'].value;
    },
    titleBeforeEnter(el) {
      el.style.transition = `all ${this.delay1}ms`;
    },
    titleBeforeLeave(el) {
      el.style.transition = `all ${this.delay1}ms`;
    },
    titleAfterLeave(el) {
      this.title = this.newTitle.split("");
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
  min-width: 0.2em;
  transition: transform 666ms;
}
h1 .letter-outer:hover {
  transform: translateY(-10px);
}

.title-enter {
  opacity: 0;
}
.title-leave-to {
  opacity: 0;
}
</style>
