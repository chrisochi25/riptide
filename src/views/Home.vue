<template>
<div class="explore">
    <h1>Explore</h1>
    <div class="advanced-search-link">
        <router-link :to="'/advanced-search'">
            <h2>Don't see what you're looking for? Advanced Search</h2>
        </router-link>
    </div>

    <div class="select">
                <Multiselect
                    v-model="value"
                    placeholder="Sort by"
                    :options="filterOptions"
                    :searchable="true"
                />
                </div>
    
    <div
      v-for="(movie, id) in popularMovies"
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

    <div
      v-for="(movie, id) in trendingMovies"
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

    <div
      v-for="(movie, id) in topMovies"
      :key="id"
      class="flex flex-shrink-0 justify-center items-center w-1/2 max-w-sm mx-auto my-8"
    >
      <div
        :style="{
          backgroundImage: `url(${baseImgUrl}/w200${movie.backdrop_path})`
        }"
        class="bg-gray-300 h-64 w-full rounded-lg shadow-md bg-cover bg-center"
      ></div>
    </div>
    <div class="movies-list">
      <div class="movie" v-for="movie in popularMovies" :key="movie.id">
        <router-link :to="'/movie/' + movie.id" class="movie-link">
          
         <div class="product-image">
            <img v-bind:src="'https://image.tmdb.org/t/p/w500' + movie.backdrop_path" alt="Movie Poster" width="100px"/>
            <div class="type">Rating: {{ movie.vote_average }}</div>
          </div>
          
          
          <div class="detail">
            <p class="year"> {{movie.release_date}}</p>
            <h3>{{movie.title}}</h3>
          </div>
        
        </router-link>
      </div>
    </div>

    <div class="movies-list">
      <div class="movie" v-for="movie in trendingMovies" :key="movie.id">
        <router-link :to="'/movie/' + movie.id" class="movie-link">
          
          <div class="product-image">
            <img v-bind:src="'https://image.tmdb.org/t/p/w500' + movie.poster_path" alt="Movie Poster" width="100px"/>
            <div class="type">Rating: {{ movie.vote_average }}</div>
          </div>
          
          
          <div class="detail">
            <p class="year"> {{movie.release_date}}</p>
            <h3>{{movie.title}}</h3>
          </div>
        
        </router-link>
      </div>
    </div>

    <div class="movies-list">
      <div class="movie" v-for="movie in topMovies" :key="movie.id">
        <router-link :to="'/movie/' + movie.id" class="movie-link">
          
          <div class="product-image">
            <img v-bind:src="'https://image.tmdb.org/t/p/w500' + movie.poster_path" alt="Movie Poster" width="100px"/>
            <div class="type">Rating: {{ movie.vote_average }}</div>
          </div>
          
          
          <div class="detail">
            <p class="year"> {{movie.release_date}}</p>
            <h3>{{movie.title}}</h3>
          </div>
        
        </router-link>
      </div>
    </div>
</div>
</template>

<script>
import { ref } from 'vue';
import axios from "../Services/axios.js";
import Multiselect from '@vueform/multiselect';
export default {
  setup() {
    const baseImgUrl = ref("https://image.tmdb.org/t/p");
    const popularMovies = ref([]);
    const trendingMovies = ref([]);
    const topMovies = ref([]);
    // eslint-disable-next-line no-unused-vars
    async function loadData() {
      try {
        const popularMoviesData = await axios.getPopularMovies();
        popularMovies.value = popularMoviesData.data.results;
        console.log("Popular Movies: ",popularMovies.value);

        const trendingMoviesData = await axios.getTrendingMovies();
        trendingMovies.value = trendingMoviesData.data.results;
        console.log("Trending Movies:", trendingMovies.value);

        const topMoviesData = await axios.getTopMovies();
        topMovies.value = topMoviesData.data.results;
        console.log("Top Movies: ", topMovies.value);
      } catch (err) {
        console.log(err);
      }
    }
    loadData();
    return { baseImgUrl, popularMovies, trendingMovies, topMovies };
  },
  value: null,
  components: {
    Multiselect
  },
  data () {
        return {
          filterOptions: [
                'Alphabetic',
                'Rating',
                'Most Recent',
                'Recommended'
            ],
        }
  }
};
</script>

<style lang="scss">
.home {
  .feature-card {
    position: relative;

    .featured-img{
      display: block;
      width: 100%;
      height: 300px;
      object-fit: cover;

      position: relative;
      z-index: 0;
    }

    .detail {
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: rgba(0, 0, 0, 0.6);
      padding: 16px;
      z-index: 1;

      h3 {
        color: #FFF;
        margin-bottom: 16px;
        
      }

      p {
        color: #FFF;
      }
    }
  }

  .movies-list{
    display: flex;
    flex-wrap: wrap;
    margin: 0px 8px;

    .movie {
      max-width: 50%;
      flex: 1 1 50%;
      padding: 16px 8px;

      .movie-link{
        display: flex;
        flex-direction: column;
        height: 100%;

        .product-image{
          position: relative;
          display: block;

          img{
            display: block;
            width: 100%;
            height: 275px;
            object-fit: cover;
          }

          .type {
            position: absolute;
            padding: 8px 16px;
            background-color: #42b883;
            color: #FFF;
            bottom: 16px;
            left: 0px;
            text-transform: capitalize;
          }
        }
        .detail {
          background-color: #1F4E48;
          padding: 16px 8px;
          flex: 1 1 100%;
          border-radius: 0px 0px 8px 8px;

          .year {
            color: #AAA;
            font-size: 14px;
          }

          h3{
            color: #FFF;
            font-weight: 600;
            font-size: 18x;
          }
        }
      }
    }
  }

  
}
</style>