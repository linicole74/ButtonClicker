import { useState } from 'react';
import { Alert, Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function HomeScreen({ setScreen }: any) {
  const [clickCount, setClickCount] = useState(0);
  const [text, onChangeText] = useState(''); // SOURCE: https://reactnative.dev/docs/textinput

  return (
    <View style={styles.container}>
      <TextInput
        onChangeText={onChangeText}
        value={text}
        placeholder="enter username"
      />
      {text === '' ? '' :
        <View>
          <Text>Clicks: {clickCount}</Text>
          <Button
            onPress={() => {
              Alert.alert("clicked");
              setClickCount(clickCount + 1);
            }}
            title="[ click this button ]"
            color="#841584"
          />
          <Text> </Text><Text> </Text><Text> </Text>
          <Button
            onPress={() => {
              Alert.alert("go to news");
              setScreen(0);
            }}
            title="[ go to news ]"
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
      }
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
