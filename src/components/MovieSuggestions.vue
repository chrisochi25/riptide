<template>
<div class ="explore">
    <div class="head">
    <h2>
        Here are some suggestions for you!</h2>
        
        </div>
    <div class="RomCom" v-show="name === 'The Hopeless Romantic'" :class="type">
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
      <div class="movie" v-for="movie in comedymovies" :key="movie.id" :class="type">
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

    <div class="Docu" v-show="name === 'The Historian'" :class="type">
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
      <div class="movie" v-for="movie in comedymovies" :key="movie.id" :class="type">
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

      <div class="Docu" v-show="name === 'The Entertainer'" :class="type">
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
      <div class="movie" v-for="movie in comedymovies" :key="movie.id" :class="type">
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

      <div class="Docu" v-show="name === 'The Day Dreamer'" >
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
      <div class="movie" v-for="movie in comedymovies" :key="movie.id" :class="type">
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
</div>
</template>

<script>
import { ref } from 'vue';
import axios from "../Services/axios.js";
export default {
    name: 'MovieSuggestions',
    props:{
        name : String,
        type: String
    },
    setup(props) {
    const baseImgUrl = ref("https://image.tmdb.org/t/p");
    const comedymovies = ref([]);
    // eslint-disable-next-line no-unused-vars
    async function loadData() {
      try {
        if(props.name==='The Hopeless Romantic'){
            const moviedata = await axios.getRomances();
        comedymovies.value = moviedata.data.results;
        console.log(comedymovies.value);
        }
        if(props.name ==='The Historian'){
            const moviedata = await axios.getHistory();
            comedymovies.value = moviedata.data.results;
            console.log(comedymovies.value)
        }
        if(props.name==='The Day Dreamer'){
            const moviedata = await axios.getFantasy();
        comedymovies.value = moviedata.data.results;
        console.log(comedymovies.value);
        }
        if(props.name ==='The Entertainer'){
            const moviedata = await axios.getComedyMovies();
            comedymovies.value = moviedata.data.results;
            console.log(comedymovies.value)
        }
      } catch (err) {
        console.log(err);
      }
    }
    loadData();
    return { baseImgUrl, comedymovies };
  }
    

}
</script>

<style lang="scss">
.explore {
    h1{
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
      max-width: 20%;
      flex: 1 1 20%;
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
            height: 300px;
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