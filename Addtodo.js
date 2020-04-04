import React, { useState } from 'react';
import { StyleSheet, TextInput, Button, View } from 'react-native';

export default function AddTodo({ submit }) {
  const [title, setText] = useState('');
  const change = val => {
    setText(val);
  };

  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder='Add new todo ~.~.~.~.~'
        onChangeText={val => change(val)}
      />
      <Button onPress={() => submit(title)} title='add todo ' color='skyblue' />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    marginTop: 0,
    marginBottom: 2,
    paddingHorizontal: 8,
    paddingVertical: 1,
    borderBottomWidth: 1,
    borderBottomColor: 'black'
  }
});
