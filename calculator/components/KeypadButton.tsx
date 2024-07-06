import React from 'react';
import { Text, StyleSheet, Pressable, ViewStyle, StyleProp } from 'react-native';

interface keypadButtonProps {
  title: String,
  style?: StyleProp<ViewStyle>
}

export default function KeypadButton({ title, style }: keypadButtonProps) {

  return (
    <Pressable style={[styles.button, style]} onPress={() => { }}>
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
