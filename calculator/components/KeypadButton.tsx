import React from 'react';
import { Text, StyleSheet, ViewStyle, StyleProp, TouchableOpacity } from 'react-native';

interface keypadButtonProps {
  title: String,
  onPress: (keyPressed: String) => void

  style?: StyleProp<ViewStyle>
}


export default function KeypadButton({ title, onPress, style }: keypadButtonProps) {
  return (
    <TouchableOpacity
      style={[styles.button, style]}
      onPressIn={() => { onPress(title) }}
    >
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 3,
    flex: 1,
    aspectRatio: 1,
    backgroundColor: '#2196F3'
  },
  text: {
    fontSize: 30,
    color: 'white',
  },
});
