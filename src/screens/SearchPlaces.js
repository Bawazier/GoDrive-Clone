import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  View,
  PermissionsAndroid,
  TouchableOpacity,
} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {
  Container,
  Content,
  Header,
  Title,
  Button,
  Icon,
  Left,
  Body,
  Text,
} from 'native-base';
import Geolocation from 'react-native-geolocation-service';
import FormSearch from '../components/FormSearch';
import CardPlace from '../components/CardPlace';
import Geocoder from 'react-native-geocoder';
import {GOOGLE_API_KEY} from '@env';
import action from '../redux/action';
import {getPOI} from '../libs/api';

function SearchPlaces({navigation}) {
  const [searchResult, setSearchResult] = useState();
  const [origin, setOrigin] = useState([]);
  const [destination, setDestination] = useState();
  const [valueOrigin, setValueOrigin] = useState();
  const [valueDestination, setValueDestination] = useState();
  const [errorLocation, setErrorLocation] = useState('');
  const dispatch = useDispatch();
  // const {
  //   origin_name,
  //   // origin_address,
  //   origin_location,
  //   destination_name,
  //   // destination_address,
  //   destination_location,
  // } = useSelector(state => state);

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
    if (origin) {
      Geocoder.fallbackToGoogle(GOOGLE_API_KEY);
      Geocoder.geocodePosition({lat: origin.latitude, lng: origin.longitude})
        .then(async res => {
          dispatch(
            action.setOrigin({
              origin_address: res[0].formattedAddress,
              origin_location: res[0].position,
              origin_name: res[0].streetName,
            }),
          );
        })
        .catch(err => console.log(err));
    }
    if (destination) {
      Geocoder.fallbackToGoogle(GOOGLE_API_KEY);
      Geocoder.geocodePosition({
        lat: destination.latitude,
        lng: destination.longitude,
      })
        .then(async res => {
          dispatch(
            action.setDestination({
              destination_address: res[0].formattedAddress,
              destination_location: res[0].position,
              destination_name: res[0].streetName,
            }),
          );
        })
        .catch(err => console.log(err));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [origin, destination]);

  const handleChangeOrigin = async e => {
    await setValueOrigin(e);
    if (e.length > 2) {
      const res = await getPOI(
        e,
        'poi',
        `${origin.longitude}, ${origin.latitude}`,
      );
      if (res.data) {
        setSearchResult(res.data.results);
      }
    }
  };
  const handleChangeDestination = async e => {
    await setValueDestination(e);
    if (e.length > 2) {
      const res = await getPOI(
        e,
        'poi',
        `${origin.longitude}, ${origin.latitude}`,
      );
      if (res.data) {
        setSearchResult(res.data.results);
      }
    }
  };

  const handlePressLocation = async (
    formattedAddress,
    position,
    streetName,
  ) => {
    if (valueOrigin && !valueDestination) {
      await dispatch(
        action.setOrigin({
          origin_address: formattedAddress,
          origin_location: {lat: position[0], lng: position[1]},
          origin_name: streetName || 'Unnamed Road',
        }),
      );
      setValueOrigin(streetName);
      setSearchResult();
    } else {
      await dispatch(
        action.setDestination({
          destination_address: formattedAddress,
          destination_location: {lat: position[0], lng: position[1]},
          destination_name: streetName || 'Unnamed Road',
        }),
      );
      navigation.navigate('ConfirmOrder');
    }
  };

  return (
    <Container>
      <Header transparent>
        <Left>
          <Button transparent onPress={() => navigation.popToTop()}>
            <Icon name="close" style={{color: 'black'}} />
          </Button>
        </Left>
        <Body>
          <Title style={{color: 'black'}}>Set pickup location</Title>
        </Body>
      </Header>
      <View style={{padding: 18, borderBottomWidth: 0.5}}>
        <FormSearch
          valueOrigin={valueOrigin}
          valueDestination={valueDestination}
          onChangeOrigin={handleChangeOrigin}
          onChangeDestination={handleChangeDestination}
        />
        <Button
          iconLeft
          rounded
          bordered
          dark
          onPress={() => navigation.navigate('SetMapPlaces')}
          style={{height: 'auto', marginVertical: 10}}>
          <Icon
            name="map-marked-alt"
            type="FontAwesome5"
            style={{fontSize: 14}}
          />
          <Text style={{fontSize: 14}}>Select via map</Text>
        </Button>
      </View>
      <Content>
        {searchResult &&
          searchResult.map((item, index) => (
            <TouchableOpacity
              key={index}
              onPress={() =>
                handlePressLocation(
                  item.displayString,
                  item.place.geometry.coordinates,
                  item.name,
                )
              }>
              <CardPlace
                pointName={item.name}
                pointAddress={item.displayString}
                originLocation={origin}
                destinationLocation={item.place.geometry.coordinates}
              />
            </TouchableOpacity>
          ))}
        {!searchResult && (
          <View
            style={{
              flexDirection: 'row',
              paddingHorizontal: 20,
              justifyContent: 'flex-start',
              marginVertical: 20,
            }}>
            <View
              style={{
                width: 60,
                height: 60,
                backgroundColor: 'pink',
                borderRadius: 20,
                marginRight: 10,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Icon
                name="biking"
                type="FontAwesome5"
                style={{color: 'white', fontSize: 25}}
              />
            </View>
            <View style={{flexDirection: 'column', width: '80%'}}>
              <Text style={{fontSize: 16, fontWeight: 'bold'}}>
                That's right, order GoRide now
              </Text>
              <Text style={{fontSize: 14}}>
                Less stress on the road, more joy on the ride. Aaah.
              </Text>
            </View>
          </View>
        )}
      </Content>
    </Container>
  );
}

const styles = StyleSheet.create({
  baseText: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default SearchPlaces;
