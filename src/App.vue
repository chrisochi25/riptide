<template>
  <header>
    <router-link to="/">
      <h1><span>Riptide</span></h1>
    </router-link>
    <router-link to="/explore">
      <h2><span>Explore</span></h2>
    </router-link>
    <router-link to="/favorites">
      <h2><span>Favorites</span></h2>
    </router-link>
    <router-link to="/search">
      <h2><span>Search</span></h2>
    </router-link>
    <router-link to="/personality">
      <h2><span>Personality Type</span></h2>
    </router-link>
    <router-link to="/settings">
      <h2><span>Settings</span></h2>
    </router-link>
    <!-- <form @submit.prevent="SearchMovies()" class="search-box">
      <input type="text" placeholder="Search for a movie" v-model="search"/>
      <input type="submit" value="Search" />
    </form> -->
  </header>
  <main>
    <router-view />
  </main>
</template>

<script>
// import { ref } from 'vue';
// import env from '@/env.js'
// export default {
//   setup() {
//     const search = ref("");
//     const movies = ref([]);

//     const SearchMovies = () => {
//       if (search.value != "") {
//         fetch(`http://www.omdbapi.com/?apikey=${env.apikey}&s=${search.value}`)
//           .then(response => response.json())
//           .then(data => {
//             movies.value = data.Search;
//             search.value = "";
//             // uncomment below line to get list of search values in browser's console
//             // console.log(movies.value);
//           });
//       }
//     }

//     return {
//       search,
//       movies,
//       SearchMovies
//     }
//   }
// }
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: sans-serif;
  color: white;

  &::selection {
    background: transparentize($color: #42B883, $amount: 0.5)
  }
}

body {
  background-color: black;
}
a {
  text-decoration: none;
}

header {
  display: flex;
  align-items: center;
  justify-content: left;
  padding: 10px 16px;
  background-color: #383838;
  box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.1);
}

h1 {
  color: #04F7DF;
  font-size: 35px;
  padding-right: 50px;

  span {
    color: #00FFD8;
  }
}

h2 {
  color: white;
  padding-right: 70px;
}
.search-box {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 16px;

    input {
      display: block;
      appearance: none;
      border: none;
      outline: none;
      background: none;

      &[type="text"] {
        width: 100%;
        color: #FFF;
        background-color: #1F4E48;
        font-size: 20px;
        padding: 10px 16px;
        border-radius: 8px;
        margin: 15px;
        transition: 0.4s;

        &::placeholder {
          color: #f3f3f3
        }

        &:focus {
          box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.2);
        }
      }

      &[type="submit"] {
        width: 100%;
        max-width: 300px;
        background-color: #04F7DF;
        padding: 10px;
        border-radius: 8px;
        color: black;
        font-size: 20px;
        text-transform: uppercase;
        transition: 0.4s;

        &:active {
          background-color: #3B8070;
        }


      }

    }
  }
</style>
