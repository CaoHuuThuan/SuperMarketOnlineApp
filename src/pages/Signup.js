import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import Logo from '../components/Logo';
import Form1 from '../components/Form1';
const Signup: () => React$Node = () => { 
  return (
    <View style={styles.container}>
      <Logo></Logo>
      <Form1 type="Signup"></Form1>
      <View style={styles.signUpText}>
        <Text style={styles.signUpStyle}>Already have an account?</Text>
        <Text style={styles.signUpButton}> Sign in</Text>
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
export default Signup;
