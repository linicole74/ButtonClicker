import { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import HomeScreen from './HomeScreen';
import News from './News';
import GlobalClicks from './GlobalClicks';

export default function App() {
  // news - 0, home screen - 1, global clicks - 2
  const [screen, setScreen] = useState(1);

  return (
    <View style={styles.container}>
      {screen === 0 ? <News setScreen={setScreen}></News> : ''}
      {screen === 1 ? <HomeScreen setScreen={setScreen}></HomeScreen> : ''}
      {screen === 2 ? <GlobalClicks setScreen={setScreen}></GlobalClicks> : ''}
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
