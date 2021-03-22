import React, {useMemo, useRef} from 'react';
import {StyleSheet, View} from 'react-native';
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
  // ref
  const bottomSheetRef = useRef(null);

  // variables
  const snapPoints = useMemo(() => ['100%'], []);

  return (
    <Container style={{backgroundColor: '#FFD43B'}}>
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
            <Icon name="home" style={{fontSize: 14}} />
            <Text style={{fontSize: 10}}>Promo</Text>
          </Button>
          <Button iconLeft rounded light style={{height: 'auto', width: '30%'}}>
            <Icon name="home" style={{fontSize: 14}} />
            <Text style={{fontSize: 10}}>Beranda</Text>
          </Button>
          <Button
            iconLeft
            transparent
            light
            style={{height: 'auto', width: '30%'}}>
            <Icon name="home" style={{fontSize: 14}} />
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
