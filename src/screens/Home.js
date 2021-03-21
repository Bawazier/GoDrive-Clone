import React from 'react';
import {StyleSheet} from 'react-native';
import {
  Container,
  Content,
  H1,
  Header,
  Text,
  Button,
  Icon,
  Body,
  Badge,
} from 'native-base';
// import BottomSheet from 'reanimated-bottom-sheet';
import BottomTab from '../components/BottomTab';

function Home({navigation}) {
  return (
    <Container>
      <Header noShadow noLeft transparent>
        <Body
          style={{
            justifyContent: 'space-between',
            flexDirection: 'row',
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
      <Content>
        <H1 style={styles.baseText}>Home</H1>
        <BottomTab handleClick={() => navigation.navigate('SearchPlaces')} />
      </Content>
      {/* <BottomSheet
        snapPoints={[450, 300, 0]}
        borderRadius={10}
        renderContent={BottomTab}
      /> */}
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
