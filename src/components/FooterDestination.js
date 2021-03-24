import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Button, Text, Icon} from 'native-base';

function FooterDestination({
  destinationName,
  destinationAddress,
  onSetDestination,
}) {
  return (
    <View style={styles.footerView}>
      <View style={styles.rowBetween}>
        <Text style={styles.title}>Set destination location</Text>
        <Button small rounded bordered success>
          <Text>Edit</Text>
        </Button>
      </View>
      <View style={styles.rowBetween}>
        <View style={styles.iconView}>
          <Icon
            name="map-marker-alt"
            type="FontAwesome5"
            style={styles.iconStyle}
          />
        </View>
        <View>
          <Text style={styles.textBoldStyle}>{destinationName || ''}</Text>
          <Text style={styles.textSecondary}>{destinationAddress || ''}</Text>
        </View>
      </View>
      <Button full rounded success onPress={onSetDestination}>
        <Text>Set destination location</Text>
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
    borderTopStartRadius: 20,
    borderTopEndRadius: 20,
  },
  rowBetween: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  title: {fontSize: 18, fontWeight: 'bold'},
  iconView: {alignItems: 'flex-start', marginRight: 20},
  iconStyle: {fontSize: 38, color: 'orange'},
  textBoldStyle: {color: 'black', fontWeight: 'bold'},
  textSecondary: {fontSize: 14, color: 'gray', width: '50%'},
});

export default FooterDestination;
