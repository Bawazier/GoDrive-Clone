import React from 'react';
import {StyleSheet, View, Image} from 'react-native';
import {Button, Text, Icon} from 'native-base';

function FooterOrder({handleOrder, price}) {
  return (
    <View style={styles.footerView}>
      <View style={styles.rowBetween}>
        <View style={styles.rowBetween}>
          <Image
            style={{
              width: 20,
              height: 20,
              backgroundColor: 'red',
              marginRight: 10,
            }}
            source={require('../assets/goride_sourceFund.png')}
          />
          <Text style={styles.title}>LinkAja</Text>
        </View>
        <Icon name="ellipsis-h" type="FontAwesome5" style={styles.iconStyle} />
      </View>
      <Button
        full
        rounded
        success
        disabled={!price}
        onPress={handleOrder}
        style={{justifyContent: 'space-between', padding: 0}}>
        <Text>Order GoRide</Text>
        <Text>{price && 'Rp' + price}</Text>
        <Icon
          name="arrow-alt-circle-right"
          type="FontAwesome5"
          style={{color: 'white'}}
        />
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  footerView: {
    flexDirection: 'column',
    width: '100%',
    padding: 18,
    elevation: 8,
    backgroundColor: 'white',
  },
  rowBetween: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  title: {fontSize: 14, fontWeight: 'bold'},
  iconView: {alignItems: 'flex-start', marginRight: 20},
  iconStyle: {fontSize: 20, color: 'orange'},
  textBoldStyle: {color: 'black', fontWeight: 'bold'},
  textSecondary: {fontSize: 14, color: 'gray', width: '50%'},
});

export default FooterOrder;
