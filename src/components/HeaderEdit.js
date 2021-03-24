import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Header, Icon, Text, Button} from 'native-base';

function HeaderEdit({originName, destinationName}) {
  return (
    <Header noShadow style={{backgroundColor: 'transparent', height: 'auto'}}>
      <View
        style={{
          backgroundColor: 'transparent',
          width: '100%',
          paddingTop: 50,
        }}>
        <View
          style={{
            height: 100,
            borderRadius: 20,
            backgroundColor: 'white',
            padding: 10,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <View
            style={{
              flexDirection: 'column',
              width: '70%',
              height: 60,
              justifyContent: 'space-between',
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Icon
                name="arrow-alt-circle-up"
                type="FontAwesome5"
                style={{fontSize: 24, color: 'green', marginRight: 10}}
              />
              <Text>{originName || 'Unnamed Road'}</Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <View
                style={{
                  borderBottomColor: 'black',
                  borderBottomWidth: 0.5,
                  width: '80%',
                  marginLeft: 34,
                }}
              />
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Icon
                name="arrow-alt-circle-up"
                type="FontAwesome5"
                style={{fontSize: 24, color: 'orange', marginRight: 10}}
              />
              <Text>{destinationName || 'Unnamed Road'}</Text>
            </View>
          </View>
          <Button bordered rounded success>
            <Text>Edit</Text>
          </Button>
        </View>
      </View>
    </Header>
  );
}

export default HeaderEdit;
