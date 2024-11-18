import { createRouter, createWebHistory } from 'vue-router';
import EpisodesPage from '../pages/EpisodesPage.vue';
import EpisodeDetail from '../pages/EpisodeDetailPage.vue';
import App from '../App.vue';

const routes = [
    {   
        path: '/',
        name: 'Episodes',
        component: EpisodesPage,
    },
    {
        path: '/',
        name: 'Episodes',
        component: EpisodesPage,
    },
    {
        path: '/episode/:id',  // Mover esta ruta fuera de la ruta "EpisodesPage"
        name: 'episode',
        component: EpisodeDetail, // Componente de detalle del episodio
        props: true,  // Para pasar los parámetros de la ruta como props
    }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
