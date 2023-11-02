import { defineStore } from 'pinia';
import axios from 'axios';

export const useStore = defineStore({
  id: 'main',
  state: () => ({
    cars: [],
    loading: false,
    currentFile: 1,
  }),
  actions: {
    async loadCars() {
      if (this.currentFile > 5) {
        return;
      }

      this.loading = true;

      const response = await axios.get(`data/cars-${this.currentFile}.json`);
      this.cars.push(...response.data);
      this.currentFile++;

      this.loading = false;
    },
  },
});
