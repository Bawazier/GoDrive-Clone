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
          style={{fontSize: 27, color: 'green'}}
        />
        <Text>GoRide</Text>
      </Button>
      <Button
        transparent
        vertical
        onPress={() => navigation.navigate('NotFound')}>
        <Icon
          name="arrow-alt-circle-up"
          type="FontAwesome5"
          style={{fontSize: 27, color: 'green'}}
        />
        <Text>GoCar</Text>
      </Button>
      <Button
        transparent
        vertical
        onPress={() => navigation.navigate('NotFound')}>
        <Icon
          name="arrow-alt-circle-up"
          type="FontAwesome5"
          style={{fontSize: 27, color: 'red'}}
        />
        <Text>GoFood</Text>
      </Button>
      <Button
        transparent
        vertical
        onPress={() => navigation.navigate('NotFound')}>
        <Icon
          name="arrow-alt-circle-up"
          type="FontAwesome5"
          style={{fontSize: 27, color: 'red'}}
        />
        <Text>GoMart</Text>
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default BottomTab;
