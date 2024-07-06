import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import Display from './components/Display';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useState } from 'react';
import Keypad from './components/Keypad';


const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    flex: 1,
  },
  display: {
    flex: 1
  },
  keypad: {

  }

})
export default function App() {
  const [displayText, setDisplayText] = useState("TEST")
  return (
    <>
      <StatusBar />
      <SafeAreaView style={styles.container}>
        <Display displayText={displayText} style={styles.display} />
        <Keypad style={styles.keypad} />
      </SafeAreaView>
    </>
  );
}

