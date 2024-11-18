<template>
    <div class="container-episodes">
        <div class="container-episodes-list">
            <CharactersCard v-for="item in dataCharacter" :key="item.id" :character="item"/>
        </div>
    </div>

</template>

<script setup>
    import { useRoute } from 'vue-router';
    import CharactersCard from '../components/CharactersCard.vue';
    import { onMounted, ref } from 'vue';
    import { fetchAllCharacters } from '../helps/dataCharacter';
    const charactersURL = ref([])
    const dataCharacter = ref([])
    const id = ref()
    
    onMounted(async () => {
        const route = useRoute();
        id.value = route.params.id;

        // Parsear y validar los datos
        charactersURL.value = JSON.parse(route.query.characters || '[]');

        dataCharacter.value = await fetchAllCharacters(charactersURL.value)

        console.log(dataCharacter.value);
    });
    

</script>

<style>

</style>