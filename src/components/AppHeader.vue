<script>
import { store } from "../store";
export default {
  name: "AppHeader",
  emits: ["search"],
  data() {
    return {
      store,
    };
  },
};
</script>

<template>
  <header>
    <div class="container">
      <div class="flex">
        <h1 class="logo-text">BOOLFLIX</h1>
        <div>
          <input type="text" v-model.trim="store.searchKey" />
          <button @click="$emit('search')">cerca</button>
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped>
header {
  background-color: black;
  height: 80px;
}
h1 {
  color: red;
}
.flex {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
