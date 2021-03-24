import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Button, Text, Icon, Input} from 'native-base';

function FooterDestination({originName, originAddress, onSetOrigin}) {
  return (
    <View style={styles.footerView}>
      <View style={styles.rowBetween}>
        <Text style={styles.title}>Set pickup location</Text>
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
          <Text style={styles.textBoldStyle}>{originName || ''}</Text>
          <Text style={styles.textSecondary}>{originAddress || ''}</Text>
        </View>
      </View>
      <View style={styles.inputView}>
        <Icon name="sticky-note" type="FontAwesome5" style={styles.iconInput} />
        <Input
          placeholder="Add notes for your driver..."
          style={styles.textInput}
        />
      </View>
      <Button full rounded success onPress={onSetOrigin}>
        <Text>Set pickup location</Text>
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
  iconStyle: {fontSize: 38, color: 'green'},
  textBoldStyle: {color: 'black', fontWeight: 'bold'},
  textSecondary: {fontSize: 14, color: 'gray', width: '50%'},
  inputView: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 20,
    borderWidth: 0.5,
    paddingHorizontal: 14,
    marginVertical: 10,
  },
  iconInput: {fontSize: 18, marginHorizontal: 5},
  textInput: {fontSize: 14},
});

export default FooterDestination;
