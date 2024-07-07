import React from 'react';
import { Text, StyleSheet, Pressable, ViewStyle, StyleProp, GestureResponderEvent } from 'react-native';

interface keypadButtonProps {
  title: String,
  onPress: (keyPressed: String) => void

  style?: StyleProp<ViewStyle>
}

export default function KeypadButton({ title, onPress, style }: keypadButtonProps) {

  return (
    <Pressable style={[styles.button, style]} onPress={() => {
      onPress(title)
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
