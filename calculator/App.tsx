import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import Display from './components/Display';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useState } from 'react';
import Keypad from './components/Keypad';
import ToolBar from './components/ToolBar';

// TODO: BETTER HANDLING FOR CURSOR
export default function App() {
  const INITIAL_DISPLAY_TEXT = ""

  const [displayText, setDisplayText] = useState<string>(INITIAL_DISPLAY_TEXT)

  return (
    <>
      <StatusBar />
      <SafeAreaView style={styles.container}>
        <Display displayText={displayText} style={styles.display} />
        <ToolBar style={styles.toolbar} output={displayText} setOutput={setDisplayText} />
        <Keypad output={displayText} setOutput={setDisplayText} style={styles.keypad} />
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

  },
  toolbar: {
    height: 40
  }

})
