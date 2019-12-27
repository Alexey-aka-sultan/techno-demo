<template>
  <div
    :id="id"
    class="carousel slide"
    :class="{ 'carousel-fade': crossfade }"
    :style="styleObject"
    data-ride="carousel"
    :data-interval="interval"
  >
    <!--  -->
    <div class="carousel-inner">
      <div v-for="(img, i) in images" :key="i" class="carousel-item" :class="{ active: i === 0 }">
        <img :src="img" class="d-block w-100 h-auto" />
        <div v-if="captions[i]" class="carousel-caption d-none d-md-block">
          <h5>{{ captions[i].title }}</h5>
          <p>{{ captions[i].subtitle }}</p>
        </div>
      </div>
    </div>
    <!-- controls -->
    <div v-if="controls">
      <a class="carousel-control-prev" :href="`#${id}`" role="button" data-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a class="carousel-control-next" :href="`#${id}`" role="button" data-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>
    <!-- indicators -->
    <div v-if="indicators">
      <ol class="carousel-indicators">
        <li
          v-for="(item, i) in images"
          :key="i"
          :data-target="`#${id}`"
          :data-slide-to="i"
          :class="{ active: i === 0 }"
        ></li>
      </ol>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      required: true
    },
    width: {
      type: Number,
      default: 300
    },
    minHeight: {
      type: Number,
      default: 300
    },
    controls: {
      type: Boolean,
      default: false
    },
    images: {
      type: Array,
      default: function() {
        return [
          "https://place-hold.it/300x300/FF6633/FFF",
          "https://place-hold.it/300x300/FF6699/FFF"
        ];
      }
    },
    captions: {
      type: Array,
      default: function() {
        return [
          { title: "title-1", subtitle: "Subtitle-1" },
          { title: "title-2", subtitle: "Subtitle-2" }
        ];
      }
    },
    indicators: {
      type: Boolean,
      default: false
    },
    crossfade: {
      type: Boolean,
      default: false
    },
    interval: {
      type: Number,
      default: 5000
    }
  },
  computed: {
    styleObject() {
      return { 'max-width': this.width + "px", "min-height": this.minHeight + "px" };
    }
  },
  mounted() {
    // при переходе со сплеш-скрина, не запускается автоскроллинг
    // скорее всего всю инициализацию нужно проводить подобным образом, для надежности
    $(".carousel").carousel({
      interval: this.interval
    });
  }
};
</script>

<style></style>
