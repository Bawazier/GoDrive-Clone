/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Image} from 'react-native';
import {Icon, Text} from 'native-base';
import StarFeedback from './StarFeedback';
import {useNavigation} from '@react-navigation/native';

function ModalFeedback({product, sourceFund, price, tax, point, code}) {
  const navigation = useNavigation();
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
        <View
          style={{
            width: 'auto',
            height: 'auto',
            padding: 8,
            borderRadius: 10,
            backgroundColor: 'orange',
          }}>
          <Icon
            name={product === 'GoRide' ? 'biking' : 'car-side'}
            type="FontAwesome5"
            style={{fontSize: 62, color: 'white'}}
          />
        </View>
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
          <Text style={{color: 'gray', marginLeft: 20}}>{sourceFund}</Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginVertical: 5,
          }}>
          <Image
            style={{width: 50, height: 50, backgroundColor: 'red'}}
            source={require('../assets/goride_sourceFund.png')}
          />
          <Text style={{fontSize: 32, fontWeight: 'bold', marginLeft: 4}}>
            Rp{price}
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
          <Text style={{fontWeight: 'bold'}}>Rp{price - tax}</Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginVertical: 5,
          }}>
          <Text style={{color: 'gray'}}>Point</Text>
          <Text style={{fontWeight: 'bold'}}>+{point}</Text>
        </View>
      </View>
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          marginVertical: 10,
        }}>
        <Text style={{color: 'gray'}}>{code}</Text>
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
        <StarFeedback handlePressStar={() => navigation.popToTop()} />
      </View>
    </View>
  );
}

export default ModalFeedback;
