/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View} from 'react-native';
import {Icon, Text} from 'native-base';

function ModalFeedback() {
  return (
    <View
      style={{
        flexDirection: 'column',
        justifyContent: 'space-between',
        marginHorizontal: 20,
        marginVertical: 10,
        height: '100%',
      }}>
      <View style={{flexDirection: 'row', marginVertical: 5}}>
        <Icon
          name="exclamation-circle"
          type="FontAwesome5"
          style={{fontSize: 62, color: 'black'}}
        />
        <Text style={{fontSize: 20, fontWeight: 'bold', marginLeft: 10}}>
          Terima kasih!
        </Text>
      </View>
      <View
        style={{
          borderWidth: 0.5,
          borderColor: 'gray',
          padding: 10,
          flexDirection: 'column',
          marginVertical: 10,
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginVertical: 5,
          }}>
          <Text style={{fontWeight: 'bold'}}>Dibayar pakai</Text>
          <Text style={{color: 'gray', marginLeft: 20}}>LinkAja</Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginVertical: 5,
          }}>
          <View style={{width: 50, height: 50, backgroundColor: 'red'}} />
          <Text style={{fontSize: 32, fontWeight: 'bold', marginLeft: 4}}>
            Rp15.000
          </Text>
        </View>
      </View>
      <View
        style={{
          borderWidth: 0.5,
          borderColor: 'gray',
          padding: 10,
          flexDirection: 'column',
          marginVertical: 10,
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginVertical: 5,
          }}>
          <Text style={{color: 'gray'}}>Pendapatan</Text>
          <Text style={{fontWeight: 'bold'}}>Rp12.000</Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginVertical: 5,
          }}>
          <Text style={{color: 'gray'}}>Point</Text>
          <Text style={{fontWeight: 'bold'}}>+1</Text>
        </View>
      </View>
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          marginVertical: 10,
        }}>
        <Text style={{color: 'gray'}}>GR120398109238</Text>
      </View>
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          marginVertical: 10,
        }}>
        <Text style={{fontSize: 20, fontWeight: 'bold'}}>
          Bagaimana customer Anda?
        </Text>
        <View style={{width: '100%', height: 200}} />
      </View>
    </View>
  );
}

export default ModalFeedback;
