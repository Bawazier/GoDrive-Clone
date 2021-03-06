import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import {Icon, Text} from 'native-base';

function StarFeedback({handlePressStar}) {
  return (
    <View
      style={{
        width: '100%',
        height: '40%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
      }}>
      <View
        style={{
          marginHorizontal: 20,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <TouchableOpacity onPress={handlePressStar}>
          <Icon
            name="star"
            type="FontAwesome"
            style={{fontSize: 40, color: 'gray', marginBottom: 10}}
          />
        </TouchableOpacity>

        <Text style={{fontSize: 12}}>Kasar</Text>
      </View>
      <View
        style={{
          marginHorizontal: 20,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <TouchableOpacity onPress={handlePressStar}>
          <Icon
            name="star"
            type="FontAwesome"
            style={{fontSize: 40, color: 'gray', marginBottom: 10}}
          />
        </TouchableOpacity>

        <Text style={{fontSize: 12}}>Jengkelin</Text>
      </View>
      <View
        style={{
          marginHorizontal: 20,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <TouchableOpacity onPress={handlePressStar}>
          <Icon
            name="star"
            type="FontAwesome"
            style={{fontSize: 40, color: 'gray', marginBottom: 10}}
          />
        </TouchableOpacity>

        <Text style={{fontSize: 12}}>Nyebelin</Text>
      </View>
      <View
        style={{
          marginHorizontal: 20,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <TouchableOpacity onPress={handlePressStar}>
          <Icon
            name="star"
            type="FontAwesome"
            style={{fontSize: 40, color: 'gray', marginBottom: 10}}
          />
        </TouchableOpacity>

        <Text style={{fontSize: 12}}>Oke lah</Text>
      </View>
      <View
        style={{
          marginHorizontal: 20,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <TouchableOpacity onPress={handlePressStar}>
          <Icon
            name="star"
            type="FontAwesome"
            style={{fontSize: 40, color: 'gray', marginBottom: 10}}
          />
        </TouchableOpacity>

        <Text style={{fontSize: 12}}>Baik bgt!</Text>
      </View>
    </View>
  );
}

export default StarFeedback;
