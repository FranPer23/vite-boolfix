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
        this.getImg();
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
    getImg() {
      axios
        .get(`${this.store.img}`, {
          params: {
            api_key: this.store.apiKey,
          },
        })
        .then((resp) => {
          this.store.img = resp.data.results;
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
