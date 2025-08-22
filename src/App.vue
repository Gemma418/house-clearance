import './style.css'

<script setup lang="ts">
import IntroCard from './components/IntroCard.vue';
import FilterBar from './components/FilterBar.vue';
import DonateButton from './components/DonateButton.vue';


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
<div class="items-container">
        <div class="item-card" data-category="clothes">
            <img src="/photo-files/angry-cloud.jpg" alt="Angry cloud">
            <h2>Lucy & Yak boiler suit</h2>
            <div class="item-details">
            <p><strong>Description: </strong>Lucy & Yak black boilersuit, made from a soft corduroy fabric.</p>
            <p><strong>Size: </strong>Small.</p>
            <p><strong>Condition: </strong>Very good.</p>
            </div>
            <button class="reserve-btn">Reserve</button>
        </div>

        <div class="item-card" data-category="furniture">
            <img src="/photo-files/face-cloud.jpg" alt="Face cloud">
            <h2>Metal bed frame</h2>
            <div class="item-details">
            <p><strong>Description: </strong>Metal bed frame.</p>
            <p><strong>Measurements: </strong> L: , W: , H: </p>
            <p><strong>Condition: </strong> Good</p>
            </div>
            <button class="reserve-btn">Reserve</button>
        </div>


        <div class="item-card" data-category="kitchenware">
            <img src="/photo-files/ice-cream-cloud.jpg" alt="Ice cream cloud">
            <h2>Coffee Table</h2>
            <div class="item-details">
            <p><strong>Description: </strong>Small glass coffee table.</p>
            <p><strong>Measurements: </strong>L: , W: , H: </p>
            <p><strong>Condition: </strong>Good</p>
            </div>
            <button class="reserve-btn">Reserve</button>
        </div>

        <div class="item-card" data-category="plants">
            <img src="/photo-files/ice-cream-cloud.jpg" alt="Ice cream cloud">
            <h2>Fake plants</h2>
            <div class="item-details">
            <p><strong>Description: </strong>Small glass coffee table.</p>
            <p><strong>Measurements: </strong>L: , W: , H: </p>
            <p><strong>Condition: </strong>Good</p>
            </div>
            <button class="reserve-btn">Reserve</button>
        </div>

        <div class="item-card" data-category="misc">
            <img src="/photo-files/ice-cream-cloud.jpg" alt="Ice cream cloud">
            <h2>Coffee Table</h2>
            <div class="item-details">
                <p><strong>Description: </strong>Small glass coffee table.</p>
                <p><strong>Measurements: </strong>L: , W: , H: </p>
                <p><strong>Condition: </strong>Good</p>
            </div>
            <button class="reserve-btn">Reserve</button>
            
        </div>
    </div>

  </body>

</template>

<style scoped>

</style>
