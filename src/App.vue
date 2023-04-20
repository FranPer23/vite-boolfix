<script>
import AppHeader from "./components/AppHeader.vue";
import AppMain from "./components/AppMain.vue";
import { store } from "./store.js";
import axios from "axios";

export default {
  components: {
    AppHeader,
    AppMain,
  },
  data() {
    return {
      store,
    };
  },
  methods: {
    performSearch() {
      if (this.store.searchKey) {
        this.getMovies();
        this.getSeries();
      }
    },
    getMovies() {
      axios
        .get(`${this.store.apiUrl}/search/movie`, {
          params: {
            api_key: this.store.apiKey,
            query: this.store.searchKey,
          },
        })
        .then((resp) => {
          console.log(resp);
        });
    },
    getSeries() {
      axios
        .get(`${this.store.apiUrl}/search/tv`, {
          params: {
            api_key: this.store.apiKey,
            query: this.store.searchKey,
          },
        })
        .then((resp) => {
          console.log(resp);
        });
    },
  },
};
</script>

<template>
  <AppHeader @search="performSearch" />
  <AppMain />
</template>

<style lang="scss">
@use "./styles/general.scss";
</style>
