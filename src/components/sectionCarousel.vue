<template>
  <section id="carousel-section" class="pt-5 pb-5 bg-white">
    <transition name="fade" mode="out-in">
      <splashScreen v-if="!lazyload.show" :height="500" v-lazyload:0="lazyload"></splashScreen>
      <!--  -->
      <div v-else>
        <carouselComponent
          id="carouselOne"
          :images="images"
          :width="800"
          :minHeight="500"
          :indicators="true"
          :controls="true"
          :captions="captions"
          :interval="3000"
          class="m-auto"
        ></carouselComponent>
      </div>
    </transition>
  </section>
</template>

<script>
import carouselComponent from "./carouselComponent";
export default {
  data() {
    return {
      images: [
        "https://place-hold.it/800x500",
        "https://place-hold.it/800x500",
        "https://place-hold.it/800x500"
      ],
      captions: [
        { title: "First title", subtitle: "monday" },
        { title: "Second title", subtitle: "sunday" },
        { title: "Third title", subtitle: "friday" }
      ],
      lazyload: { show: false }
    };
  },
  components: {
    carouselComponent
  }
};
</script>

<style scoped>
/*  */
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
.fade-enter-active {
  transition: opacity 1500ms;
}
.fade-leave-active {
  transition: opacity 1500ms;
}
</style>
