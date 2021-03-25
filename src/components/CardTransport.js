import React from 'react';
import {StyleSheet, View, TouchableOpacity, Image} from 'react-native';
import {Text} from 'native-base';

function CardTransport({car, price, est, active, handlePress}) {
  return (
    <TouchableOpacity
      onPress={() => handlePress(car)}
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderBottomWidth: 0.4,
        backgroundColor: active ? '#ccf5ff' : 'white',
      }}>
      <View style={{flexDirection: 'row'}}>
        <Image
          style={{
            width: 50,
            height: 50,
            marginRight: 10,
            backgroundColor: 'white',
          }}
          source={
            car
              ? require('../assets/goride_car.png')
              : require('../assets/goride_bycyle.png')
          }
        />
        <View style={{flexDirection: 'column'}}>
          <Text style={{fontWeight: 'bold', fontSize: 20}}>GoRide</Text>
          <Text style={{color: 'gray', fontSize: 14}}>
            {car ? '1 - 4' : '1'} person
          </Text>
        </View>
      </View>
      <View style={{flexDirection: 'column'}}>
        <Text style={{fontWeight: 'bold', fontSize: 20}}>Rp{price}</Text>
        <Text style={{color: 'gray', fontSize: 14, textAlign: 'right'}}>
          {est} mins
        </Text>
      </View>
    </TouchableOpacity>
  );
}

export default CardTransport;
