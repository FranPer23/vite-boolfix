<script>
import { store } from "../store";
export default {
  name: "AppMain",
  props: {
    movies: Array,
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
  <ul>
    <li v-for="movie in store.movies" :key="index">
      <h4>{{ movie.original_title }}</h4>
      <h4>{{ movie.title }}</h4>
      <h4>{{ movie.original_language }}</h4>
      <p>{{ movie.vote_average }}</p>
    </li>
  </ul>
  <h2>Series</h2>
  <ul>
    <li v-for="serie in store.tv" :key="index">
      <h4>{{ serie.original_title }}</h4>
      <h4>{{ serie.title }}</h4>
      <h4>{{ serie.original_language }}</h4>
      <p>{{ serie.vote_average }}</p>
    </li>
  </ul>
</template>

<style></style>
