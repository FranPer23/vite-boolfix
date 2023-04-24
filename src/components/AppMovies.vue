<script>
import { store } from "../store";

export default {
  name: "AppMovies",
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
  <div>
    <ul class="d-flex flex-wrap">
      <li v-for="(movie, index) in store.movies" :key="index">
        <div class="card text-bg-dark mb-3">
          <div class="poster-wrapper">
            <img class="poster" :src="getImg(movie.poster_path)" alt="" />
            <div class="card-details text-center">
              <h4>{{ movie.original_title }}</h4>
              <h4>{{ movie.title }}</h4>
              <div>
                <p v-if="!flags.includes(movie.original_language)">
                  {{ movie.original_language }}
                </p>
                <img
                  class="flags"
                  v-else
                  :src="
                    getImgPath(`../assets/img/${movie.original_language}.png`)
                  "
                  alt=""
                />
              </div>
              <p>{{ movie.vote_average }}</p>
            </div>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<style lang="scss">
@use "../styles/general.scss";
</style>
