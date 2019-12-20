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
            <hr>
            <sectionAnimationList></sectionAnimationList>
            <hr>
            <sectionPagination></sectionPagination>
          </div>
        </div>
    </div>
  </div>
</template>

<script>
import sectionHeader from './components/sectionHeader'
import sectionCarousel from './components/sectionCarousel'
import sectionAnimationList from './components/sectionAnimationList'
import sectionPagination from './components/sectionPagination'

export default {
  name: "app",
  data() {
    return {};
  },
  components: {
    sectionHeader,
    sectionCarousel,
    sectionAnimationList,
    sectionPagination
  }
};
</script>

<style>

</style>
