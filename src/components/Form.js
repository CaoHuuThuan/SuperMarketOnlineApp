import React, {useState, Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Image,
  TextInput,
  Touchable,
  TouchableOpacity,
  Button,
  Platform,
  label,
  ToastAndroid,
  AsyncStorage,
} from 'react-native';

const userInfo = {username: 'admin', password: 'pass123456'};

export default class Form1 extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      isNameValid: false,
      password: '',
      isPassValid: false,
    };
  }
  showToast() {
    ToastAndroid.showWithGravity(
      'Not validated',
      ToastAndroid.LONG,
      ToastAndroid.CENTER,
    );
  }
  showToast1() {
    ToastAndroid.showWithGravity(
      'Validated',
      ToastAndroid.LONG,
      ToastAndroid.BOTTOM,
    );
  }
  validate(text, type) {
    alpha = /^[a-zA-Z]+$/;
    num = /^[0-9]+$/;

    if (type == 'username') {
      if (alpha.test(text) && text.trim().length >= 4) {
        this.setState({
          name: text,
          isNameValid: true,
        });
      } else {
        this.setState({
          isNameValid: false,
        });
      }
    } else if (type == 'password') {
      if (text.trim().length >= 8) {
        this.setState({
          password: text,
          isPassValid: true,
        });
      } else {
        this.setState({
          isPassValid: false,
        });
      }
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={[
            styles.inputBox,
            !this.state.isNameValid ? styles.error : null,
          ]}
          placeholder="Your username"
          placeholderTextColor="#ffffff"
          autoCapitalize="none"
          value={this.state.name}
          onChangeText={(text) => {
            this.setState({
              name: text,
            });
            this.validate(text, 'username');
          }}></TextInput>
        {this.state.isNameValid ? null : (
          <Text style={styles.errorMess}>
            UN must be more than 4 char long & alphabet only
          </Text>
        )}
        <TextInput
          style={styles.inputBox}
          placeholder="Your Password"
          value={this.state.password}
          style={[
            styles.inputBox,
            !this.state.isPassValid ? styles.error : null,
          ]}
          onChangeText={(text) => {
            this.setState({
              password: text,
            });
            this.validate(text, 'password');
          }}
          secureTextEntry={true}
          placeholderTextColor="#ffffff"></TextInput>
        {this.state.isPassValid ? null : (
          <Text style={styles.errorMess}>PW must be more then 8 char long</Text>
        )}
        <TouchableOpacity style={styles.button} onPress={this._login}>
          <Text style={styles.buttonText}> Sign in </Text>
        </TouchableOpacity>
      </View>
    );
  }
  _login = async () => {
    if (
      userInfo.username == this.state.name &&
      userInfo.password == this.state.password &&
      this.state.isNameValid &&
      this.state.isPassValid
    ) {
      // alert('Logged in');
      // await AsyncStorage.setItem('isLoggedIn', '1');
      this.props.navigation.push('Profile');
    } else {
      alert('Incorrect');
    }
  };
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#455a64',
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: {
    color: 'white',
    fontSize: 18,
    fontWeight: '400',
  },
  mini_container: {
    backgroundColor: '#455a64',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputBox: {
    width: 300,
    backgroundColor: 'grey',
    borderRadius: 25,
    paddingHorizontal: 16,
    marginVertical: 10,
    fontSize: 18,
    color: '#ffffff',
  },
  errorMess: {
    color: 'red',
    fontSize: 15,
    fontWeight: '200',
  },
  picker_component: {
    width: 300,
    height: 50,
    backgroundColor: 'grey',
    paddingHorizontal: 16,
    marginVertical: 10,
    fontSize: 18,
    color: '#ffffff',
  },
  button_datetime: {
    width: 300,
    backgroundColor: 'grey',
    borderRadius: 25,
    marginVertical: 10,
    paddingVertical: 13,
  },
  form_button: {
    width: 300,
    backgroundColor: '#1c313a',
    borderRadius: 25,
    marginVertical: 10,
    paddingVertical: 13,
  },
  dob: {
    width: 300,
    backgroundColor: 'grey',
    marginVertical: 10,
    paddingVertical: 13,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: '700',
    color: 'white',
    textAlign: 'center',
  },
  dateComponent: {
    width: 300,
    fontSize: 100,
    backgroundColor: 'white',
    borderColor: 'yellow',
  },
  error: {
    borderWidth: 3,
    borderColor: 'red',
  },
});
