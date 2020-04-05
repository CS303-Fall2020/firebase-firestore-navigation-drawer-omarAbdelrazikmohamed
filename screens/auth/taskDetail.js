import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  Button,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default function taskDetail({ navigation }) {
  const presomar = () => {
    navigation.replace('profile');
  };

  const [title, setTitle] = useState(navigation.getParam('item').title);

  const changeTitle = (val) => {
    setTitle(val);
  };
  const h = navigation.getParam('update');
  return (
    // <View style={styles.container}>
    <View>
      <TextInput
        style={styles.input}
        // placeholder = 'new todo ....'
        value={title == '' ? navigation.getParam('item').title : title}
        onChangeText={(title) => changeTitle(title)}
        multiline={true}
      />
      <Button
        title='done'
        color='skyblue'
        onPress={() => {
          h(navigation.getParam('item').id, title);
          // navigation.replace('profile');
        }}
      />
      {/* <View style={{padding:20 , marginTop:90}}>
            <Button />
        </View> */}
      <TouchableOpacity onPress={presomar}>
        <View style={{ alignItems: 'center', padding: 20 }}>
          <Icon size={30} name='ios-arrow-back' color='skyblue' />
        </View>
      </TouchableOpacity>
    </View>
    // </View>
  );
}

const styles = StyleSheet.create({
  input: {
    marginBottom: 10,
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
});
