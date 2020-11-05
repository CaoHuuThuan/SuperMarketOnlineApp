import React from 'react';
import { View, Text, TouchableOpacity} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

const SearchScreen = ({navigation}) => {
  const logout = async () => {
    await AsyncStorage.clear();
    navigation.navigate('SignInScreen');
  };
  return (
    <View>
         <TouchableOpacity onPress={() => logout()}>
            <Text>Log out</Text>
        </TouchableOpacity>
    </View>
  );
};

export default SearchScreen;
