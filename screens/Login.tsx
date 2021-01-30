import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ImageBackground,
  Dimensions,
  TextInput,
} from 'react-native';

const { width, height } = Dimensions.get('screen');

const Login = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../assets/images/bg.jpg')}
        style={styles.imgBg}
        blurRadius={10}>
        <View style={styles.containerLoginView}>
          <View style={styles.containerForm}>
            <Text style={styles.textTilte}>Login</Text>
            <TextInput />
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imgBg: {
    flex: 1,
    zIndex: 1,
    padding: 0,
  },
  containerLoginView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerForm: {
    width: width * 0.9,
    height: height * 0.8,
    alignItems: 'center',
    paddingVertical: 20,
  },
  textTilte: {
    fontSize: 20,
    color: 'white',
  },
});
