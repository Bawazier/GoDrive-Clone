import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Button, Text, Icon} from 'native-base';
import {useNavigation} from '@react-navigation/native';

function BottomTab() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Button
        vertical
        transparent
        onPress={() => navigation.navigate('SearchPlaces')}>
        <Icon
          name="arrow-alt-circle-up"
          type="FontAwesome5"
          style={{fontSize: 32, color: 'green', marginVertical: 4}}
        />
        <Text style={{fontSize: 12}}>GoRide</Text>
      </Button>
      <Button
        transparent
        vertical
        onPress={() => navigation.navigate('NotFound')}>
        <Icon
          name="arrow-alt-circle-up"
          type="FontAwesome5"
          style={{fontSize: 32, color: 'green', marginVertical: 4}}
        />
        <Text style={{fontSize: 12}}>GoCar</Text>
      </Button>
      <Button
        transparent
        vertical
        onPress={() => navigation.navigate('NotFound')}>
        <Icon
          name="arrow-alt-circle-up"
          type="FontAwesome5"
          style={{fontSize: 32, color: 'red', marginVertical: 4}}
        />
        <Text style={{fontSize: 12}}>GoFood</Text>
      </Button>
      <Button
        transparent
        vertical
        onPress={() => navigation.navigate('NotFound')}>
        <Icon
          name="arrow-alt-circle-up"
          type="FontAwesome5"
          style={{fontSize: 32, color: 'red', marginVertical: 4}}
        />
        <Text style={{fontSize: 12}}>GoMart</Text>
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
    paddingHorizontal: 20,
  },
});

export default BottomTab;
