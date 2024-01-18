import { useState } from 'react';
import { Alert, Button, StyleSheet, Text, View } from 'react-native';

export default function News({ setScreen }: any) {
  return (
    <View style={styles.container}>
      <Text>TODO: News</Text>
      <Text>Take in an array of strings and display them each in a different box, with the text aligned left.</Text>
      <Text> </Text><Text> </Text><Text> </Text>
      <Button
        onPress={() => {
          Alert.alert("go to home screen");
          setScreen(1);
        }}
        title="[ go to home screen ]"
        color="#841584"
      />
      <Button
        onPress={() => {
          Alert.alert("go to other users' clicks");
          setScreen(2);
        }}
        title="[ go to other users' clicks ]"
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
