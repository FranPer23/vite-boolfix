<script>
import { store } from "../store";

export default {
  name: "AppSeries",
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
      <li v-for="(serie, index) in store.series" :key="index">
        <div class="card text-bg-dark mb-3">
          <div class="poster-wrapper">
            <img class="poster" :src="getImg(serie.poster_path)" alt="" />
            <div class="card-details text-center">
              <h4>{{ serie.original_title }}</h4>
              <h4>{{ serie.title }}</h4>
              <div>
                <p v-if="!flags.includes(serie.original_language)">
                  {{ serie.original_language }}
                </p>
                <img
                  class="flags"
                  v-else
                  :src="
                    getImgPath(`../assets/img/${serie.original_language}.png`)
                  "
                  alt=""
                />
              </div>
              <p>{{ serie.vote_average }}</p>
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
