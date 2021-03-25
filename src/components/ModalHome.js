import React from 'react';
import {StyleSheet, View, Image} from 'react-native';
import {Text, Icon, Input, Badge} from 'native-base';

function ModalHome() {
  return (
    <View style={{marginHorizontal: 15}}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: 20,
        }}>
        <View style={styles.inputView}>
          <Icon name="search" type="FontAwesome5" style={styles.iconInput} />
          <Input placeholder="Pesan kopi, yuk?" style={styles.textInput} />
        </View>
        <Icon name="user-circle" type="FontAwesome" style={styles.iconPerson} />
      </View>
      <Image
        style={{
          width: '100%',
          height: 100,
          borderRadius: 20,
          marginBottom: 10,
        }}
        source={require('../assets/gopay_promo.png')}
      />
      <View style={{marginBottom: 20}}>
        <Text style={{fontSize: 24, fontWeight: 'bold'}}>Konten buat kamu</Text>
        <View style={{flexDirection: 'row'}}>
          <Badge success style={{marginRight: 10}}>
            <Text>Apa aja</Text>
          </Badge>
          <Badge style={{marginRight: 10}}>
            <Text>COVID-19</Text>
          </Badge>
          <Badge style={{marginRight: 10}}>
            <Text>Donasi</Text>
          </Badge>
        </View>
      </View>
      <View style={{marginBottom: 20}}>
        <Text style={{fontSize: 18, fontWeight: 'bold'}}>
          Psst... Keamanan kamu, prioritas kami.
        </Text>
        <Text style={{fontSize: 14}}>
          Deretan Rekan Usaha GoPay dengan protokol kebersihan buat belanja
          bulanan hingga beli vitamin harian!
        </Text>
      </View>
      <Image
        style={{width: '100%', height: 150}}
        source={require('../assets/gopay_promo.png')}
      />
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
