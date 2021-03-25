import React from 'react';
import {Image, View, TouchableOpacity} from 'react-native';
import {Icon, Text, Button, Badge} from 'native-base';

function FooterCompleted({handleFinish}) {
  return (
    <View
      style={{
        backgroundColor: '#5cb85c',
        flexDirection: 'column',
        alignItems: 'center',
        borderTopStartRadius: 20,
        borderTopEndRadius: 20,
      }}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'flex-start',
          padding: 4,
        }}>
        <Icon
          name="star"
          type="FontAwesome"
          style={{fontSize: 27, color: 'black'}}
        />
        <Text style={{color: 'white', marginHorizontal: 8}}>
          Driver akan sampai dalam
        </Text>
        <Badge>
          <Text style={{fontSize: 11}}>11 mnt</Text>
        </Badge>
      </View>
      <View
        style={{
          flexDirection: 'column',
          width: '100%',
          padding: 18,
          backgroundColor: 'white',
          borderTopStartRadius: 20,
          borderTopEndRadius: 20,
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: 10,
          }}>
          <View
            style={{
              flexDirection: 'column',
              justifyContent: 'space-between',
              width: '80%',
              height: 80,
            }}>
            <Text style={{fontWeight: 'bold'}}>R6508HP</Text>
            <View
              style={{
                borderBottomColor: 'black',
                borderBottomWidth: 1,
                borderStyle: 'dashed',
                width: '100%',
              }}
            />
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginVertical: 10,
              }}>
              <Text style={{color: 'gray', marginRight: 10}}>Samikin</Text>
              <Badge>
                <Text style={{fontSize: 11}}>Driver Unggulan</Text>
              </Badge>
            </View>
          </View>
          <Image
            style={{
              width: 50,
              height: 50,
              borderRadius: 20,
            }}
            source={require('../assets/goride_person.png')}
          />
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <TouchableOpacity
            style={{
              backgroundColor: '#5cb85c',
              width: 50,
              height: 50,
              borderRadius: 50,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Icon
              name="phone-alt"
              type="FontAwesome5"
              style={{fontSize: 18, color: 'white'}}
            />
          </TouchableOpacity>
          <Button
            block
            rounded
            success
            onPress={handleFinish}
            style={{width: '80%'}}>
            <Text>Perjalanan Selesai</Text>
          </Button>
        </View>
      </View>
    </View>
  );
}

export default FooterCompleted;
