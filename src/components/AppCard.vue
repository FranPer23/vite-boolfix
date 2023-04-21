<script>
import { store } from "../store";

export default {
  name: "AppCard",

  data() {
    return {
      store,
      flags: ["de", "es", "fr", "en", "it", "jp", "ru", "us"],
    };
  },
  methods: {
    performSearch() {
      if (this.store.searchKey) {
        this.getImg();
      }
    },
    getImg(imgPath) {
      const baseUrl = "https://image.tmdb.org/t/p/w342";
      return baseUrl + imgPath;
    },
    getImgPath(flagPath) {
      return new URL(flagPath, import.meta.url).href;
    },
  },
};
</script>

<template>
  <ul>
    <li v-for="movie in store.movies">
      <img :src="getImg(movie.poster_path)" alt="" />
      <h4>{{ movie.original_title }}</h4>
      <h4>{{ movie.title }}</h4>
      <div>
        <p v-if="!flags.includes(movie.original_language)">
          {{ movie.original_language }}
        </p>
        <img
          v-else
          :src="getImgPath(`../assets/img/${movie.original_language}.png`)"
          alt=""
        />
      </div>
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
