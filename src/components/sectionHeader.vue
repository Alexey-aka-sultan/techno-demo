<template>
  <div class="jumbotron jumbotron-fluid mb-0 position-relative overflow-hidden">
    <div class="container">
      <transition
        name="title"
        @before-enter="titleBeforeEnter"
        @after-leave="titleAfterLeave"
        @before-leave="titleBeforeLeave"
      >
        <h1 v-if="titleVisibility" class="d-flex">
          <div class="letter-outer display-1" v-for="(item, i) in title" :key="i">
            <span class="d-block animated infinite pulse" :style="item.style">
              {{ item.letter }}
            </span>
          </div>
        </h1>
      </transition>
      <!--  -->
      <form @submit.prevent="hideTitle">
        <div class="input-group mb-3">
          <input
            v-model="newTitle"
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
      <!--  -->
      <bubbleComponent v-for="(bubble, i) in bubbles" :key="i" :maxDelay="15000"></bubbleComponent>
    </div>
    <!-- dropdown -->
    <div class="dropdown position-absolute">
      <button class="btn btn-secondary dropdown-toggle" data-toggle="dropdown">
        About author
        <i class="fas fa-address-card ml-2"></i>
      </button>
      <div class="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton">
        <a class="dropdown-item card-link" href="http://alexey-web.ru" target="_blank">Website</a>
        <a class="dropdown-item" href="https://vk.com/id237045810" target="_blank">Я в контакте</a>
        <div class="dropdown-divider"></div>
        <span class="dropdown-item dropdown-header">Alexey Baizhanov</span>
      </div>
    </div>
  </div>
</template>

<script>
import bubbleComponent from "./bubbleComponent";
export default {
  data() {
    return {
      title: [],
      newTitle: "",
      titleVisibility: true,
      changeTitleDelay: 1200,
      bubbles: new Array(5)
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
    hideTitle() {
      this.titleVisibility = false;
    },
    updateTitle(val = []) {
      let arrTitle = [];
      val.length === 0 ? (arrTitle = this.newTitle.split("")) : (arrTitle = val.split(""));
      this.title = [];

      for (let i = 0; i < arrTitle.length; i++) {
        this.title[i] = {
          letter: arrTitle[i],
          style: this.getStyleForLetter()
        };
      }
    },
    titleBeforeEnter(el) {
      el.style.transition = `all ${this.changeTitleDelay}ms`;
    },
    titleBeforeLeave(el) {
      el.style.transition = `all ${this.changeTitleDelay}ms`;
    },
    titleAfterLeave(el) {
      this.updateTitle();
      this.titleVisibility = true;
    }
  },
  created() {
    this.updateTitle(this.$store.state.mainTitle);
  },
  mounted() {
    const thisObj = this;
    setTimeout(() => (thisObj.bubble = true), 3000);
  },
  components: {
    bubbleComponent
  }
};
</script>

<style scoped>
.jumbotron {
  background-image: linear-gradient(0deg, #240361, #0cc5e6),
    url("../assets/images/header-background.webp");
  background-position: center;
  background-repeat: no-repeat;
  background-blend-mode: screen;
}
.jumbotron input,
.jumbotron button {
  z-index: 2;
}
/*  */
h1 .letter-outer {
  cursor: pointer;
  min-width: 0.2em;
  transition: transform 666ms;
}
h1 .letter-outer:hover {
  transform: translateY(-10px);
}
/*  */
.title-enter {
  opacity: 0;
}
.title-leave-to {
  opacity: 0;
}
/*  */
.dropdown {
  right: 20px;
  top: 20px;
}
.dropdown button {
  display: flex;
  align-items: center;
  color: white;
  transition: color linear 200ms;
}
.dropdown button::after {
  display: none;
}
.dropdown button:hover {
  color: violet;
}
.dropdown button:hover i {
  color: yellow;
}
.dropdown i {
  color: white;
  font-size: 24px;
}
.dropdown a:hover {
  text-decoration: underline;
}
</style>
