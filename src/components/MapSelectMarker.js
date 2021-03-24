import React from 'react';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';

function MapSelectMarker({
  isNextStep,
  currentPosition,
  position,
  onMarkerLocation,
}) {
  return (
    <MapView
      provider={PROVIDER_GOOGLE}
      region={{
        latitude: position ? position.latitude : currentPosition.latitude,
        longitude: position ? position.longitude : currentPosition.longitude,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}
      style={{flex: 1}}
      showsUserLocation={true}
      showsCompass={true}
      minZoomLevel={18}
      toolbarEnabled={false}
      zoomEnabled={false}
      onPoiClick={e => onMarkerLocation(e)}
      onPress={e => onMarkerLocation(e)}>
      {isNextStep && position ? (
        <Marker coordinate={position || currentPosition} />
      ) : position ? (
        <Marker coordinate={position} />
      ) : null}
    </MapView>
  );
}

export default MapSelectMarker;
