import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Button,
  TextInput,
  Alert,
  TouchableWithoutFeedback,
  Keyboard
} from 'react-native';
import * as firebase from 'firebase';

export default function ForgetPasswordScreen({ navigation }) {
  //------------------------------------------------------------------
  const press = () => {
    navigation.replace('SignupScreen');
  };
  const [mail, setmail] = useState('');

  const changeEmail = val => {
    setmail(val);
  };

  async function forgetpass() {
    try {
      await firebase.auth().sendPasswordResetEmail(mail);

      Alert.alert('password has been send');
      console.log('password has been send');
    } catch (error) {
      Alert.alert('error', 'wrong Email');
    }
  }
  //--------------------------------------------------------------------------------------
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
        console.log('dismissed Keyboard');
      }}
    >
      <View>
        <TextInput
          style={styles.input}
          placeholder=' email@gmail.com'
          onChangeText={changeEmail}
        />

        <View style={{ padding: 20, marginTop: 25 }}>
          <Button title='SEND RESET EMAIL' onPress={forgetpass} />
        </View>

        <View style={{ padding: 20, marginTop: 80 }}>
          <Button title='signup Screen' onPress={press} />
        </View>
      </View>
    </TouchableWithoutFeedback>
    // <View>
    //   <Text>ForgetPassword Screen</Text>
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
    marginTop: 20,
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'skyblue'
  }
});
