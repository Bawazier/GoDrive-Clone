import React from 'react';
import {StyleSheet, View} from 'react-native';
import {
  Container,
  Content,
  H1,
  Header,
  Title,
  Button,
  Icon,
  Left,
  Body,
  Text,
} from 'native-base';
import FormSearch from '../components/FormSearch';
import CardPlace from '../components/CardPlace';

function SearchPlaces({navigation}) {
  return (
    <Container>
      <Header transparent>
        <Left>
          <Button transparent onPress={() => navigation.popToTop()}>
            <Icon name="close" style={{color: 'black'}} />
          </Button>
        </Left>
        <Body>
          <Title style={{color: 'black'}}>Set pickup location</Title>
        </Body>
      </Header>
      <View style={{padding: 18, borderBottomWidth: 0.5}}>
        <FormSearch />
        <Button
          iconLeft
          rounded
          bordered
          dark
          onPress={() => navigation.navigate('SetMapPlaces')}
          style={{height: 'auto', marginVertical: 10}}>
          <Icon
            name="map-marked-alt"
            type="FontAwesome5"
            style={{fontSize: 14}}
          />
          <Text style={{fontSize: 14}}>Select via map</Text>
        </Button>
      </View>
      <Content>
        <CardPlace />
        <CardPlace />
        <CardPlace />
        <CardPlace />
        <CardPlace />
      </Content>
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

export default SearchPlaces;
