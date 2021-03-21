import React from 'react';
import {StyleSheet} from 'react-native';
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
} from 'native-base';

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
      <Content>
        <H1 style={styles.baseText}>Header One</H1>
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
