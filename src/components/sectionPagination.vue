<template>
  <section id="pagination-section" class="container pt-5 pb-4 bg-white">
    <h4 class="text-center section_title">Пагинация</h4>
    <div class="row justify-content-center pb-4 pr-2 pl-2 pr-lg-0 pl-lg-0">
      <!--  -->
      <div class="card col-11 pl-0 pr-0 mb-2" v-for="user in currentUsers" :key="user.id">
        <div class="card-body">
          <h5 class="card-title">{{ user.name }}</h5>
          <p class="card-text"><strong>Company name: </strong>{{ user.company.name }}</p>
          <p class="card-text">{{ user.company.catchPhrase }}</p>
          <p class="blockquote-footer">{{ user.company.bs }}</p>
          <div class="collapse" :id="'collapseExample' + user.id">
            <div class="card card-body pb-2">
              <p><strong>Phone: </strong>{{ user.phone }}</p>
              <p>
                <strong>Website: </strong
                ><a :href="'#collapseExample' + user.id" class="text-primary">{{ user.website }}</a>
              </p>
            </div>
          </div>
        </div>
        <div class="card-footer d-flex justify-content-between">
          <button
            class="btn btn-primary btn-card-contacts d-flex align-items-center"
            type="button"
            data-toggle="collapse"
            :data-target="'#collapseExample' + user.id"
            aria-expanded="false"
            aria-controls="collapseExample"
          >
            <span>контакты</span>
            <i class="fas fa-angle-right ml-2"></i>
          </button>
          <button
            @click="setMoreInfoUserID(user.id)"
            type="button"
            class="btn btn-link text-primary"
            data-toggle="modal"
            :data-target="'#' + $store.state.userInfoModalID"
          >
            подробно...
          </button>
        </div>
      </div>
    </div>
    <paginatorComponent
      v-if="allUsers.length > 0"
      :itemsAmount="allUsers.length"
      :itemsOnPage="itemsOnPage"
      :maxPageButtonsAmount="3"
      :prev="true"
      :next="true"
      v-model="currentPage"
    ></paginatorComponent>
  </section>
</template>

<script>
import paginatorComponent from "./paginatorComponent";
export default {
  data() {
    return {
      currentPage: 0,
      itemsOnPage: 3,
      currentUsers: []
    };
  },
  methods: {
    showPage(pageNum) {
      const lastInd = pageNum * this.itemsOnPage;
      const startInd = lastInd - this.itemsOnPage;
      this.currentUsers = this.allUsers.slice(startInd, lastInd);
    },
    setMoreInfoUserID(id) {      
      this.$store.commit("setSelectedUser", id);
    }
  },
  computed: {
    allUsers() {
      return this.$store.getters.allUsers;
    }
  },
  mounted() {
    const thisObj = this;

    this.$store
      .dispatch("getUsers")
      .then(response => {})
      .catch(error => console.log(error));
  },
  watch: {
    currentPage(val) {
      if (val > 0) this.showPage(val);
    }
  },
  components: {
    paginatorComponent
  }
};
</script>

<style scoped>
.btn-card-contacts span {
  margin-bottom: 2px;
}
.btn-card-contacts i {
  transition: all 500ms;
}
.btn-card-contacts[aria-expanded="true"] i {
  transform: rotate(-90deg);
}
</style>
