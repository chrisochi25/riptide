<template>
  <div class="movie-detail">
    <table>
        <tr>
        <td>
            <div class="movie-details">
            
            <h2>{{movie.Title}}</h2>
            <p id="year">{{movie.Year}}</p>
            <p id="rating">{{movie.Rating}}</p>
            <p id="plot">{{movie.Plot}}</p>
            </div>
        </td>
        <td>
            <img :src="movie.Poster" alt="Movie Poster" class="featured-img"/>
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

        onBeforeMount(() => {
            fetch(`http://www.omdbapi.com/?apikey=${env.apikey}&i=${route.params.id}&plot=full`)
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