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
} from 'react-native';
import {Picker} from '@react-native-community/picker';
import DateTimePicker from '@react-native-community/datetimepicker';
export default class Form1 extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      isNameValid: true,
      password: '',
      isPassValid: true,
      city: 'Da Nang',
      isCityValid: true,
      phonenum: '',
      isPhoneValid: true,
      date: new Date(1598051730000),
      mode: 'date',
      show: false,
      isDateValid: false,
    };
  }
  onChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    this.setState({
      show: Platform.OS === 'ios',
      date: currentDate,
      isDateValid: true,
    });
  };
  showMode = (currentMode) => {
    this.setState({
      show: true,
      mode: currentMode,
    });
  };
  showDatepicker = () => {
    this.showMode('date');
  };
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
    } else if (type == 'phonenum') {
      if (num.test(text) && text.trim().length == 10) {
        this.setState({
          phonenum: text,
          isPhoneValid: true,
        });
      } else {
        this.setState({
          isPhoneValid: false,
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
    } else if (type == 'city') {
      this.setState({
        city: text,
      });
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.mini_container}>
          <Text style={styles.label}>Username</Text>
          <TextInput
            style={[
              styles.inputBox,
              !this.state.isNameValid ? styles.error : null,
            ]}
            placeholder="Your username"
            placeholderTextColor="#ffffff"
            onChangeText={(text) =>
              this.validate(text, 'username')
            }></TextInput>
          {this.state.isNameValid ? null : (
            <Text style={styles.errorMess}>
              UN must be more than 4 char long & alphabet only
            </Text>
          )}
        </View>
        <View style={styles.mini_container}>
          <Text style={styles.label}>Phone number</Text>
          <TextInput
            style={styles.inputBox}
            placeholder="Your Phone number"
            style={[
              styles.inputBox,
              !this.state.isPhoneValid ? styles.error : null,
            ]}
            onChangeText={(text) => this.validate(text, 'phonenum')}
            placeholderTextColor="#ffffff"></TextInput>
          {this.state.isPhoneValid ? null : (
            <Text style={styles.errorMess}>
              PN only accept numbers & length = 10
            </Text>
          )}
        </View>

        <View style={styles.mini_container}>
          <Text style={styles.label}>Your city</Text>
          <Picker
            style={styles.picker_component}
            selectedValue={this.state.city}
            onValueChange={(itemValue, itemIndex) =>
              this.validate(itemValue, 'city')
            }>
            <Picker.Item label="Da Nang" value="Da Nang"></Picker.Item>
            <Picker.Item label="Sai Gon" value="Sai Gon"></Picker.Item>
            <Picker.Item label="Ha Noi" value="Ha Noi"></Picker.Item>
            <Picker.Item
              label="Thua Thien Hue"
              value="Thua Thien Hue"></Picker.Item>
            <Picker.Item label="Hoi An" value="Hoi An"></Picker.Item>
          </Picker>
        </View>
        <View style={styles.mini_container}>
          <Text style={styles.label}>Your password</Text>
          <TextInput
            style={styles.inputBox}
            placeholder="Your Password"
            style={[
              styles.inputBox,
              !this.state.isPassValid ? styles.error : null,
            ]}
            onChangeText={(text) => this.validate(text, 'password')}
            secureTextEntry={true}
            placeholderTextColor="#ffffff"></TextInput>
          {this.state.isPassValid ? null : (
            <Text style={styles.errorMess}>
              PW must be more then 8 char long
            </Text>
          )}
          <View style={styles.mini_container}>
            <Text style={styles.label}>Your birthday</Text>
            <TouchableOpacity
              style={styles.dob}
              onPress={() => this.showDatepicker()}>
              <Text style={styles.buttonText}>Select DOB here</Text>
            </TouchableOpacity>
          </View>
          {this.state.show && (
            <DateTimePicker
              testID="dateTimePicker"
              value={this.state.date}
              mode={this.state.mode}
              //To do this, fix date
              // timeZoneOffsetInSeconds={50000}
              is24Hour={true}
              display="spinner"
              onChange={(event, selectedDate) =>
                this.onChange(event, selectedDate)
              }></DateTimePicker>
          )}
        </View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => console.log(this.state.date)}>
          <Text style={styles.buttonText}>Sign up</Text>
        </TouchableOpacity>
      </View>
    );
  }
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
  button: {
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
