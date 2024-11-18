<template>
    <Card style="width: 25rem; overflow: hidden; border-radius: 8px; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);">
      <template #header>
        <h3>{{ character.name }}</h3>
      </template>
  
      <template #content>
        <p><strong>Specie:</strong> {{ character.species }}</p>
        <p><strong>Alive:</strong> {{ character.status }}</p>
        <img :src="character.image" alt="">
        <!-- <Button label="More Info" icon="pi pi-info-circle" @click="navigateToEpisodeDetail" class="p-button-outlined p-button-sm" /> -->
      </template>
  
    </Card>
  </template>
  
  <script setup>
  import Button from 'primevue/button';
  import Card from 'primevue/card';
  import { useRouter } from 'vue-router';

  const router = useRouter();
  
  const props = defineProps({
    character: {
      type: Object,
      required: true
    }
  });
  
  
  </script>
  
  <style >
  .card-header {
    background-color: #f4f4f4;
    padding: 1rem;
    font-size: 1.25rem;
    color: #333;
    border-bottom: 1px solid #e0e0e0;
  }
  
  .card-content {
    padding: 1rem;
    color: #555;
    font-size: 1rem;
  
    p {
      margin-bottom: 0.5rem;
    }
  
    .p-button {
      margin-top: 1rem;
    }
  }
  
  .card {
    padding: 0;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
  </style>
  