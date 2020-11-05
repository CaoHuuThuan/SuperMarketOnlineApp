import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Image,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const Logo: () => React$Node = () => {
  return (
    <View style={styles.container}>
      <Image
        style={{width: 80, height: 100}}
        source={require('../images/Foody.png')}></Image>
      <Text style={styles.logoText}>Welcome to Foođi</Text>
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
  logoText: {
    fontSize: 25,
    color: 'white',
  },
});
export default Logo;
