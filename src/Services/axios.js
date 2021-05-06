import axios from "axios";
import key from "../env";


const serviceInstance = axios.create({
    baseURL: "https://api.themoviedb.org/3",
    Headers: { Accept: "application/json" },
    timeout: 10000
});

export default {
    getPopularMovies() {
        return serviceInstance.get(`/movie/popular?api_key=${key.TMDBapikey}`);
    },
    getTrendingMovies() {
        return serviceInstance.get(`/trending/movie/week?api_key=${key.TMDBapikey}`);
    },
    getTopMovies() {
        return serviceInstance.get(`/movie/top_rated?api_key=${key.TMDBapikey}`);
    },
    getComedyMovies() {
        return serviceInstance.get(`/discover/movie?api_key=${key.TMDBapikey}&language=en-US&with_genres=35`);
    },
    getDramaMovies() {
        return serviceInstance.get(`/discover/movie?api_key=${key.TMDBapikey}&language=en-US&with_genres=18`);
    },
    getThrillerMovies(){
        return serviceInstance.get(`/discover/movie?api_key=${key.TMDBapikey}&language=en-US&with_genres=53`);
    },
    getDocumentaries(){
        return serviceInstance.get(`/discover/movie?api_key=${key.TMDBapikey}&language=en-US&with_genres=99&include_adult=false`);
    },
    getRomances(){
        return serviceInstance.get(`/discover/movie?api_key=${key.TMDBapikey}&language=en-US&with_genres=10749&include_adult=false`);
    },
    getFantasy(){
        return serviceInstance.get(`/discover/movie?api_key=${key.TMDBapikey}&language=en-US&with_genres=14&include_adult=false`);
    },
    getHistory(){
        return serviceInstance.get(`/discover/movie?api_key=${key.TMDBapikey}&language=en-US&with_genres=36&include_adult=false`);
    },
  };
