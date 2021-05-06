<template>
<div class="search">
    <h1>Search</h1>
    <form @submit.prevent="SearchMovies()" class="search-box">
      <input type="text" placeholder="Search..." class="search-box-input" v-model="search"/>
        <!--
        <svg class="search-box-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 56.966 56.966">
            <path d="M55.146,51.887L41.588,37.786c3.484-4.144,5.396-9.358,
            5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23s10.318,23,23,23c4.761,
            0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,
            0.92c0.779,0,1.518-0.297,2.079-0.837C56,255,54.982,56.293,53.08,55.146,
            51.887z M23.984,6c9.374,0,17,17s-7.626,17-17,
            17s-17-7.626-17-17S14.61,6,23.984,6z" />
        </svg>
        -->
      <input type="submit" value="Search" />
    </form>

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
            <div class="detail">
            <p class="year"> {{movie.Year}}</p>
            <h3>{{movie.Title}}</h3>
          </div>
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
    const search = ref("");
    const movies = ref([]);

    const SearchMovies = () => {
      if (search.value != "") {
        fetch(`http://www.omdbapi.com/?apikey=${env.apikey}&s=${search.value}`)
          .then(response => response.json())
          .then(data => {
            movies.value = data.Search;
            search.value = "";
            // uncomment below line to get list of search values in browser's console
            // console.log(movies.value);
          });
      }
    }

    return {
      search,
      movies,
      SearchMovies
    }
  }
}
</script>

<style lang="scss">
// * {
//     margin: 0;
//     padding: 0;
//     box-sizing: border-box;
// }
.search {
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
          flex: 1 1 50%;
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
img{
            display: block;
            z-index: -1;
            position: relative;
            width: 100%;
            height: fit-content;
            object-fit: cover;
          }
.detail {
          background-color: #1F4E48;
          padding: 16px 8px;
          flex: 1 1 50%;
          border-radius: 0px 0px 8px 8px;
          width: 100%;
}
.year {
            color: #AAA;
            font-size: 14px;
          }
          .product-image{
          position: relative;
          display: block;
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
</style>