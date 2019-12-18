<template>
  <section id="animationList-section" class="pt-5 pb-5 bg-white">
    <div class="row col-12">
      <transition-group
        tag="div"
        class="d-flex align-items-center justify-content-start flex-wrap col-5"
      >
        <div v-for="item in arrayOne" :key="item.id" class="p-4 bg-success m-1">
          <h5>{{ item.cost }}$</h5>
        </div>
      </transition-group>
      <div class="col-2 d-flex flex-column justify-content-end">
        <button class="btn btn-success m-1" @click="buyItem">Купить</button>
        <button class="btn btn-warning m-1" @click="returnItem">Вернуть</button>
      </div>
      <div class="col-5 d-flex flex-column shopping-list">
        <transition-group tag="ul" class="list-group">
          <li v-for="item in arrayTwo" :key="item.id" class="list-group-item">
            {{ item.title
            }}<span class="badge badge-primary float-right"
              >{{ item.cost }}$</span
            >
          </li>
        </transition-group>
      </div>
    </div>
    <p class="pr-4 pt-4 m-0 text-right">
      Осталось наличных: <strong>{{ cash }}$</strong>
    </p>
  </section>
</template>

<script>
export default {
  data() {
    return {
      cash: 400,
      arrayOne: [],
      arrayTwo: []
    };
  },
  methods: {
    fillArrayOne() {
      for (let i = 0; i < 10; i++) {
        let cost = Math.round(Math.random() * 25);
        this.arrayOne.push({
          id: i,
          title: `fruit-${i}`,
          imgSrc: "",
          cost: cost
        });
      }
    },
    buyItem() {
      if (this.arrayOne.length === 0) return;
      const ind = Math.floor(Math.random() * this.arrayOne.length);
      const item = this.arrayOne.splice(ind, 1);
      this.arrayTwo.push(item[0]);
    },
    returnItem() {
      if (this.arrayTwo.length === 0) return;
      const ind = Math.floor(Math.random() * this.arrayTwo.length);
      const item = this.arrayTwo.splice(ind, 1);
      this.arrayOne.push(item[0]);
    }
  },
  created() {
    this.fillArrayOne();
  }
};
</script>

<style scoped>
/* #animationList-section .row{
  min-height: 400px;
} */
.shopping-list {
     min-height: 400px;
    max-height: 400px;
    overflow-y: scroll
}
</style>
