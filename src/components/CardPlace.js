import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {Card, CardItem, Body, Icon} from 'native-base';

function CardPlace({pointName, pointAddress}) {
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
            <Text style={{color: 'gray'}}>20.6 km</Text>
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
