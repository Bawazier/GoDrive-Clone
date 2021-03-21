import React from 'react';
import {StyleSheet} from 'react-native';
import {Container, Content, H1} from 'native-base';

function ConfirmOrder() {
  return (
    <Container style={styles.baseText}>
      <Content>
        <H1>Order GoRide</H1>
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

export default ConfirmOrder;
