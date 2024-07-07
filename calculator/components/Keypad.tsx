import { StyleProp, StyleSheet, View, ViewStyle } from "react-native";
import KeypadButton from "./KeypadButton";

interface keypadProps {
  insertToDisplay: (charToInsert: String) => void
  solve: () => void
  style?: StyleProp<ViewStyle>
}

export default function Keypad({ insertToDisplay, solve, style }: keypadProps) {

  function onKeyPress(keyPress: string) {
    switch (keyPress) {
      case "X":
        insertToDisplay("*")
        break;
      case "=":
        solve()
        break;
      default:
        insertToDisplay(keyPress)
    }
  }

  return (
    <View style={[styles.container, style]}>
      <View style={styles.row}>
        <KeypadButton title="7" onPress={onKeyPress} />
        <KeypadButton title="8" onPress={onKeyPress} />
        <KeypadButton title="9" onPress={onKeyPress} />
        <KeypadButton title="X" onPress={onKeyPress} />
      </View>
      <View style={styles.row}>
        <KeypadButton title="4" onPress={onKeyPress} />
        <KeypadButton title="5" onPress={onKeyPress} />
        <KeypadButton title="6" onPress={onKeyPress} />
        <KeypadButton title="-" onPress={onKeyPress} />
      </View>
      <View style={styles.row}>
        <KeypadButton title="1" onPress={onKeyPress} />
        <KeypadButton title="2" onPress={onKeyPress} />
        <KeypadButton title="3" onPress={onKeyPress} />
        <KeypadButton title="+" onPress={onKeyPress} />
      </View>
      <View style={styles.row}>
        <KeypadButton title="0" onPress={onKeyPress} />
        <KeypadButton title="00" onPress={onKeyPress} />
        <KeypadButton title="." onPress={onKeyPress} />
        <KeypadButton title="=" onPress={onKeyPress} />
      </View>
    </View>
  );

}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end"
  },
  row: {
    display: "flex",
    flexDirection: 'row',
    backgroundColor: "red"
  },
})
