<template>
    <div class="container-episodes">
        <div class="container-episodes-list">
            <EpisodeCard v-for="item in items" :key="item.id" :episode="item">
                {{ item }}
            </EpisodeCard>
        </div>
    </div>
</template>

<script setup>
    import EpisodeCard from './EpisodeCard.vue'
    import { ref, onMounted } from 'vue';
    import {fetchAllEpisodes} from '../helps/listEpisodes'
    const items = ref([])

    onMounted(async () => {
        try {
            const episodes = await fetchAllEpisodes()
            items.value = episodes  // Asignar los episodios a la lista reactiva
        } catch (error) {
            console.error('Error al obtener los episodios:', error)
        }
    })
</script>

<style>
.container-episodes{
    width: 100%;
    display: flex;
    justify-content: center;
}
.container-episodes-list{
    margin-top: 5vh;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 3rem;
}
</style>