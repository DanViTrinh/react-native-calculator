import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import Display from './components/Display';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useEffect, useState } from 'react';
import Keypad from './components/Keypad';

// TODO: BETTER HANDLING FOR CURSOR
export default function App() {
  const INITIAL_DISPLAY_TEXT = "TEST"

  const [displayText, setDisplayText] = useState<String>(INITIAL_DISPLAY_TEXT)

  function insertToDisplay(charToInsert: String): void {
    const cursorIndexInText = displayText.length

    const newText = displayText.substring(0, cursorIndexInText)
      + charToInsert
      + displayText.substring(cursorIndexInText)

    setDisplayText(newText)
  }

  return (
    <>
      <StatusBar />
      <SafeAreaView style={styles.container}>
        <Display displayText={displayText} style={styles.display} />
        <Keypad style={styles.keypad} insertToDisplay={insertToDisplay} />
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


