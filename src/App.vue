<template>
  <div id="app">
    <div class="table">
      <div class="table__row table__row--head">
        <div class="table__cell table__cell--head">Название</div>
        <div class="table__cell table__cell--head">Расход топлива мл/г</div>
        <div class="table__cell table__cell--head">Цилиндры</div>
        <div class="table__cell table__cell--head">Рабочий объём</div>
        <div class="table__cell table__cell--head">Л.C</div>
        <div class="table__cell table__cell--head">Вес</div>
        <div class="table__cell table__cell--head">Ускорение м/c2</div>
        <div class="table__cell table__cell--head">Год выпуска</div>
        <div class="table__cell table__cell--head">Производство</div>
      </div>
      <div class="table__row" v-for="car in cars" :key="car.Name">
        <div class="table__cell">{{ car.Name }}</div>
        <div class="table__cell">{{ car.Miles_per_Gallon }}</div>
        <div class="table__cell">{{ car.Cylinders }}</div>
        <div class="table__cell">{{ car.Displacement }}</div>
        <div class="table__cell">{{ car.Horsepower }}</div>
        <div class="table__cell">{{ car.Weight_in_lbs }}</div>
        <div class="table__cell">{{ car.Acceleration }}</div>
        <div class="table__cell">{{ car.Year }}</div>
        <div class="table__cell">{{ car.Origin }}</div>
      </div>
    </div>
    <img v-if="loading" class="loader" src="preloader.gif" alt="Loading..." />
  </div>
</template>

<script>
import { onMounted, onUnmounted } from 'vue';
import { useStore } from './store';

export default {
  name: 'App',
  setup() {
    const store = useStore();
    const cars = store.cars;
    const loading = store.loading;

    const handleScroll = () => {
      const nearBottom =
        window.innerHeight + window.scrollY >= document.body.offsetHeight - 200;
      if (nearBottom) {
        store.loadCars();
      }
    };

    onMounted(() => {
      window.addEventListener('scroll', handleScroll);
    });

    onUnmounted(() => {
      window.removeEventListener('scroll', handleScroll);
    });

    store.loadCars();

    return {
      cars,
      loading,
    };
  },
};
</script>

<style>
@import './style.css';
</style>
