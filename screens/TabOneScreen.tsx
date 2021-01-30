import * as React from 'react';
import { ImageBackground, StyleSheet } from 'react-native';

import { Text, View } from '../components/Themed';

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../assets/images/bg.jpg')}
        style={{ flex: 1, width: '100%' }}
        resizeMode="cover">
        <Text>asas </Text>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
