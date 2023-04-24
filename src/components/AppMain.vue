<script>
import { store } from "../store";
import AppMovies from "./AppMovies.vue";
import AppSeries from "./AppSeries.vue";

export default {
  name: "AppMain",
  components: {
    AppMovies,
    AppSeries,
  },
  data() {
    return {
      store,
    };
  },
};
</script>

<template>
  <h2>Movies</h2>
  <AppMovies />

  <h2>Series</h2>
  <AppSeries />
</template>

<style></style>
