import { useEffect, useState } from 'react';
import { Alert, Button, ScrollView, StyleSheet, Text, View } from 'react-native';

export default function News({ setScreen }: any) {
  const date = (new Date(new Date().getTime() - (1 * 24 * 60 * 60 * 1000))).toISOString().split('T')[0];

  const [news, setNews] = useState([]);
  useEffect(() => {
    let rawArticles = '';
    fetch('https://newsapi.org/v2/everything?q=clicking&from='+date+'&sortBy=popularity&apiKey=33ffb345983c4d6fb11b0820e1ed7911')
      .then((response) => response.json())
      .then((json) => setNews(json.articles));
  }, []);

  return (
    <View style={styles.container}>
      <ScrollView>
        

        <Text>{JSON.stringify(news)}</Text>
      </ScrollView>
      <Text> </Text>
      <Text>Yesterday's Old Clicking-Related News!</Text>
      <Text> </Text><Text> </Text>
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
