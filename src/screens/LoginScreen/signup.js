import React from 'react';
import {
  View,
  Text,
  Button,
  TouchableOpacity,
  Dimensions,
  TextInput,
  Platform,
  StyleSheet,
  ScrollView,
  StatusBar,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import {Picker} from '@react-native-community/picker';
import DateTimePicker from '@react-native-community/datetimepicker';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import DatePicker from 'react-native-datepicker';
{
  console.ignoredYellowBox = ['Warning: Each', 'Warning: Failed'];
}
const signup = ({navigation}) => {
  const [data, setData] = React.useState({
    username: '',
    email: '',
    phonenumber: '',
    password: '',
    confirm_password: '',
    check_textInputChange: false,
    check_textInputChange_email: false,
    check_textInputChange_phonenumber: false,
    secureTextEntry: true,
    confirm_secureTextEntry: true,
    isValidUser: true,
    isValidEmail: true,
    isValidPhoneNumber: true,
    isValidPassword: true,
    isValidConfirmPassword: true,
  });
  const handleEmailChange = (val) => {
    emailRegex = /\S+@\S+\.\S+/;
    if (emailRegex.test(val)) {
      setData({
        ...data,
        email: val,
        check_textInputChange_email: true,
        isValidEmail: true,
      });
    } else {
      setData({
        ...data,
        email: val,
        check_textInputChange_email: false,
        isValidEmail: false,
      });
    }
  };
  const textInputChange = (val) => {
    if (val.trim().length >= 4) {
      setData({
        ...data,
        username: val,
        check_textInputChange: true,
        isValidUser: true,
      });
    } else {
      setData({
        ...data,
        username: val,
        check_textInputChange: false,
        isValidUser: false,
      });
    }
  };

  const handlePasswordChange = (val) => {
    if (val.trim().length >= 8) {
      setData({
        ...data,
        password: val,
        isValidPassword: true,
      });
    } else {
      setData({
        ...data,
        password: val,
        isValidPassword: false,
      });
    }
  };
  const handlePhoneNumberChange = (val) => {
    if (val.trim().length === 10) {
      setData({
        ...data,
        phonenumber: val,
        check_textInputChange_phonenumber: true,
        isValidPhoneNumber: true,
      });
    } else {
      setData({
        ...data,
        phonenumber: val,
        check_textInputChange_phonenumber: false,
        isValidPhoneNumber: false,
      });
    }
  };
  const handleConfirmPasswordChange = (val) => {
    if (val.trim().length >= 8 && val === data.password) {
      setData({
        ...data,
        confirm_password: val,
        isValidConfirmPassword: true,
      });
    } else {
      setData({
        ...data,
        confirm_password: val,
        isValidConfirmPassword: false,
      });
    }
  };

  const updateSecureTextEntry = () => {
    setData({
      ...data,
      secureTextEntry: !data.secureTextEntry,
    });
  };

  const updateConfirmSecureTextEntry = () => {
    setData({
      ...data,
      confirm_secureTextEntry: !data.confirm_secureTextEntry,
    });
  };
  const handleRegister = async () => {
    console.log('----------------- Mot Phien Dang Ky ---------------------');
    console.log(
      data.username,
      data.phonenumber,
      data.password,
      data.confirm_password,
    );
    fetch('https://evening-wildwood-46158.herokuapp.com/auth/register', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: data.username,
        phone: data.phonenumber,
        password: data.password,
        email: data.email,
      }),
    })
      .then((response) => response.json())
      .then(async (responseJson) => {
        console.log(responseJson);
        if (responseJson.statusCode === 500) {
          alert('Account username already in DB');
        } else {
          alert('Succeed');
          navigation.navigate('SignInScreen');
        }
      });
  };
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#FF6347" barStyle="light-content" />
      <View style={styles.header}>
        <Text style={styles.text_header}>Register Now!</Text>
      </View>
      <Animatable.View animation="fadeInUpBig" style={styles.footer}>
        <ScrollView>
          <Text style={styles.text_footer}>Username</Text>
          <View style={styles.action}>
            <FontAwesome name="user-o" color="#05375a" size={20} />
            <TextInput
              placeholder="Your Username"
              style={styles.textInput}
              autoCapitalize="none"
              onChangeText={(val) => textInputChange(val)}
            />
            {data.check_textInputChange ? (
              <Animatable.View animation="bounceIn">
                <Feather name="check-circle" color="green" size={20} />
              </Animatable.View>
            ) : null}
          </View>
          {data.isValidUser ? null : (
            <Animatable.View animation="fadeInLeft" duration={500}>
              <Text style={styles.errorMsg}>
                Username must be 4 characters long.
              </Text>
            </Animatable.View>
          )}
          <Text style={styles.text_footer}>Phone Number</Text>
          <View style={styles.action}>
            <Feather name="phone" size={20}></Feather>
            <TextInput
              placeholder="Your PhoneNumber"
              keyboardType="number-pad"
              style={styles.textInput}
              autoCapitalize="none"
              onChangeText={(val) => handlePhoneNumberChange(val)}
              autoCorrect={false}></TextInput>
            {data.check_textInputChange_phonenumber ? (
              <Animatable.View animation="bounceIn">
                <Feather name="check-circle" color="green" size={20} />
              </Animatable.View>
            ) : null}
          </View>
          {data.isValidPhoneNumber ? null : (
            <Animatable.View animation="fadeInLeft" duration={500}>
              <Text style={styles.errorMsg}>
                Phone number must be 10 numbers
              </Text>
            </Animatable.View>
          )}
          <Text
            style={[
              styles.text_footer,
              {
                marginTop: 2,
              },
            ]}>
            Password
          </Text>
          <View style={styles.action}>
            <Feather name="lock" color="#05375a" size={20} />
            <TextInput
              placeholder="Your Password"
              secureTextEntry={data.secureTextEntry ? true : false}
              style={styles.textInput}
              autoCapitalize="none"
              onChangeText={(val) => handlePasswordChange(val)}
            />
            <TouchableOpacity onPress={updateSecureTextEntry}>
              {data.secureTextEntry ? (
                <Feather name="eye-off" color="grey" size={20} />
              ) : (
                <Feather name="eye" color="grey" size={20} />
              )}
            </TouchableOpacity>
          </View>
          {data.isValidPassword ? null : (
            <Animatable.View animation="fadeInLeft" duration={500}>
              <Text style={styles.errorMsg}>
                Password must be 8 characters long.
              </Text>
            </Animatable.View>
          )}
          <Text
            style={[
              styles.text_footer,
              {
                marginTop: 2,
              },
            ]}>
            Confirm Password
          </Text>
          <View style={styles.action}>
            <Feather name="lock" color="#05375a" size={20} />
            <TextInput
              placeholder="Confirm Your Password"
              secureTextEntry={data.confirm_secureTextEntry ? true : false}
              style={styles.textInput}
              autoCapitalize="none"
              onChangeText={(val) => handleConfirmPasswordChange(val)}
            />
            <TouchableOpacity onPress={updateConfirmSecureTextEntry}>
              {data.secureTextEntry ? (
                <Feather name="eye-off" color="grey" size={20} />
              ) : (
                <Feather name="eye" color="grey" size={20} />
              )}
            </TouchableOpacity>
          </View>
          {data.isValidConfirmPassword ? null : (
            <Animatable.View animation="fadeInLeft" duration={500}>
              <Text style={styles.errorMsg}>
                Confirm password must be the same as password
              </Text>
            </Animatable.View>
          )}
          <View style={styles.button}>
            <TouchableOpacity
              style={styles.signIn}
              onPress={() => {
                if (
                  data.username.length === 0 ||
                  data.password.length === 0 ||
                  data.phonenumber.length === 0 ||
                  data.isValidPhoneNumber === false ||
                  data.isValidUser === false ||
                  data.isValidPassword === false ||
                  data.isValidConfirmPassword === false
                ) {
                  alert('Info is not valid');
                } else {
                  handleRegister();
                }
              }}>
              <LinearGradient
                colors={['#FFA07A', '#FF6347']}
                style={styles.signIn}>
                <Text
                  style={[
                    styles.textSign,
                    {
                      color: '#fff',
                    },
                  ]}>
                  Sign Up
                </Text>
              </LinearGradient>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => navigation.navigate('SignInScreen')}
              style={[
                styles.signIn,
                {
                  borderColor: '#FF6347',
                  borderWidth: 1,
                  marginTop: 15,
                },
              ]}>
              <Text
                style={[
                  styles.textSign,
                  {
                    color: '#FF6347',
                  },
                ]}>
                Sign In
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </Animatable.View>
    </View>
  );
};
export default signup;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FF6347',
  },
  header: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingHorizontal: 20,
    paddingBottom: 50,
  },
  footer: {
    flex: Platform.OS === 'ios' ? 3 : 5,
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  text_header: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 30,
  },
  text_footer: {
    color: '#05375a',
    fontSize: 18,
  },
  action: {
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2',
    paddingBottom: 5,
  },
  textInput: {
    flex: 1,
    marginTop: Platform.OS === 'ios' ? 0 : -12,
    paddingLeft: 10,
    color: '#05375a',
  },
  pickerComponent: {
    flex: 1,
    marginTop: Platform.OS === 'ios' ? 0 : -12,
    paddingLeft: 10,
    color: '#05375a',
  },
  button: {
    alignItems: 'center',
    marginTop: 15,
  },
  signIn: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  textSign: {
    paddingTop: 10,
    fontSize: 18,
    fontWeight: '200',
  },
  textPrivate: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 20,
  },
  color_textPrivate: {
    color: 'grey',
  },
  errorMsg: {
    color: '#FF0000',
    fontSize: 14,
  },
});
