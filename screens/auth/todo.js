// import React, { useState } from 'react';
// import {
//   StyleSheet,
//   View,
//   Text,
//   Button,
//   TouchableOpacity,
//   TouchableWithoutFeedback,
//   Keyboard,
//   FlatList,
//   CheckBox,
//   Alert
// } from 'react-native';
// import Icon from 'react-native-vector-icons/Ionicons';
// import AddTodo from '../../components/Addtodo';
// import * as firebase from 'firebase';

// export default function todo({ navigation }) {
// //   const presomar = () => {
// //     navigation.replace('SignupScreen');
// //   };
//   const [data, setTodos] = useState([
//     { text: 'cs101', id: 0, isDone: false },
//     { text: 'cs201', id: 1, isDone: false },
//     { text: 'cs202', id: 2, isDone: false },
//     { text: 'cs303', id: 3, isDone: false },
//     { text: 'cs305', id: 4, isDone: false }
//   ]);

//   const update = (id, text) => {
//     setTodos(prevTodos => {
//       return prevTodos.filter(todo => {
//         if ((todo.id != id) == false) {
//           todo.text = text;
//         }
//         return true;
//       });
//     });
//   };

//   const press = id => {
//     setTodos(prevTodos => {
//       return prevTodos.filter(
//         todo => {
//           if ((todo.id != id) == false) {
//             todo.isDone = !todo.isDone;
//           }
//           return true;
//         } /*todo => todo.id != id*/
//       );
//     });
//   };
//   const pres = id => {
//     setTodos(prevTodos => {
//       return prevTodos.filter(todo => todo.id != id);
//     });
//   };

//   const submit = text => {
//     if (text.length > 3) {
//       setTodos(prevTodos => {
//         return [{ text: text, id: Math.random().toString() }, ...prevTodos];
//       });
//     } else {
//       Alert.alert('oops!', 'Todos must be over 3 chars long');
//     }
//   };

// //   -------------------------------------firebase------
// async function presomar() {
//     try {
//       await firebase.auth().signOut();

//       navigation.replace('SignupScreen');
//       console.log('LoggedOut');
//     } catch (error) {
//       console.log('error');
//     }
//   }
// // -----------------------------------------------------
//   return (
//     <TouchableWithoutFeedback
//       onPress={() => {
//         Keyboard.dismiss();
//         console.log('dismissed Keyboard');
//       }}
//     >
//       <View style={styles.container}>
//         {/* <Header /> */}

//         <View style={styles.content}>
//           <AddTodo submit={submit} />

//           <View style={styles.list}>
//             <FlatList
//               data={data}
//               renderItem={({ item }) => (
//                 /*<TodoItem item={item} press={press} />*/
//                 <View style={styles.item}>
//                   <TouchableOpacity
//                     onPress={() => pres(item.id)}
//                     style={{ flexDirection: 'row' }}
//                   >
//                     <Icon name='ios-trash' size={30} color={'red'} />
//                   </TouchableOpacity>
//                   <TouchableOpacity
//                     onPress={() =>
//                       navigation.replace('taskDetail', { item, update })
//                     }
//                     style={{
//                       flexDirection: 'row',
//                       flex: 1
//                     }}
//                   >
//                     <Text style={item.isDone ? styles.t : styles.f}>
//                       {item.text}
//                     </Text>
//                   </TouchableOpacity>
//                   <CheckBox
//                     style={styles.c}
//                     value={item.isDone}
//                     onChange={() => press(item.id)}
//                   />
//                 </View>
//               )}
//             />
//           </View>
//         </View>

//         <TouchableOpacity onPress={presomar}>
//           <View style={{ alignItems: 'center', padding: 20 }}>
//             <Icon size={30} name='ios-home' color='skyblue' />
//           </View>
//         </TouchableOpacity>
//       </View>
//     </TouchableWithoutFeedback>
//   );
// }
// const styles = StyleSheet.create({
//   // container: {
//   //   flex: 1,
//   //   backgroundColor: '#fff',
//   //   justifyContent: 'center'
//   // },
//   content: {
//     padding: 40
//   },
//   list: {
//     marginTop: 20
//   },
//   item: {
//     padding: 16,
//     marginTop: 16,
//     borderColor: 'black',
//     borderWidth: 1,
//     borderStyle: 'solid',
//     borderRadius: 10,
//     flexDirection: 'row',
//     justifyContent: 'center',
//     alignItems: 'center'
//   },
//   c: {
//     marginLeft: 20
//   },
//   t: {
//     marginLeft: 10,
//     textDecorationLine: 'line-through',
//     flexShrink: 1,

//     justifyContent: 'center',
//     alignItems: 'center'
//   },
//   f: {
//     marginLeft: 10,
//     textDecorationLine: 'none',
//     flexShrink: 1,
//     justifyContent: 'center',
//     alignItems: 'center'
//   }
// });
