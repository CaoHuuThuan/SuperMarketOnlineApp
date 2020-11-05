import React, {useEffect} from 'react';

import {SafeAreaView, View} from 'react-native';
import {Block} from '../../components';
import SearchBar from './SearchBar';
import TopCategories from './TopCategories';
import PopularItems from './PopularItems';
import NearByDeals from './NearByDeals';
import FreeShip from './Freeship';
import {ScrollView} from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-community/async-storage';

const HomeScreen = ({navigation}) => {
   const detectLogin = async () => {
    const test = await AsyncStorage.getItem('token');
    console.log('From Profile');
    console.log(test);
    if (test !== null) {
      console.log(test);
      console.log('Profile co token');
      console.log(test);
    } else {
      console.log('Profile null token');
      alert('Please log in to continue');
      navigation.navigate('SignInScreen');
    }
  };
  useEffect(() => {
    detectLogin();
  }, []);
  return (
    <ScrollView>
      <Block block color="#F8F6F6" padding={10}>
        <SearchBar />
        <TopCategories />
        <Block height={1} color="#EFEEEE" />
        <PopularItems />
        <Block height={1} color="#EFEEEE" />
        <FreeShip />
        <Block height={1} color="#EFEEEE" />
        <NearByDeals />
      </Block>
    </ScrollView>
  );
};

export default HomeScreen;
