<template>
  <section id="animationList-section" class="pt-5 pb-3 bg-white">
    <!--  -->
    <h4 class="text-center pb-4">
      Покупка случайного товара по случайным ценам
    </h4>
    <div class="row col-12 m-0">
      <!--  -->
      <transition-group
        tag="div"
        class="items-list d-flex align-items-start justify-content-start flex-wrap col-5 pl-0"
        @after-leave="shopAfterLeave"
        move-class="items-list-move"
        leave-active-class="animated rubberBand"
        enter-active-class="animated wobble"
      >
        <div v-for="item in arrayOne" :key="item.id" class="card p-1 bg-success shadow-sm m-1">
          <div class="card-body p-1 text-center">
            <i :class="item.imgSrc"></i>
            <h5 class="card-title mb-0 mt-1">{{ item.cost }}$</h5>
          </div>
        </div>
      </transition-group>
      <!--  -->
      <div class="col-2 p-0 p-lg-2 d-flex flex-column justify-content-end">
        <button class="btn-sm btn-success mb-1 p-1" @click="buyItem">Купить</button>
        <button class="btn-sm btn-warning mt-1 p-1" @click="returnItem">Вернуть</button>
      </div>
      <!--  -->
      <div class="shopping-list col-5 pr-0">
        <transition-group
          tag="ul"
          class="list-group"
          @after-leave="basketAfterLeave"
          leave-active-class="animated rubberBand d-inline-block"
          enter-active-class="animated tada"
        >
          <li v-for="item in arrayTwo" :key="item.id" class="list-group-item">
            {{ item.title }}
            <span class="badge badge-primary float-right"> {{ item.cost }}$ </span>
          </li>
        </transition-group>
      </div>
    </div>
    <div class="d-flex justify-content-between align-items-center position-relative pt-3">
      <transition enter-class="opacity-0" enter-active-class="transition-500ms">
        <div v-show="error" class="alert alert-warning show position-absolute m-0 ml-2">
          {{ error }}
          <button class="close ml-3" @click="clearError()">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
      </transition>

      <p class="pr-4 m-0 ml-auto mr-0">
        Осталось наличных: <strong>{{ cash }}$</strong>
      </p>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      cash: 400,
      arrayOne: [],
      arrayTwo: [],
      shoppingQueue: [],
      returnQueue: [],
      error: ""
    };
  },
  methods: {
    fillArrayOne() {
      const itemNames = this.$store.getters.getItemNames;

      for (let i = 0; i < itemNames.length; i++) {
        this.arrayOne.push({
          id: i,
          title: itemNames[i],
          imgSrc: `fas fa-${itemNames[i]}`,
          cost: Math.round(Math.random() * 99) + 1
        });
      }
    },
    buyItem() {
      const ind = Math.floor(Math.random() * this.arrayOne.length);
      if (!this.buyIsValid(this.arrayOne[ind])) return;

      const item = this.arrayOne.splice(ind, 1);
      this.cash -= item[0].cost;
      this.shoppingQueue.push(item[0]);
    },
    returnItem() {
      if (!this.returnIsValid()) return;

      const ind = Math.floor(Math.random() * this.arrayTwo.length);
      const item = this.arrayTwo.splice(ind, 1);
      this.cash += item[0].cost;
      this.returnQueue.push(item[0]);
    },
    buyIsValid(item) {
      this.clearError();

      if (this.arrayOne.length === 0) {
        this.error = "Вы купили весь товар";
        return false;
      }
      if (this.cash - item.cost < 0) {
        this.error = "У вас не достаточно денег";
        return false;
      }
      return true;
    },
    returnIsValid() {
      this.clearError();

      if (this.arrayTwo.length === 0) this.error = "У вас больше нет товара";

      if (this.error) {
        return false;
      } else {
        return true;
      }
    },
    clearError() {
      this.error = "";
    },
    shopAfterLeave(el) {
      this.arrayTwo.push(this.shoppingQueue.shift());
    },
    basketAfterLeave(el) {
      this.arrayOne.push(this.returnQueue.shift());
    }
  },
  watch: {
    error(val) {
      if (val.length > 0) {
        setTimeout(() => (this.error = ""), 3000);
      }
    }
  },
  created() {
    this.fillArrayOne();
  }
};
</script>

<style scoped>
.transition-500ms {
  transition: all 500ms;
}
.opacity-0 {
  opacity: 0;
}

.items-list,
.shopping-list {
  height: 400px;
  overflow-x: hidden;
  overflow-y: auto;
}

.items-list > .card {
  min-width: 60px;
  background: rgb(22, 194, 13);
  background: linear-gradient(0deg, #519f2c, #16c20d);
}
.items-list > .card i {
  font-size: 2rem;
}
.items-list-move {
  transition: all 1s;
}
</style>
