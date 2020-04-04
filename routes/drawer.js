import { createDrawerNavigator } from 'react-navigation-drawer';
import { createAppContainer } from 'react-navigation';
// import DrawerNavigator from 'react-navigation-drawer/lib/typescript/src/navigators/createDrawerNavigator'
import MainTab from './MainTab';
import houseStack from './houseStack';
import React from 'react';
import {
  Button,
  TouchableOpacity,
  View,
  StyleSheet,
  Text,
  Alert
} from 'react-native';
import * as firebase from 'firebase';
import Icon from 'react-native-vector-icons/Ionicons';

const RootDrawerNavigator = createDrawerNavigator({
  profile: {
    screen: MainTab,

    navigationOptions: {
      drawerLabel: () => (
        <TouchableOpacity
          onPress={() => {
            firebase.auth().signOut();
            // navigation.replace('SignupScreen');
            // Alert.alert('test');
            console.log('LoggedOut');
          }}
        >
          <View style={styles.icon}>
            <Text style={styles.text}> profile</Text>
            <Icon size={30} name='ios-log-out' color='black' />
          </View>
        </TouchableOpacity>
      )
    }
  },
  house: {
    screen: houseStack
  }
});

const styles = StyleSheet.create({
  //     container: {
  //         flex: 1,
  //         backgroundColor: "#fff",
  //         padding: 40,
  //   },

  icon: {
    // flex: 1,
    //   marginTop: 10,
    //   marginBottom: 10,
    //   borderBottomWidth: 1,
    //   borderBottomColor: 'skyblue'
    // padding: 10,
    left: 10
  },
  text: {
    fontWeight: 'bold',
    fontSize: 20
    // right: 200
  }
});

export default createAppContainer(RootDrawerNavigator);
