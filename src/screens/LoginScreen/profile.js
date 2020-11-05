import React, {useEffect} from 'react';
import {View, Button, StyleSheet, SafeAreaView, Alert} from 'react-native';
import {
  Avatar,
  Title,
  Caption,
  Text,
  TouchableRipple,
} from 'react-native-paper';
import AsyncStorage from '@react-native-community/async-storage';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import signin from './signin';
const profile = ({navigation}) => {
  const [isloggedin, setLogged] = React.useState(null);
  const [data, setData] = React.useState({
    token: '',
    isToken: false,
  });

  const logout = async () => {
    await AsyncStorage.clear();
    navigation.navigate('Home');
  };
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
      navigation.navigate('Home');
    }
  };
  useEffect(() => {
    detectLogin();
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.userInfoSection}>
        <View style={{flexDirection: 'row', marginTop: 15}}>
          <Avatar.Image
            source={{
              uri: 'https://api.adorable.io/avatars/80/abott@adorable.png',
            }}
            size={80}></Avatar.Image>
          <View style={{marginLeft: 20}}>
            <Title style={(styles.title, {marginTop: 15, marginBottom: 5})}>
              Tran Cong Anh
            </Title>
            <Caption style={styles.caption}>@AnhTran</Caption>
          </View>
        </View>
      </View>
      <View style={styles.userInfoSection}>
        <View style={styles.row}>
          <Icon name="map-marker-radius" color="#777777" size={20}></Icon>
          <Text style={{color: '#777777', marginLeft: 20}}>
            DaNang, VietNam
          </Text>
        </View>
        <View style={styles.row}>
          <Icon name="phone" color="#777777" size={20}></Icon>
          <Text style={{color: '#777777', marginLeft: 20}}>0905.123.456</Text>
        </View>
        <View style={styles.row}>
          <Icon name="email" color="#777777" size={20}></Icon>
          <Text style={{color: '#777777', marginLeft: 20}}>
            anh_tran@gmail.com
          </Text>
        </View>
      </View>

      <View style={styles.infoBoxWrapper}>
        <View
          style={[
            styles.infoBox,
            {borderRightColor: '#dddddd', borderRightWidth: 2},
          ]}>
          <Title>Admin</Title>
          <Caption>Role</Caption>
        </View>
        <View style={styles.infoBox}>
          <Title>25</Title>
          <Caption>Vouchers</Caption>
        </View>
      </View>

      <View style={styles.menuWrapper}>
        <TouchableRipple
          onPress={() => {
            alert('You chose favorite');
          }}>
          <View style={styles.menuItem}>
            <Icon name="heart-outline" color="red" size={25}></Icon>
            <Text style={styles.menuItemText}>Your favorites</Text>
          </View>
        </TouchableRipple>
        <TouchableRipple
          onPress={() => {
            navigation.navigate('EditProfile');
          }}>
          <View style={styles.menuItem}>
            <Icon name="account-edit" color="red" size={25}></Icon>
            <Text style={styles.menuItemText}>Edit your profile</Text>
          </View>
        </TouchableRipple>
        <TouchableRipple
          onPress={() => {
            alert('Navigate sang change pass');
            navigation.navigate('ChangePassword');
          }}>
          <View style={styles.menuItem}>
            <Icon name="lock-outline" color="red" size={25}></Icon>
            <Text style={styles.menuItemText}>Change password</Text>
          </View>
        </TouchableRipple>
        <TouchableRipple
          onPress={() => {
            alert('You chose Support');
          }}>
          <View style={styles.menuItem}>
            <Icon name="account-check-outline" color="red" size={25}></Icon>
            <Text style={styles.menuItemText}>Support</Text>
          </View>
        </TouchableRipple>
        <TouchableRipple onPress={() => logout()}>
          <View style={styles.menuItem}>
            <Icon name="exit-to-app" color="red" size={25}></Icon>
            <Text style={styles.menuItemText}>Log out</Text>
          </View>
        </TouchableRipple>
      </View>
    </SafeAreaView>
  );
};
export default profile;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10,
  },
  userInfoSection: {
    paddingHorizontal: 30,
    marginBottom: 25,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
    fontWeight: '500',
  },
  row: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  infoBoxWrapper: {
    borderBottomColor: '#dddddd',
    borderBottomWidth: 1,
    borderTopColor: '#dddddd',
    borderTopWidth: 1,
    flexDirection: 'row',
    height: 80,
  },
  infoBox: {
    width: '50%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  menuWrapper: {
    marginTop: 10,
  },
  menuItem: {
    flexDirection: 'row',
    paddingVertical: 15,
    paddingHorizontal: 30,
  },
  menuItemText: {
    color: '#777777',
    marginLeft: 20,
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 26,
  },
});
