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
            <sectionTest1></sectionTest1>
          </div>
        </div>
    </div>
  </div>
</template>

<script>
import sectionHeader from './components/sectionHeader'
import sectionCarousel from './components/sectionCarousel'
import sectionTest1 from './components/sectionTest1'

export default {
  name: "app",
  data() {
    return {};
  },
  components: {
    sectionHeader,
    sectionCarousel,
    sectionTest1
  }
};
</script>

<style>

</style>
