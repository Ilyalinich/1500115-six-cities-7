import {useEffect, useState} from 'react';
import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';


function useMap(mapRef, initialPosition) {
  const [map, setMap] = useState(null);

  useEffect(() => {
    if (mapRef.current !== null && map === null) {
      const newMap = leaflet.map(mapRef.current, {
        center: {
          lat: initialPosition.latitude,
          lng: initialPosition.longitude,
        },
        zoom: initialPosition.zoom,
      });

      leaflet
        .tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
          attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
        })
        .addTo(newMap);

      setMap(newMap);

    } else if (mapRef.current !== null && map !== null) {
      map.flyTo({
        lat: initialPosition.latitude,
        lng: initialPosition.longitude,
      }, initialPosition.zoom);
    }
  }, [mapRef, map, initialPosition]);

  return map;
}

export default useMap;
