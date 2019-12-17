<template>
  <section id="section-test-1" class="bg-info p-2 pt-5 pb-5">
    <hr />
    <button v-on:click="fade = !fade">
      Переключить
    </button>
    <transition
      name="fade"
      v-on:before-enter="beforeEnter"
      v-on:enter="enter"
      v-on:after-enter="afterEnter"
      v-on:enter-cancelled="enterCancelled"
      v-on:before-leave="beforeLeave"
      v-on:leave="leave"
      v-on:after-leave="afterLeave"
      v-on:leave-cancelled="leaveCancelled"
    >
      <p v-if="fade">привет</p>
    </transition>

    <hr />
    <button @click="slideFade = !slideFade">
      Переключить отрисовку
    </button>
    <transition name="slide-fade">
      <p v-if="slideFade">привет</p>
    </transition>

    <hr />
    <button @click="animationBounce = !animationBounce">
      Переключить отображение
    </button>
    <transition
      name="bounce"
      v-on:before-enter="beforeEnter"
      v-on:enter="enter"
      v-on:after-enter="afterEnter"
      v-on:enter-cancelled="enterCancelled"
      v-on:before-leave="beforeLeave"
      v-on:leave="leave"
      v-on:after-leave="afterLeave"
      v-on:leave-cancelled="leaveCancelled"
    >
      <p v-if="animationBounce">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
        facilisis enim libero, at lacinia diam fermentum id. Pellentesque
        habitant morbi tristique senectus et netus.
      </p>
    </transition>

    <hr />
    <button @click="customClassesTransition = !customClassesTransition">
      Переключить отрисовку
    </button>
    <transition
      enter-active-class="animated tada"
      leave-active-class="animated bounceOutRight"
      v-on:after-enter="afterEnter"
      v-on:after-leave="afterLeave"
    >
      <p v-if="customClassesTransition">привет</p>
    </transition>
    <hr />
    <transition
      mode="out-in"
      enter-active-class="animated tada"
      leave-active-class="animated fadeOut faster"
    >
      <button v-if="isEditing" key="save" @click="isEditing = false">
        Сохранить
      </button>
      <button v-else key="edit" @click="isEditing = true">
        Редактировать
      </button>
    </transition>
    <hr />
  </section>
</template>

<script>
export default {
  data() {
    return {
      fade: true,
      slideFade: true,
      animationBounce: true,
      customClassesTransition: true,
      isEditing: true
    };
  },
  methods: {
    beforeEnter: function(el) {
      console.log(`beforeEnter:`);
      console.log(el);
      console.log("-------");
    },
    // коллбэк done не обязательно использовать, если
    // анимация или переход также определены в CSS
    enter: function(el, done) {
      console.log(`enter:`);
      console.log(el);

      let duration = this.getTimeoutForDuration(el);
      console.log(duration);

      console.log("-------");
      setTimeout(() => done(), +duration);
    },
    afterEnter: function(el) {
      console.log(`afterEnter:`);
      console.log(el);
      el.style.color = "#FFFFFF";
      console.log("-------");
    },
    enterCancelled: function(el) {
      console.log(`enterCancelled:`);
      console.log(el);
      console.log("-------");
    },
    beforeLeave: function(el) {
      console.log(`beforeLeave:`);
      console.log(el);
      console.log("-------");
    },
    // коллбэк done не обязательно использовать, если
    // анимация или переход также определены в CSS
    leave: function(el, done) {
      console.log(`leave:`);
      console.log(el);
      let duration = this.getTimeoutForDuration(el);
      console.log(duration);

      console.log("-------");
      setTimeout(() => done(), +duration);
    },
    afterLeave: function(el) {
      console.log(`afterLeave:`);
      console.log(el);
      console.log("-------");
    },
    // leaveCancelled доступна только для v-show
    leaveCancelled: function(el) {
      console.log(`leaveCancelled:`);
      console.log(el);
      console.log("-------");
    },
    getTimeoutForDuration(el) {
      let tDuration = getComputedStyle(el).transitionDuration;
      let aDuration = getComputedStyle(el).animationDuration;
      let duration = 0;

      tDuration = +tDuration.slice(0, tDuration.length - 1) * 1000;
      aDuration = +aDuration.slice(0, aDuration.length - 1) * 1000;

      +tDuration > +aDuration ? (duration = tDuration) : (duration = aDuration);

      return duration;
    }
  }
};
</script>

<style>
/*  */
/*  */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 2s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}

/* Анимации появления и исчезновения могут иметь различные продолжительности и динамику. */
.slide-fade-enter-active {
  transition: all 0.3s ease;
}
.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter,
.slide-fade-leave-to {
  transform: translateX(10px);
  opacity: 0;
}

/*  */
.bounce-enter-active {
  animation: bounce-in 0.5s;
}
.bounce-leave-active {
  animation: bounce-in 0.5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
    opacity: 0;
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
}
</style>
