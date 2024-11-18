export const fetchAllEpisodes = async () => {
    const baseUrl = 'https://rickandmortyapi.com/api/episode';
    let allEpisodes = [];
    let nextPage = baseUrl;
  
    try {
      while (nextPage) {
        // Hacer la solicitud a la API
        const response = await fetch(nextPage);
        if (!response.ok) {
          throw new Error(`Error en la solicitud: ${response.statusText}`);
        }
  
        const data = await response.json();
  
        // Agregar los episodios actuales a la lista completa
        allEpisodes = allEpisodes.concat(data.results);
  
        // Actualizar el enlace a la siguiente página
        nextPage = data.info.next;
      }
  
      return allEpisodes; // Devolver todos los episodios una vez completado
    } catch (error) {
      console.error('Error al obtener los episodios:', error);
      return [];
    }
  };
  
  