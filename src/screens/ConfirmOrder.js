/* eslint-disable react-native/no-inline-styles */
import React, {useCallback, useMemo, useRef} from 'react';
import {StyleSheet, View, TouchableOpacity} from 'react-native';
import {Container, Footer, Content, Icon, Text} from 'native-base';
import HeaderEdit from '../components/HeaderEdit';
import BottomSheet, {
  BottomSheetModal,
  BottomSheetModalProvider,
} from '@gorhom/bottom-sheet';
import FooterCompleted from '../components/FooterCompleted';
import FooterOrder from '../components/FooterOrder';
import CardTransport from '../components/CardTransport';
import ModalFeedback from '../components/ModalFeedback';

function ConfirmOrder({navigation}) {
  // ref
  const bottomSheetRef = useRef(null);
  const bottomSheetModalRef = useRef(null);

  // variables
  const snapPoints = useMemo(() => ['40%'], []);
  const snapSheetModalPoints = useMemo(() => ['100%'], []);

  // callbacks
  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);
  const handleSheetChanges = useCallback(index => {
    console.log('handleSheetChanges', index);
  }, []);

  return (
    <BottomSheetModalProvider>
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
          {/* <FooterOrder /> */}
          <FooterCompleted handleFinish={handlePresentModalPress} />
        </Footer>
      </Container>
      <BottomSheetModal
        ref={bottomSheetModalRef}
        index={0}
        topInset={40}
        snapPoints={snapSheetModalPoints}
        onChange={handlePresentModalPress}>
        <ModalFeedback />
      </BottomSheetModal>
    </BottomSheetModalProvider>
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
