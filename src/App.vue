<template>
  <div id="app">
    <header>
      <sectionHeader></sectionHeader>
    </header>
    <div id="main" class="container">
        <div class="row">
          <div id="nav" class="col-3 bg-warning">nav</div>
          <div id="sections" class="col-9 bg-success">
            <sectionCarousel></sectionCarousel>
            <sectionAnimationTest1></sectionAnimationTest1>
          </div>
        </div>
    </div>
  </div>
</template>

<script>
import sectionHeader from './components/sectionHeader'
import sectionCarousel from './components/sectionCarousel'
import sectionAnimationTest1 from './components/sectionAnimationTest1'

export default {
  name: "app",
  data() {
    return {};
  },
  components: {
    sectionHeader,
    sectionCarousel,
    sectionAnimationTest1
  }
};
</script>

<style>

</style>
