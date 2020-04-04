import { createStackNavigator } from 'react-navigation-stack';
// import { createAppContainer } from 'react-navigation';
import house from '../screens/auth/house';
import Header from '../shared/header';
import React from 'react';
// import profile from '../screens/auth/profile';
// import taskDetail from '../screens/auth/taskDetail';
// import * as React from 'react';
import { Button, TouchableOpacity, View } from 'react-native';
import * as firebase from 'firebase';
// import { TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
const screens = {
  //   profile: {
  //     screen: profile,
  //     navigationOptions: {
  //       headerStyle: { backgroundColor: 'skyblue' },
  //       headerRight: () => (
  //         // <Button
  //         //   onPress={() => {
  //         //     firebase.auth().signOut();
  //         //     // navigation.replace('SignupScreen');
  //         //     console.log('LoggedOut');
  //         //   }}
  //         //   title='signout'
  //         //   color='#00cc00'
  //         // />
  //         <TouchableOpacity
  //           onPress={() => {
  //             firebase.auth().signOut();
  //             // navigation.replace('SignupScreen');
  //             console.log('LoggedOut');
  //           }}
  //         >
  //           <View style={{ alignItems: 'center', padding: 20 }}>
  //             <Icon size={30} name='ios-log-out' color='black' />
  //           </View>
  //         </TouchableOpacity>
  //       )
  //     }
  //   },
  house: {
    screen: house,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: () => <Header navigation={navigation} />,
        headerStyle: { backgroundColor: 'skyblue' },
        headerRight: () => (
          // <Button
          //   onPress={() => {
          //     firebase.auth().signOut();
          //     // navigation.replace('SignupScreen');
          //     console.log('LoggedOut');
          //   }}
          //   title='signout'
          //   color='#00cc00'
          // />
          <TouchableOpacity
            onPress={() => {
              firebase.auth().signOut();
              // navigation.replace('SignupScreen');
              console.log('LoggedOut');
            }}
          >
            <View style={{ alignItems: 'center', padding: 20 }}>
              <Icon size={30} name='ios-log-out' color='black' />
            </View>
          </TouchableOpacity>
        )
      };
    }
  }
};

const houseStack = createStackNavigator(screens);

export default houseStack;

// export default createAppContainer(MainTab);
