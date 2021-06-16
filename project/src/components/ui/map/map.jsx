import React, {useRef, useEffect} from 'react';
import PropTypes from 'prop-types';
import {offerFullProp} from '../../ui/offer/offer-prop';
import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import useMap from '../../../hooks/use-map/use-map';

const CITY = {
  latitude: 52.38333,
  longitude: 4.9,
  zoom: 12,
};

const IconSize = {
  WIDTH: 30,
  HEIGTH: 30,
};

const MarkerTypeUrl = {
  DEFAULT: 'img/pin.svg',
  ACTIVE: 'img/pin-active.svg',
};

const createIcon = (iconUrl) => leaflet.icon(
  {
    iconUrl,
    iconSize: [IconSize.WIDTH, IconSize.HEIGTH],
    iconAnchor: [IconSize.WIDTH/2, IconSize.HEIGTH],
  },
);


function Map({offers, activeOfferId}) {
  const mapRef = useRef(null);
  const map = useMap(mapRef, CITY);

  useEffect(() => {
    if (map) {
      offers.forEach(({id, location}) => {
        leaflet
          .marker({
            lat: location.latitude,
            lng: location.longitude,
          }, {
            icon: id === activeOfferId
              ? createIcon(MarkerTypeUrl.ACTIVE)
              : createIcon(MarkerTypeUrl.DEFAULT),
          })
          .addTo(map);
      });
    }
  }, [map, offers, activeOfferId]);

  return (
    <div
      style={{height: '100%'}}
      ref={mapRef}
    >
    </div>
  );
}

Map.propTypes = {
  offers: PropTypes.arrayOf(
    PropTypes.shape(offerFullProp),
  ),
  activeOfferId: PropTypes.number,
};

export default Map;
