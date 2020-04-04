import React, { useState, useLayoutEffect, useEffect } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Button,
  TextInput,
  Alert,
  TouchableWithoutFeedback,
  Keyboard,
  ActivityIndicator
} from 'react-native';
// import Icon from 'react-native-vector-icons/Ionicons';
import * as firebase from 'firebase';

export default function LoginScreen({ navigation }) {
  // useLayoutEffect(() => {
  //   navigation.setOptions({
  //     headerRight: () => (
  //       <Button onPress={() => console.log('test')} title='test' />
  //     )
  //   });
  // }, [navigation]);

  const pres = () => {
    navigation.replace('SignupScreen');
  };
  const [mail, setmail] = useState('');
  const [pass, setpass] = useState('');
  // --------------------------------------ex-------------------------
  const [loading, setloading] = useState(false);
  // ---------------------------------------ex-------------------------

  const changeEmail = val => {
    setmail(val);
  };
  const changePassword = val => {
    setpass(val);
  };
  const submit = () => {
    if (mail == '' || pass == '') {
      Alert.alert('Error', 'enter your email and password');
    } else {
      login(mail, pass);
    }
  };

  async function login() {
    try {
      setloading(() => {
        return true;
      });
      await firebase.auth().signInWithEmailAndPassword(mail, pass);
      // navigation.replace('profile', { mail: mail });
      setmail('');
      setpass('');
      console.log('LoggedIn!');
    } catch (error) {
      Alert.alert('error', 'wrong Email or password');
      setLoading(() => {
        return false;
      });
    }
  }

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
        console.log('dismissed Keyboard');
      }}
    >
      <View>
        {loading ? (
          <View style={styles.load}>
            <ActivityIndicator size='large' color='#0000ff' />
          </View>
        ) : (
          <View>
            <TextInput
              style={styles.input}
              placeholder=' email@gmail.com'
              onChangeText={changeEmail}
              value={mail}
            />
            <TextInput
              style={styles.input}
              autoCapitalize='none'
              placeholder=' enter  password'
              secureTextEntry={true}
              onChangeText={changePassword}
              value={pass}
            />

            <View style={{ padding: 30, marginTop: 30 }}>
              <Button title='LOGIN' onPress={submit} />
            </View>
            <View style={{ padding: 20, marginTop: 80 }}>
              <Button title='signup Screen' onPress={pres} />
            </View>
          </View>
        )}

        {/* <View style={styles.nav}>
        <Button color='red' onPress={pres} title='FORGET PASSWORD' />
      </View> */}
      </View>
    </TouchableWithoutFeedback>
    // <View>
    //   <Text>Login Screen</Text>
    // </View>
  );
}
const styles = StyleSheet.create({
  //     container: {
  //         flex: 1,
  //         backgroundColor: "#fff",
  //         padding: 40,
  //   },

  input: {
    // flex: 1,
    marginTop: 10,
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'skyblue'
  },
  load: {
    // flex: 1,
    // backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 250
  }
});
