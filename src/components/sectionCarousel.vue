<template>
  <section
    id="carousel-section"
    class="pt-5 pb-5 bg-white"
  >
  <h4 class="text-center section_title">Просто карусель</h4>
    <carouselComponent
      id="carouselOne"
      :images="images"
      :width="500"
      :indicators="true"
      :controls="true"
      :captions="captions"
      :interval="3000"
      class="m-auto"
    ></carouselComponent>
  </section>
</template>

<script>
import carouselComponent from "./carouselComponent";
export default {
  data() {
    return {
      images: [
        "https://place-hold.it/500x300",
        "https://place-hold.it/500x300",
        "https://place-hold.it/500x300"
      ],
      captions: [
        { title: "First title", subtitle: "monday" },
        { title: "Second title", subtitle: "sunday" },
        { title: "Third title", subtitle: "friday" }
      ]
    };
  },
  components: {
    carouselComponent
  }
};
</script>

<style></style>
