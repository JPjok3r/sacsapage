function initMap() {
    // Coordenadas de la ubicación (ejemplo: Ciudad de México)
    const location = { lat: -17.376804, lng: -66.163519 };
    
    // Crear el mapa
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 17, // Nivel de zoom
      center: location, // Centrar el mapa en la ubicación
    });

    // Agregar un marcador
    new google.maps.Marker({
        position: location,
        map: map,
        title: "SACSA SRL.",
    });
}

  // Inicializar el mapa cuando se cargue la página
window.onload = initMap;