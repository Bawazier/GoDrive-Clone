import React, {useState, useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  PermissionsAndroid,
} from 'react-native';
import {Container, H1, Footer, Icon} from 'native-base';
import FooterDestination from '../components/FooterDestination';
import FooterOrigin from '../components/FooterOrigin';
import MapSelectMarker from '../components/MapSelectMarker';
import Geolocation from 'react-native-geolocation-service';
import Geocoder from 'react-native-geocoder';
import {GOOGLE_API_KEY} from '@env';
import action from '../redux/action';

function SetMapPlaces({navigation}) {
  const [markerPosition, setMarkerPosition] = useState();
  const [origin, setOrigin] = useState();
  const [destination, setDestination] = useState();
  const [geoOrigin, setGeoOrigin] = useState();
  const [geoDestination, setGeoDestination] = useState();
  const [isNextStep, setIsNextStep] = useState(false);
  const [errorLocation, setErrorLocation] = useState('');
  const dispatch = useDispatch();

  const hasLocationPermission = PermissionsAndroid.check(
    PermissionsAndroid.PERMISSIONS.ACCESS_COARSE_LOCATION &&
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
  )
    .then(response => {
      return true;
    })
    .catch(() => false);

  useEffect(() => {
    if (hasLocationPermission) {
      Geolocation.getCurrentPosition(
        position => {
          setOrigin({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });
        },
        error => {
          setErrorLocation(error.message);
        },
        {timeout: 15000},
      );
    } else {
      setErrorLocation('PLEASE TURN ON LOCATION');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (markerPosition && origin) {
      Geocoder.fallbackToGoogle(GOOGLE_API_KEY);
      Geocoder.geocodePosition({lat: origin.latitude, lng: origin.longitude})
        .then(async res => {
          setGeoOrigin({
            origin_address: res[0].formattedAddress,
            origin_location: res[0].position,
            origin_name: res[0].streetName,
          });
        })
        .catch(err => console.log(err));
    }
    if (markerPosition && destination) {
      Geocoder.fallbackToGoogle(GOOGLE_API_KEY);
      Geocoder.geocodePosition({
        lat: destination.latitude,
        lng: destination.longitude,
      })
        .then(async res => {
          setGeoDestination({
            destination_address: res[0].formattedAddress,
            destination_location: res[0].position,
            destination_name: res[0].streetName,
          });
        })
        .catch(err => console.log(err));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [markerPosition]);

  const handleMarkerLocation = e => {
    console.log(e.nativeEvent.coordinate);
    setMarkerPosition(e.nativeEvent.coordinate);
    if (isNextStep) {
      setOrigin(e.nativeEvent.coordinate);
    } else {
      setDestination(e.nativeEvent.coordinate);
    }
  };

  const handleSetOrigin = async () => {
    await dispatch(action.setOrigin(geoOrigin));
    navigation.navigate('ConfirmOrder');
  };
  const handleSetDestination = async () => {
    await dispatch(action.setDestination(geoDestination));
    setMarkerPosition(origin);
    setIsNextStep(true);
  };

  return (
    <>
      {errorLocation === '' && origin ? (
        <MapSelectMarker
          isNextStep={isNextStep}
          currentPosition={origin}
          position={markerPosition}
          onMarkerLocation={handleMarkerLocation}
        />
      ) : (
        <H1>{errorLocation}</H1>
      )}
      <Container
        style={{
          backgroundColor: 'transparent',
          position: 'absolute',
          // top: 420,
          // top: 490,
          top: !isNextStep && geoDestination ? 490 : geoOrigin ? 420 : 700,
          width: '100%',
          height: '100%',
        }}>
        <Footer
          style={{
            backgroundColor: 'transparent',
            elevation: 0,
            height: 'auto',
            flexDirection: 'column',
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: 10,
              paddingHorizontal: 10,
            }}>
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={{
                backgroundColor: 'white',
                width: 50,
                height: 50,
                borderRadius: 50,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Icon
                name="arrow-left"
                type="FontAwesome5"
                style={{fontSize: 18, color: 'black'}}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                backgroundColor: 'white',
                width: 50,
                height: 50,
                borderRadius: 50,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Icon
                name="my-location"
                type="MaterialIcons"
                style={{fontSize: 18, color: 'black'}}
              />
            </TouchableOpacity>
          </View>
          {!isNextStep && geoDestination ? (
            <FooterDestination
              destinationName={geoDestination.destination_name}
              destinationAddress={geoDestination.destination_address}
              onSetDestination={handleSetDestination}
            />
          ) : isNextStep && geoOrigin ? (
            <FooterOrigin
              originName={geoOrigin.origin_name}
              originAddress={geoOrigin.origin_address}
              onSetOrigin={handleSetOrigin}
            />
          ) : null}
        </Footer>
      </Container>
    </>
  );
}

const styles = StyleSheet.create({
  baseText: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default SetMapPlaces;
