<template>
<div class="explore">
    <h1>Explore Comedy</h1>

    <div class="advanced-search-link">
        <router-link :to="'/advanced-search'">
            <h2>Don't see what you're looking for? Advanced Search</h2>
        </router-link>
    </div>
    
    <div class="movies-list">
      <div class="movie" v-for="movie in movies" :key="movie.imdbID">
        <router-link :to="'/movie/' + movie.imdbID" class="movie-link">
          
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
import env from '@/env.js'
export default {
  setup() {
    const movies = ref([]);

    fetch(`http://www.omdbapi.com/?apikey=${env.apikey}&s=funny`)
        .then(response => response.json())
        .then(data => {
            movies.value = data.Search;
        });

    return {
      movies
    }
  }
}
</script>

<style lang="scss">
.explore {
    h1 {
        margin-top: 10px;
        text-align: center;
    }

    .advanced-search-link {
        h2 {
            text-align: center;
            margin-top: 10px;
            margin-bottom: 10px;
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