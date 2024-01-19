import { useEffect, useState } from 'react';
import { Alert, Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { useAppState } from '@react-native-community/hooks'
import * as Location from 'expo-location';
import * as Notifications from 'expo-notifications';

export default function HomeScreen({ setScreen }: any) {
  const [clickCount, setClickCount] = useState(0);
  const [username, setUsername] = useState(''); // SOURCE: https://reactnative.dev/docs/textinput
  const appState = useAppState();
  useEffect(() => {
    console.log(appState)
    if (appState === 'background') {
      setTimeout(async () => {
        await Notifications.scheduleNotificationAsync({
          content: {
            title: 'Button Clicker',
            body: 'click click click',
            data: { data: "" },
          },
          trigger: { seconds: 2 },
        });
      }, 500);
    }
  }, [appState]);

  const [location, setLocation] = useState({longitude: 0, latitude: 0, altitude: 0});
  useEffect(() => {
    (async () => {
      await Location.requestForegroundPermissionsAsync();
      let location = await Location.getCurrentPositionAsync();
      setLocation({ longitude: location.coords.longitude, latitude: location.coords.latitude, altitude: location.coords.altitude || 0 });

      await Notifications.requestPermissionsAsync();
    })();
  }, []);

  return (
    <View style={styles.container}>
      <Text>Your location:</Text>
      <Text>    longitude: {location.longitude}</Text>
      <Text>    latitude: {location.latitude}</Text>
      <Text>    altitude: {location.altitude === 0 ? "N/A" : location.altitude}</Text>
      <TextInput
        onChangeText={setUsername}
        value={username}
        placeholder="enter username"
      />
      {username === '' ? '' :
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
