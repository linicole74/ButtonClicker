import { useState } from 'react';
import { Alert, Button, StyleSheet, Text, View } from 'react-native';

export default function GlobalClicks({ setScreen }: any) {
  return (
    <View style={styles.container}>
      <Text>Global Clicks</Text>
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
          Alert.alert("go to news");
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
