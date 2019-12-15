<template>
  <div id="app">
    <div class="container bg-dark">
      <h1 class="text-light">Hello from Bootstrap</h1>
    </div>
    <hr />
    <div class="container">
      <div>
        <a
          class="btn btn-primary"
          data-toggle="collapse"
          href="#collapseExample"
          role="button"
          aria-expanded="false"
          aria-controls="collapseExample"
        >
          Link with href
        </a>
        <button
          class="btn btn-primary ml-1"
          type="button"
          data-toggle="collapse"
          data-target="#collapseExample"
          aria-expanded="false"
          aria-controls="collapseExample"
        >
          Button with data-target
        </button>
      </div>
      <div class="collapse" id="collapseExample">
        <div class="card card-body">
          Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
          terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
          labore wes anderson cred nesciunt sapiente ea proident.
        </div>
      </div>
    </div>
    <hr />
    <div class="container">
      <button
        type="button"
        class="btn btn-lg btn-danger"
        data-toggle="popover"
        title="Popover title"
        data-content="And here's some amazing content. It's very engaging. Right?"
      >
        Click to toggle popover
      </button>
    </div>
    <hr>
    <div class="container">
      <i class="fab fa-vk"></i>
    </div>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {};
  },
  methods: {},
  created() {},
  mounted() {
    $("h1").addClass("p-5");
    console.log($("h1"));
    
  },
  components: {}
};
</script>

<style>
.fa-vk {
  font-size: 48px;
  color: blueviolet;
  transform: rotate(25deg);
  text-shadow: 0 0 5px black;
}
</style>
