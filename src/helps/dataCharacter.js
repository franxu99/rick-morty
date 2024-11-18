export const fetchAllCharacters = async (charactersURL) => {
    let allCharacters = [];
  
    try {
      for(const character of charactersURL){
          // Hacer la solicitud a la API
          const response = await fetch(character);
          if (!response.ok) {
            throw new Error(`Error en la solicitud: ${response.statusText}`);
          }
    
          const data = await response.json();
    
          // Agregar los episodios actuales a la lista completa
          allCharacters.push(data); 
      }
      
  
      return allCharacters; // Devolver todos los episodios una vez completado
    } catch (error) {
      console.error('Error al obtener los episodios:', error);
      return [];
    }
  };
  