// import React, { useState } from 'react';
// import { View, Text, Button, StyleSheet } from 'react-native';
// import * as firebase from 'firebase';

// export default function profile({ navigation }) {
//   async function press() {
//     try {
//       await firebase.auth().signOut();

//       // navigation.replace('SignupScreen');
//       console.log('LoggedOut');
//     } catch (error) {
//       console.log('error');
//     }
//   }
//   var user = firebase.auth().currentUser;
//   // const press = () => {
//   //   // firebase.auth().signOut();
//   //   navigation.navigate('SignupScreen');
//   //   console.log('logout');
//   // };

//   return (
//     <View>
//       <View /*{ padding: 20, margin: 40 }*/>
//         <Text style={styles.container}> welcome</Text>
//       </View>
//       {/* <Text> {navigation.getParam('mail')} </Text> */}
//       <Text>{user.email}</Text>
//       {/* <View style={{ padding: 20, marginTop: 20 }}>
//         <Button title={'log out'} onPress={press} />
//       </View> */}
//     </View>
//   );
// }
// const styles = StyleSheet.create({
//   container: {
//     // flex: 1,
//     padding: 20,
//     margin: 40,
//     fontSize: 50,
//     color: 'skyblue'
//     // backgroundColor: '#fff',
//     // alignItems: 'center',
//     // justifyContent: 'center'
//   }
// });
import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Button,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  FlatList,
  CheckBox,
  Alert,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import AddTodo from '../../components/Addtodo';
// import TodoItem from '../../components/todoitem';
import * as firebase from 'firebase';
// -----------------------------------------firebas firestore------------------------
import 'firebase/firestore';
import { decode, encode } from 'base-64';
// import admin from 'firebase-admin';
// -----------------------------------------firebase firestore------------------------

export default function todo({ navigation }) {
  //   const presomar = () => {
  //     navigation.replace('SignupScreen');
  //   };
  // React.useLayoutEffect(() => {
  //   navigation.setOptions({
  //     headerRight: () => (
  //       <Button onPress={() => } title="Update count" />
  //     ),
  //   });
  // }, [navigation]);
  // --------------------------------------------------------------------------firebasefirestore------------
  if (!global.btoa) {
    global.btoa = encode;
  }
  if (!global.atob) {
    global.atob = decode;
  }
  const [userId] = useState(firebase.auth().currentUser.uid);
  var db = firebase.firestore();
  useEffect(() => {
    Refresh();
  }, []);
  // --------------------------------------------------------------------------firebasefirestore------------

  const [data, setTodos] = useState([
    // { title: 'cs101', id: 0, isDone: false },
    // { title: 'cs201', id: 1, isDone: false },
    // { title: 'cs202', id: 2, isDone: false },
    // { title: 'cs303', id: 3, isDone: false },
    // { title: 'cs305', id: 4, isDone: false },
  ]);
  var user = firebase.auth().currentUser;
  // useEffect(() => {
  //   fetch('https://jsonplaceholder.typicode.com/todos?userId=1')
  //     .then((response) => response.json())
  //     .then((response) => {
  //       setTodos(response), setLoading(false);
  //     })
  //     .catch((e) => {
  //       console.error(e);
  //     });
  // }, []);
  // -------------------------------------
  // const admin = require('firebase-admin');

  // admin.initializeApp({
  //   credential: admin.credential.applicationDefault(),
  // });
  const [loading, setLoading] = useState(true); // false لما اجرب
  // ---------------------------------------------------firebase firestore---------------------

  // ---------------------------------------------------firebase firestore---------------------

  const update = (id, title) => {
    // ----------------------------------------------------firebase firestore----------------------
    var todoItem = db.collection('items').where('id', '==', id);
    todoItem
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          doc.ref.update({ title: title });
          console.log('Document successfully updated!');
        });
      })
      .catch(function (error) {
        console.error('Error updated document: ', error);
      });
    setTodos((prevTodos) => {
      return [
        ...prevTodos.filter((todo) => {
          if ((todo.id != id) == false) {
            todo.title = title;
          }
          return true;
        }),
      ];
    });
    navigation.replace('profile');
    // --------------------------------------------firebase firestore-----------------------
    // setTodos((prevTodos) => {
    //   return prevTodos.filter((todo) => {
    //     if ((title.id != id) == false) {
    //       todo.title = title;
    //     }
    //     return true;
    //   });
    // });
    // // navigation.replace('profile');
  };

  const press = (id) => {
    setTodos((prevTodos) => {
      return prevTodos.filter(
        (todo) => {
          if ((todo.id != id) == false) {
            todo.isDone = !todo.isDone;
          }
          return true;
        } /*todo => todo.id != id*/
      );
    });
  };
  const pres = (id) => {
    var todoItem = db.collection('items').where('id', '==', id);
    todoItem
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          doc.ref.delete();
          console.log('Document successfully deleted!');
        });
      })
      .catch(function (error) {
        console.error('Error removing document: ', error);
      });
    setTodos((prevTodos) => {
      return [...prevTodos.filter((todo) => todo.id != id)];
    });
    // ------------------------firebase firestore-----------------------------------------
    // setTodos((prevTodos) => {
    //   return prevTodos.filter((todo) => todo.id != id);
    // });
    // -----------------------firebase firestore--------------------------------------------
  };

  const submit = (title) => {
    if (title.length > 3) {
      // ----------------------------------firebase firestore--------------------------
      const todo = {
        title: title,
        userId: userId,
        id: Math.random().toString(),
        isDone: false,
        // data: Date.now().toString(),
      };
      db.collection('items')
        .add(todo)
        .then(function (docRef) {
          console.log('Document written eith ID: ', docRef.id);
        })
        .catch(function (error) {
          console.error('Error adding doucument', error);
        });
      todo.id = Math.random().toString();
      setTodos((prevTodos) => {
        return [todo, ...prevTodos];
      });
      // ----------------------------------firebase firestore--------------------------
      // setTodos((prevTodos) => {
      //   return [{ title: title, id: Math.random().toString() }, ...prevTodos];
      // });
    } else {
      Alert.alert('oops!', 'Todos must be over 3 chars long');
    }
  };

  //   -------------------------------------firebase------
  // async function presomar() {
  //   try {
  //     await firebase.auth().signOut();

  //     // navigation.replace('SignupScreen');
  //     console.log('LoggedOut');
  //   } catch (error) {
  //     console.log('error');
  //   }
  // }
  // -----------------------------------------------------
  // const Refresh = () => {
  //   Alert.alert('test');
  // };
  const Refresh = async () => {
    // --------------------------------firebase firestore----------------------------------------
    setLoading(true);
    db.collection('items')
      .where('userId', '==', userId)
      .get()
      .then((querySnapshot) => {
        setLoading(false);
        setTodos([]);
        querySnapshot.forEach((doc) => {
          console.log(doc.data());
          setTodos((prevTodos) => {
            return [doc.data(), ...prevTodos];
          });
        });
      })
      .catch((error) => console.log(error));
    // ---------------------------------------------------------firebase firestore-------------
    // setLoading(!loading);
    // return fetch('https://jsonplaceholder.typicode.com/todos?userId=1')
    //   .then((response) => response.json())
    //   .then((response) => {
    //     setTodos(response), setLoading(false);
    //   })
    //   .catch((e) => {
    //     console.error(e);
    //   });
  };
  const pressHandler = (item) => {
    navigation.replace('taskDetail', { item, update });
  };
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
        console.log('dismissed Keyboard');
      }}
    >
      <View style={styles.container}>
        {/* <Header /> */}
        <Text style={{ color: '#015163', left: 20, fontSize: 20 }}>
          welcome
        </Text>
        <View style={styles.content}>
          <Text style={{ right: 55, paddingTop: 0 }}>{user.email}</Text>
          <TouchableOpacity onPress={Refresh}>
            <View style={styles.refrsh}>
              <Icon name='ios-refresh' size={40} />
            </View>
          </TouchableOpacity>
          {/* <ScrollView> */}
          <AddTodo submit={submit} />

          <View style={styles.list}>
            {loading ? (
              <View style={styles.load}>
                <ActivityIndicator size='large' color='#0000ff' />
              </View>
            ) : (
              <FlatList
                data={data}
                renderItem={({ item }) => (
                  // <TodoItem
                  //   item={item}
                  //   press={press}
                  //   pres={pres}
                  //   update={update}
                  //   pressHandler={pressHandler}
                  //   navigation={navigation}
                  // />

                  <View style={styles.item}>
                    <TouchableOpacity
                      onPress={() => pres(item.id)}
                      style={{ flexDirection: 'row' }}
                    >
                      <Icon name='ios-trash' size={30} color={'red'} />
                    </TouchableOpacity>
                    <TouchableOpacity
                      onPress={() =>
                        navigation.replace('taskDetail', { item, update })
                      }
                      style={{
                        flexDirection: 'row',
                        flex: 1,
                      }}
                    >
                      <Text style={item.isDone ? styles.true : styles.false}>
                        {item.title}
                      </Text>
                    </TouchableOpacity>
                    <CheckBox
                      value={item.isDone}
                      onChange={() => press(item.id)}
                    />
                  </View>
                )}
              />
            )}
          </View>
          {/* </ScrollView> */}
        </View>
        {/* <View style={{ marginTop: 500 }}>
          <Button title='refresh' onPress={Refresh} />
        </View> */}
        {/* <TouchableOpacity onPress={presomar}>
          <View style={{ alignItems: 'center', padding: 20 }}>
            <Icon size={30} name='ios-log-out' color='skyblue' />
          </View>
        </TouchableOpacity> */}
      </View>
      {/* <View style={{ padding: 20, marginTop: 170, flexShrink: 1 }}>
          <Button title='Refresh' color='coral' />
        </View> */}
    </TouchableWithoutFeedback>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 0,
    // backgroundColor: '#E7F8FC',
    justifyContent: 'center',
    paddingBottom: 10,
  },
  content: {
    padding: 62,
    paddingTop: 10, //40
  },
  list: {
    marginTop: 2,
  },
  item: {
    padding: 25,
    marginTop: 14,
    borderColor: 'black',
    borderWidth: 1,
    borderStyle: 'solid',
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },

  true: {
    marginLeft: 50,
    textDecorationLine: 'line-through',
    flexShrink: 1,
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  false: {
    marginLeft: 50,

    flexShrink: 1,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
  refrsh: {
    alignItems: 'center',

    bottom: 15,
  },
  load: {
    // flex: 1,
    // backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 250,
  },
});
