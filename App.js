import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  const [quote, setQuote] = useState("Press Button for Technology Quote");

  const pressHandler = () => {
    setQuote("As technology advances, it becomes more complex and difficult to understand, to the point where it can appear almost magical to those who don't understand it. -- ChatGPT");
  }

  return (
    <View style={styles.container}>
      <Text style={styles.quote}>{quote}</Text>
      <Button title="Display Quote" onPress={pressHandler} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightyellow',
    alignItems: 'center',
    justifyContent: 'center',
  },
  quote: {
    fontSize: 24,
    fontWeight: 'bold',
    width: '80%',
    textAlign: 'center',
    paddingBottom: 18,
  },
});
