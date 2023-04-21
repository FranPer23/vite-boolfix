import { reactive } from "vue";

export const store = reactive ({
    searchKey:"",
    movies: [],
    series:[],
    apiUrl:"https://api.themoviedb.org/3",
    apiKey: "9c043d8309e20d6d07d0c1a47a95ec3f",
    loading: false,
});