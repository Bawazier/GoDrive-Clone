import React, {useMemo, useRef, useEffect} from 'react';
import {StyleSheet, PermissionsAndroid} from 'react-native';
import {
  Container,
  Content,
  Header,
  Footer,
  Text,
  Button,
  Icon,
  Body,
} from 'native-base';
import BottomSheet from '@gorhom/bottom-sheet';
import BottomTab from '../components/BottomTab';
import ModalHome from '../components/ModalHome';

function Home({navigation}) {
  const permission = () => {
    PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_COARSE_LOCATION,
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
    );
  };

  useEffect(() => {
    permission();
  }, []);

  // ref
  const bottomSheetRef = useRef(null);

  // variables
  const snapPoints = useMemo(() => ['100%'], []);

  return (
    <Container style={{backgroundColor: '#9ed112'}}>
      <Header noShadow noLeft transparent style={{height: 'auto'}}>
        <Body
          style={{
            justifyContent: 'space-between',
            flexDirection: 'row',
            marginVertical: 20,
          }}>
          <Button
            iconLeft
            transparent
            light
            style={{height: 'auto', width: '30%'}}>
            <Icon
              name="percentage"
              type="FontAwesome5"
              style={{fontSize: 14}}
            />
            <Text style={{fontSize: 10}}>Promo</Text>
          </Button>
          <Button
            iconLeft
            rounded
            light
            style={{height: 'auto', width: '30%', backgroundColor: '#9ed112'}}>
            <Icon
              name="home"
              type="AntDesign"
              style={{fontSize: 14, color: 'white'}}
            />
            <Text style={{fontSize: 10, color: 'white'}}>Beranda</Text>
          </Button>
          <Button
            iconLeft
            transparent
            light
            style={{height: 'auto', width: '30%'}}>
            <Icon
              name="comment-alt"
              type="FontAwesome5"
              style={{fontSize: 14}}
            />
            <Text style={{fontSize: 10}}>Chat</Text>
          </Button>
        </Body>
      </Header>
      <Content />
      <BottomSheet
        ref={bottomSheetRef}
        index={0}
        snapPoints={snapPoints}
        topInset={100}
        style="AnimatedStyle">
        <ModalHome />
      </BottomSheet>
      <Footer
        style={{
          height: 'auto',
          marginHorizontal: 10,
          marginVertical: 20,
          paddingHorizontal: 20,
          backgroundColor: 'white',
          borderRadius: 50,
          elevation: 10,
        }}>
        <BottomTab />
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

export default Home;
