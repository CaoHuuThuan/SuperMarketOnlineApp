import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
} from 'react-native';


import Logo from '../components/Logo';
import Form from '../components/Form';


import { ScreenContainer } from 'react-native-screens';
import { NavigationHelpersContext } from '@react-navigation/native';

export const Login = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Logo></Logo>
      <Form type="Login"></Form>
      <View style={styles.signUpText}>
        <Text style={styles.signUpStyle}>Don't have an account yet? </Text>
        <Button 
        title = "Sign up here"
        onPress = {() => alert("Yo")  }></Button>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#455a64',
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  signUpText: {
    flexGrow: 1,
    alignItems: 'flex-end',
    justifyContent: 'center',
    paddingVertical: 16,
    flexDirection: 'row',
  },
  signUpStyle: {
    color: '#cfd8dc',
    fontSize: 16,
  },
  signUpButton: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '800',
  },
});
