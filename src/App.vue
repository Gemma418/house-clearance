import './style.css'

<script setup lang="ts">
import IntroCard from './components/IntroCard.vue';
import FilterBar from './components/FilterBar.vue';
import DonateButton from './components/DonateButton.vue';
import ItemsContainer from './components/ItemsContainer.vue';
</script>

<template>
<body>
    <div class="header">
        <h1>CLEAR OUT</h1>
    </div>
    <IntroCard />

    <div class="line-divider">
    </div>

    <DonateButton />

    <div class="line-divider">
    </div>

    <FilterBar />
    <ItemsContainer />

  </body>

</template>

<style scoped>

</style>
