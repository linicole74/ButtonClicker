import { useEffect, useState } from 'react';
import { Alert, Button, ScrollView, StyleSheet, Text, View } from 'react-native';

export default function News({ setScreen }: any) {
  const date = (new Date(new Date().getTime() - (1 * 24 * 60 * 60 * 1000))).toISOString().split('T')[0];

  const [news, setNews] = useState([]);
  useEffect(() => {
    fetch('https://newsapi.org/v2/everything?q=clicking&from='+date+'&sortBy=popularity&apiKey=33ffb345983c4d6fb11b0820e1ed7911')
      .then((response) => response.json())
      .then((json) => setNews(json.articles.map((article: any) => {
        return { title: article.title, publicationDate: (new Date(article.publishedAt)).toLocaleString(), description: article.description };
      })));
  }, []);

  return (
    <View style={styles.container}>
      <ScrollView>
        {news.map((article: any, index: number) =>
          <View key={"news"+index}>
            <Text style={{fontWeight: "bold"}}>{article.title}</Text>
            <Text>{article.publicationDate}</Text>
            <Text>{article.description}</Text>
            <Text> </Text>
          </View>
        )}
      </ScrollView>
      <Text> </Text>
      <Text>Yesterday's Old Clicking-Related News!</Text>
      <Text> </Text><Text> </Text>
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
