import React from 'react';
import { View, Text, Button, StyleSheet, Image } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../App';

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

export default function HomeScreen({ navigation }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome to RecapApp!</Text>
      <Image
        source={{ uri: 'https://i.pinimg.com/736x/ad/bc/d3/adbcd38a89875bf6af0046969a56e76c.jpg' }}
        style={styles.image}
      />
      <Button title="Go to Profile" onPress={() => navigation.navigate('Profile')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ecb4cbff',
  },
  text: {
    fontSize: 22,
    marginBottom: 20,
    fontWeight: 'bold',
    color: '#952854ff',
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
});
