/* eslint-disable react-native/no-inline-styles */
import React, {useCallback, useMemo, useRef} from 'react';
import {StyleSheet, View, TouchableOpacity} from 'react-native';
import {Container, Footer, Content, Icon} from 'native-base';
import HeaderEdit from '../components/HeaderEdit';
import BottomSheet from '@gorhom/bottom-sheet';
import FooterCompleted from '../components/FooterCompleted';
import FooterOrder from '../components/FooterOrder';
import CardTransport from '../components/CardTransport';

function ConfirmOrder({navigation}) {
  // ref
  const bottomSheetRef = useRef(null);

  // variables
  const snapPoints = useMemo(() => ['50%'], []);

  // callbacks
  const handleSheetChanges = useCallback(index => {
    console.log('handleSheetChanges', index);
  }, []);

  return (
    <Container style={{backgroundColor: 'green'}}>
      <HeaderEdit />
      <Content />
      <View style={{flex: 3}}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: 10,
            paddingHorizontal: 10,
            flex: 1,
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
        <BottomSheet
          ref={bottomSheetRef}
          index={0}
          snapPoints={snapPoints}
          onChange={handleSheetChanges}>
          <View style={{flexDirection: 'column'}}>
            <CardTransport />
            <CardTransport />
          </View>
        </BottomSheet>
      </View>
      <Footer
        style={{
          backgroundColor: 'transparent',
          elevation: 0,
          height: 'auto',
          flexDirection: 'column',
        }}>
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
