import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  Button,
  CheckBox,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default function TodoItem({
  item,
  press,
  navigation,
  pres,
  updata,
  pressHandler1,
}) {
  //   const presshand = () => {
  //     navigation.navigate('TaskDetail', item);
  //     // navigation.goBack();
  //     // navigation.pop();
  //   };

  return (
    <TouchableOpacity onPress={() => pressHandler1(item, updata)}>
      <View style={styles.item}>
        <TouchableOpacity onPress={() => pres(item.id)}>
          <Icon name='ios-trash' size={30} color={'red'} />
        </TouchableOpacity>
        <View>
          <Text style={item.isDone ? styles.t : styles.f}>{item.title}</Text>
        </View>
        <CheckBox value={item.isDone} onChange={() => press(item.id)} />
      </View>
    </TouchableOpacity>
    // <TouchableOpacity onPress={() => press(item.id)}>
    //   <Text style={item.isDone ? styles.itemf : styles.item}>
    //     {item.title /*item.text */}
    //   </Text>

    //   <Button title='task detail' onPress={presshand} />
    //   {/* <TaskDetail submit={submit} /> */}

    //   <View
    //     style={{
    //       flex: 1,
    //       alignItems: 'center',
    //       justifyContent: 'center',
    //       paddingBottom: 20
    //     }}
    //   >
    //     <Text>clickhere to del</Text>
    //     <Button
    //       title='delete'
    //       onPress={
    //         () =>
    //           pres(
    //             item.id
    //           ) /*todo => todo.id != id /*() => navigation.navigate('TaskDetail')*/
    //       }
    //     />
    //   </View>
    // </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  //   item: {
  //     padding: 16,
  //     marginTop: 16,
  //     borderColor: 'skyblue',
  //     borderWidth: 1,
  //     borderStyle: 'dashed',
  //     textAlign: 'center',
  //     fontSize: 20
  //   },
  //   itemf: {
  //     padding: 16,
  //     marginTop: 16,
  //     borderColor: 'skyblue',
  //     borderWidth: 1,
  //     borderStyle: 'dashed',
  //     textAlign: 'center',
  //     fontSize: 20,
  //     textDecorationLine: 'line-through'
  //   },
  //   ch: {}
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
  c: {
    marginLeft: 20,
  },
  t: {
    marginLeft: 50,
    textDecorationLine: 'line-through',
    flexShrink: 1,
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  f: {
    marginLeft: 50,
    textDecorationLine: 'none',
    flexShrink: 1,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
});
