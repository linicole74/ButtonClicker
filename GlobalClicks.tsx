import { useState } from 'react';
import { Alert, Button, StyleSheet, Text, View } from 'react-native';

export default function GlobalClicks({ setScreen }: any) {
  return (
    <View style={styles.container}>
      <Text>TODO: Global Clicks</Text>
      <Text>Take in an array of click data objects and display them each in a different box, with the boxes stacked vertically.</Text>
      <Text>Example click data objects:</Text>
      <Text>&#123;user: username as a string</Text>
      <Text>datetime: some sort of datetime object, convert this to a string</Text>
      <Text>location: coordinates of click, convert this to a string&#125;</Text>
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
