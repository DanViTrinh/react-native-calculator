import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import Display from './components/Display';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useState } from 'react';
import Keypad from './components/Keypad';

export default function App() {
  const [displayText, setDisplayText] = useState("TEST")
  // The cursor placment starts from the last digit, for example
  // cursorPlacement 0 will be 123|
  const [cursorPlacement, setCursorPlacement] = useState(0)
  return (
    <>
      <StatusBar />
      <SafeAreaView style={styles.container}>
        <Display displayText={displayText} style={styles.display} cursorPlacement={cursorPlacement} />
        <Keypad style={styles.keypad} />
      </SafeAreaView>
    </>
  );
}

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
