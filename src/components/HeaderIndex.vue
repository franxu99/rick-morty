<template>
    <header class="container-header">
        <div style="height: 100%; display: flex; align-items: center; justify-content: start;">
            <Button 
                class="p-button-primary" 
                @click="goToHome" 
            >
                Home
            </Button>
        </div>
        <img src="../../public/header.jpg" alt="">
    </header>
</template>

<script setup>

import Button from 'primevue/button';
import { useRouter } from 'vue-router'; // Importar Vue Router

const router = useRouter(); // Instanciar el router

const goToHome = () => {
    router.push('/'); // Cambia '/' si la ruta de tu rama principal es diferente
};
</script>

<style>
.container-header{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 20%;
    width: 100%;
}
</style>