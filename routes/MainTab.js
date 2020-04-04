import { createStackNavigator } from 'react-navigation-stack';
// import { createAppContainer } from 'react-navigation';
import profile from '../screens/auth/profile';
import taskDetail from '../screens/auth/taskDetail';
import React from 'react';
import { Button } from 'react-native';
import * as firebase from 'firebase';
import { TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Header from '../shared/header';

const screens = {
  profile: {
    screen: profile,
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
  },
  taskDetail: {
    screen: taskDetail
  }
};

const MainTab = createStackNavigator(screens);

export default MainTab;

// export default createAppContainer(MainTab);
