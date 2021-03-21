import React from 'react';
import {StyleSheet} from 'react-native';
import {Container, Content, H1} from 'native-base';

function SetMapPlaces() {
  return (
    <Container>
      <Content style={styles.baseText}>
        <H1>Maps</H1>
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

export default SetMapPlaces;
