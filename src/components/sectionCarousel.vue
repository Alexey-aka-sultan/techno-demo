<template>
  <section id="carousel-section" class="pt-5 pb-5 bg-white">
    <transition name="fade" mode="out-in">
      <splashScreen v-if="!lazyload.show" :height="500" v-lazyload:0="lazyload"></splashScreen>
      <!--  -->
      <div v-else>
        <carouselComponent
          id="carouselOne"
          :images="images"
          :width="900"
          :minHeight="500"
          :indicators="true"
          :controls="true"
          :captions="captions"
          :interval="9000"
          :crossfade="true"
          class="m-auto"
        ></carouselComponent>
      </div>
    </transition>
  </section>
</template>

<script>
import carouselComponent from "./carouselComponent";
import img1 from "../assets/images/carousel-picture-1.jpg";
import img2 from "../assets/images/carousel-picture-2.jpg";
import img3 from "../assets/images/carousel-picture-3.jpg";
let arr = [img1, img2, img3];

export default {
  data() {
    return {
      images: arr,
      captions: [
        { title: "Автора зовут Алексей", subtitle: "кажется он программист" },
        { title: "Но ему не стыдно показывать эту работу", subtitle: "" },
        { title: "", subtitle: "" }
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
  transition: opacity 500ms;
}
.fade-leave-active {
  transition: opacity 1000ms;
}
</style>
