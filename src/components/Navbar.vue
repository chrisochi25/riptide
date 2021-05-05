<template>
    <nav>
    <div class="menu-item" id="Riptide"><a href="/home">Riptide</a></div>
    <Dropdown title="Explore" :items="genres"/>
    <div class="menu-item"><a href="/favorites">Favorites</a></div>
    <div class="menu-item"><a href="/search">Search</a></div>
    <div class="menu-item"><a href="/favorites">Favorites</a></div>
    <div class="menu-item"><a href="/personality">Personality</a></div>
    <Dropdown title="Settings" :items="settings"/>
    </nav>
</template>

<script>


import Dropdown from './Dropdown'
export default {
    name: 'navbar',
    components: {
        Dropdown
    },
    data () {
        return {
            genres: [
                {
                    title: 'Comedy',
                    link: '/explore'
                },
                {
                    title: 'Drama',
                    link: '/explore'
                },
                {
                    title: 'Thriller',
                    link: '/explore'
                },
                {
                    title: 'Documentary',
                    link: '/explore'
                },
                {
                    title: 'Advanced Search',
                    link: '/advanced-search'
                }
            ],
            settings: [
                {
                    title: 'Preferences',
                    link: '#'
                },
                {
                    title: 'Retake Personality Quiz',
                    link: '#'
                },
                {
                    title: 'Switch User',
                    link: '#'
                },
                {
                    title: 'Add User',
                    link: '#'
                },
                {
                    title: 'Logout',
                    link: '#'
                }
            ]
        }
    }
}
</script>

<style>
nav {
    display: flex;
    align-items: center;
    justify-content: center;
}
nav .menu-item {
    color: white;
    padding: 10px 20px;
    position: relative;
    text-align: center;
    border-bottom: 3px solid transparent;
    display: flex;
    transition: 0.4s;
}
nav .menu-item.active, nav .menu-item:hover {
    background-color: #444;
    border-bottom-color: #04F7DF;
}

nav .menu-item a {
    color: inherit;
    text-decoration: none;
}
#Riptide {
    color: #04F7DF;
    font-size: 30px;
}
</style>