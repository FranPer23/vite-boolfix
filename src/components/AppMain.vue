<script>
import { store } from "../store";
import AppCard from "./AppCard.vue";

export default {
  name: "AppMain",
  components: {
    AppCard,
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
  <AppCard />

  <h2>Series</h2>
  <AppCard />
</template>

<style></style>
