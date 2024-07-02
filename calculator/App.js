import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Display from './components/Display';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useState } from 'react';

export default function App() {
  const [displayText, setDisplayText] = useState("")
  return (
    <SafeAreaView>
      <Display displayText={displayText} />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

