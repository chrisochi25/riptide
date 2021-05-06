<template>
<div class="advanced-search">
    <h1>Advanced Search</h1>
    <AdvancedSearchForm />
</div>
</template>

<script>

import AdvancedSearchForm from '../components/AdvancedSearchForm.vue';

export default {
     components: {
      AdvancedSearchForm
    }
}

</script>

<style lang="scss">
.advanced-search {
    text-align: center;
    h1 {
        margin-top: 10px;
        text-align: center;
    }
    form table {
        width: 100%;
        height: 80%;
    }
    form table tr td {
        background-color: #1F4E48;
    }
    form table tr td h2{
        text-align: center;
    }
}

</style>