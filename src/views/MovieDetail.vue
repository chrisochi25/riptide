<template>
  <div class="movie-detail">
    <table>
        <tr>
        <td>
            <div class="movie-details">
            
            <h2>{{movie.title}}</h2>
            <p id="year">Released: {{movie.release_date}}</p>
            <p id="rating">Rating: {{movie.vote_average}}/10</p>
            <p id="plot">Plot: {{movie.overview}}</p>
            </div>
        </td>
        <td>
            <img v-bind:src="'https://image.tmdb.org/t/p/w500' + movie.poster_path" alt="Movie Poster" width="100px"/>
        </td>
        </tr>
    </table>
  </div>
</template>

<script>
import {ref, onBeforeMount} from 'vue';
import {useRoute} from 'vue-router';
import env from '@/env.js';
export default {
    setup() {
        const movie = ref({});
        const route = useRoute();
        const movie_id = route.params.id;
        console.log("Movie ID: ", movie_id)
        onBeforeMount(() => {
            fetch(`https://api.themoviedb.org/3/movie/${movie_id}?api_key=${env.TMDBapikey}`)
            .then(response => response.json())
            .then(data => {
                // console.log(data);
                movie.value = data;
            });
        });

        return {
            movie
        }
    }
}
</script>

<style lang="scss">
.movie-detail {
    padding: 16px;

    h2 {
        color: #04F7DF;
        font-size: 45px;
        font-weight: 600;
        margin-bottom: 16px;
        line-height: 1em;
    }

    .featured-img {
        display: block;
        max-width: 30vw;
        margin-bottom: 16px;
        margin-top: 10px;
    }

    p {
        color: #FFF;
        font-size: 25px;
        line-height: 1.4;
        padding: 10px 10px;
    }
}

.movie-details {
    width: 70vw;
    overflow-x: wrap;

    h2 {
        color: #04F7DF;
        font-size: 45px;
        font-weight: 600;
        margin-bottom: 16px;
    }

    p {
        color: #FFF;
        font-size: 22px;
        line-height: 1.4;
        padding-right: 50px;
    }
}

</style>