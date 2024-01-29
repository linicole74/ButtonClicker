import { useEffect, useState } from 'react';
import { Alert, Button, ScrollView, StyleSheet, Text, View, Image } from 'react-native';

export default function Gif({ setScreen }: any) {
  return (
    <View style={styles.container}>
      <Text>Here's a clicker-related gif</Text>
      <Image source = {require('./assets/giphy.gif')}/>
      <Button
        onPress={() => {
          setScreen(1);
        }}
        title="[ go to home screen ]"
        color="#841584"
      />
      <Button
        onPress={() => {
          setScreen(2);
        }}
        title="[ go to other users' clicks ]"
        color="#841584"
      />
      <Button
        onPress={() => {
          setScreen(0);
        }}
        title="[ go to news ]"
        color="#841584"
       />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
