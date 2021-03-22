import React from 'react';
import {StyleSheet, View, TouchableOpacity} from 'react-native';
import {Text} from 'native-base';

function CardTransport() {
  return (
    <TouchableOpacity
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderBottomWidth: 0.4,
      }}>
      <View style={{flexDirection: 'row'}}>
        <View
          style={{
            width: 50,
            height: 50,
            marginRight: 10,
            backgroundColor: 'black',
          }}
        />
        <View style={{flexDirection: 'column'}}>
          <Text style={{fontWeight: 'bold', fontSize: 20}}>GoRide</Text>
          <Text style={{color: 'gray', fontSize: 14}}>1 person</Text>
        </View>
      </View>
      <View style={{flexDirection: 'column'}}>
        <Text style={{fontWeight: 'bold', fontSize: 20}}>Rp18.000</Text>
        <Text style={{color: 'gray', fontSize: 14, textAlign: 'right'}}>
          1 - 5 mins
        </Text>
      </View>
    </TouchableOpacity>
  );
}

export default CardTransport;
