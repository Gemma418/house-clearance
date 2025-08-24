<template>
  <div class="items-container">
    <div 
      class="item-card" 
      v-for="item in items" 
      :key="item.id" 
      :data-category="item.category"
    >
      <img :src="item.image" :alt="item.alt" img>
      <h2>{{ item.title }}</h2>
      <div class="item-details">
        <p><strong>Description: </strong>{{ item.description }}</p>
        <p><strong>Measurements: </strong>L: {{ item.measurements.length }}, W: {{ item.measurements.width }}, H: {{ item.measurements.height }}</p>
        <p><strong>Condition: </strong>{{ item.condition }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const items = [
  {
    id: 1,
    category: "furniture",
    image: "/photo-files/bedside-table.jpg",
    alt: "Bedside tables",
    title: "Metal bedside tables (x2)",
    description: "Metal bedside tables, in green, bought new from IKEA.",
    measurements: { length: "", width: "", height: "" },
    condition: "Very good.",
  },
  {
    id: 2,
    category: "furniture",
    image: "/photo-files/chairs.jpg",
    alt: "Green velvet chairs",
    title: "Green velvet chairs (x2)",
    description: "Green velvet dining chairs, bought new.",
    measurements: { length: "", width: "", height: "" },
    condition: "Very good.",
  },
  {
    id: 3,
    category: "furniture",
    image: "/photo-files/clothes-rail.jpg",
    alt: "Black clothes rail",
    title: "Black clothes rail",
    description: "Black clothes rail, bought new from IKEA.",
    measurements: { length: "", width: "", height: "" },
    condition: "Very good.",
  },
  {
    id: 4,
    category: "furniture",
    image: "/photo-files/coat-shoe-rack.jpg",
    alt: "Coat and shoe rack",
    title: "Black and wood coat and shoe rack",
    description: "Black and wood coat and shoe rack, bought new.",
    measurements: { length: "", width: "", height: "" },
    condition: "Very good.",
  },
  {
    id: 5,
    category: "furniture",
    image: "/photo-files/curtains.jpg",
    alt: "Curtains",
    title: "Patterned curtains (x2)",
    description: "Cute patterned curtains, pack of 2, black with colourful fruits and leaves, bought new from IKEA.",
    measurements: { length: "", width: "", height: "" },
    condition: "Very good.",
  },
  {
    id: 6,
    category: "furniture",
    image: "/photo-files/desk-and-chair.jpg",
    alt: "Desk with drawers and chair",
    title: "Desk and chair",
    description: "Desk with drawers, duck egg colour, bought new from IKEA. Comes with ergonimic chair if wanted and floor protector",
    measurements: { length: "", width: "", height: "" },
    condition: "Very good.",
  },
  {
    id: 7,
    category: "furniture",
    image: "/photo-files/dining-table.jpg",
    alt: "Dining table",
    title: "Wooden dining table",
    description: "Wooden dining table, bought new from Argos.",
    measurements: { length: "", width: "", height: "" },
    condition: "Good, has some scratches.",
  },
  {
    id: 8,
    category: "furniture",
    image: "/photo-files/green-storage.jpg",
    alt: "Green bookcase storage",
    title: "Dark green bookcase/storage",
    description: "Dark green bookcase/storage, bought new from IKEA.",
    measurements: { length: "", width: "", height: "" },
    condition: "Very good.",
  },
  {
    id: 9,
    category: "furniture",
    image: "/photo-files/guest-bed.jpg",
    alt: "Guest bed",
    title: "Guest bed with mattress",
    description: "Guest bed with mattress, folds up for storage, bought new from IKEA.",
    measurements: { length: "", width: "", height: "" },
    condition: "Very good.",
  },
  {
    id: 10,
    category: "furniture",
    image: "/photo-files/headboard.jpg",
    alt: "Headboard",
    title: "Rattan headboard (double)",
    description: "Rattan headboard, for a double bed, bought new.",
    measurements: { length: "", width: "", height: "" },
    condition: "Good.",
  },
  {
    id: 11,
    category: "furniture",
    image: "/photo-files/poang-and-footstool.jpg",
    alt: "Poang and footstool",
    title: "Poang and footstool",
    description: "Poang and footstool, thick, yellow cushions, bought new from IKEA.",
    measurements: { length: "", width: "", height: "" },
    condition: "Very good.",
  },
  {
    id: 12,
    category: "furniture",
    image: "/photo-files/rattan-storage-stool.jpg",
    alt: "Rattan storage stool",
    title: "Rattan storage stool and coffee table",
    description: "Rattan stool / coffee table, with storage, bought new from IKEA.",
    measurements: { length: "", width: "", height: "" },
    condition: "Good.",
  },
  {
    id: 13,
    category: "furniture",
    image: "/photo-files/red-storage-table.jpg",
    alt: "Red storage table",
    title: "Red coffee table with storage",
    description: "Red coffee table with storage, bought new from IKEA.",
    measurements: { length: "", width: "", height: "" },
    condition: "Very good.",
  },
  {
    id: 14,
    category: "furniture",
    image: "/photo-files/storage-wood.jpg",
    alt: "Wooden storage",
    title: "Wooden storage cupboard",
    description: "Real wood storage cupboard, bought from charity shop.",
    measurements: { length: "", width: "", height: "" },
    condition: "Acceptable.",
  },
  {
    id: 15,
    category: "furniture",
    image: "/photo-files/tallboy.jpg",
    alt: "Tallboy",
    title: "Tallboy storage",
    description: "Real wood tallboy storage, bought from charity shop.",
    measurements: { length: "", width: "", height: "" },
    condition: "Acceptable.",
  },
  {
    id: 16,
    category: "furniture",
    image: "/photo-files/white-cupboard.jpg",
    alt: "White cupboard",
    title: "White cupboard",
    description: "White cupboard, bought new from IKEA. Has been used in the bathroom, so has soe slight water damage to the back",
    measurements: { length: "", width: "", height: "" },
    condition: "Good.",
  },
  {
    id: 17,
    category: "furniture",
    image: "/photo-files/white-storage.jpg",
    alt: "White storage",
    title: "White bookcase/storage",
    description: "White bookcase/storage, bought new from IKEA.",
    measurements: { length: "", width: "", height: "" },
    condition: "Good.",
  }
];
</script>

<style scoped>
/* Add any styles specific to the items container here */
</style>