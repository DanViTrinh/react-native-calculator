import { useState } from "react";
import { Pressable, StyleSheet, Text } from "react-native";

export default function ToolBarButton({ title, onPress }: { title: string, onPress: (keyPress: string) => void }) {

  const ON_PRESS_IN_COLOR = "grey"
  const DEFAULT_COLOR = "#2F5684"

  const [buttonColor, setButtonColor] = useState<string>(DEFAULT_COLOR)

  return (
    <Pressable
      style={[styles.button, { backgroundColor: buttonColor }]}
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
    alignItems: 'flex-end',
    paddingRight: 15,
    justifyContent: 'center',
    height: "100%"
  },
  text: {
    color: 'white',
  },
});
