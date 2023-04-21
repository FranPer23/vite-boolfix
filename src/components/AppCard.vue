<script>
import { store } from "../store";

export default {
  name: "AppCard",

  data() {
    return {
      store,
    };
  },
};
</script>

<template>
  <ul>
    <li v-for="movie in store.movies">
      <img :src="`getImg()${movie.poster_path}`" alt="" />
      <h4>{{ movie.original_title }}</h4>
      <h4>{{ movie.title }}</h4>
      <h4>{{ movie.original_language }}</h4>
      <p>{{ movie.vote_average }}</p>
    </li>
  </ul>

  <ul>
    <li v-for="serie in store.series">
      <h4>{{ serie.original_title }}</h4>
      <h4>{{ serie.title }}</h4>
      <h4>{{ serie.original_language }}</h4>
      <p>{{ serie.vote_average }}</p>
    </li>
  </ul>
</template>

<style></style>
