import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import LoginScreen from '../screens/auth/LoginScreen';
import SignupScreen from '../screens/auth/SignupScreen';
import ForgetPasswordScreen from '../screens/auth/ForgetPasswordScreen';
// import profile from '../screens/auth/profile';
// import todo from '../screens/auth/todo';
// import taskDetail from '../screens/auth/taskDetail';
import { Button } from 'react-native';
import * as React from 'react';
import * as firebase from 'firebase';

const screens = {
  SignupScreen: {
    screen: SignupScreen
  },
  LoginScreen: {
    screen: LoginScreen,
    navigationOptions: {
      headerStyle: {
        backgroundColor: 'skyblue'
      }
      // navigationOptions: ({ navigation }) => {
      //   return {
      //     headerRight: () => (
      //       <Button
      //         onPress={() => {
      //           navigation.replace('SignupScreen');
      //         }}
      //         title='test'
      //         color='#00cc00'
      //       />
      //     )
      //   };
      // }
      // headerRight: () =>
      //   <Button
      //     onPress={() => {
      //       navigation.replace('SignupScreen');
      //     }}
      //     title='test'
      //     color='#00cc00'
      //   />
    }
  },

  ForgetPasswordScreen: {
    screen: ForgetPasswordScreen,
    navigationOptions: {
      title: '----------------------forgetPassword----------------------',
      headerStyle: { backgroundColor: 'red' }
    }
  }
  // profile: {
  //   screen: profile,
  //   navigationOptions: {
  //     headerStyle: { backgroundColor: 'skyblue' },
  //     headerRight: () => (
  //       <Button
  //         onPress={() => {
  //           firebase.auth().signOut();
  //           // navigation.replace('SignupScreen');
  //           console.log('LoggedOut');
  //         }}
  //         title='signout'
  //         color='#00cc00'
  //       />
  //     )
  //   }
  // },
  // todo: {
  //   screen: todo
  //   // navigationOptions: {
  //   //   headerStyle: { backgroundColor: 'skyblue' }
  //   // }
  // },
  // taskDetail: {
  //   screen: taskDetail
  // }
};

const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);
