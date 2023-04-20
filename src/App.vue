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
};
</script>

<template>
  <AppHeader @search="performSearch" />
  <AppMain />
</template>

<style lang="scss">
@use "./styles/general.scss";
</style>
