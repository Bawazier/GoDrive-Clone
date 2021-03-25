import React, {useEffect, useState} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {Card, CardItem, Body, Icon} from 'native-base';
import calculateDistance from '../helpers/calculateDistance';

function CardPlace({
  pointName,
  pointAddress,
  originLocation,
  destinationLocation,
}) {
  const [dist, setDist] = useState(0);
  useEffect(() => {
    const distance = calculateDistance(
      originLocation.latitude,
      originLocation.longitude,
      destinationLocation[1],
      destinationLocation[0],
    );
    setDist(distance.toFixed(2));
  }, [originLocation, destinationLocation]);

  return (
    <Card transparent style={{borderBottomWidth: 0.4}}>
      <CardItem>
        <Body style={{flexDirection: 'row', alignItems: 'center'}}>
          <View style={{alignItems: 'center', marginRight: 14}}>
            <Icon
              name="map-marker-alt"
              type="FontAwesome5"
              style={{fontSize: 18, marginVertical: 2, color: 'gray'}}
            />
            <Text style={{color: 'gray'}}>{dist || 0} km</Text>
          </View>
          <View style={{width: 250}}>
            <Text style={{color: 'black', fontWeight: 'bold'}}>
              {pointName || ''}
            </Text>
            <Text style={{fontSize: 14, color: 'gray'}}>
              {pointAddress || ''}
            </Text>
          </View>
        </Body>
      </CardItem>
    </Card>
  );
}

export default CardPlace;
