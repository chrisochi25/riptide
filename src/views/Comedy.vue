<template>
<div class="explore">
    <h1>Explore Comedy</h1>

    <div class="advanced-search-link">
        <router-link :to="'/advanced-search'">
            <h2>Don't see what you're looking for? Advanced Search</h2>
        </router-link>
    </div>
    
    <div
    v-for="(movie, id) in comedymovies"
    :key="id"
    class="flex flex-shrink-0 justify-center items-center w-1/2 max-w-sm mx-auto my-8"
  >
    <div
      :style="{
        backgroundImage: `url(${baseImgUrl}/w500${movie.backdrop_path})`
      }"
      class="bg-gray-300 h-64 w-full rounded-lg shadow-md bg-cover bg-center"
    ></div>
  </div>

  <div class="movies-list">
      <div class="movie" v-for="movie in comedymovies" :key="movie.id">
        <router-link :to="'/movie/' + movie.id" class="movie-link">
          
          <div class="product-imgae">
            <img :src="movie.Poster" alt="Movie Poster" />
            <div class="type">{{ movie.Type }}</div>
          </div>
          
          
          <div class="detail">
            <p class="year"> {{movie.Year}}</p>
            <h3>{{movie.Title}}</h3>
          </div>
        
        </router-link>
      </div>
    </div>
</div>
</template>

<script>
import { ref } from 'vue';
import axios from "../Services/axios.js";
export default {
  setup() {
    const baseImgUrl = ref("https://image.tmdb.org/t/p");
    const comedymovies = ref([]);
    // eslint-disable-next-line no-unused-vars
    async function loadData() {
      try {
        const moviedata = await axios.getComedyMovies();
        comedymovies.value = moviedata.data.results;
        console.log(comedymovies.value);
      } catch (err) {
        console.log(err);
      }
    }
    loadData();
    return { baseImgUrl, comedymovies };
  }
};

</script>

