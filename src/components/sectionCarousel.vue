<template>
  <section
    id="carousel-section"
    class="d-flex justify-content-center pt-5 pb-5 bg-white"
  >
    <carouselComponent
      id="carouselOne"
      :images="images"
      :width="500"
      :indicators="true"
      :controls="true"
      :captions="captions"
      :interval="3000"
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
