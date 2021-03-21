import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {Card, CardItem, Body, Icon} from 'native-base';

function CardPlace() {
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
          <View>
            <Text style={{color: 'black', fontWeight: 'bold'}}>
              Polsek Cerme
            </Text>
            <Text style={{fontSize: 14, color: 'gray', width: '50%'}}>
              Jl. Cerme Kidul, Cerme Kidul, Gresik, Kabupaten, Gresik, Jawa
              Timur 61171, Indonesia
            </Text>
          </View>
        </Body>
      </CardItem>
    </Card>
  );
}

export default CardPlace;
