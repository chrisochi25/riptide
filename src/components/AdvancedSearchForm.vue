<template>
<div class="advanced-search">
    <form>
        <table>
        <tr>
            <td>
                <h2>Type</h2>
                <div class="toggle">
                    <VueToggle title="Movie" name="VueToggle"/>
                </div>

                <div class="toggle">
                <VueToggle title="Series" name="VueToggle"/>
                </div>

                <div class="toggle">
                <VueToggle title="Live Performance" name="VueToggle"/>
                </div>
            </td>

            <td colspan="2">
                <h2>Duration</h2>
                <div class="duration-slider">
                    <Slider 
                    v-model="value"
                    :max="max" 
                    />
                </div>
                <h2 class="duration">Maximum of {{ value }} minutes.</h2>
            </td>
        </tr>
        <tr>
            <td>
                <h2>Genre(s) and Tag(s)</h2>
                <!--
                <nav>
                    <Dropdown title="Choose Genre(s)" :items="genres"/>
                    <Dropdown title="Choose Tag(s)" :items="tags"/>
                </nav>
                -->
                <div class="select">
                <Multiselect
                    v-model="multiValue"
                    mode="tags"
                    placeholder="Find Genre(s)"
                    :options="options"
                    :searchable="true"
                    :createTag="true"
                />
                </div>
                <div class="select">
                <Multiselect
                    v-model="multiValue2"
                    mode="tags"
                    placeholder="Find Tag(s)"
                    :options="tagOptions"
                    :searchable="true"
                    :createTag="true"
                />
                </div>
            </td>

            <td>
                <h2>Preferred Director/Actor</h2>
                <div class="select">
                <Multiselect
                    v-model="multiValue3"
                    mode="tags"
                    placeholder="Find Actor(s)"
                    :options="actorOptions"
                    :searchable="true"
                    :createTag="true"
                />
                </div>
                <div class="select">
                <Multiselect
                    v-model="multiValue4"
                    mode="tags"
                    placeholder="Find Director(s)"
                    :options="directorOptions"
                    :searchable="true"
                    :createTag="true"
                />
                </div>
            </td>

            <td>
                <h2>Accepted Rating</h2>
                 <div class="toggle">
                    <VueToggle title="G" name="VueToggle"/>
                </div>

                <div class="toggle">
                <VueToggle title="PG" name="VueToggle"/>
                </div>

                <div class="toggle">
                <VueToggle title="PG-13" name="VueToggle"/>
                </div>

                <div class="toggle">
                <VueToggle title="R" name="VueToggle"/>
                </div>

                <div class="toggle">
                <VueToggle title="Not rated" name="VueToggle"/>
                </div>

            </td>
        </tr>
        
        </table>
        <div id="search-submit"><a href="/explore/comedy">Search</a></div>
    </form>
</div>
</template>

<script>
import Slider from '@vueform/slider'

// import Dropdown from './Dropdown'

import VueToggle from "vue-toggle-component";

import Multiselect from '@vueform/multiselect';

export default {
    name: 'advanced-search',
    components: {
        // Dropdown,
        Slider,
        VueToggle,
        Multiselect,
    },
    data () {
        return {
            value: 20,
            max: 200,
            multiValue: [],
            multiValue2: [],
            multiValue3: [],
            multiValue4: [],
            options: [
                'Comedy',
                'Drama',
                'Thriller',
                'Documentary'
            ],
            tagOptions: [
                '#Seaspiracy',
                '#Pandemic',
                '#RealCrime',
                '#LGBTQ+',
                '#OscarNominees',
                '#BlackStories'
            ],
            actorOptions: [
                'Morgan Freeman',
                'Tom Hanks',
                'Scarlett Johansson',
                'Will Smith',
                'Beyonce',
            ],
            directorOptions: [
                'Steven Spielberg',
                'Quentin Taratino',
                'Tim Burton',
            ],
            genres: [
                {
                    title: 'Comedy',
                    link: '/explore/comedy'
                },
                {
                    title: 'Drama',
                    link: '/explore/drama'
                },
                {
                    title: 'Thriller',
                    link: '/explore/thriller'
                },
                {
                    title: 'Documentary',
                    link: '/explore/documentary'
                },
                {
                    title: 'Advanced Search',
                    link: '/advanced-search'
                }
            ],
            tags: [
                {
                    title: 'Seaspiracy',
                    link: '#'
                }
            ],
            actors: [
                {
                    title: 'Steven Spielberg',
                    link: '#'
                },
                {
                    title: 'Quentin Taratino',
                    link: '#'
                },
                {
                    title: 'Tim Burton',
                    link: '#'
                },
                {
                    title: 'Morgan Freeman',
                    link: '#'
                },
                {
                    title: 'Tom Hanks',
                    link: '#'
                },
                {
                    title: 'Scarlett Johansson',
                    link: '#'
                },
                {
                    title: 'Beyonce',
                    link: '#'
                },
                {
                    title: 'Leonardo DiCaprio',
                    link: '#'
                },
                {
                    title: 'Will Smith',
                    link: '#'
                }
            ]
        }
    }
}
</script>

<style src="@vueform/slider/themes/default.css"></style>
<style src="@vueform/multiselect/themes/default.css"></style>

<style lang="scss">
.select {
    margin: 10px 10px 10px 10px;
}
.multiselect-option {
    color: #222;
}
.multiselect-options {
    background-color: #222;
}
.multiselect-option.is-pointed {
    background-color: #444;
}
.multiselect-placeholder {
    color: #9FBEBB;
}
.is-multiple .multiselect-search input,.is-single .multiselect-search input {
    background: #3E8074;
}
.is-tags .multiselect-search input {
    background: #1F4E48;
    color: #fff;
}
.advanced-search {
    h1 {
        margin-top: 10px;
        text-align: center;
    }
    form table {
        width: 100%;
        height: 80%;
        border: 10px;
    }
    form table tr td {
        background-color: #1F4E48;
        height: 30vh;
    }
    form table tr td h2{
        margin-top: 10px;
        margin-bottom: 30px;
    }
}
.menu-item {
    color: white;
    padding: 10px 20px;
    position: relative;
    text-align: center;
    border-bottom: 3px solid transparent;
    display: flex;
    transition: 0.4s;
}
.menu-item.active, .menu-item:hover {
    background-color: #444;
    border-bottom-color: #04F7DF;
}

.menu-item a {
    color: inherit;
    text-decoration: none;
}
.duration-slider {
    width: 90%;
    margin: 0 auto;
}
.toggle {
    margin: 10px 10px 10px 10px;
    margin-left: 30px;
}

</style>