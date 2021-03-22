/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {StyleSheet, View, TouchableOpacity} from 'react-native';
import {Container, Footer, Content, Icon} from 'native-base';
import HeaderEdit from '../components/HeaderEdit';
import FooterCompleted from '../components/FooterCompleted';
import FooterOrder from '../components/FooterOrder';

function ConfirmOrder({navigation}) {
  return (
    <Container style={{backgroundColor: 'green'}}>
      <HeaderEdit />
      <Content />
      <Footer
        style={{
          backgroundColor: 'transparent',
          elevation: 0,
          height: 'auto',
          flexDirection: 'column',
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: 10,
            paddingHorizontal: 10,
          }}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={{
              backgroundColor: 'white',
              width: 50,
              height: 50,
              borderRadius: 50,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Icon
              name="arrow-left"
              type="FontAwesome5"
              style={{fontSize: 18, color: 'black'}}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: 'white',
              width: 50,
              height: 50,
              borderRadius: 50,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Icon
              name="map-pin"
              type="FontAwesome5"
              style={{fontSize: 18, color: 'black'}}
            />
          </TouchableOpacity>
        </View>
        <FooterOrder />
      </Footer>
    </Container>
  );
}

const styles = StyleSheet.create({
  baseText: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default ConfirmOrder;
