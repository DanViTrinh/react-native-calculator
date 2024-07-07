import React, { useState } from 'react';
import { Text, StyleSheet, Pressable, ViewStyle, StyleProp } from 'react-native';

interface keypadButtonProps {
  title: String,
  onPress: (keyPressed: String) => void

  style?: StyleProp<ViewStyle>
}

export default function KeypadButton({ title, onPress, style }: keypadButtonProps) {

  const ON_PRESS_IN_COLOR = "grey"
  const DEFAULT_COLOR = "#2196F3"

  const [buttonColor, setButtonColor] = useState<string>(DEFAULT_COLOR)

  return (
    <Pressable
      style={[styles.button, { backgroundColor: buttonColor }, style]}
      onPress={() => {
        onPress(title)
      }}
      onPressIn={() => {
        setButtonColor(ON_PRESS_IN_COLOR)
      }}
      onPressOut={() => {
        setButtonColor(DEFAULT_COLOR)
      }}
    >
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 3,
    flex: 1,
    aspectRatio: 1
  },
  text: {
    fontSize: 30,
    color: 'white',
  },
});
