import React from 'react';
import {View} from 'react-native';
import {Input, Icon} from 'native-base';

function FormSearch({
  valueOrigin,
  valueDestination,
  onChangeOrigin,
  onChangeDestination,
}) {
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
        <Input
          placeholder="Your current location"
          autoCompleteType="street-address"
          onChangeText={e => onChangeOrigin(e)}
          value={valueOrigin}
        />
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
          name="dot-circle"
          type="FontAwesome5"
          style={{fontSize: 24, color: 'orange', marginRight: 10}}
        />
        <Input
          placeholder="Search for a destination"
          autoCompleteType="street-address"
          onChangeText={e => onChangeDestination(e)}
          value={valueDestination}
          autoFocus
        />
      </View>
    </View>
  );
}

export default FormSearch;
