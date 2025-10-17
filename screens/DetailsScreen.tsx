import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../App';

type Props = NativeStackScreenProps<RootStackParamList, 'Profile'>;

export default function ProfileScreen({ navigation }: Props) {
  const [name, setName] = useState('');
  const [color, setColor] = useState('blue');

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Your Profile</Text>

      <TextInput
        placeholder="Enter your name"
        value={name}
        onChangeText={setName}
        style={styles.input}
      />

      <Text style={styles.label}>Choose your favorite color:</Text>
      <Picker
        selectedValue={color}
        onValueChange={(itemValue) => setColor(itemValue)}
        style={styles.picker}
      >
        <Picker.Item label="Red" value="red" />
        <Picker.Item label="Orange" value="orange" />
        <Picker.Item label="Yellow" value="yellow" />
        <Picker.Item label="Green" value="green" />
        <Picker.Item label="Blue" value="blue" />
        <Picker.Item label="Purple" value="purple" />
        <Picker.Item label="Pink" value="pink" />
      </Picker>

      {name ? (
        <Text style={styles.message}>
          Hello, {name}! Your favorite color is {color}.
        </Text>
      ) : (
        <Text style={styles.message}>Please enter your name above.</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ecb4cbff',
    padding: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#952854ff',
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    marginVertical: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#952854ff',
    padding: 10,
    width: '80%',
    borderRadius: 8,
    marginBottom: 15,
  },
  picker: {
    width: 200,
    marginBottom: 20,
  },
  message: {
    fontSize: 18,
    color: '#952854ff',
    marginTop: 10,
  },
});
