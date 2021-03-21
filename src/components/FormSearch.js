import React from 'react';
import {View} from 'react-native';
import {Input, Icon} from 'native-base';

function FormSearch() {
  return (
    <View
      style={{
        borderWidth: 1,
        borderRadius: 20,
        borderColor: 'gray',
        padding: 8,
      }}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Icon
          name="arrow-alt-circle-up"
          type="FontAwesome5"
          style={{fontSize: 24, color: 'green', marginRight: 10}}
        />
        <Input placeholder="Your current location" />
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <Icon
          name="ellipsis-v"
          type="FontAwesome5"
          style={{fontSize: 10, color: 'green', marginHorizontal: 10}}
        />
        <View
          style={{
            borderBottomColor: 'black',
            borderBottomWidth: 0.5,
            width: '90%',
          }}
        />
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <Icon
          name="arrow-alt-circle-up"
          type="FontAwesome5"
          style={{fontSize: 24, color: 'orange', marginRight: 10}}
        />
        <Input placeholder="Search for a destination" />
      </View>
    </View>
  );
}

export default FormSearch;
