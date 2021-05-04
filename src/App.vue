<template>
  <header>
    <router-link to="/home">
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
    <div v-if="!$auth.loading.value">
      <button v-if="!$auth.isAuthenticated.value" @click="login">Log in</button>
      <button v-if="$auth.isAuthenticated.value" @click="logout">Log out</button>
    </div>
    
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
export default {
  name: 'App',
  methods: {
    login() {
      this.$auth.loginWithRedirect();
    },
    // Log the user out
    logout() {
      this.$auth.logout({
        returnTo: window.location.origin
      });
    }
  }
}
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
