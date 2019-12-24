<template>
  <div id="app">
    <header>
      <sectionHeader></sectionHeader>
    </header>
    <div id="main" class="container">
      <div class="row">
        <div id="sections" class="col-12">
          <sectionCarousel class="mt-5 border shadow"></sectionCarousel>
          <sectionAnimationList class="mt-5 border shadow"></sectionAnimationList>
          <sectionPagination class="mt-5 border shadow"></sectionPagination>
        </div>
      </div>
    </div>
    <!--  -->
    <userInfoModal :id="$store.state.userInfoModalID"></userInfoModal>
  </div>
</template>

<script>
import sectionHeader from "./components/sectionHeader";
import sectionCarousel from "./components/sectionCarousel";
import sectionAnimationList from "./components/sectionAnimationList";
import sectionPagination from "./components/sectionPagination";
//
import userInfoModal from "./components/userInfoModal";

export default {
  name: "app",
  data() {
    return {};
  },
  components: {
    sectionHeader,
    sectionCarousel,
    sectionAnimationList,
    sectionPagination,
    userInfoModal
  }
};
</script>

<style>

</style>
