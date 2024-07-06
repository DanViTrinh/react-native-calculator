import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import Display from './components/Display';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useEffect, useState } from 'react';
import Keypad from './components/Keypad';

export default function App() {
  const CURSOR_CHAR = "|"

  const INITIAL_DISPLAY_TEXT = "TEST"

  // The cursor placment starts from the last digit, for example
  // cursorPlacement 0 will be 123|
  const [cursorPlacement, setCursorPlacement] = useState<number>(0)

  const [displayText, setDisplayText] = useState<String>(INITIAL_DISPLAY_TEXT + CURSOR_CHAR)

  function insertToDisplay(charToInsert: String): void {
    const cursorIndexInText = displayText.length - cursorPlacement

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


