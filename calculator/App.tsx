import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import Display from './components/Display';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useEffect, useState } from 'react';
import Keypad from './components/Keypad';

// TODO: BETTER HANDLING FOR CURSOR
export default function App() {
  const INITIAL_DISPLAY_TEXT = ""

  const [displayText, setDisplayText] = useState<string>(INITIAL_DISPLAY_TEXT)

  // TODO: MOVE mutation into CUSTOM HOOKS
  function insertToDisplay(charToInsert: string): void {
    setDisplayText(displayText + charToInsert)
  }

  // NOTE: the eval funciton is a security risk, but is ignored
  // because of its simplicity. A beter approach could be used in the future.
  function solve() {
    try {
      const solution = eval(displayText)
      setDisplayText(solution)
    } catch (e) {
      console.error(e)
    }
  }

  function clear() {
    setDisplayText("")
  }

  function deleteChar() {
    setDisplayText(displayText.substring(0, displayText.length - 1))
  }

  return (
    <>
      <StatusBar />
      <SafeAreaView style={styles.container}>
        <Display displayText={displayText} style={styles.display} />
        <Keypad style={styles.keypad} insertToDisplay={insertToDisplay} solve={solve} clear={clear} deleteChar={deleteChar} />
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


