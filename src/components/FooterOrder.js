import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Button, Text, Icon} from 'native-base';

function FooterOrder() {
  return (
    <View style={styles.footerView}>
      <View style={styles.rowBetween}>
        <View style={styles.rowBetween}>
          <View
            style={{
              width: 20,
              height: 20,
              backgroundColor: 'red',
              marginRight: 10,
            }}
          />
          <Text style={styles.title}>LinkAja</Text>
        </View>
        <Icon name="ellipsis-h" type="FontAwesome5" style={styles.iconStyle} />
      </View>
      {/* <View style={styles.rowBetween}>
        <View style={styles.iconView}>
          <Icon
            name="map-marker-alt"
            type="FontAwesome5"
            style={styles.iconStyle}
          />
        </View>
        <View>
          <Text style={styles.textBoldStyle}>Polsek Cerme</Text>
          <Text style={styles.textSecondary}>
            Jl. Cerme Kidul, Cerme Kidul, Gresik, Kabupaten, Gresik, Jawa Timur
            61171, Indonesia
          </Text>
        </View>
      </View> */}
      <Button
        full
        rounded
        success
        style={{justifyContent: 'space-between', padding: 0}}>
        <Text>Order GoRide</Text>
        <Text>Rp18.000</Text>
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  footerView: {
    flexDirection: 'column',
    width: '100%',
    padding: 18,
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
