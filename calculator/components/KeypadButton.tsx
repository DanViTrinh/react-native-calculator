import React from 'react';
import { Text, StyleSheet, Pressable, ViewStyle, StyleProp, GestureResponderEvent } from 'react-native';

interface keypadButtonProps {
  title: String,
  updateDisplay: (keyPressed: String) => void

  style?: StyleProp<ViewStyle>
}

export default function KeypadButton({ title, updateDisplay, style }: keypadButtonProps) {

  return (
    <Pressable style={[styles.button, style]} onPress={() => {
      updateDisplay(title)
    }} >
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 3,
    backgroundColor: '#2196F3',
    flex: 1,
    aspectRatio: 1
  },
  text: {
    color: 'white',
  },
});
