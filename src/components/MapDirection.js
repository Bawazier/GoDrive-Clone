import React from 'react';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';

function MapSelectMarker({origin, destination}) {
  return (
    <MapView
      provider={PROVIDER_GOOGLE}
      region={{
        latitude: origin.lat,
        longitude: origin.lng,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}
      style={{flex: 1}}
      showsUserLocation={true}
      showsCompass={true}
      minZoomLevel={18}
      toolbarEnabled={false}
      zoomEnabled={false}>
      <Marker coordinate={{latitude: origin.lat, longitude: origin.lng}} />
      <Marker
        coordinate={{latitude: destination.lat, longitude: destination.lng}}
      />
    </MapView>
  );
}

export default MapSelectMarker;
