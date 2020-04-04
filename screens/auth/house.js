// import React from 'react';
// import { StyleSheet, View, Text } from 'react-native';

// export default function house() {
//   return (
//     <View>
//       <Text>house Screen</Text>
//     </View>
//   );
// }
import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, Image } from 'react-native';
import * as firebase from 'firebase';

export default function profile({ navigation }) {
  async function press() {
    try {
      await firebase.auth().signOut();

      // navigation.replace('SignupScreen');
      console.log('LoggedOut');
    } catch (error) {
      console.log('error');
    }
  }
  var user = firebase.auth().currentUser;
  // const press = () => {
  //   // firebase.auth().signOut();
  //   navigation.navigate('SignupScreen');
  //   console.log('logout');
  // };

  return (
    <View>
      <View /*{ padding: 20, margin: 40 }*/>
        <Text style={styles.container}> welcome</Text>
        <Image style={styles.image} source={require('../../photo/omar.jpg')} />
      </View>
      {/* <Text> {navigation.getParam('mail')} </Text> */}
      <Text>{user.email}</Text>
      <View style={{ padding: 20, marginTop: 20 }}>
        <Button title={'log out'} onPress={press} />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    // flex: 1,
    padding: 20,
    margin: 40,
    fontSize: 50,
    color: 'skyblue'
    // backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center'
  },
  image: {
    height: 290,
    width: 190
  }
});
