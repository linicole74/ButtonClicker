import { Alert, View, Text, Button, StyleSheet } from 'react-native';

export default function GlobalClicks({ setScreen }: any) {
  // Sample data objects
  const clickData = [
    { user: 'User1', datetime: '2024-01-17T18:52:01' },
    { user: 'User2', datetime: '2024-01-17T19:30:45' },
    { user: 'User3', datetime: '2024-01-17T20:15:10' },
  ];

  return (
    <View style={styles.container}>
      <Text>Global Clicks</Text>
      <Text>
      </Text>
      <Text>Example click data objects:</Text>
      {clickData.map((click, index) => (
        <View key={index} style={styles.clickBox}>
          <Text>User: {click.user}</Text>
          <Text>Datetime: {formatDatetime(click.datetime)}</Text>
        </View>
      ))}
      <Button
        onPress={() => {
          setScreen(1);
        }}
        title="[ go to home screen ]"
        color="#841584"
      />
      <Button
        onPress={() => {
          setScreen(0);
        }}
        title="[ go to news ]"
        color="#841584"
      />
      <Button
        onPress={() => {
          setScreen(3);
        }}
        title="[ see a funny gif ]"
        color="#841584"
      />
    </View>
  );
}

// Function to format datetime in a more user-friendly way
function formatDatetime(datetime: string): string {
  // You can implement the datetime formatting logic here
  return datetime; // Placeholder, replace with actual formatting
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  clickBox: {
    borderColor: '#000',
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
  },
});
