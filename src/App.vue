<script>
import AppHeader from "./components/AppHeader.vue";
import AppMain from "./components/AppMain.vue";

import { store } from "./store";
import axios from "axios";

export default {
  components: {
    AppHeader,
    AppMain,
  },
  props: {
    movie: Object,
    serie: Object,
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
          this.store.movies = resp.data.results;
          console.log(this.store.movies);
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
          this.store.series = resp.data.results;
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
