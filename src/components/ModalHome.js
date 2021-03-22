import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Button, Text, Icon, Input} from 'native-base';

function ModalHome() {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: 10,
      }}>
      <View style={styles.inputView}>
        <Icon name="search" type="FontAwesome5" style={styles.iconInput} />
        <Input placeholder="Pesan kopi, yuk?" style={styles.textInput} />
      </View>
      <Icon name="user-circle" type="FontAwesome" style={styles.iconPerson} />
    </View>
  );
}

const styles = StyleSheet.create({
  inputView: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 20,
    borderWidth: 0.5,
    paddingHorizontal: 14,
    marginVertical: 10,
    width: '80%',
  },
  iconInput: {fontSize: 18, marginHorizontal: 5},
  iconPerson: {fontSize: 40, marginHorizontal: 5, color: 'green'},
  textInput: {fontSize: 14},
});

export default ModalHome;
