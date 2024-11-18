<template>
  <div id="app">
    <HeaderIndex />
    <main>
      <router-view />
    </main>
  </div>
</template>

<script>
import HeaderIndex from './components/HeaderIndex.vue';

export default {
  name: 'App',
  components: {
    HeaderIndex
  },
};
</script>

<style>
/* Estilos globales */
* {
  box-sizing: border-box;
  margin: 0;
  font-family: Arial, sans-serif;
  background-color: #f4f4f4;
  color: #333;
}

#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  min-width: 100%;
}
</style>
